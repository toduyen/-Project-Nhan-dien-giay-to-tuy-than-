import React, {Component} from 'react';
import CKEditor from "react-ckeditor-component";
import request from 'superagent';
import htmlToText from 'html-to-text';
import ngonngu from '../../Data/ngongu.json';
import vanban from '../../Data/vanban.json';
import HinhAnh from '../../Data/HinhAnh.json';
import Ht from '../../Data/HashTag.json';
import {connect} from 'react-redux';
import LoadingScreen from 'react-loading-screen';
class Language_speed_ai extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this
            .updateContent
            .bind(this);
        this.state = {
            loading: true,
            content: '',
            aws: '',
            text: '',
            linkimage: '',
            hashtag: '',
            persion: '',
            persion2: '',
            persion3: ''
        }
    }

    IsCHange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});

        localStorage.setItem('HinhAnhs', JSON.stringify(this.state.linkimage));
        localStorage.setItem('Hashtag', JSON.stringify(this.state.hashtag));
    }

    updateContent = (newContent) => {
        this.setState({content: newContent})
    }

    onChange = (evt) => {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt
            .editor
            .getData();
        this.setState({content: newContent});
    }

    onBlur = (evt) => {
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste = (evt) => {
        console.log("afterPaste event called with event info: ", evt);
    }

    BUtton = () => {
        try
        {
            request
                .post('/hmi/tts/v5')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('api_key', 'Jk3KjUa8OTo8C4VapCdQM6CDDC290Msa')
                .set('voice', this.state.persion)
                .set('speed', this.state.persion2)
                .set('prosody', this.state.persion3)
                .send(JSON.stringify(htmlToText.fromString(this.state.content)))
                .end(function (err, res) {
                    if (err) {
                        console.log(err);
                        alert("ban hết hạn số lượt gọi");
                    } else {
                        console.log(res);
                        if (res.body.async) {
                            setTimeout(function () {
                                localStorage.setItem('language', JSON.stringify(res.body.async));
                                window
                                    .location
                                    .reload();
                            }, 7000);
                        }
                    }
                });
            var tem = htmlToText.fromString(this.state.content);
            if (tem) {
                if (window.confirm('Ký tự đầu vào là ' + tem.length + " / 100.000 ký tự nếu thấy ổn hãy chọn [YES]")) {
                    this
                        .props
                        .Thuchienthaydoitrangthai();
                    this
                        .props
                        .Thuchienlaydulieu("System Loading ..." + tem.length + " Ký tự ");
                }
            } else if (tem > 10000) {
                alert("hãy xóa bớt ký tự nhé")
            }
            var t = this.state.content;
            var convet = htmlToText.fromString(t);
            var info = {};
            info.paneltext = convet;
            localStorage.setItem('vanban', JSON.stringify(info));

        } catch (error) {
            console.error(error)
        }
    }

    Buttonupdatedata = () => {
        var info = {};
        info.vanbans = this.state.text.paneltext;
        info.amthanh = this.state.aws;
        info.hinhanh = this.state.linkimage;
        info.hashtag = "#hashtag" + JSON.stringify(this.state.hashtag);
        if (window.confirm('Bạn lựa chọn quy trình tải dữ liệu lên store chứ hãy ấn [YES]')) {
            this
                .props
                .Thuchienquytrunh(info);
            this
                .props
                .Thuchienlaydulieu(" đã upload " + this.state.aws + " thành công ");
        } else {
            this
                .props
                .Thuchienlaydulieu("liêm sỉ đánh rơi bờ rào");
        }
        this
            .props
            .Thuchienthaydoitrangthai();
    }



    componentDidMount() {
        if (localStorage.getItem('language') === null || localStorage.getItem('vanban') === null || localStorage.getItem('HinhAnhs') === null || localStorage.getItem('Hashtag') === null) {
            localStorage.setItem('language', JSON.stringify(ngonngu));
            localStorage.setItem('vanban', JSON.stringify(vanban));
            localStorage.setItem('Hashtag', JSON.stringify(Ht));
            localStorage.setItem('HinhAnhs', JSON.stringify(HinhAnh));
        } else {
            var temp = JSON.parse(localStorage.getItem('language'));
            var temp2 = JSON.parse(localStorage.getItem('vanban'));
            var temp3 = JSON.parse(localStorage.getItem('HinhAnhs'));
            var temp4 = JSON.parse(localStorage.getItem('Hashtag'));
            this.setState({aws: temp, text: temp2, linkimage: temp3, hashtag: temp4});
        }
        // fake promise
        setTimeout(() => this.setState({loading: false}), 3000)
    }

    Shwodataaudio = () => {
        return (
            <video
                className="deme"
                style={{
                height: '100px'
            }}
                controls>
                <source src={this.state.aws} type="video/mp4"/>
            </video>
        )
    }

    render() {
        const {loading} = this.state
        return (
            <div className="mt-4">
                <CKEditor
                    activeClass="p20"
                    content={this.state.content}
                    events={{
                    "blur": this.onBlur,
                    "afterPaste": this.afterPaste,
                    "change": this.onChange
                }}/>
                <br/>

                <div className="md-form amber-textarea active-amber-textarea-2">
                    <textarea
                        id="form16"
                        className="md-textarea form-control"
                        disabled
                        style={{
                        height: '200px'
                    }}
                        placeholder={this.state.text.paneltext}/>
                </div>

                <div className="input-group mb-3 mt-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(event) => this.IsCHange(event)}
                        placeholder="import link images"
                        name="linkimage"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">.JPG/.JPEG</span>
                        <button type="button" onClick={() => this.BUtton()} className="btn btn-success">
                            <i className="fas fa-archway"></i>
                        </button>
                        <button
                            type="button"
                            onClick={() => this.Buttonupdatedata()}
                            className="btn btn-warning">
                            <i className="fas fa-cloud-upload-alt"></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModalCenter">
                            <i className="fas fa-cogs"></i>
                        </button>
                    </div>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(event) => this.IsCHange(event)}
                        placeholder="Hashtag bài viết"
                        name="hashtag"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">@Hash Tag</span>
                    </div>
                </div>

                <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Tinh chỉnh cài đặt một tí</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-row">
                                    <div className="form-group col-md-6">

                                        <select
                                            className="form-control form-control-sm"
                                            onChange={(event) => this.IsCHange(event)}
                                            name="persion">
                                            <option value>Chọn giọng đọc</option>
                                            <option value={"leminh"}>Lê Minh Giọng Nam</option>
                                            <option value={"male"}>Giọng nam nguyên bản</option>
                                            <option value={"female"}>Giọng nữ nguyên bản</option>
                                            <option value={"hatieumai"}>Hà Tiểu Mai Giọng Nữ</option>
                                            <option value={"ngoclam"}>Ngọc Lam giọng nữ huế</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">

                                        <select
                                            className="form-control form-control-sm"
                                            onChange={(event) => this.IsCHange(event)}
                                            name="persion2">
                                            <option value>Chọn tốc độ đọc</option>
                                            <option value={-3}>-3x</option>
                                            <option value={-2}>-2x</option>
                                            <option value={-1}>-1x</option>
                                            <option value={0}>0</option>
                                            <option value={1}>1x</option>
                                            <option value={2}>2x</option>
                                            <option value={3}>3x</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-2 ">

                                        <select
                                            className="form-control form-control-sm"
                                            onChange={(event) => this.IsCHange(event)}
                                            name="persion3">
                                            <option value>Chọn kích hoạt ngữ điệu</option>
                                            <option value={0}>Tắt tính năng</option>
                                            <option value={1}>Kích Hoạt</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    {this.state.persion && <div className="alert alert-primary" role="alert">
                                        Âm thanh người đọc
                                        <a href="/" className="alert-link">{this.state.persion}</a>
                                    </div>
}
                                    {this.state.persion2 && <div className="alert alert-secondary" role="alert">
                                        Tốc độ người đọc
                                        <a href="/" className="alert-link">{this.state.persion2}</a>
                                    </div>
}
                                    {this.state.persion3 && <div className="alert alert-success" role="alert">
                                        Ngữ điệu đọc
                                        <a href="/" className="alert-link">{this.state.persion3}</a>
                                    </div>
}
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Save change</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="embed-responsive embed-responsive-16by9"
                    style={{
                    height: '200px'
                }}>
                    <LoadingScreen
                        loading={loading}
                        bgColor='#282c34'
                        spinnerColor='#272929'
                        textColor='#676767'
                        logoSrc=''
                        text='Hệ thống đang thực hiện quy trình phân tích'>
                        {this.Shwodataaudio()}
                    </LoadingScreen>
                </div>

            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {ThucHIenLayData: state.thuchienluudata, ThucHienLayTrangthai: state.thongbao}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Thuchienquytrunh: (getitem) => {
            dispatch({type: 'CHANG_GETDATA', getitem})
        },
        Thuchienthaydoitrangthai: () => {
            dispatch({type: 'TRANG_THAI'})
        },
        Thuchienlaydulieu: (getitem) => {
            dispatch({type: 'GETDATA', getitem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Language_speed_ai);