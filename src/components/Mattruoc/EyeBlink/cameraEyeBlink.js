import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Webcam from 'react-webcam';
import {loadModels, getFullFaceDescription, createMatcher, getDataBlink, getDataBlink2} from '../LoadingModel/LoadedModel';
import DrawBox from '../LoadingModel/drawBox';
import {JSON_PROFILE} from '../Data/profile';
import BlinkEye from '../EyeBlink/BlinkEye';

const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

class cameraEyeBlink extends Component {
    constructor(props) {
        super(props);
        this.webcam = React.createRef();
        this.state = {
            fullDesc: null,
            fullDesc2: null,
            fullDesc3: null,
            faceMatcher: null,
            facingMode: null,
            cocobay: false
        };
    }

   componentDidMount() {
		loadModels();
		this.setInputDevice();
		this.matcher();
	 }
	 
    setInputDevice = () => {
        navigator
            .mediaDevices
            .enumerateDevices()
            .then(async devices => {
                let inputDevice = await devices.filter(device => device.kind === 'videoinput');
                if (inputDevice.length < 2) {
                    await this.setState({facingMode: 'user'});
                } else {
                    await this.setState({facingMode: 'environment'});
                }
                this.startCapture();
            });
    };

    matcher = async() => {
        const faceMatcher = await createMatcher(JSON_PROFILE);
        this.setState({faceMatcher});
    };

    startCapture = () => {
        this.interval = setInterval(() => {
            this.capture();
            this.ketquavekhuonmatcuata();
            this.ketquavekhuonmatcuata2();
        }, 1500);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    capture = async() => {
        if (!!this.webcam.current) {
            await getFullFaceDescription(this.webcam.current.getScreenshot(), inputSize).then(fullDesc => this.setState({fullDesc}));
        }
    };

    ketquavekhuonmatcuata = async() => {
        if (!!this.webcam.current) {
            await getDataBlink(this.webcam.current.getScreenshot(), inputSize).then(fullDesc2 => this.setState({fullDesc2}));
        }
    };
    ketquavekhuonmatcuata2 = async() => {
        if (!!this.webcam.current) {
            await getDataBlink2(this.webcam.current.getScreenshot(), inputSize).then(fullDesc3 => this.setState({fullDesc3}));
        }
    };
    render() {
        const {fullDesc, faceMatcher, facingMode, fullDesc2, fullDesc3} = this.state;
        let videoConstraints = null;
        let camera = '';
        let camxuc = ``;
        if (!!facingMode) {
            videoConstraints = {
                width: WIDTH,
                height: HEIGHT,
                facingMode: facingMode
            };
            if (facingMode === 'user') {
                camera = 'Front';
            } else {
                camera = 'Back';
            }
        }
        if (!!fullDesc) {
            camxuc = fullDesc[0];
        }

        return (
            <div>
                <p className="text-center">Camera: {camera}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div
                                style={{
                                width: WIDTH,
                                height: HEIGHT
                            }}>
                                <div
                                    style={{
                                    position: 'relative',
                                    width: WIDTH
                                }}>
                                    {!!videoConstraints
                                        ? (
                                            <div
                                                style={{
                                                position: 'absolute'
                                            }}>

                                                <Webcam
                                                    audio={false}
                                                    width={WIDTH}
                                                    height={HEIGHT}
                                                    ref={this.webcam}
                                                    screenshotFormat="image/jpeg"
                                                    screenshotQuality="1"
                                                    imageSmoothing={true}
                                                    videoConstraints={videoConstraints}/>
                                                <div className="Boxsssss">
                                                    <div className="Boxsssss2 text-center">
                                                        L
                                                    </div>
                                                    <div className="Boxsssss3 text-center">
                                                        R
                                                    </div>
                                                    <p
                                                        style={{
                                                        color: 'green',
                                                        fontSize: 12,
                                                        float: 'left',
                                                        marginLeft: 8
                                                    }}>L: {fullDesc2}</p>
                                                    <p
                                                        style={{
                                                        color: 'green',
                                                        fontSize: 12,
                                                        float: 'left',
                                                        marginLeft: 8
                                                    }}>R: {fullDesc3}</p>
                                                </div>
                                            </div>
                                        )
                                        : null}
                                    {!!fullDesc
                                        ? (<DrawBox
                                            fullDesc={fullDesc}
                                            faceMatcher={faceMatcher}
                                            imageWidth={WIDTH}
                                            boxColor={'blue'}
                                            ketquabodiqua={fullDesc2}
                                            ketquabodiqua2={fullDesc3}/>)
                                        : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <BlinkEye matphai={fullDesc3} mattrai={fullDesc2} descriptionFull={camxuc}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(cameraEyeBlink);