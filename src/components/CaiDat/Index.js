import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebasethree } from '../../Firebase/firebaseconnectio';
import { firebasefor } from '../../Firebase/firebaseconnectio';
import Search3 from './Fom/TimKiem';
import TableQR from './Table/TableQR';
class Infos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: '',
      datas: [],
      apichinhha: '',
      dataQr: [],
      dataQr2: [],
      data3: ''
    };
  }

  componentDidMount() {
    firebasethree.on('value', (datas) => {
      var Mang = [];
      datas.forEach(element => {
        const data = element.val();
        Mang.push(data);
      });
      this.setState({ datas: Mang });
    })
    firebasefor.on('value', (dataQr) => {
      var Mang = [];
      var Mang2 = [];
      dataQr.forEach(element => {
        const key = element.key;
        const queQR = element
          .val()
          .queQR;
        const time = element
          .val()
          .time;
        const time2 = element
          .val()
          .time2;
        const check = element
          .val()
          .check;
        if (check !== "1") {
          Mang.push({ key: key, queQR: queQR, time: time, time2: time2 })
        }
        if (check === "1") {
          Mang2.push({ key: key, queQR: queQR, time: time, time2: time2 })
        }
      });
      this.setState({ dataQr: Mang, dataQr2: Mang2 })
    })
  }

  phantichthanhcong = () => {
    this
      .state
      .datas
      .map((item) => {
        if (item === this.state.datas[this.state.datas.length - 1]) {
          return (
            <small>Mã này đã từng tồn tại</small>
          )
        } else {
          return (
            <h1>Thêm mới thành công</h1>
          );
        }
      })
  }

  IsChange = (event) => {
    const value = event.target.value;
    this.setState({ api: value });
  }

  Buttonupdate = () => {
    this
      .props
      .Thaydoidulieuvonco(this.state.api);
  }

  luutruduieu = (dl) => {
    this.setState({ data3: dl });
  }

  render() {
    var ketqua = [];
    this
      .state
      .dataQr
      .forEach((item) => {
        if (item.key.indexOf(this.state.data3) !== -1) {
          ketqua.push(item);
        } else if (item.queQR.indexOf(this.state.data3) !== -1) {
          ketqua.push(item);
        }
        return 0;
      });
    return (
      <div>
        <div className="form-group">
          <label /> {this.phantichthanhcong()}
          <div className="input-group-append">
            <input
              type="text"
              className="form-control"
              onChange={(event) => this.IsChange(event)}
              placeholder={this.props.Showdulieu.Nhangiatriapimoi}
              name="image_url"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2" />
            <span className="input-group-text" id="basic-addon2">Đây là ô nhập liệu APi mới</span>
            <button
              type="button"
              onClick={() => this.Buttonupdate()}
              name=""
              id=""
              className="btn btn-primary">
              <i className="fab fa-adobe"></i>
            </button>
          </div>

          <br />
          <table className="table" id="table-to-xls" border="1">
            <thead
              className="thead-dark"
              style={{
                fontSize: '12px'
              }}>
              <tr >
                <th scope="col">STT</th>
                <th scope="col">Mã code</th>
                <th scope="col">Số phiên quét mã</th>
                <th scope="col">Mã đã giải</th>
                <th scope="col">Ngày quét</th>
                <th scope="col">Thời gian quyét</th>
              </tr>
            </thead>
            <tbody
              style={{
                fontSize: '10px'
              }}>
              {this
                .state
                .dataQr2
                .map((value, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{key}</th>
                      <th scope="row">{value.key}</th>
                      <td>{key}</td>
                      <td>{value.queQR}</td>
                      <td>{value.time}</td>
                      <td>{value.time2}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <Search3 luutruduieu2={(dl) => this.luutruduieu(dl)} />
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <TableQR dulieukiemtim={ketqua} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return { Showdulieu: state.nhaplieuapi }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    Thaydoidulieuvonco: (getdata) => {
      dispatch({ type: 'ADD_API', getdata })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Infos);