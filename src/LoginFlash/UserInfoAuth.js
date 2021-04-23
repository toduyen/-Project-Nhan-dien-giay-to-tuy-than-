import React, {Component, Fragment} from "react";
import firebase from "firebase";
import Login from "./LoginAuth";
import {firebaseApp} from "../Firebase/firebaseconnectio";
import RouterURL from "../router/DieuHuongUrl";
import {connect} from "react-redux";
import fakeAuth from '../RedirectAuth/FakeAuth';
import Header from '../components/Header/Header';
import MenuFullOprion from '../components/Menu/MenuFullOprion'
import Footer from '../components/Footer/Footer';
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
						emailVerified: null
        };
    }

    componentDidMount() {
        firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    this.authHandler({user});
                }
            });
    }

    authHandler = async authData => {
        console.log(authData.user);
        this
            .props
            .layID(authData.user.uid); // xmZjFzpHjFc2fEYQy1odP62MJaQ2
        const user = authData.user;
        this.setState({email: user.email, displayName: user.displayName, uid: user.uid, photoURL: user.photoURL, emailVerified: user.emailVerified});
    };

    authenticate = provider => {
        console.log(provider);
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    };

    logout = async() => {
        console.log("logout");
        await firebase
            .auth()
            .signOut();
        this.setState({email: null, displayName: null, uid: null});
    };

    render() {

        const logout = <button onClick={this.logout}>Log Out! Auth Github or Facebook</button>; // chua thao tac
        if (!this.state.email) {
            return <Login authenticate={this.authenticate}/>;
        }
        return (
            <Fragment>
                <Header dangxuat={logout} avatar={this.state.photoURL} email={this.state.email} uid={this.state.uid} emailVerified={this.state.emailVerified} displayName={this.state.displayName}/>
                <div id="wrapper">
                    <MenuFullOprion/>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <RouterURL/>
                            <AuthButton/>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {reducerStateLoginAuth: state.reducerStateLoginAuth}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        layID: (getString) => {
            dispatch({type: "CHANGE_STATE_LOGIN", getString})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoAuth)