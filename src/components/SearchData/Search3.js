import React, {Component} from 'react';

class Search3 extends Component {

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
                        width: '1200px'
                    }}
                        className="form-control"
                        aria-describedby="helpId"
                        placeholder="Nhập từ khóa"/>
                    <span className="input-group-text" id="basic-addon2">Tìm người để kích hoạt</span>
                    <button
                        type="button"
                        className="btn btn-warning right"
                        onClick={(dl) => this.props.luutruduieu2(this.state.search)}>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Search3;