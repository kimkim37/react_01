import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClick1 = () => setMessage({
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
    }) ;
    const onClick2 = () => setMessage({
        a: 'ㄱ',
        b: 'ㄴ',
        c: 'ㄷ',
        d: 'ㄹ'
    }) ;
    return (
        <div>
            <button onClick={onClick1}>공과대학</button>
            <button onClick={onClick2}>인문대학</button>
            <h1>{message.a}</h1>
            <h1>{message.b}</h1>
            <h1>{message.c}</h1>
            <h1>{message.d}</h1>
        </div>
    );
};
export default Say;