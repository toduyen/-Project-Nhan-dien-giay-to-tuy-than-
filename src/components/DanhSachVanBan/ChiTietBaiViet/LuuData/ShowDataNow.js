import React, { Component } from 'react';
import jsPDF from 'jspdf';
class ShowDataNow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datapdf: ''
    };
  }

  componentDidMount() {
    fetch('https://v2018.api2pdf.com/chrome/html', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '10afa838-b749-45fb-a3b2-07a56d0b171c' //Get your API key from
      },
      body: JSON.stringify({ html: this.props.vanbans, inlinePdf: true, fileName: 'test.pdf' })
    })
      .then(res => res.json())
      .then((res) => {
        this.setState({ datapdf: res.pdf })
      });
  }

  convertHtmlToPdf(e) {
    var doc = new jsPDF('p', 'in', 'letter'),
      sizes = [
        12, 16, 20
      ],
      fonts = [
        ['Times', 'Roman']
      ],
      font,
      size,
      lines,
      margin = 0.5, // inches on a 8.5 x 11 inch sheet.
      verticalOffset = margin,
      loremipsum = 'Sorry system update'

    // Margins:
    doc
      .setDrawColor(0, 255, 0)
      .setLineWidth(1 / 72)
      .line(margin, margin, margin, 11 - margin)
      .line(8.5 - margin, margin, 8.5 - margin, 11 - margin)

    // the 3 blocks of text
    for (var i in fonts) {
      if (fonts.hasOwnProperty(i)) {
        font = fonts[i]
        size = sizes[i]

        lines = doc.setFont(font[0], font[1])
          .setFontSize(size)
          .splitTextToSize(loremipsum, 7.5)
        // Don't want to preset font, size to calculate the lines?
        // .splitTextToSize(text, maxsize, options) allows you to pass an object with
        // any of the following: { 	'fontSize': 12 	, 'fontStyle': 'Italic' 	,
        // 'fontName': 'Times' } Without these, .splitTextToSize will use current /
        // default font Family, Style, Size.
        doc.text(0.5, verticalOffset + size / 72, lines)

        verticalOffset += (lines.length + 0.5) * size / 72
      }
    }
    doc.save('a4.pdf')
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="my-4">Save text
                    <small>Save audio</small>
        </h1>
        <div className="row">
          <div className="col-md-8">
            <img className="img-fluid komask" src={this.props.hinhanh} alt="demo" />
          </div>

          <div className="col-md-4 size_text_one">
            <h3 className="my-3 ">Mô tả tải liệu</h3>
            <p>{this
              .props
              .vanbans
              .slice(0, 300) + "..."}</p>
            <h3 className="my-3">Thẻ gợi từ</h3>
            <ul>
              <i>{this.props.hashtag}</i>
            </ul>
            <h3>Dowload file text</h3>
            <ul
              className="padding_left"
              style={{
                paddingLeft: '0px'
              }}>
              <img
                onClick={this
                  .convertHtmlToPdf
                  .bind(this)}
                src="https://cdn1.iconfinder.com/data/icons/adobe-acrobat-pdf/154/adobe-acrobat-pdf-file-512.png"
                className="size_image"
                alt="demo" />
            </ul>
            <h3>Length Text</h3>
            <span>{this.props.vanbans.length}</span>
            <h3>Audio Language</h3>
            <video
              className="deme"
              style={{
                height: '50px',
                width: '310px'
              }}
              controls>
              <source src={this.props.amthanh} type="video/mp4" />
            </video>
          </div>
        </div>

        <h3 className="my-4">Văn bản được hệ thống nhận</h3>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control size"
                rows="7"
                cols="20"
                value={this.props.vanbans}
                defaultValue='...loading'>
              </textarea>
            </div>
          </div>
        </div>

        <h3 className="my-4">Convet text to PDF</h3>
        <div className="row">
          <div className="col-12">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src={this.state.datapdf}
                allowfullscreen
                title="sd"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDataNow;