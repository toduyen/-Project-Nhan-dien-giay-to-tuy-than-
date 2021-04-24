import React, {Component, Fragment} from "react";
import firebase from "firebase";
import Login from "./LoginAuth";
import {firebaseApp, firebaseone} from "../../Firebase/firebaseconnectio";
import RouterURL from "../../router/DieuHuongUrl";
import {connect} from "react-redux";
import fakeAuth from '../FakeAuth';
import Header from '../../Layout/Header';
import MenuFullOprion from '../../Layout/Menu'
import Footer from '../../Layout/Footer';
import DataKey from '../../Data/DulieuTamThoiKey.json';
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

		componentWillMount() {
			if(localStorage.getItem('luuyKyTamThoi') === null)
			{
				localStorage.setItem('luuyKyTamThoi',JSON.stringify(DataKey));
			}
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
        // xmZjFzpHjFc2fEYQy1odP62MJaQ2
        const user = authData.user;
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
								this.insertDataDauvaohople(user.displayName , user.email , user.uid);
        });
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
        await firebase
            .auth()
            .signOut();
        this.setState({email: null, displayName: null, uid: null});
    };

    insertDataDauvaohople = (name , email , chuyoiSoSanh) => {
        firebaseone.on('value', (snapshot) => {
						var luuKey = '';
            var mangUids = [];
						var mangIndexOfView = [];
            snapshot.forEach((element) => {
								const key = element.key;
                const uid = element.val().uid;
                mangUids.push(uid);
								luuKey = key;
								mangIndexOfView.push({
									key : key,
									uid : uid
								})
            })
						if(mangUids.indexOf(chuyoiSoSanh) !== -1)
						{
							mangIndexOfView.forEach((item) => {
								if(item.uid.indexOf(chuyoiSoSanh) != -1)
								{
									localStorage.setItem('luuyKyTamThoi',item.key);
								}
							})
						}
						else
						{
							this.props.layUserName(name, email , chuyoiSoSanh , '', luuKey);
						}
        })
    }

    render() {
        const logout = <button onClick={this.logout}>Log Out! Auth Github or Facebook</button>; // chua thao tac
        if (!this.state.email) {
            return <Login authenticate={this.authenticate}/>;
        }
        return (
            <Fragment>
                <Header
                    dangxuat={logout}
                    avatar={this.state.photoURL}
                    email={this.state.email}
                    uid={this.state.uid}
                    emailVerified={this.state.emailVerified}
                    displayName={this.state.displayName}/>
                <div id="wrapper">
                    <MenuFullOprion uids={this.state.uid}/>
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
    return {reducerStateLoginAuth: state.reducerStateLoginAuth, reducerPushDatauser: state.reducerPushDatauser}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        layID: (getString) => {
            dispatch({type: "CHANGE_STATE_LOGIN", getString})
        },
        layUserName: (displayName, email, uid, DataCard,key) => {
            dispatch({type: "INSERT_DATA_USER_OAUTH", displayName, email, uid, DataCard,key})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoAuth)