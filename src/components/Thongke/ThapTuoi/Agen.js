import React, { Component } from 'react';
import { firebaseDemo } from '../../../Firebase/firebaseconnectio';
class Agen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data24: [],
      data34: [],
      data44: [],
      data54: [],
      data64: [],
      datasun: []
    };
  }

  YearGetNew = () => {
    return new Date().getFullYear();
  }

  componentDidMount() {
    let ghinhandata = firebaseDemo;
    ghinhandata.on('value', (snapshort) => {
      var Mang = [];
      var Mang24 = [];
      var Mang34 = [];
      var Mang44 = [];
      var Mang54 = [];
      var Mang64 = [];
      var Sun = [];
      snapshort.forEach((element) => {
        ghinhandata
          .child(element.key)
          .child('DataCard')
          .on('value', (datas) => {
            datas.forEach((elementChinhThuc) => {
              const key = elementChinhThuc.key;
              const dob = elementChinhThuc
                .val()
                .dob;
              const demso = this.YearGetNew() - dob.slice(-4);
              if (demso <= 24) {
                Mang.push({ key: key, dob: demso })
              }
              if ((demso) <= 34 && (demso) >= 24) {
                Mang24.push({ key: key, dob: demso })
              }
              if ((demso) <= 44 && (demso) >= 34) {
                Mang34.push({ key: key, dob: demso })
              }
              if ((demso) <= 54 && (demso) >= 44) {
                Mang44.push({ key: key, dob: demso })
              }
              if ((demso) <= 64 && (demso) >= 54) {
                Mang54.push({ key: key, dob: demso })
              }
              if ((demso) >= 64) {
                Mang64.push({ key: key, dob: demso })
              }
              Sun.push({ key: key })
            });
          });
      })
      this.setState({
        data: Mang,
        data24: Mang24,
        data34: Mang34,
        data44: Mang44,
        data54: Mang54,
        data64: Mang64,
        datasun: Sun
      });
    })
  }


  HienThiPhanTich = (data) => {
    let tongthe = this.state.datasun.length;
    let thuctai = data.length;
    return Math.ceil((thuctai / tongthe) * 100);
  }

  danhgia = () => {
    let thuctai1 = this.state.data.length;
    let thuctai2 = this.state.data24.length;
    let thuctai3 = this.state.data34.length;
    let thuctai4 = this.state.data44.length;
    let thuctai5 = this.state.data54.length;
    let thuctai6 = this.state.data64.length;
    if (thuctai1 + thuctai2 > thuctai3 + thuctai4) {
      return (
        <div className="alert alert-secondary" role="alert">
          D??n s??? trong khu v???c b???n l?? d??n s??? tr??? :
                    <a href="/" className="alert-link">{thuctai1 + thuctai2}
            Human</a>. H??y ti???p t???c theo d??i !.
                </div>
      )
    } else if (thuctai1 + thuctai2 < thuctai3 + thuctai4) {
      return (
        <div className="alert alert-primary" role="alert">
          D??n s??? trong khu v???c b???n l?? d??n s??? trong ????? tu???i lao ?????ng :
                    <a href="/" className="alert-link">{thuctai3 + thuctai4}
            Human</a>. H??y ti???p t???c theo d??i !.
                </div>
      )
    } else if (thuctai5 + thuctai6 > thuctai4 + thuctai3) {
      return (
        <div className="alert alert-dark" role="alert">
          D??n s??? trong khu v???c b???n l?? d??n s??? gi??:
                    <a href="/" className="alert-link">{thuctai5 + thuctai6}
            Human</a>. H??y ti???p t???c theo d??i !.
                </div>
      )
    }
  }

  render() {

    return (
      <div>
        <div className="text-uppercase">
          <h1>Th??p tu???i</h1>
          <small className="ash">Th???ng k?? ????? tu???i</small><br />
        </div>
        <dl>
          <dd
            className={"percentage percentage-" + this.HienThiPhanTich(this.state.data)}>
            <span
              className="text"
              style={{
                color: 'black'
              }}>14 - 24</span>
          </dd>
          <dd
            className={"percentage percentage-" + this.HienThiPhanTich(this.state.data24)}>
            <span
              className="text"
              style={{
                color: 'black'
              }}>24 - 34</span>
          </dd>
          <dd
            className={"percentage percentage-" + this.HienThiPhanTich(this.state.data34)}>
            <span
              className="text"
              style={{
                color: 'black'
              }}>34 - 44</span>
          </dd>
          <dd
            className={"percentage percentage-" + this.HienThiPhanTich(this.state.data44)}>
            <span
              className="text"
              style={{
                color: 'black'
              }}>44 - 54</span>
          </dd>
          <dd
            className={"percentage percentage-" + this.HienThiPhanTich(this.state.data54)}>
            <span
              className="text"
              style={{
                color: 'black'
              }}>54 - 64</span>
          </dd>
          <dd
            className={"percentage percentage-" + this.HienThiPhanTich(this.state.data64)}>
            <span
              className="text"
              style={{
                color: 'black'
              }}>64 - C</span>
          </dd>

        </dl>
        <div className="col-12 d-flex justify-content-center">
          {this.danhgia()}
        </div>
      </div>
    );
  }
}

export default Agen;