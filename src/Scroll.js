import React, {Component} from 'react';

class Scroll extends Component{

    scrollToBottom = () => {
        const{ scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const st = {
            border: '1px solid blue',  //테두리
            height: '300px',     // 세로창 크기
            width: '300px',      // 가로창 크기
            overflow: 'auto',
            position : 'relative'
        };

        const inSt = {
            width: '100%',  // 세로창 비율
            height: '650px',  //가로창 비율
            background: 'linear-gradient(green, black)'   // 그라데이션 색
        }

        return(
            <div
                style={st}
                ref={(ref)=>{this.box=ref}}>
            <div style={inSt}/>        
            </div>
        );
    }
}

export default Scroll;