import React, {useState, useMemo, useCallback, useRef} from 'react'

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if(numbers.length === 0) return 0;
    const ssum = numbers.reduce((a, b) => a+b);
    return ssum / numbers.length;
};

const Average = () => {
    const [lt, setlt] = useState([]);
    const [num, setnum] = useState('');
    const inputEl = useRef(null);  // 버튼을 누른후 포커스가 인풋안으로

    const cg = useCallback(e => {setnum(e.target.value);}, []); // 컴포넌트가 처음 렌더링될 때만 함수생성
    const insert = useCallback(() => {
        const nextlist = lt.concat(parseInt(num));
        setlt(nextlist);
        setnum('');
        inputEl.current.focus();   // 버튼을 누른후 포커스가 인풋안으로
    }, [num, lt]);               // num혹은 lt가 바뀌었을떄만 함수생성

    const avg = useMemo(() => getAverage(lt), [lt]);  // 함수형 컴포넌트 내부에서 발생하는 연산 최적화

    return(
        <div>
            <input value={num} onChange={cg} ref={inputEl} /> 
            <button onClick={insert}>등록</button>
            <ul>
                {lt.map((value, index)=>(<li key={index}>{value}</li>))}
            </ul>
        <div>
        <b>평균값:</b> {avg}
        </div>
        </div>
    );      //평균값:</b> {getAverage(lt)} ->  평균값:</b> {avg}, 함수형 컴포넌트 내부에서 발생하는 연산 최적화
    

};

export default Average;