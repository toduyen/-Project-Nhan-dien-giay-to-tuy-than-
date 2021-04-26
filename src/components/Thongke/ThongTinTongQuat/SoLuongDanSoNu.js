import React, {Component} from 'react';
import {firebaseDemo} from '../../../Firebase/firebaseconnectio';
class ThongBaoCapCao2 extends Component {
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
                            if (sex === "NỮ") {
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
                <div className="h5 mb-0 font-weight-bold text-gray-800 color">{this.state.data.length}</div>
            </div>
        );
    }
}

export default ThongBaoCapCao2;