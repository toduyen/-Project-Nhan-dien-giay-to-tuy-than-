import React, {Component} from 'react';
import {firebaseone} from '../Firebase/firebaseconnectio';
class ThongBaoCapCao2 extends Component {
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
                if (sex === "NỮ") {
                    Mang.push({key: key, sex: sex})
                }
            });
            this.setState({data: Mang});
        })
    }
    render() {
        return (
            <div>
                <div className="h5 mb-0 font-weight-bold text-gray-800 color">{this.state.data.length}</div>
            </div>
        );
    }
}

export default ThongBaoCapCao2;