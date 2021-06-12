import React, { Component } from 'react';
import { connect } from 'react-redux';
class DataLanguageTextAudio extends Component {
  DemPhantu = () => {
    if (this.props.vanbans !== null) {
      var dem = this.props.vanbans;
      var ketqua = dem.length;
      return ketqua;
    }
  }
  Buttondelete = () => {
    this
      .props
      .ThucHienXoa(this.props.save.key);
    this
      .props
      .ThucHientrangthaiXoa();
    this
      .props
      .ThucHiengetdata("đã tiến hành xóa :  " + this.props.save.key + " thành công");
  }
  render() {
    return (

      <tr>
        <td>{this.props.stt}</td>
        <td>
          <div className="form-group">
            <textarea
              className="form-control"
              style={{
                height: '61px'
              }}
              rows={5}
              id="comment"
              defaultValue={this.props.vanbans} />
          </div>
        </td>
        <td style={{
          width: '300px'
        }}>
          <div
            className="embed-responsive embed-responsive-16by9"
            style={{
              height: '50px'
            }}>
            <video
              className="deme"
              style={{
                height: '50px'
              }}
              controls>
              <source src={this.props.amthanh} type="video/mp4" />
            </video>
          </div>
        </td>
        <td>
          <span>{"Độ dài chuỗi: " + this.DemPhantu()}</span>
        </td>
        <td>
          <button
            className="btn btn-outline-secondary"
            onClick={() => this.Buttondelete()}>
            DELETE
                    </button>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { Del: state.thuchienxoaaudios }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ThucHienXoa: (deteitem) => {
      dispatch({ type: 'DELETE_DATA', deteitem })
    },
    ThucHientrangthaiXoa: () => {
      dispatch({ type: 'TRANG_THAI' })
    },
    ThucHiengetdata: (getitem) => {
      dispatch({ type: 'GETDATA', getitem })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DataLanguageTextAudio);