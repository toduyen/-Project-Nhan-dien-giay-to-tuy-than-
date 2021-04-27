import React, {Component} from 'react';
import ThongBaoCapCaoCo from './ThongTinTongQuat/ThongTinTongQuatNhat';
import {firebaseDemo} from '../../Firebase/firebaseconnectio';
import CHARTINFOSS from './ThapGiayToVaDanSo/ThapDanSoHienTai';
import Search2 from './DanhsachNguoiDan/Form/FormSearch';
import KOOBAY from './DanhsachNguoiDan/DuLieuNguoiDan';
import mahoans from '../../Data/mahoan.json'
import Agen from './ThapTuoi/Agen';
import DiaPhuong from './ThapDiaPhuong/diaPhuong';
class FormInForVsEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: [],
            data3: ''
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
													const id = elementChinhThuc
															.val()
															.id;
													const name = elementChinhThuc
															.val()
															.name;
													const dob = elementChinhThuc
															.val()
															.dob;
													const home = elementChinhThuc
															.val()
															.home;
													const address = elementChinhThuc
															.val()
															.address;
													const doe = elementChinhThuc
															.val()
															.doe;
													const sex = elementChinhThuc
															.val()
															.sex;
													const ethnicity = elementChinhThuc
															.val()
															.ethnicity;
													const tonhiao = elementChinhThuc
															.val()
															.tonhiao;
													const ngayhethan = elementChinhThuc
															.val()
															.ngayhethan;
													const noicap = elementChinhThuc
															.val()
															.noicap;
													const images = elementChinhThuc
															.val()
															.images;
													Mang.push({
															key: key,
															id: id,
															dob: dob,
															home: home,
															address: address,
															name: name,
															doe: doe,
															sex: sex,
															ethnicity: ethnicity,
															tonhiao: tonhiao,
															ngayhethan: ngayhethan,
															noicap: noicap,
															images: images
													})
												});
										});
						})
						this.setState({data: Mang})
				})
        if (localStorage.getItem('mahoan') === null) {
            localStorage.setItem('mahoan', JSON.stringify(mahoans))
        } else {
            var temp = JSON.parse(localStorage.getItem('mahoan'));
            this.setState({data2: temp});
        }

    }
    KetquaPhantran = () => {
        var sogoc = this.state.data.length;
        if (sogoc === null) {
            return (0);
        } else {
            return (sogoc / 100 * 100);
        }
    }

    luutruduieu = (dl) => {
        this.setState({data3: dl});
    }

    render() {

        var ketqua = [];
        this
            .state
            .data
            .forEach((item) => {
                if (item.name.indexOf(this.state.data3) !== -1) {
                    ketqua.push(item);
                } else if (item.id.indexOf(this.state.data3) !== -1) {
                    ketqua.push(item);
                }
                return 0;
            });
        return (
					<>
						    <div id="accordion" className="mt-4">
                <div className="row mt-3 mb-4">
                    <div className="col-md-6 d-flex justify-content-start">
                        <iframe
                            src='https://danso.org/bdds/?country=viet-nam'
                            frameBorder={0}
                            scrolling="no"
                            width={550}
                            height={300}
                            title="myFrame"></iframe>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <iframe
                            src="https://danso.org/bdtl/?country=viet-nam"
                            frameBorder={0}
                            scrolling="no"
                            width={550}
                            height={300}
                            title="myframe2"></iframe>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <span className="d-flex flex-row bd-highlight mb-3">Thông tin vừa update</span>
                        <table className="table table-hover font-size">
                            <thead>
                                <tr>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Cmnd</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Địa chỉ</th>
                                    <th scope="col">Đăng ký</th>
                                    <th scope="col">Năm sinh</th>
                                    <th scope="col">Số cmnd</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{this.state.data2.name}</th>
                                    <td>
                                        <img
                                            width="300px"
                                            height="200px"
                                            src={this.state.data2.cropped_idcard}
                                            alt="demo"></img>
                                    </td>
                                    <td>
                                        <img height="200px" src={this.state.data2.face} alt="demo"></img>
                                    </td>
                                    <td>{this.state.data2.home}</td>
                                    <td>{this.state.data2.address}</td>
                                    <td>{this.state.data2.dob}</td>
                                    <td>{this.state.data2.id}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <CHARTINFOSS/>
                <div className="container">
                    <div
                        className="row"
                        style={{
                        marginTop: '30px'
                    }}>
                        <div className="col-md-12 ">
                            <Agen/>
                        </div>
                    </div>

                    <div
                        className="row"
                        style={{
                        marginTop: '30px'
                    }}>
                        <div className="col-md-12 ">
                            <DiaPhuong/>
                        </div>
                    </div>

                </div>
                <ThongBaoCapCaoCo
                    KetquaPhantran={() => this.KetquaPhantran()}/>
                <Search2 luutruduieu2={(dl) => this.luutruduieu(dl)}/>
                <KOOBAY dulieukiemtim={ketqua}/>

            </div>
					</>
        );
    }
}

export default FormInForVsEdit;