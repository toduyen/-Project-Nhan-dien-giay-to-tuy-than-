import React, {Component} from 'react';
import PhanTich from './Form/Title';
import Buttonform from './DeleteAndEditModal';

class dulieutimkiemformthongke extends Component {
    render() {
        return (
            <div>
                {this
                    .props
                    .dulieukiemtim
                    .map((value, key) => {

                        return (
                            <div className="card " key={key}>
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link collapsed floatleff"
                                            data-toggle="collapse"
                                            data-target={'#collapseTwo' + value.key}
                                            aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            {value.name}<span>
                                                --
                                            </span>
                                            <span>{value.id}</span>
                                        </button>
                                    </h5>
                                    <Buttonform thongtincaptinh={value}/>
                                </div>
                                <div
                                    id={'collapseTwo' + value.key}
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion">
                                    <div className="card-body">
                                        <div className="card bg-dark text-white">
                                            <img
                                                className="card-img"
                                                style={{
                                                width: '500px'
                                            }}
                                                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c66569873141.560dba0578d41.png"
                                                alt="Cardimage"/>
                                            <div className="card-img-overlay floatreight">
                                                <PhanTich ketquaphantich={value.doe}/> {value.name && <p className="card-text">Họ tên :
                                                    <span>{value.name}</span>
                                                </p>}
                                                {value.id && <p className="card-text">Số cmnd :
                                                    <span>{value.id}</span>
                                                </p>}
                                                {value.home && <p className="card-text">Nguyên quán :
                                                    <span>{value.home}</span>
                                                </p>}
                                                {value.address && <p className="card-text">Nơi đăng ký :
                                                    <span>{value.address}</span>
                                                </p>}
                                                {value.dob && <p className="card-text">Ngày sinh :
                                                    <span>{value.dob}</span>
                                                </p>}
                                                {value.ethnicity && <p className="card-text">Dân tộc :
                                                    <span>{value.ethnicity}</span>
                                                </p>}
                                                {value.tonhiao && <p className="card-text">Tôn giáo :
                                                    <span>{value.tonhiao}</span>
                                                </p>}
                                                {value.ngayhethan && <p className="card-text">Ngày cấp :
                                                    <span>{value.ngayhethan}</span>
                                                </p>}
                                                {value.noicap && <p className="card-text">Nơi cấp :
                                                    <span>{value.noicap}</span>
                                                </p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
}
                <div></div>
            </div>
        )
    }
}

export default dulieutimkiemformthongke;