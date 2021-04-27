import React, {Component} from 'react';
import {firebaseDemo} from '../../../Firebase/firebaseconnectio';
import ChartInFo2 from './ThapTileGiayTo';
import dl from '../../../Data/DulieuGioiTInh.json';
import {connect} from 'react-redux';
import $ from 'jquery';
class ChartInFo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: [],
            datasun: [],
						datasex : dl
        };
    }
    componentDidMount() {
			 let ghinhandata = firebaseDemo;
        ghinhandata.on('value', (snapshort) => {
            var Mang = [];
            var Mang2 = [];
            var sun = [];
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
                            if (sex === "NỮ") {
                                Mang2.push({key: key, sex: sex})
                            }
                            sun.push({key: key})
                        });
                    });
            })
            this.setState({data: Mang, data2: Mang2, datasun: sun});
        })

        if (localStorage.getItem('gioitinhrorang') === null) {
            localStorage.setItem('gioitinhrorang', JSON.stringify(dl))
        } else {
            var temp = JSON.parse(localStorage.getItem('gioitinhrorang'));
            this.setState({datasex: temp});
        }
		}
		

    datamen = () => {
        var temp = this.state.data.length;
        return (temp / this.state.datasun.length) * 100;
    }

    datanu = () => {
        var temp = this.state.data2.length;
        return (temp / this.state.datasun.length) * 100;
    }

    dansonamgioithap = () => {
        var temp = 47403257;
        return (temp / 95414640) * 100;
    }
    dansonamgioithap2 = () => {
        var temp = 47625625;
        return (temp / 95414640) * 100;
    }

    ShowDataAlear = () => {
        if (this.state.datasex.nam > this.state.datasex.nu) {
            return (
                <div className="alert alert-primary" role="alert">
                    Giới tinh nam nhiều hơn giới tính nữ :
                    <a href="/" className="alert-link">{this.state.datasex.nam}
                        %</a>. Hãy tiếp tục theo dõi !.
                </div>
            )
        } else if (this.state.datasex.nam < this.state.datasex.nu) {
            return (
                <div className="alert alert-secondary" role="alert">
                    Giới tinh nữ nhiều hơn giới tính nam :
                    <a href="/" className="alert-link">{this.state.datasex.nu}
                        %</a>. Hãy tiếp tục theo dõi !.
                </div>
            )
        } else if (this.state.datasex.nam === this.state.datasex.nu) {
            return (
                <div className="alert alert-dark" role="alert">
                    Tỉ lệ nam nữ cân bằng bạn làm rất tốt
                    <a href="/" className="alert-link">Hãy tiếp tục theo dõi !.</a>.
                </div>
            )
        }
    }

    render() {
        $(document)
            .ready(function () {
                columnChart();

                function columnChart() {
                    var item = $('.chart', '.column-chart').find('.item'),
                        itemWidth = 200 / item.length;
                    item.css('width', itemWidth + '%');

                    $('.column-chart')
                        .find('.item-progress')
                        .each(function () {
                            var itemProgress = $(this),
                                itemProgressHeight = $(this)
                                    .parent()
                                    .height() * ($(this).data('percent') / 100);
                            itemProgress.css('height', itemProgressHeight);
                        });
                };
            });
        this
            .props
            .ThuchienthaydoitrangthaiA();
        this
            .props
            .ThuchienlaydulieuA("nếu vào lần đầu nhớ reset lại trình duyệt")
        return (
            <div className="row mt-2">
                <div className="col-md-6 ">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">

                                <div className="text-center text-uppercase ">
                                    <h2>Tháp dân số hiện tại</h2>
                                </div>
                                {/* //.text-center */}
                                <div className="column-chart">
                                    <div className="legend legend-left hidden-xs">
                                        <h3 className="legend-title">%</h3>
                                    </div>
                                    {/* //.legend */}
                                    <div className="legend legend-right hidden-xs">
                                        <div className="item">
                                            <h4>Nam</h4>
                                        </div>
                                        {/* //.item */}
                                        <div className="item">
                                            <h4>Dân số nam</h4>
                                        </div>
                                        {/* //.item */}
                                        <div className="item">
                                            <h4>Nữ</h4>
                                        </div>
                                        {/* //.item */}
                                        <div className="item">
                                            <h4>Dân số nữ</h4>
                                        </div>
                                        {/* //.item */}
                                    </div>
                                    {/* //.legend */}
                                    <div className="chart clearfix">
                                        <div className="item">
                                            <div className="bar">
                                                <span className="percent">{Math.floor(this.datamen()) + "%"}</span>
                                                <div
                                                    className="item-progress"
                                                    style={{
                                                    height: this.datamen() + "%"
                                                }}></div>
                                                {/* //.item-progress */}
                                            </div>
                                            {/* //.bar */}
                                        </div>
                                        {/* //.item */}
                                        <div className="item">
                                            <div className="bar">
                                                <span className="percent">{Math.floor(this.dansonamgioithap()) + "%"}</span>
                                                <div
                                                    className="item-progress"
                                                    style={{
                                                    height: this.dansonamgioithap() + "%"
                                                }}></div>
                                                {/* //.item-progress */}
                                            </div>
                                            {/* //.bar */}
                                        </div>
                                        {/* //.item */}
                                        <div className="item">
                                            <div className="bar">
                                                <span className="percent">{Math.floor(this.datanu()) + "%"}</span>
                                                <div
                                                    className="item-progress"
                                                    style={{
                                                    height: this.datanu() + "%"
                                                }}></div>
                                                {/* //.item-progress */}
                                            </div>
                                        </div>
                                        {/* //.item */}
                                        <div className="item">
                                            <div className="bar">
                                                <span className="percent">{Math.floor(this.dansonamgioithap2()) + "%"}</span>
                                                <div
                                                    className="item-progress"
                                                    style={{
                                                    height: this.dansonamgioithap2() + "%"
                                                }}></div>
                                                {/* //.item-progress */}
                                            </div>
                                            {/* //.bar */}
                                        </div>
                                        {/* //.item */}
                                    </div>
                                    {/* //.chart */}
                                </div>
                                {/* //.column-chart */}
                            </div>
                            {/* //.col-md-6 */}
                        </div>
                        {/* //.row */}
                    </div>
                </div>
                <div className="col-md-6"><ChartInFo2/></div>
                <div className="col-md-12 d-flex justify-content-center">
                    {this.ShowDataAlear()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {ThuchineHienTHi: state.dulieugioitinh}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ThuchienthaydoitrangthaiA: () => {
            dispatch({type: 'TRANG_THAI'})
        },
        ThuchienlaydulieuA: (getitem) => {
            dispatch({type: 'GETDATA', getitem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChartInFo);