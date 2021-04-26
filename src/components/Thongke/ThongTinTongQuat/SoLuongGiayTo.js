import React, {Component} from 'react';
import {firebaseDemo} from '../../../Firebase/firebaseconnectio';
import GiayToQuanTrong2 from './SoLuongRong';
class GiayToQuanTrong extends Component {
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
                            if (sex === "NAM" || sex === "NỮ") {
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
            <div>
                <div className="h5 mb-0 font-weight-bold text-gray-800 color">
                    <span>{this.state.data.length}</span>
                    <span>cccd</span>
                    /
                    <GiayToQuanTrong2/>
                    <span>cmnd</span>
                </div>
            </div>
        );
    }
}

export default GiayToQuanTrong;