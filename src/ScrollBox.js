import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollToBottom = () => {
        // 비구조화 할당 문법
        // const scrollHeight = this.box.scrollHeight
        // const clientHeight = this.box.clientHeight
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight; // 스크롤바를 맨 아래쪽으로 내린다.
        // scrollTop: 세로 스크롤바 위치(0~350)
        // scrollHeight: 스크롤 박스 내부의 높이(650)
        // clientheight: 스크롤 박스 외부의 높이(300)
    }
    
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gredient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}
            >
                <div style={innerStyle}></div>  
            </div>
        );
    }
}

export default ScrollBox;