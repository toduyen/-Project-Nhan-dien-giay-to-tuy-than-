import React, {Component} from 'react';
import {firebaseDemo} from '../../../Firebase/firebaseconnectio';
class ChartInFo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: [],
            datasun: []
        };
    }
    componentWillMount() {

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
                            if (sex === "NAM" || sex === "NỮ") {
                                Mang.push({key: key, sex: sex})
                            }
                            if (sex === "N/A") {
                                Mang2.push({key: key, sex: sex})
                            }
                            sun.push({key: key})
                        });
                    });
            })
            this.setState({data: Mang, data2: Mang2, datasun: sun})
        })
    }

    ShowDatacccd = () => {
        var temp = this.state.data.length;
        var ketqua = (temp / this.state.datasun.length) * 100;
        return ketqua;
    }
    ShowDatacmnd = () => {
        var temp = this.state.data2.length;
        var ketqua = (temp / this.state.datasun.length) * 100;
        return ketqua;
    }
    datatong = () => {
        var tongket = (this.state.datasun.length / this.state.datasun.length) * 100;
        return tongket;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center text-uppercase">
                                <h2>Tỉ lệ giấy tờ</h2>
                            </div>
                            {/* //.text-center */}
                            <div className="column-chart">
                                <div className="legend legend-left hidden-xs">
                                    <h3 className="legend-title">%</h3>
                                </div>
                                {/* //.legend */}
                                <div className="legend legend-right hidden-xs">
                                    <div className="item">
                                        <h4>Cccd</h4>
                                    </div>
                                    {/* //.item */}
                                    <div className="item">
                                        <h4>Cmnd</h4>
                                    </div>
                                    {/* //.item */}
                                    <div className="item">
                                        <h4>Tổng hợp</h4>
                                    </div>
                                    {/* //.item */}
                                    <div className="item">
                                        <h4>Toàn quốc</h4>
                                    </div>
                                    {/* //.item */}
                                </div>
                                {/* //.legend */}
                                <div className="chart clearfix">
                                    <div className="item">
                                        <div className="bar">
                                            <span className="percent">{Math.floor(this.ShowDatacccd()) + "%"}</span>
                                            <div
                                                className="item-progress"
                                                style={{
                                                height: this.ShowDatacccd() + "%"
                                            }}></div>
                                            {/* //.item-progress */}
                                        </div>
                                        {/* //.bar */}
                                    </div>
                                    {/* //.item */}
                                    <div className="item">
                                        <div className="bar">
                                            <span className="percent">{Math.floor(this.ShowDatacmnd()) + "%"}</span>
                                            <div
                                                className="item-progress"
                                                style={{
                                                height: this.ShowDatacmnd() + "%"
                                            }}></div>
                                            {/* //.item-progress */}
                                        </div>
                                        {/* //.bar */}
                                    </div>
                                    {/* //.item */}
                                    <div className="item">
                                        <div className="bar">
                                            <span className="percent">{Math.floor(this.datatong()) + "%"}</span>
                                            <div
                                                className="item-progress"
                                                style={{
                                                height: this.datatong() + "%"
                                            }}></div>
                                            {/* //.item-progress */}
                                        </div>
                                        {/* //.bar */}
                                    </div>
                                    {/* //.item */}
                                    <div className="item">
                                        <div className="bar">
                                            <span className="percent">100%</span>
                                            <div
                                                className="item-progress"
                                                style={{
                                                height: '100%'
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
                {/* //.container */}
                <br/>
            </div>
        );
    }
}

export default ChartInFo2;