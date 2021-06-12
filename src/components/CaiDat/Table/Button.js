import React, { Component } from 'react';
import { connect } from 'react-redux';
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.thongtincaptinh.key,
      queQR: this.props.thongtincaptinh.queQR,
      time: this.props.thongtincaptinh.time,
      time2: this.props.thongtincaptinh.time2
    };
  }
  getshowthongtin = () => {
    var info = {};
    info.key = this.state.key;
    info.check = "1";
    this
      .props
      .SuaDoiKhiGui(info);
  }
  render() {
    return (
      <button
        type="button"
        className="btn btn-warning right"
        onClick={() => this.getshowthongtin()}>
        <i className="fas fa-key"></i>
      </button>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { ThucHienUpdate: state.editmaQr }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SuaDoiKhiGui: (getupdate) => {
      dispatch({ type: 'SUAQR', getupdate })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Button)