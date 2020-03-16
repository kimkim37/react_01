import React from 'react';
import PropsTypes from 'prop-types';

const MyComponent = props => {
    const { name, children } = props
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다<br />
                children 값은 {children}입니다<br />
        </div>
    );
}

MyComponent.defaultProps = {
    name: '꽝',
    children: '광'
};

export default MyComponent;