import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AleartInfo from './components/notifier/AleartInfo';
import {connect} from 'react-redux';
import Header from './components/Header/Header';
import MenuFullOprion from './components/Menu/MenuFullOprion'
import DieuHuongUrl from './router/DieuHuongUrl';
import Footer from './components/Footer/Footer';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoURL: `https://i.pinimg.com/564x/e6/57/55/e65755e73d8085e30aedfa21fde07f1b.jpg`
        }
    }
    showthongbao = () => {
        if (this.props.changthai === true) {
            return <AleartInfo/>;
        }
    }

    render() {
        return (

            <Router>
                {this.showthongbao()}
                <Header avatar={this.state.photoURL}/>
                <div id="wrapper">
                    <MenuFullOprion/>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <DieuHuongUrl/>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {changthai: state.thongbao.chang}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Getdata: () => {
            dispatch({type: 'TRANG_THAI'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
