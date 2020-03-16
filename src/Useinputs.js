import {UseReducer} from 'react';

function reducer(state, action) {
    return {
        ...state, [action.nm]: action.value
    };
}

export default function Useinputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {dispatch(e.target);};
    return[state, onChange];
}