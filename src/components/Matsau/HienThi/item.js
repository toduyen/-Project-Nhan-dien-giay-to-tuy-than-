import React, {Component} from 'react';

class itemback extends Component {
    render() {
        return (
            <div>
                <div className="col">
                    <div className="card text-left">
                        <div className="card-body">
                            {this.props.dulieushh.cropped_idcard && <img
                                className="card-img-top"
                                width="120px"
                                src={this.props.dulieushh.cropped_idcard}
                                alt="demo"/>}
                            {this.props.dulieushh && <img className="card-img-top" width="120px" src={this.props.dulieushh} alt=""/>}
                        </div>
                        <div className="card-body">
                            <div
                                className="card-body"
                                style={{
                                paddingTop: '0px'
                            }}>
                                {this.props.dulieushh.ethnicity && <h5
                                    className="card-title color_mana mb-20"
                                    style={{
                                    marginBottom: '23px'
                                }}>Dân tộc : {this.props.dulieushh.ethnicity}</h5>}
                                {this.props.dulieushh.religion && <h5
                                    className="card-title color_mana mb-20"
                                    style={{
                                    marginBottom: '23px'
                                }}>Tôn giáo : {this.props.dulieushh.religion}</h5>}
                                {this.props.dulieushh.issue_date && <h5
                                    className="card-title color_mana mb-20"
                                    style={{
                                    marginBottom: '23px'
                                }}>Ngày cấp : {this.props.dulieushh.issue_date}</h5>}
                                {this.props.dulieushh.issue_loc && <h5
                                    className="card-title color_mana mb-20"
                                    style={{
                                    marginBottom: '23px'
                                }}>Nơi cấp : {this.props.dulieushh.issue_loc}</h5>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default itemback;