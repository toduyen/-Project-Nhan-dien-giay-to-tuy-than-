import React, { Component, Fragment } from "react";
import firebase from "firebase";
import Login from "./LoginAuth";
import { firebaseApp, firebaseDemo } from "../../Firebase/firebaseconnectio";
import RouterURL from "../../router/DieuHuongUrl";
import { connect } from "react-redux";
import fakeAuth from '../FakeAuth';
import Header from '../../Layout/Header';
import MenuFullOprion from '../../Layout/Menu';
import Footer from '../../Layout/Footer';
import DataKey from '../../Data/DatakeyUpDataUserName.json';
const AuthButton = (() => fakeAuth.isAuthenticated
  ? (
    <p>
      Welcome!{" PhanTuan "}
    </p>
  )
  : (
    <p>Tùy quyền mà sẽ hiện chức năng tương ứng hoặc một vài tính năng
            sẽ không được chuyển hướng</p>
  ));

class UserInfoAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      displayName: null,
      uid: null,
      photoURL: null,
      emailVerified: null,
      data: []
    };
  }
  componentWillMount() {
    if (localStorage.getItem('dataUserNamePush') === null) {
      localStorage.setItem('dataUserNamePush', JSON.stringify(DataKey));
    }
  }

  componentDidMount() {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          this.authHandler({ user });
        }
      });

    firebaseDemo.on('value', (dataSnapshort) => {
      var mang = [];
      dataSnapshort.forEach((element) => {
        const key = element.key;
        const email = element
          .val()
          .email;
        mang.push({ email: email, key: key })
      });
      this.setState({ data: mang });
    })
  }
  authHandler = async authData => {
    // xmZjFzpHjFc2fEYQy1odP62MJaQ2
    const user = await authData.user;
    this.setState({
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }, () => {
      this
        .props
        .layID(user.uid);
    });
  };
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };
  logout = async () => {
    await firebase
      .auth()
      .signOut();
    this.setState({ email: null, displayName: null, uid: null });
    window
      .location
      .reload()
  };

  sukienTaiDuLieu = () => {
    var mang = [];
    this
      .state
      .data
      .forEach((item) => {
        if (item.email.indexOf(this.state.email) !== -1) {
          localStorage.setItem('dataUserNamePush', JSON.stringify(item))

          mang.push(item);

        }
      })
    if (mang.length > 0) {
      console.log(`trùng rồi`);
    } else if (mang.length === 0) {
      var info = {};
      info.displayName = this.state.displayName;
      info.email = this.state.email;
      info.uid = this.state.uid;
      this
        .props
        .senDataFirebase(info);
    }
  }

  render() {
    const logout = <button className="btnInfoUserName" onClick={this.logout}>
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-unlock" viewBox="0 0 36 16">
        <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />
      </svg>
      Log Out! Auth Github or Facebook</button>;
    const addData = <button className="btnInfoUserName" onClick={this.sukienTaiDuLieu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-terminal-fill" viewBox="0 0 36 16">
        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z" />
      </svg>
      Yêu cầu kích hoạt tự động</button>; // chua thao tac
    if (!this.state.email) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <Fragment>
        <Header
          dangxuat={logout}
          yeucau={addData}
          avatar={this.state.photoURL}
          email={this.state.email}
          uid={this.state.uid}
          emailVerified={this.state.emailVerified}
          displayName={this.state.displayName} />
        <div id="wrapper">
          <MenuFullOprion uids={this.state.uid} />
          <div id="content-wrapper">
            <div className="container-fluid">
              <RouterURL />
              <AuthButton />
              <Footer />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { reducerStateLoginAuth: state.reducerStateLoginAuth, reducerPushDatauser: state.reducerPushDatauser }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    layID: (getString) => {
      dispatch({ type: "CHANGE_STATE_LOGIN", getString })
    },
    senDataFirebase: (newItem) => {
      dispatch({ type: "INSERT_DATA_USER_OAUTH", newItem })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoAuth)