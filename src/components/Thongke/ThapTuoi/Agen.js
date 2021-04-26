import React, {Component} from 'react';
import {firebaseDemo} from '../../../Firebase/firebaseconnectio';
class Agen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data24: [],
            data34: [],
            data44: [],
            data54: [],
            data64: [],
            datasun: []
        };
    }

    YearGetNew = () => {
        return new Date().getFullYear();
    }

    componentWillMount() {





			let ghinhandata = firebaseDemo;
			ghinhandata.on('value', (snapshort) => {
				var Mang = [];
				var Mang24 = [];
				var Mang34 = [];
				var Mang44 = [];
				var Mang54 = [];
				var Mang64 = [];
				var Sun = [];
					snapshort.forEach((element) => {
							ghinhandata
									.child(element.key)
									.child('DataCard')
									.on('value', (datas) => {
											datas.forEach((elementChinhThuc) => {
												const key = elementChinhThuc.key;
												const dob = elementChinhThuc
														.val()
														.dob;
												const demso = this.YearGetNew() - dob.slice(-4);
												if (demso <= 24) {
														Mang.push({key: key, dob: demso})
												}
												if ((demso) <= 34 && (demso) >= 24) {
														Mang24.push({key: key, dob: demso})
												}
												if ((demso) <= 44 && (demso) >= 34) {
														Mang34.push({key: key, dob: demso})
												}
												if ((demso) <= 54 && (demso) >= 44) {
														Mang44.push({key: key, dob: demso})
												}
												if ((demso) <= 64 && (demso) >= 54) {
														Mang54.push({key: key, dob: demso})
												}
												if ((demso) >= 64) {
														Mang64.push({key: key, dob: demso})
												}
												Sun.push({key: key})
											});
									});
					})
				  this.setState({
						data: Mang,
						data24: Mang24,
						data34: Mang34,
						data44: Mang44,
						data54: Mang54,
						data64: Mang64,
						datasun: Sun
				});
			})
    }

    phantich = () => {
        let tongthe = this.state.datasun.length;
        let thuctai = this.state.data.length;
        return Math.ceil((thuctai / tongthe) * 100);
    }

    Phantich2 = () => {
        let tongthe = this.state.datasun.length;
        let thuctai = this.state.data24.length;
        return Math.ceil((thuctai / tongthe) * 100)
    }

    Phantich3 = () => {
        let tongthe = this.state.datasun.length;
        let thuctai = this.state.data34.length;
        return Math.ceil((thuctai / tongthe) * 100)
    }

    Phantich4 = () => {
        let tongthe = this.state.datasun.length;
        let thuctai = this.state.data44.length;
        return Math.ceil((thuctai / tongthe) * 100)
    }

    Phantich5 = () => {
        let tongthe = this.state.datasun.length;
        let thuctai = this.state.data54.length;
        return Math.ceil((thuctai / tongthe) * 100)
    }

    Phantich6 = () => {
        let tongthe = this.state.datasun.length;
        let thuctai = this.state.data64.length;
        return Math.ceil((thuctai / tongthe) * 100)
    }

    danhgia = () => {
        let thuctai1 = this.state.data.length;
        let thuctai2 = this.state.data24.length;
        let thuctai3 = this.state.data34.length;
        let thuctai4 = this.state.data44.length;
        let thuctai5 = this.state.data54.length;
        let thuctai6 = this.state.data64.length;
        if (thuctai1 + thuctai2 > thuctai3 + thuctai4) {
            return (
                <div className="alert alert-secondary" role="alert">
                    Dân số trong khu vực bạn là dân số trẻ :
                    <a href="/" className="alert-link">{thuctai1 + thuctai2}
                        Human</a>. Hãy tiếp tục theo dõi !.
                </div>
            )
        } else if (thuctai1 + thuctai2 < thuctai3 + thuctai4) {
            return (
                <div className="alert alert-primary" role="alert">
                    Dân số trong khu vực bạn là dân số trong độ tuổi lao động :
                    <a href="/" className="alert-link">{thuctai3 + thuctai4}
                        Human</a>. Hãy tiếp tục theo dõi !.
                </div>
            )
        } else if (thuctai5 + thuctai6 > thuctai4 + thuctai3) {
            return (
                <div className="alert alert-dark" role="alert">
                    Dân số trong khu vực bạn là dân số già:
                    <a href="/" className="alert-link">{thuctai5 + thuctai6}
                        Human</a>. Hãy tiếp tục theo dõi !.
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                <div className="text-uppercase">
                    <h1>Tháp tuổi</h1>
                    <small className="ash">Thống kê độ tuổi</small><br/>
                </div>
                <dl>
                    <dd className={"percentage percentage-" + this.phantich()}>
                        <span
                            className="text"
                            style={{
                            color: 'black'
                        }}>14 - 24</span>
                    </dd>
                    <dd className={"percentage percentage-" + this.Phantich2()}>
                        <span
                            className="text"
                            style={{
                            color: 'black'
                        }}>24 - 34</span>
                    </dd>
                    <dd className={"percentage percentage-" + this.Phantich3()}>
                        <span
                            className="text"
                            style={{
                            color: 'black'
                        }}>34 - 44</span>
                    </dd>
                    <dd className={"percentage percentage-" + this.Phantich4()}>
                        <span
                            className="text"
                            style={{
                            color: 'black'
                        }}>44 - 54</span>
                    </dd>
                    <dd className={"percentage percentage-" + this.Phantich5()}>
                        <span
                            className="text"
                            style={{
                            color: 'black'
                        }}>54 - 64</span>
                    </dd>
                    <dd className={"percentage percentage-" + this.Phantich6()}>
                        <span
                            className="text"
                            style={{
                            color: 'black'
                        }}>64 - C</span>
                    </dd>

                </dl>
                <div className="col-12 d-flex justify-content-center">
                    {this.danhgia()}
                </div>
            </div>
        );
    }
}

export default Agen;