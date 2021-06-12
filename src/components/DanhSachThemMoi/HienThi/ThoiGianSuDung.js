import React, { Component } from 'react';

class Datatable extends Component {

  YearGetNew = () => {
    return new Date().getFullYear();
  }
  CatChuoi = () => {
    var string = (String)(this.props.doe);
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
      <tr>
        <th scope="row">{this.props.stt}</th>
        <td>{this.props.name}</td>
        <td>{this.props.id}</td>
        <td>{this.props.dob}</td>
        <td>{this.props.home}</td>
        <td>{this.props.address}</td>
        <td>{this.props.sex}</td>
        <td>{this.props.nationality}</td>
        <td>{this.props.doe}</td>
        <td>{this.YearGetNew()}</td>
        <td>{this.CatChuoi()}</td>
      </tr>
    );
  }
}

export default Datatable;