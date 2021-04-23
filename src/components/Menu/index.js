import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
class MenuFullOprion extends Component {
    render() {
        return (
            <ul className="sidebar navbar-nav">
                {this.props.uids === 'xmZjFzpHjFc2fEYQy1odP62MJaQ2'
                    ? <li className="nav-item active">
                            <NavLink
                                className="nav-link"
                                to="/"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="fas fa-home"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>Home</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/thong-ke"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="fas fa-fw fa-tachometer-alt"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>Statistics</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/mat-truoc"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="fas fa-meh"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>Card front</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/mat-sau"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="far fa-meh"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>Back of card</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/du-lieu-update-no-ai"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="far fa-grin-tongue-wink"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>Manual input</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/danh-sach"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="fas fa-list-alt"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>List of data</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/giong-noi"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="fas fa-microphone-alt"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>Create text to speech</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/hien-thi-danh-sach"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="fas fa-address-book"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>List of text</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/du-lieu-giong-noi"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="fas fa-archive"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>Audio list</span>
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/thong-tin-he-thong"
                                activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <i className="fas fa-cogs"/>
                                <span
                                    style={{
                                    marginLeft: '15px'
                                }}>Setting</span>
                            </NavLink>
                        </li>
                    : <li className="nav-item active">
                        <NavLink
                            className="nav-link"
                            to="/mat-truoc"
                            activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <i className="fas fa-meh"/>
                            <span
                                style={{
                                marginLeft: '15px'
                            }}>Card front</span>
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/mat-sau"
                            activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <i className="far fa-meh"/>
                            <span
                                style={{
                                marginLeft: '15px'
                            }}>Back of card</span>
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/du-lieu-update-no-ai"
                            activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <i className="far fa-grin-tongue-wink"/>
                            <span
                                style={{
                                marginLeft: '15px'
                            }}>Manual input</span>
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/danh-sach"
                            activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>
                            <i className="fas fa-list-alt"/>
                            <span
                                style={{
                                marginLeft: '15px'
                            }}>List of data</span>
                        </NavLink>
                    </li>}

            </ul>
        );
    }
}

export default MenuFullOprion;