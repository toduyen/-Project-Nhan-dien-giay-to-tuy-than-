import React, {Component} from 'react';
import DataLanguageTextAudio from './DataLanguageTextAudio';
import {firebasetwo} from '../../../Firebase/firebaseconnectio';
class DataLanguage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
		componentDidMount() {
			firebasetwo.on('value', (datas) => {
				var Arrat = [];
				datas.forEach(element => {
						const key = element.key;
						const vanbans = element
								.val()
								.vanbans;
						const amthanh = element
								.val()
								.amthanh;
						Arrat.push({key: key, vanbans: vanbans, amthanh: amthanh})
				});
				this.setState({data: Arrat})
		})
		}
		
    ShowData = () => {
        if (this.state.data) {
            return this
                .state
                .data
                .map((value, key) => {
                    return <DataLanguageTextAudio
                        key={key}
                        stt={key++}
                        save={value}
                        vanbans={value.vanbans}
                        amthanh={value.amthanh}/>
                })
        }
    }

    render() {
        return (
            <div className="mt-4">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Text</th>
                            <th scope="col">Audio</th>
                            <th scope="col">length</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ShowData()}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default DataLanguage;