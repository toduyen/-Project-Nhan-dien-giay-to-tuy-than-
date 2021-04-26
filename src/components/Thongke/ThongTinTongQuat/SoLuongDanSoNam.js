import React, {Component} from 'react';
import {firebaseDemo} from '../../../Firebase/firebaseconnectio';
import ThongBaoCapCao2 from './SoLuongDanSoNu';
import GiayToQuanTrong from './SoLuongGiayTo';
class ThongBaoCapCao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentWillMount() {

        let ghinhandata = firebaseDemo;
        ghinhandata.on('value', (snapshort) => {
            var Mang = [];
            snapshort.forEach((element) => {
                ghinhandata
                    .child(element.key)
                    .child('DataCard')
                    .on('value', (datas) => {
                        datas.forEach((elementChinhThuc) => {
                            const key = elementChinhThuc.key;
                            const sex = elementChinhThuc
                                .val()
                                .sex;
                            if (sex === "NAM") {
                                Mang.push({key: key, sex: sex})
                            }
                        });
                    });
            })
            this.setState({data: Mang});
        })

    }
    render() {
        return (
            <div className="container-fluid">
                {/* Content Row */}
                <div className="row">
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Dân số (Nam)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800 color">{this.state.data.length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-child fa-2x text-gray-300"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Dân số (Nữ)</div>
                                        <ThongBaoCapCao2/>
                                    </div>
                                    <div className="col-auto">

                                        <i className="fas fa-female fa-2x text-gray-300"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Các bảng ghi</div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800 color">{this.props.data.length}</div>
                                            </div>
                                            <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div
                                                        className="progress-bar bg-info"
                                                        role="progressbar"
                                                        style={{
                                                        width: this
                                                            .props
                                                            .KetquaPhantran() + "%"
                                                    }}
                                                        aria-valuenow={50}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-table fa-2x text-gray-300"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pending Requests Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Tỉ lệ giấy tờ</div>
                                        <GiayToQuanTrong/>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-scroll fa-2x text-gray-300"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThongBaoCapCao;