import React, {Component} from 'react';
import {firebaseDemo} from '../../../Firebase/firebaseconnectio';
class GiayToQuanTrong2 extends Component {
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
                            if (sex === "N/A") {
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

            <span>{this.state.data.length}</span>

        );
    }
}

export default GiayToQuanTrong2;