import React, {Component} from 'react';
import {firebasetwo} from '../../../../Firebase/firebaseconnectio';
import ShowDataNow from '../LuuData/ShowDataNow';
import CacDataLienQUan from '../LuuData/CacDataLienQUan';
class NewDeltal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentWillMount() {
        firebasetwo.on('value', (datas) => {
            var Mang = [];
            datas.forEach(element => {
                const key = element.key;
                const amthanh = element
                    .val()
                    .amthanh;
                const hashtag = element
                    .val()
                    .hashtag;
                const hinhanh = element
                    .val()
                    .hinhanh;
                const vanbans = element
                    .val()
                    .vanbans;
                Mang.push({key: key, amthanh: amthanh, hashtag: hashtag, hinhanh: hinhanh, vanbans: vanbans})
            });
            this.setState({data: Mang});
        })
    }

    showcascbaiviet = () => {
        if (this.state.data) {
            return this
                .state
                .data
                .map((value, key) => {
                    if (key < 8) {
                        return <CacDataLienQUan
														key={key}
                            amthanh={value.amthanh}
                            hashtag={value.hashtag}
                            stt={key}
                            hinhanh={value.hinhanh}
                            vanbans={value.vanbans}/>
                    }
                    return 0;
                })
        }
    }

    ShowData = () => {
        if (this.state.data) {
            for (const [key,
                value]of Object.entries(this.state.data)) {
                if (this.props.match.params.id === key.toString()) {
                    return (<ShowDataNow
                        amthanh={value.amthanh}
                        hashtag={value.hashtag}
                        hinhanh={value.hinhanh}
                        vanbans={value.vanbans}/>)
                }
            }
        }
    }
    render() {
        return (
            <div>
                {this.ShowData()}
                <h3 className="my-4">Các tài liệu liên quan</h3>
                <div className="row">
                    {this.showcascbaiviet()}
                </div>
            </div>
        );
    }
}

export default NewDeltal;