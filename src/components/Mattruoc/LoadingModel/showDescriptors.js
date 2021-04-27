import React, {Component} from 'react';

class ShowDescriptors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptors: null
        };
    }

    componentDidMount() {
			this.update();
		}
		

    componentWillReceiveProps(newProps) {
        this.update(newProps);
    }
    componentDidMount() {
        this
            .props
            .giatrihato(this.state.descriptors);
    }

    update = (props = this.props) => {
        let {fullDesc} = props;
        if (!!fullDesc) {
            this.setState({
                descriptors: fullDesc.map(fd => fd.descriptor)
            });
        }
    };

    render() {
        return (
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center'
            }}></div>
        );
    }
}

export default ShowDescriptors;
