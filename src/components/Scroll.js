// i am going to learn children component in react

import React from 'react';
const Scroll = (props) => {

    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
              { props.children}
        </div>

    )
}
export default Scroll