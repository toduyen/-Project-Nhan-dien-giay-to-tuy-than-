import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Webcam from 'react-webcam';
import {loadModels, getFullFaceDescription, createMatcher} from '../LoadingModel/LoadedModel';
import DrawBox from '../LoadingModel/drawBox';

const WIDTH = 620;
const HEIGHT = 420;
const inputSize = 160;

class CameraFaceDetect extends Component {
    constructor(props) {
        super(props);
        this.webcam = React.createRef();
        this.state = {
            fullDesc: null,
            faceMatcher: null,
            facingMode: null
        };
    }

    componentWillMount() {
        loadModels();
        this.setInputDevice();
        this.matcher();

    }

		componentDidMount() {
			clearInterval(this.interval);
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
        var temp = {
            "x": {
                "name": "match",
                "descriptors": this.props.chuyennhaanhemaaa
            }
        }
        const faceMatcher = await createMatcher(temp);
        this.setState({faceMatcher});
    };

    startCapture = () => {
        this.interval = setInterval(() => {
            this.capture();
        }, 1500);
    };

    capture = async() => {
        if (!!this.webcam.current) {
            await getFullFaceDescription(this.webcam.current.getScreenshot(), inputSize).then(fullDesc => this.setState({fullDesc}));
        }
    };

    render() {
        const {fullDesc, faceMatcher, facingMode} = this.state;
        let videoConstraints = null;
        let camera = '';
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

        return (
            <div
                className="Camera"
                style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p>Camera: {camera}</p>
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
                                        videoConstraints={videoConstraints}/>
                                </div>
                            )
                            : null}
                        {!!fullDesc
                            ? (<DrawBox
                                fullDesc={fullDesc}
                                faceMatcher={faceMatcher}
                                imageWidth={WIDTH}
                                boxColor={'blue'}/>)
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CameraFaceDetect);
