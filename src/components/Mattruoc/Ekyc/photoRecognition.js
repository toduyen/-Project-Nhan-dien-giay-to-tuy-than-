import React, {Component} from 'react';
import {loadModels, getFullFaceDescription, createMatcher, isFaceDetectionModelLoaded} from '../LoadingModel/LoadedModel';
import DrawBox from '../LoadingModel/drawBox';
import ShowDescriptors from '../LoadingModel/showDescriptors';

const MaxWidth = 480;
const boxColor = '#BE80B5';
var arr128float = ``;
var arr = [];

const INIT_STATE = {
    url: null,
    imageURL: 'https://i.ibb.co/MP0k1dR/chng-minh-nhn-dn-c-thi-gian-bao-lu.jpg',
    fullDesc: null,
    imageDimension: null,
    error: null,
    loading: false
};

class FaceRecognition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INIT_STATE,
            faceMatcher: null,
            showDescriptors: false,
            WIDTH: null,
            HEIGHT: 0,
            isModelLoaded: !!isFaceDetectionModelLoaded()
        };
    }

    componentWillMount() {
        this.resetState();
        let _W = document.documentElement.clientWidth;
        if (_W > MaxWidth) 
            _W = MaxWidth;
        this.setState({WIDTH: _W});
        this.mounting();
    }

    mounting = async() => {
        await loadModels();
        await this.matcher();
        await this.getImageDimension(this.props.dataCard);
        await this.setState({imageURL: this.props.dataCard, loading: true});
        await this.handleImageChange(this.props.dataCard);
    };

    matcher = async() => {
        var temp = {
            "x": {
                "name": "match",
                "descriptors": arr
            }
        }
        const faceMatcher = await createMatcher(temp);
        this.setState({faceMatcher});

    };

    handleButtonClick = async() => {
        this.resetState();
        let blob = await fetch(this.props.dataCard)
            .then(r => r.blob())
            .catch(error => this.setState({error}));
        if (!!blob && blob.type.includes('image')) {
            this.setState({
                imageURL: URL.createObjectURL(blob),
                loading: true
            });
            this.handleImageChange();
        }
    };

    handleImageChange = async(image = this.state.imageURL) => {
        await this.getImageDimension(image);
        await getFullFaceDescription(image).then(fullDesc => {
            this.setState({fullDesc, loading: false});
        });
    };

    getImageDimension = imageURL => {
        let img = new Image();
        img.onload = () => {
            let HEIGHT = (this.state.WIDTH * img.height) / img.width;
            this.setState({
                HEIGHT,
                imageDimension: {
                    width: img.width,
                    height: img.height
                }
            });
        };
        img.src = imageURL;
    };

    handleDescriptorsCheck = event => {
        this.setState({showDescriptors: event.target.checked});
        switch (event.target.checked) {
            case true:
                if (arr128float) {
                    arr = arr128float;
                    console.log(arr);
                    this
                        .props
                        .chungChuyennhas(arr128float);
                    this
                        .props
                        .showDataFloat128bits(arr128float);
                }
                break;
            case false:
                this
                    .props
                    .chungChuyennhas(null);
                this
                    .props
                    .showDataFloat128bits(0);
                break;
            default:
                return null;
        }
    };

    resetState = () => {
        this.setState({
            ...INIT_STATE
        });
    };

    viewDataSetface = async(temp) => {
        arr128float = await temp;
    }

    render() {

        const {
            WIDTH,
            HEIGHT,
            imageURL,
            fullDesc,
            faceMatcher,
            showDescriptors,
            isModelLoaded,
            error,
            loading
        } = this.state;

        // Display working status
        let status = <p>Status: Model Loaded = {isModelLoaded.toString()}</p>;
        if (!!error && error.toString() === 'TypeError: Failed to fetch') {
            status = (
                <p style={{
                    color: 'red'
                }}>Status: Error Failed to fetch Image URL</p>
            );
        } else if (loading) {
            status = <p style={{
                color: 'blue'
            }}>Status: LOADING...</p>;
        } else if (!!fullDesc && !!imageURL && !loading) {
            if (fullDesc.length < 2) 
                status = <p>Status: {fullDesc.length}
                    Face Detect</p>;
            if (fullDesc.length > 1) 
                status = <p>Status: {fullDesc.length}
                    Faces Detect</p>;
            }
        // Loading Spinner
        let spinner = (
            <div
                style={{
                margin: 0,
                color: '#BE80B5',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                textShadow: '2px 2px 3px #fff'
            }}>
                <div className="loading"/>
                <h3>Processing...</h3>
            </div>
        );

        return (
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {status}
                <div
                    style={{
                    position: 'relative',
                    width: WIDTH,
                    height: HEIGHT
                }}>
                    {!!imageURL
                        ? (
                            <div
                                style={{
                                position: 'relative'
                            }}>
                                <div
                                    style={{
                                    position: 'absolute'
                                }}>
                                    <img
                                        style={{
                                        width: WIDTH
                                    }}
                                        src={imageURL}
                                        alt="imageURL"/>
                                </div>
                                {!!fullDesc
                                    ? (<DrawBox
                                        fullDesc={fullDesc}
                                        faceMatcher={faceMatcher}
                                        imageWidth={WIDTH}
                                        boxColor={boxColor}/>)
                                    : null}
                            </div>
                        )
                        : null}
                    {loading
                        ? spinner
                        : null}
                </div>
                <div
                    style={{
                    width: WIDTH,
                    padding: 10,
                    border: 'solid',
                    marginTop: 10
                }}>

                    <div className="URLInput">
                        <button type="button" className="btn btn-dark" onClick={this.handleButtonClick}>Active</button>

                    </div>
                    <div>
                        <input
                            name="descriptors"
                            type="checkbox"
                            checked={this.state.showDescriptors}
                            onChange={this.handleDescriptorsCheck}/>
                        <label>Đây là khuôn mặt bạn muốn so sánh hãy check</label>
                    </div>
                    {!!showDescriptors
                        ? <ShowDescriptors
                                fullDesc={fullDesc}
                                giatrihato={(tep) => this.viewDataSetface(tep)}/>
                        : "Chưa chọn show"}
                </div>
            </div>
        );
    }
}

export default(FaceRecognition);
