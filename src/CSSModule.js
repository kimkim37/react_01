import React from 'react';
import styles from './CSSModule.module.css';
//<span className="something">CSS Module</span>
const CSSModule = () => {
    return (
        <div className="wrapper"> 안녕하세요, 저는<span className={`${styles.something}`}>CSS Module</span>
        </div>
    );
};

export default CSSModule;

// <div className="wrapper">
// <div className={`${styles.wrapper}`}>

