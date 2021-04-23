import React, {Component} from 'react';

class PhanTich extends Component {
    ShowLoa = () => {
        if (this.props.ketquaphantich === "N/A") {
            return (
                <h4 className="card-title">Chứng minh nhân dân</h4>
            )
        } else {
            return (
                <h4 className="card-title">Căn cước công dân</h4>
            )
        }
    }
    render() {
        return (
            <div>
                {this.ShowLoa()}
            </div>
        )
    }
}

export default PhanTich;