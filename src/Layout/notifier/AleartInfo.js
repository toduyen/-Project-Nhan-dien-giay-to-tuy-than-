import React, {Component} from 'react';
import {Alert, AlertContainer} from "react-bs-notifier";
import {connect} from 'react-redux';
class AleartInfo extends Component {

    HanLer = () => {
        this
            .props
            .ThayDOiTrangThai();
    }

    render() {
        return (
            <AlertContainer>
                <Alert timeout={8000} onDismiss={() => this.HanLer()} type="success">{this.props.ThucHienTrangThaiDuLieu}</Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {ThucHienTrangThaiDuLieu: state.thongbao.getdata}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ThayDOiTrangThai: () => {
            dispatch({type: 'TRANG_THAI'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AleartInfo);