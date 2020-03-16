import React, { useState } from 'react';

const Test = () => {

const [nm, setnm] = useState([]);
const [inp, sinp] = useState('');
const [nid, setnid] = useState('');

const keyy = e => {
    if (e.key === 'Enter') {
        Click();
    }  
};
const Change = e => sinp(e.target.value);
const Click = () => {
const nn = nm.concat({ id: nid,
                       text: inp
                     });     
              setnid(nid+1);
              setnm(nn);
              sinp('');  
};

const dt = id =>{const nn = nm.filter(name=>name.id !==id);
      setnm(nn);
};

const nmlist = nm.map(name => <li key={name.id} 
                      onDoubleClick={()=> dt(name.id)}>{name.text}</li>); 

return(
    <>
    <input value={inp} 
           onChange={Change}
           onKeyPress={keyy} />
    <button onClick={Click}>추가</button>
    <ul>{nmlist}</ul>
    </>
);
};
export default Test;