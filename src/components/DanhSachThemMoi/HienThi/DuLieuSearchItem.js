import React, { Component } from 'react';

class dulieunhandienhettanhn extends Component {

  CatChuoi = () => {
    var string = (String)(this.props.dulieuhehe);
    var cutstring = string.slice(6);
    if (string === "N/A") {
      return ('N/A');
    }
    var cu = new Date().getFullYear();
    if (cu > cutstring) {
      return ('Hết hạn');
    } else {
      return ('Đang sử dụng');
    }
  }

  render() {
    return (
      <span>{this.CatChuoi()}</span>
    );
  }
}

export default dulieunhandienhettanhn;