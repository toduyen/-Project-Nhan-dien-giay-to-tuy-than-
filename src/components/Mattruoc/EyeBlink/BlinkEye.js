import React, {Component} from 'react';
import {connect} from 'react-redux';
var permArr = [],
    usedChars = [];
class BlinkEye extends Component {
    constructor() {
        super();
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 50,
            left: 0,
            right: 0,
            all: 0,
            happy: 0,
            angry: 0,
            audioquytoc: 0,
            quiz1: 0,
            quiz2: 0,
            quiz3: 0,
            quiz4: 0,
            quiz5: 0,
            antiFake: 0,
            tempValueAudio: 0,
						andeTai : false
        }
        this.hoursInput = React.createRef();
        this.minutesInput = React.createRef();
        this.secondsInput = React.createRef();
    }
    convertToSeconds = (hours, minutes, seconds) => {
        return seconds + minutes * 60 + hours * 60 * 60;
    }
    reunderKetQuaExpression = () => {
        let orri = this.props.descriptionFull;
        if (!!orri) {
            let Sorted = Object
                .entries(orri.expressions)
                .sort((prev, next) => prev[1] - next[1]);
            return (Sorted.pop()[0])
        } else {
            return 0;
        }
    }
    permute = (input) => {
        var i,
            ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length === 0) {
                permArr.push(usedChars.slice());
            }
            this.permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    }
    randomNative = () => {
        let arrNew = this.permute([1, 2, 3, 4, 5]);
        return arrNew[Math.floor(Math.random() * arrNew.length)];
    }
    startTimer = () => {
        let x = this.randomNative();
        this.timer = setInterval(this.countDown, 1000);
        this.setState({
            audioquytoc: 1,
            quiz1: x[0],
            quiz2: x[1],
            quiz3: x[2],
            quiz4: x[3],
            quiz5: x[4]
        });
    }
    resetTimer = () => {
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 50,
            left: 0,
            right: 0,
            all: 0,
            happy: 0,
            angry: 0,
            audioquytoc: 0,
            quiz1: 0,
            quiz2: 0,
            quiz3: 0,
            quiz4: 0,
            quiz5: 0,
            antiFake: 0
        });
    }
    countDown = () => {
        const {hours, minutes, seconds} = this.state;
        let c_seconds = this.convertToSeconds(hours, minutes, seconds);
        if (c_seconds) {
            // seconds change
            seconds
                ? this.setState({
                    seconds: seconds - 1
                })
                : this.setState({seconds: 59});
            // minutes change
            if (c_seconds % 60 === 0 && minutes) {
                this.setState({
                    minutes: minutes - 1
                });
            }
            // when only hours entered
            if (!minutes && hours) {
                this.setState({minutes: 59});
            }
            // hours change
            if (c_seconds % 3600 === 0 && hours) {
                this.setState({
                    hours: hours - 1
                });
            }
            //angry
            this.handlingResult(40, this.state.quiz5, this.props.matphai, this.props.mattrai);
            //hanhphuc
            this.handlingResult(30, this.state.quiz4, this.props.matphai, this.props.mattrai);
            //cahai
            this.handlingResult(20, this.state.quiz3, this.props.matphai, this.props.mattrai);
            //phai
            this.handlingResult(10, this.state.quiz2, this.props.matphai, this.props.mattrai);
            //trai
            this.handlingResult(2, this.state.quiz1, this.props.matphai, this.props.mattrai);
            // anti
            this.antiFakeFace(this.state.audioquytoc, this.props.mattrai, this.props.matphai, this.reunderKetQuaExpression(), this.reunderKetQuaExpression());
            // hienthi
            this.updateDataToFileBasr();
        } else {
            clearInterval(this.timer);
        }
    }
    // hien thi ket qua ra ngoai
    handlingResult = (x, quizView, R, L) => {
        if (this.state.seconds === x) {
            switch (quizView) {
                case 1:
                    if ((L < R) && (L < 0.28)) {
                        this.setState({left: 1});
                    }
                    break;
                case 2:
                    if ((L > R) && (R < 0.28)) {
                        this.setState({right: 2});
                    }
                    break;
                case 3:
                    if ((R && L) < 0.27) {
                        this.setState({all: 3});
                    }
                    break;
                case 4:
                    if (this.reunderKetQuaExpression() === 'happy') {
                        this.setState({happy: 4});
                    }
                    break;
                case 5:
                    if (this.reunderKetQuaExpression() === 'angry') {
                        this.setState({angry: 5});
                    }
                    break;
                default:
                    return 0;
            }
        }
    }
    displayResult = (x1) => {
        if (this.state.audioquytoc === 1) {
            let ketquatextview = ``;
            switch (x1) {
                case 1:
                    ketquatextview = `Bạn đã nhắm mắt trái thành công`;
                    break;
                case 2:
                    ketquatextview = `Bạn đã nhắm mắt phải thành công`;
                    break;
                case 3:
                    ketquatextview = `Bạn đã nhắm hai mắt thành công`;
                    break;
                case 4:
                    ketquatextview = `Bạn đã cười thành công`;
                    break;
                case 5:
                    ketquatextview = `Bạn đã tức giận thành công`;
                    break;
                default:
                    return null;
            }
            return (
                <div>
                    <label
                        style={{
                        color: 'green',
                        fontSize: '10px'
                    }}>
                        <span role="img" aria-label="donut">🧐</span>{ketquatextview}</label><br/>
                </div>
            )
        }
    }
    renderBatdau = (quiz) => {
        if (this.state.audioquytoc === 1) {
            let context = ``;
            switch (quiz) {
                case 1:
                    context = `https://media1.vocaroo.com/mp3/1llYdKv4mAWz`;
                    break;
                case 2:
                    context = `https://media1.vocaroo.com/mp3/1g6lmhqsyL38`;
                    break;
                case 3:
                    context = `https://media1.vocaroo.com/mp3/15ETBLolUCq8`;
                    break;
                case 4:
                    context = `https://media1.vocaroo.com/mp3/1gEdr5l0QL8N`;
                    break;
                case 5:
                    context = `https://media1.vocaroo.com/mp3/1eQMOg7g7IAG`;
                    break;
                default:
                    return null;
            }
            return (
                <audio controls autoPlay>
                    <source src={context} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            )
        } else {
            return null;
        }
    }
    renderDisplayAudio2 = (quiz, x1, x2) => {
        if ((this.state.seconds > x1) && (this.state.seconds < x2)) {
            let context = ``;
            switch (quiz) {
                case 1:
                    context = `https://media1.vocaroo.com/mp3/1llYdKv4mAWz`;
                    break;
                case 2:
                    context = `https://media1.vocaroo.com/mp3/1g6lmhqsyL38`;
                    break;
                case 3:
                    context = `https://media1.vocaroo.com/mp3/15ETBLolUCq8`;
                    break;
                case 4:
                    context = `https://media1.vocaroo.com/mp3/1gEdr5l0QL8N`;
                    break;
                case 5:
                    context = `https://media1.vocaroo.com/mp3/1eQMOg7g7IAG`;
                    break;
                default:
                    return null;
            }
            return (
                <audio controls autoPlay>
                    <source src={context} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            )
        }
    }
    renderAudioSuccess = (x1) => {
        if (x1 === 0) {
            return (
                <audio controls autoPlay>
                    <source src="https://media1.vocaroo.com/mp3/1g6IOKfbsEqc" type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            )
        }
    }
    antiFakeFace = (x1, x2, x3, x4, x5) => {
        if (x1 === 1) {
            if ((x2 && x3) === undefined || (x2) === undefined || (x3) === undefined || (x4) === undefined || (x5) === undefined) {
                this.setState({antiFake: 1});
            }
        }
    }
    renderKqChongFake = (anti) => {
        if (anti === 1) {
            return (
                <div>
                    <span className="badge badge-danger">AI phát hiện bạn đã di chuyển một dữ liệu khuôn mặt khác</span>
                </div>
            )
        } else {
            return (
                <div>
                    <span className="badge badge-success">AI phát hiện đầu vào ổn định</span>
                </div>
            )
        }
    }
    updateDataToFileBasr = () => {
        const {left, all, happy, angry, seconds} = this.state;
        if (seconds === 0) {
            if ((left === 1) && (all === 3) && (happy === 4) && (angry === 5)) {
							this.setState({
								andeTai : true
							});
              
            }
        }
    }

		thucThiUpdateDataVsButton = () => {
			let temp = JSON.parse(localStorage.getItem('mahoan'));
			this.props.ThucHIenGetData(temp);
		}

		renderButtonUpdateData = () => {
			if(this.state.andeTai === true)
			{
				return(
					<button type="button" onClick={()=>this.thucThiUpdateDataVsButton()} className="btn mt-4 shadow-lg p-3 mb-5 bg-dark rounded border border-dark text-white"><i className="fas fa-upload"></i></button>
				)
			}
			else
			{
				return null
			}
		}
    render() {
        const {hours, minutes, seconds} = this.state;
        return (
            <div className="App">
                <p>
                    <strong className="setsizeHeader">EYE BLINK...</strong>
                </p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={this.startTimer} className="btn btn-secondary">START</button>
                    <button type="button" onClick={this.resetTimer} className="btn btn-warning">RESET</button>
                </div>
                <h1 className="mt-3">
                    Timer {hours}: {minutes}
                    : {seconds}
                </h1>
                <p>{this.state.quiz5}.{this.state.quiz4}.{this.state.quiz3}.{this.state.quiz2}.{this.state.quiz1}</p>
                {this.displayResult(this.state.angry)
}
                {this.displayResult(this.state.happy)
}
                {this.displayResult(this.state.all)
}
                {this.displayResult(this.state.right)
}
                {this.displayResult(this.state.left)
}
{this.renderButtonUpdateData()}
                <div hidden>
                    {this.renderBatdau(this.state.quiz5)}
                    {this.renderDisplayAudio2(this.state.quiz4, 30, 40)}
                    {this.renderDisplayAudio2(this.state.quiz3, 20, 30)}
                    {this.renderDisplayAudio2(this.state.quiz2, 10, 20)}
                    {this.renderDisplayAudio2(this.state.quiz1, 0, 10)}
                    {this.renderAudioSuccess(this.state.seconds)}
                </div>
                {this.renderKqChongFake(this.state.antiFake)
}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {GetData: state.laydata}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ThucHIenGetData: (getitem) => {
            dispatch({type: 'LAY_DATA', getitem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlinkEye);