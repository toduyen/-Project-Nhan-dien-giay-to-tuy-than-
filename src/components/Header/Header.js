import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <a className="navbar-brand mr-1 fontssss" href="/"><img
                    src="https://i.imgur.com/sygcnNv.png"
                    className="anhdaidien"
                    alt="iconImage"/>Hệ thống thu thập dữ liệu và quản lý giấy tờ tùy thân</a>
                {/* Navbar Search */}
                <form
                    className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"></form>
                {/* Navbar */}
                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown no-arrow">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/"
                            id="userDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <small className="alert alert-dark" role="alert">
                                Live Demo Unit [Author: Phan Tuân]
                            </small>
                            <img
                                src={this.props.avatar}
                                alt="logo"
                                style={{
                                width: '40px'
                            }}/>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="/">
                                <span></span>
                            </a>
                            <a className="dropdown-item" href="/">
                                <span></span>
                            </a>
                            <div className="dropdown-divider"/>
                            <a
                                className="dropdown-item"
                                href="/"
                                data-toggle="modal"
                                data-target="#logoutModal">Đăng xuất</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;