import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import request from 'superagent';
import KOKOBAY from './HienThi/item';
import mahoan from '../../Data/mahoan.json';
import { firebasethree } from '../../Firebase/firebaseconnectio';
import { connect } from 'react-redux';
import EKYC from '../Mattruoc/Ekyc/photoRecognition';
import CAMEKYC from '../Mattruoc/Ekyc/cameraFaceDetect';
import CAMERABLINK from '../Mattruoc/EyeBlink/cameraEyeBlink';
class FormText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      data: '',
      changeGiayTo: '',
      dataBase64: "",
      datas: [process.env.REACT_APP_API_KEY],
      storeSave: false,
      hiddenCameraEyeBlink: false,
      temp: null,
      floatNumber: '',
      stringMaster: ''
    };
  }
  isChange = (event) => {
    const value = event.target.value;
		const name = event.target.name;
    this.setState({ [name]: value, data: value })
  }

  handleTakePhoto = (dataUri) => {
    this.setState({
      dataBase64: dataUri.slice(22)
    });
  }

  isChange2 = (event) => {
    const value = event.target.value;
    this.setState({ changeGiayTo: value })
  }

  renderButtonClick = () => {
    if (this.state.floatNumber) {
      return (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.renderCamera()}>EKYC CHECK</button>
      )
    } else if (this.state.floatNumber === 0) {
      return null;
    }
  }

  functionThucThi = async () => {
    var info = {};
    info.image_url = this.state.image_url;
    await request
      .post(this.state.changeGiayTo)
      .send({ image_base64: this.state.dataBase64 })
      .send({ image_url: this.state.image_url })
      .send({ face: 1 })
			.set('Content-Type', 'application/x-www-form-urlencoded')
      .set('api_key', this.hamngoai())
      .end((err, res) => {
        if (err) {
          alert("Input đầu vào có vấn đề");
        } else {
          this.setState({ temp: res.text });
          var items = JSON.parse(res.text);
          switch (res.body.errorCode) {
            case 3:
              alert('hệ thống không tìm thấy CMT trong ảnh hoặc ảnh có chất lượng kém (quá mờ, quá tố' +
                'i/sáng).');
              break;
            case 1:
              alert('Sai thông số trong request (ví dụ không có key hoặc ảnh trong request body).');
              break;
            case 2:
              alert('CMT trong ảnh bị thiếu góc nên không thể crop về dạng chuẩn.');
              break;
            case 5:
              alert(' Request sử dụng key image_url nhưng giá trị bỏ trống.');
              break;
            case 6:
              alert('Request sử dụng key image_url nhưng hệ thống không thể mở được URL này.');
              break;
            case 7:
              alert('File gửi lên không phải là file ảnh.');
              break;
            case 8:
              alert(' File ảnh gửi lên bị hỏng hoặc format không được hỗ trợ.');
              break;
            case 9:
              alert(' Request sử dụng key image_base64 nhưng giá trị bỏ trống.');
              break;
            case 10:
              alert('Request sử dụng key image_base64 nhưng string cung cấp không hợp lệ.');
              break;
            case 0:
              localStorage.setItem('mahoan', JSON.stringify(items.data[0]));
              break;
            default:
              return null;
          }

        }
      });
  }
  hamngoai = () => {
    return (this.state.datas[this.state.datas.length - 1]);
  }
  Haller = () => {
    if (this.state.image_url === "" && this.state.dataBase64 === "") {
      this
        .props
        .ThuchienthaydoitrangthaiA();
      this
        .props
        .ThuchienlaydulieuA("Bạn chưa gán giá trị gì");
    } else {
      this.functionThucThi();
    }
  }
  // WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    firebasethree.on('value', (datas) => {
      var Mang = [];
      datas.forEach(element => {
        const data = element.val();
        Mang.push(data)
      });
      this.setState({ datas: Mang });
    })
    if (localStorage.getItem('mahoan') === null || localStorage.getItem('datafaker') === null) {
      localStorage.setItem('mahoan', JSON.stringify(mahoan));
      localStorage.setItem('datafaker', "NON");
    } else {
      var template = JSON.parse(localStorage.getItem('mahoan'));
      this.setState({ data: template })
    }

  }
  componentDidMount() {
    if (localStorage.getItem('mahoan') === null) {
      localStorage.setItem('mahoan', JSON.stringify(mahoan));
    } else {
      setTimeout(() => {
        var template = JSON.parse(localStorage.getItem('mahoan'));
        this.setState({ data: template })
      }, 4000);
    }
  }
  ButtonsClean2 = () => {
    if (window.confirm('Bạn muốn thực hiện quy trình làm sạch dữ liệu nền [YES]')) {
      this
        .props
        .ThuchienthaydoitrangthaiA();
      this
        .props
        .ThuchienlaydulieuA("tiến trình  thành công ");
      setTimeout(function () {
        window
          .location
          .reload();
        localStorage.removeItem('mahoan');
      }, 3000);
    }
  }
  thongBao = () => {
    this
      .props
      .ThuchienthaydoitrangthaiA();
    let noidung = this.state.changeGiayTo;
    if (noidung === "/vision/idr/vnm") {
      return this
        .props
        .ThuchienlaydulieuA("Bạn đã lựa chọn chứng minh nhân dân và căn cước công dân");
    } else if (noidung === "/vision/dlr/vnm") {
      return this
        .props
        .ThuchienlaydulieuA("Bạn đã lựa chọn giấy phép lái xe");
    } else if (noidung === "/vision/passport/vnm") {
      return this
        .props
        .ThuchienlaydulieuA("bạn đã chọn hộ chiếu");
    }
  }
  chupAnhWebCam = () => {
    this
      .props
      .ThuchienthaydoitrangthaiA();
    if (this.state.dataBase64) {
      return this
        .props
        .ThuchienlaydulieuA("Chụp ảnh thành công");
    } else {
      return this
        .props
        .ThuchienlaydulieuA("bạn chưa chụp gì yêu cầu chụp để bắt đầu tiến trình");
    }
  }

  renderCamera = () => {
    if (this.state.storeSave === false) {
      this.setState({ storeSave: true });
    } else {
      this.setState({ storeSave: false });
    }
  }
  chungChuyennha = (x) => {
    this.setState({ stringMaster: x });
  }
  renderFloat32bitForTextArea = () => {
    if (this.state.floatNumber) {
      return (`Đã có data hình ảnh`);
    } else {
      return (`Bạn hãy ấn vào nút check`);
    }
  }
  showcamnha = () => {
    if (this.state.storeSave === true) {
      return (<CAMEKYC chuyennhaanhemaaa={this.state.stringMaster} />)
    } else {
      return (
        <div>
          <p>Bạn là member mới hãy đọc cái này nhé</p>
          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Ghi nhớ!</h4>
            <p>Đây là công nghệ so sánh hai khuôn mặt xem có khớp hay không tôi yêu cầu bạn
                            hãy đảm bảo rằng dữ liệu đầu vào luôn là chuẩn nhất và đừng có những sai sót.</p>
            <ul className="list-group">
              <li className="list-group-item">Bước 1:
                                <span role="img" aria-label="donut">🤳🏼</span>
                Bạn hãy đảm bảo rằng camera của bạn không bị khuất hay cản trở</li>
              <li className="list-group-item">Bước 2:
                                <span role="img" aria-label="donut">✔️</span>
                Bạn hãy nhấn nút Active để nạp hình ảnh mới đầu vào</li>
              <li className="list-group-item">Bước 3:
                                <span role="img" aria-label="donut">☑️</span>
                Bạn hãy tick vào ô 'Đây là khuôn mặt bạn muốn so sánh'</li>
              <li className="list-group-item">Bước 4:
                                <span role="img" aria-label="donut">📜</span>
                {this.renderFloat32bitForTextArea()}<textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={2}
                  defaultValue={this.state.floatNumber}></textarea>
              </li>
              <li className="list-group-item">Bước 5:
                                <span role="img" aria-label="donut">📷</span>
                Bạn hãy nhấn nút EKYC CHECK sau khi ấn hãy để ý kết quả trả về</li>
            </ul>
          </div>
        </div>
      )
    }
  }

  handleActivityShowcamEyeBlink = () => {
    if (this.state.hiddenCameraEyeBlink === false) {
      this.setState({ hiddenCameraEyeBlink: true });
    } else {
      this.setState({ hiddenCameraEyeBlink: false });
    }
  }
  showCamEyeBlink = () => {
    if (this.state.hiddenCameraEyeBlink === true) {
      return (<CAMERABLINK />)
    } else {
      return (
        <div>
          <p>Bạn là member mới hãy đọc cái này nhé</p>
          <div className="alert alert-dark" role="alert">
            <h4 className="alert-heading">Ghi nhớ!</h4>
            <p>Đây là công nghệ phát hiện chớp mắt có đính kèm phát hiện giả
                mạo yêu cầu bạn thực hiện các thử thách mà hệ thống đưa ra khi bạn
                            thực hiện đúng thì dữ liệu của bạn sẽ được gửi lên máy chủ</p>
            <ul className="list-group">
              <li className="list-group-item">Bước 1:
                                <span role="img" aria-label="donut">🤳🏼</span>
                Bạn hãy đảm bảo rằng camera của bạn không bị khuất hay cản trở</li>
              <li className="list-group-item">Bước 2:
                                <span role="img" aria-label="donut">🦳</span>
                Bạn hãy tự căn chỉnh vị trí khuôn mặt sao cho khớp với khung</li>
              <li className="list-group-item">Bước 3:
                                <span role="img" aria-label="donut">👨🏼‍💻</span>
                Bạn hãy ấn nút start để bắt đầu</li>
              <li className="list-group-item">Bước 4:
                                <span role="img" aria-label="donut">🧗🏼‍♀️</span>
                Bạn hãy nghe âm thanh và làm theo hướng dẫn</li>
              <li className="list-group-item">Bước 5:
                                <span role="img" aria-label="donut">🧳</span>
                Kết thúc sẽ có âm báo và tự động gửi dữ liệu</li>
            </ul>

            <hr />
            <p className="mb-0">Dữ liệu gửi đi nhạy cảm yêu cầu dùng hệ thống [ SYSTEM Liveness ]</p>
          </div>
        </div>
      )
    }
  }

  chuyengiatrisangchokhacnha = () => {
    var classCard = '',
      kqAvatar = '',
      kqFace = '';
    if (this.state.temp) {
      let tems = JSON.parse(this.state.temp);
      let ketqua = tems.data[0];

      if (ketqua.nationality === "N/A") {
        classCard = `Hình ảnh đầu vào : chứng minh nhân dân (Loại cũ) `;
      } else if (ketqua.nationality === undefined) {
        classCard = `Hình ảnh đầu vào : chứng minh nhân dân (Loại mới)`;
      } else {
        classCard = `Hình ảnh đầu vào :  Căn cước công dân`;
      }
      if (ketqua.cropped_idcard && ketqua.face) {
        kqAvatar = ketqua.cropped_idcard;
        kqFace = ketqua.face;
      }
      return (
        <div>
          <div className="col">
            <h4>{classCard}</h4>
            <div className="card text-left">
              <div className="card-body">
                <img
                  className="card-img-top"
                  width="120px"
                  src={kqAvatar}
                  alt={ketqua.cropped_idcard} />
                <div className="card-body">
                  <img
                    className="card-img-top left_manager"
                    style={{
                      width: '240px',
                      height: '300px',
                      marginRight: '40px'
                    }}
                    src={kqFace}
                    alt={ketqua.face} />
                  <div
                    className="card-body"
                    style={{
                      paddingTop: '0px'
                    }}>
                    <h5
                      className="card-title color_mana mb-10"
                      style={{
                        marginBottom: '16px'
                      }}>Tên : {ketqua.name}</h5>
                    <h5
                      className="card-title color_mana mb-10"
                      style={{
                        marginBottom: '16px'
                      }}>Địa chỉ : {ketqua.address}</h5>
                    <h5
                      className="card-title color_mana mb-10"
                      style={{
                        marginBottom: '16px'
                      }}>Địa chỉ đăng ký : {ketqua.home}</h5>
                    <h5
                      className="card-title color_mana mb-10"
                      style={{
                        marginBottom: '16px'
                      }}>Số cmnd : {ketqua.id}</h5>
                    <h5
                      className="card-title color_mana mb-10"
                      style={{
                        marginBottom: '16px'
                      }}>Ngày sinh : {ketqua.dob}</h5>
                    <h5
                      className="card-title color_mana  mb-10"
                      style={{
                        marginBottom: '16px'
                      }}>Giới tính : {ketqua.sex}</h5>
                    <h5
                      className="card-title color_mana"
                      style={{
                        marginBottom: '16px'
                      }}>Ngày hết hạn : {ketqua.doe}</h5>
                    <h5
                      className="card-title color_mana"
                      style={{
                        marginBottom: '16px'
                      }}>Quốc tịch : {ketqua.nationality}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<KOKOBAY dulieushh={this.state.data} />)
    }
  }
  showDataFloat128bit = (x) => {

    this.setState({ floatNumber: x });
  }
  render() {
    let ketquasss = ``;
    if (this.state.temp) {
      ketquasss = JSON.parse(this.state.temp).data[0].cropped_idcard;
    } else {
      ketquasss = `https://i.ibb.co/MP0k1dR/chng-minh-nhn-dn-c-thi-gian-bao-lu.jpg`;
    }
    return (
      <div className="thaydoitinha">
        <div className="input-group mb-3 mt-5">

          <input
            type="text"
            className="form-control"
            onChange={(event) => this.isChange(event)}
            placeholder="import link images"
            name="image_url"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">.JPG/.JPEG/.PNG</span>
            <button type="button" className="btn btn-success" onClick={() => this.Haller()}>
              <i className="fas fa-archway"></i>
              Phân tích</button>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target=".bd-example-modal-xl2">
              <i className="fas fa-cloud-upload-alt"></i>
              Gửi dữ liệu</button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.ButtonsClean2()}>
              <i className="fas fa-eraser"></i>
              Tẩy</button>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter">
              <i className="fas fa-cogs"></i>
              Cài đặt</button>
            <button
              type="button"
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#exampleModalCenter2">
              <i className="fas fa-video"></i>
              Open Webcam</button>
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target=".bd-example-modal-xl">
              <i className="fa fa-ravelry"></i>
              Face similarity</button>
          </div>

          <div
            className="modal fade bd-example-modal-xl2"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Liveness Detected</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12">
                      {this.showCamEyeBlink()}
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => this.handleActivityShowcamEyeBlink()}>SHOW CAMEYE BLINK</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade bd-example-modal-xl"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div
                className="modal-content"
                style={{
                  width: '1320px'
                }}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Electronic know your customer</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-5 text-center">
                      <EKYC
                        dataCard={ketquasss}
                        chungChuyennhas={(x) => this.chungChuyennha(x)}
                        showDataFloat128bits={(x) => this.showDataFloat128bit(x)} />
                    </div>
                    <div className=" form-group col-7 text-left">
                      {this.showcamnha()}
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  {this.renderButtonClick()}
                </div>
              </div>
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
                  <h5 className="modal-title" id="exampleModalLongTitle">Lựa chọn giấy tờ phù hợp</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">

                  <div className="form-row">
                    <div className="form-group col-md-12">

                      <select
                        className="form-control form-control-sm"
                        onChange={(event) => this.isChange2(event)}
                        name="persion">
                        <option value>Chọn loại giấy tờ</option>
                        <option value={"/vision/idr/vnm"}>Chứng minh nhân dân và căn cước công dân</option>
                        <option value={"/vision/dlr/vnm"}>Giấy phép lái xe</option>
                        <option value={"/vision/passport/vnm"}>Hộ chiếu</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">

                    {this.state.changeGiayTo && <div className="alert alert-primary" role="alert">
                      Giấy tờ cá nhân :
                                            <a href="/" className="alert-link">{this.state.changeGiayTo}</a>
                    </div>
                    }

                  </div>

                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => this.thongBao()}>Save change</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModalCenter2"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div
                className="modal-content"
                style={{
                  width: '800px'
                }}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Camera HD</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">

                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <div className="d-flex justify-content-center">

                        <Camera onTakePhoto={(dataUri) => { this.handleTakePhoto(dataUri); }} />

                      </div>

                    </div>
                  </div>

                  <div className="form-group">

                    {this.state.dataBase64 && <div className="alert alert-primary" role="alert">
                      <pre>
                        Dữ liệu mã hóa : <a href="/" className="alert-link">{this.state.dataBase64}</a>
                      </pre>
                    </div>
                    }

                  </div>

                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => this.chupAnhWebCam()}>Save change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.chuyengiatrisangchokhacnha()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { GetData: state.laydata }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    themmoiVaoNutCha: (getitem) => {
      dispatch({ type: 'LAY_DATA', getitem })
    },
    ThuchienthaydoitrangthaiA: () => {
      dispatch({ type: 'TRANG_THAI' })
    },
    ThuchienlaydulieuA: (getitem) => {
      dispatch({ type: 'GETDATA', getitem })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormText);