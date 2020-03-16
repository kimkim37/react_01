import React from 'react';
import Useinputs from './UseInputs';

const Info = () => {
 const[state, onChange] = Useinputs({nm: '', ninm: ''});
 const{nm, ninm} = state;

 return(
     <div>
         <div>
             <input name="nm" value={nm} onChange={onChange} />
             <input name="ninm" value={ninm} onChange={onChange} />
         </div>
         <div>
             <div>
             <b>이름: </b>{nm}
         </div>
         <div>
             <b>닉네임: </b>{ninm}
         </div>
     </div>
     </div>
 );
 

};

export default Info;