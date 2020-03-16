import React, {useState} from 'react';

const Count = () => {
    const [vl,setvl] = useState(0);

    return(
        <div>
            <p>현재 카운터값<b>{vl}</b>입니다.</p>
            <button onClick={()=> setvl(vl+1)}>+</button>
            <button onClick={()=> setvl(vl-1)}>-</button>
            </div>
    );
};

export default CountQueuingStrategy;