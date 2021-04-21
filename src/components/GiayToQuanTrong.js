import React, {Component} from 'react';
import {firebaseone} from '../Firebase/firebaseconnectio';
import GiayToQuanTrong2 from './GiayToQuanTrong2';
class GiayToQuanTrong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentWillMount() {
        firebaseone.on('value', (datas) => {
            var Mang = [];
            datas.forEach(element => {
                const key = element.key;
                const sex = element
                    .val()
                    .sex;
                if (sex === "NAM" || sex === "NỮ") {
                    Mang.push({key: key, sex: sex})
                }
            });
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