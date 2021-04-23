import React, {Component} from 'react';
import {Link} from "react-router-dom";
class CacDataLienQUan extends Component {

    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-3 mt-4">
                <div className="card cardtextama">
                    <div className="card-body">
                        <Link
                            to={"/chi-tiet-tai-lieu/" + this.to_slug(this.props.vanbans) + "." + this.props.stt + ".html"}><img className="resize" src={this.props.hinhanh} alt="dem"/></Link>
                        <blockquote className="blockquote">
                            <p>{this
                                    .props
                                    .vanbans
                                    .slice(0, 40) + "..."}</p>
                            <footer className="card-blockquote hehe">
                                <cite title="Source title">{this.props.hastag}</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default CacDataLienQUan;