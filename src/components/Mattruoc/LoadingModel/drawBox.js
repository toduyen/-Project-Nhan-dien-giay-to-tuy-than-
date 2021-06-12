import React, { Component } from 'react';

var temp = ``;
var alretAw = ``;
class DrawBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptors: null,
      detections: null,
      match: null,
      gender: null,
      age: null
    };
  }

  componentDidMount() {
    this.getDescription();
  }

  componentWillReceiveProps(newProps) {
    this.getDescription(newProps);
  }

  checkEkyc = () => {
    if (temp.length === 0) {
      alretAw = `Kết quả này chỉ hiển thị tại Ekyc Similary và liveness`;
    } else {
      var tepChreck = temp[0]._distance;
      const asFaceAs = 0.6;
      let total = tepChreck.toFixed(2) / 1 * 100 + "%";
      if (tepChreck > asFaceAs) {
        alretAw = `Không chuẩn với khuôn mặt mẫu là ${total}`;
      }
    }
  }

  getDescription = async (props = this.props) => {
    const { fullDesc, faceMatcher } = props;
    if (!!fullDesc) {
      await this.setState({
        descriptors: fullDesc.map(fd => fd.descriptor),
        detections: fullDesc.map(fd => fd.detection),
        gender: fullDesc.map(fd => fd.gender),
        age: fullDesc.map(fd => fd.age)
      });
      if (!!this.state.descriptors && !!faceMatcher) {
        let match = await this
          .state
          .descriptors
          .map(descriptor => faceMatcher.findBestMatch(descriptor));
        this.setState({ match });
        this.checkEkyc();
      }
    }
  };
  gioitinhNha = () => {
    if (this.state.gender.toString() === "male") {
      return ('Nam giới');
    } else {
      return ('Nữ giới');
    }
  }
  renderBlink = () => {
    let leftEye = this.props.ketquabodiqua;
    let rightEye = this.props.ketquabodiqua2;
    if ((leftEye && rightEye) < 0.28) {
      return (`đã nhắm mắt`);
    } else {
      return (`không nhắm mắt`);
    }
  }

  render() {
    const { imageWidth, boxColor } = this.props;
    const { detections, match } = this.state;
    let box = null;

    if (!!detections) {
      temp = match;
      box = detections.map((detection, i) => {
        const relativeBox = detection.relativeBox;
        const dimension = detection._imageDims;
        let _X = imageWidth * relativeBox._x;
        let _Y = (relativeBox._y * imageWidth * dimension._height) / dimension._width;
        let _W = imageWidth * relativeBox.width;
        let _H = (relativeBox.height * imageWidth * dimension._height) / dimension._width;
        return (
          <div key={i}>
            <div
              style={{
                position: 'absolute',
                border: 'solid',
                borderColor: boxColor,
                height: _H,
                width: _W,
                transform: `translate(${_X}px,${_Y}px)`
              }}>
              {!!match && match[i] && match[i]._label !== 'unknown'
                ? (
                  <p
                    style={{
                      backgroundColor: boxColor,
                      border: 'solid',
                      borderColor: boxColor,
                      width: _W,
                      marginTop: 0,
                      color: '#fff',
                      transform: `translate(-3px,${_H}px)`
                    }}>
                    {match[i]._label}
                    <br /> {this.state.gender}
                    <br /> {Math.round(this.state.age)}
                  </p>
                )
                : <p
                  style={{
                    width: _W,
                    marginTop: 0,
                    color: '#33FF33',
                    transform: `translate(-3px,${_H}px)`
                  }}>
                  {`Kết quả: ${alretAw}`}
                  <br /> {`giới tính: ${this.gioitinhNha()}`}
                  <br /> {`độ tuổi: ${Math.round(this.state.age)}`}
                  <br /> {`Nhắm mắt: ${this.renderBlink()}`}
                </p>}

            </div>
          </div>
        );
      });
    }

    return <div>{box}</div>;
  }
}

export default DrawBox;
