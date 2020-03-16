import React, { Component } from 'react';
import './VaSa.css';

class VaSa extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '000'
        });
        this.input.focus();
    }

    keyy = (e) => {
        if (e.key === 'Enter') {      //Enter을 누르면 작동
            this.handleButtonClick();       //위 조건이 성립되면 handleClick에있는 소스 동작
        }
    }

    render() {
        return (
            <div>
                <input ref={(ref) => this.input = ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    onKeyPress={this.keyy} />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default VaSa;
