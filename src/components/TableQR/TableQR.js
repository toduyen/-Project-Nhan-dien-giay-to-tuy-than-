import React, {Component} from 'react';
import Button from './Button';

class TableQR extends Component {
    render() {
        return (
            <table
                className="table table table-bordered table-striped mb-0"
                id="table-to-xls"
                border="1">
                <thead
                    className="thead-dark"
                    style={{
                    fontSize: '12px'
                }}>
                    <tr >
                        <th scope="col">STT</th>
                        <th scope="col">Mã code</th>
                        <th scope="col">Số phiên quét mã</th>
                        <th scope="col">Mã đã giải</th>
                        <th scope="col">Ngày quét</th>
                        <th scope="col">Thời gian quyét</th>
                        <th scope="col">Cho phép vào</th>
                    </tr>
                </thead>
                <tbody style={{
                    fontSize: '10px'
                }}>
                    {this
                        .props
                        .dulieukiemtim
                        .map((value, key) => {
                            return (
                                <tr key={key}>
                                    <th scope="row">{key}</th>
                                    <th scope="row">{value.key}</th>
                                    <td>{key}</td>
                                    <td>{value.queQR}</td>
                                    <td>{value.time}</td>
                                    <td>{value.time2}</td>
                                    <td>
                                        <Button thongtincaptinh={value}/>
                                    </td>
                                </tr>
                            )
                        })
}

                </tbody>

            </table>
        );
    }
}

export default TableQR;