import React, { Component } from 'react';
import { connect } from 'react-redux';
class Palte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: 'https://viknews.com/vi/wp-content/uploads/2019/04/chung-minh.jpg',
      name: 'NGUYỄN BẢO NGỌC',
      id: '145064321',
      dob: '07-09-1983',
      sex: '',
      nationality: 'Vietnam',
      ethnicity: 'kinh',
      tonhiao: 'Khong',
      home: 'Quang hung phu cu hung yen',
      address: 'Quang hung phu cu hung yen',
      ngayhethan: '',
      noicap: 'CA tinh hung yen'
    };
  }
  IsChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value })
  }

  ButtonUpdate = () => {
    let info = {};
    info.images = this.state.images;
    info.name = this.state.name;
    info.id = this.state.id;
    info.dob = this.state.dob;
    info.sex = this.state.sex;
    info.nationality = this.state.nationality;
    info.ethnicity = this.state.ethnicity;
    info.tonhiao = this.state.tonhiao;
    info.home = this.state.home;
    info.address = this.state.address;
    info.noicap = this.state.noicap;
    info.ngayhethan = this.state.ngayhethan;
    if (this.state.images && this.state.name && this.state.id && this.state.dob && this.state.sex && this.state.nationality && this.state.ethnicity && this.state.tonhiao && this.state.home && this.state.address && this.state.noicap && this.state.ngayhethan) {
      this
        .props
        .ThucHienTaiData(info);
      this
        .props
        .Thuchienthaydoitrangthai();
      this
        .props
        .Thuchienlaydulieu('Put thông tin về ' + this.state.name + " thành công ");
    } else {
      this
        .props
        .Thuchienthaydoitrangthai();
      this
        .props
        .Thuchienlaydulieu('bạn chưa nhập gì chúng tôi yêu cầu bạn nhập đủ thông tin')
    }

  }

  ButtonReset = () => {
    this.setState({
      images: '',
      name: '',
      id: '',
      dob: '',
      sex: '',
      nationality: '',
      ethnicity: '',
      tonhiao: '',
      home: '',
      address: '',
      ngayhethan: '',
      noicap: ''
    });
    this
      .props
      .Thuchienthaydoitrangthai();
    this
      .props
      .Thuchienlaydulieu(' Hệ thống đã reset thông tin bạn có thể nhập lại ');

  }
  render() {
    return (
      <div className="col-12">

        <div className="form-row mt-3">
          <div className=" col-8">
            <div className="input-group mt-3">
              <input
                onChange={(event) => this.IsChange(event)}
                type="text"
                className="form-control"
                name="images"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">.JPG / .JPEG / .PNG</span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                onChange={(event) => this.IsChange(event)}
                name="name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">@Name</span>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal">
                  <i className="fas fa-cloud-upload-alt"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.ButtonReset()}>
                  <i className="fas fa-redo-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-row mt-3">
          <div className=" col-8">
            <div className="input-group mt-3">
              {this.state.images && <img className="card-img-top hshs" src={this.state.images} alt="" />}
            </div>
          </div>
          <div className="col-4">
            <div className="input-group mt-1">

              <div className="card-body">
                {this.state.name && <h5 className="card-title ">
                  name : {this.state.name}
                </h5>}
                {this.state.id && <h5 className="card-title ">
                  Số chứng minh : {this.state.id}
                </h5>}
                {this.state.dob && <h5 className="card-title ">
                  Ngày sinh : {this.state.dob}
                </h5>}
                {this.state.sex && <h5 className="card-title  ">
                  Giới tính : {this.state.sex}
                </h5>}
                {this.state.nationality && <h5 className="card-title">
                  Quốc tịch : {this.state.nationality}
                </h5>}
                {this.state.ethnicity && <h5 className="card-title  ">
                  Dân tộc : {this.state.ethnicity}
                </h5>}
                {this.state.tonhiao && <h5 className="card-title  ">
                  Tôn giáo : {this.state.tonhiao}
                </h5>}
                {this.state.home && <h5 className="card-title ">
                  Home : {this.state.home}
                </h5>}
                {this.state.address && <h5 className="card-title  ">
                  Home đăng ký : {this.state.address}
                </h5>}
                {this.state.noicap && <h5 className="card-title  ">
                  Nơi cấp : {this.state.noicap}
                </h5>}
                {this.state.ngayhethan && <h5 className="card-title  ">
                  Ngày đăng ký : {this.state.ngayhethan}
                </h5>}

              </div>
            </div>
          </div>
        </div>

        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">

                <div className="input-group mt-3">
                  <input
                    onChange={(event) => this.IsChange(event)}
                    type="number"
                    className="form-control"
                    name="id"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@Number cmnd</span>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <input
                    type="date"
                    onChange={(event) => this.IsChange(event)}
                    className="form-control"
                    name="dob"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@Date</span>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <div className="input-group-append">
                    <select
                      className="form-control form-control-sm"
                      onChange={(event) => this.IsChange(event)}
                      name="sex">
                      <option value={"NAM"}>
                        Nam</option>
                      <option value={"NỮ"}>Nữ</option>
                    </select>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <input
                    type="text"
                    onChange={(event) => this.IsChange(event)}
                    className="form-control"
                    name="nationality"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@nationality</span>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <input
                    type="text"
                    onChange={(event) => this.IsChange(event)}
                    className="form-control"
                    name="ethnicity"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@dantoc</span>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <input
                    type="text"
                    onChange={(event) => this.IsChange(event)}
                    className="form-control"
                    name="tonhiao"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@tongiao</span>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <input
                    type="text"
                    onChange={(event) => this.IsChange(event)}
                    className="form-control"
                    name="home"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@Home</span>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <input
                    type="text"
                    onChange={(event) => this.IsChange(event)}
                    className="form-control"
                    name="address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@Home_dk</span>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => this.IsChange(event)}
                    name="noicap"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@noicap</span>
                  </div>
                </div>

                <div className="input-group mt-3">
                  <input
                    type="date"
                    onChange={(event) => this.IsChange(event)}
                    className="form-control"
                    name="ngayhethan"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@datedk</span>
                  </div>
                </div>

              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => this.ButtonUpdate()}>Lưu Lại</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { chonthoi: state.laydata }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ThucHienTaiData: (getitem) => {
      dispatch({ type: 'LAY_DATA', getitem })
    },
    Thuchienthaydoitrangthai: () => {
      dispatch({ type: 'TRANG_THAI' })
    },
    Thuchienlaydulieu: (getitem) => {
      dispatch({ type: 'GETDATA', getitem })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Palte);