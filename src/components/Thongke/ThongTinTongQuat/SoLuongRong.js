import React, {Component} from 'react';
import {firebaseone} from '../../../Firebase/firebaseconnectio';
class GiayToQuanTrong2 extends Component {
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
                if (sex === "N/A") {
                    Mang.push({key: key, sex: sex})
                }
            });
            this.setState({data: Mang});
        })
    }
    render() {
        return (

            <span>{this.state.data.length}</span>

        );
    }
}

export default GiayToQuanTrong2;