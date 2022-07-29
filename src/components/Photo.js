import React from 'react';

//stateless component
//match index.html
const Photo = (props) => (
    <li>
        <img src={props.url} alt="" />
    </li>
);

export default Photo;