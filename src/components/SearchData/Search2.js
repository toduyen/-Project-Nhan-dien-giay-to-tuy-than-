import React, {Component} from 'react';

class Search2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    IsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        console.log(this.state.search);
        this
            .props
            .luutruduieu2(this.state.search);
    }

    render() {
        return (
            <div className="form-group">
                <div className="btn-group d-flex justify-content-start">
                    <input
                        type="text"
                        name="search"
                        onChange={(event) => this.IsChange(event)}
                        style={{
                        width: '900px'
                    }}
                        className="form-control"
                        aria-describedby="helpId"
                        placeholder="Nhập từ khóa"/>
                    <span className="input-group-text" id="basic-addon2">Tìm kiếm thông tin để thay đổi hoặc xóa</span>
                    <div
                        className="btn btn-info"
                        onClick={(dl) => this.props.luutruduieu2(this.state.search)}>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search2;