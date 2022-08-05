import React from 'react';

//stateless component
//match index.html
const Photo = (props) => {
// const Photo = (photo) => (
    console.log(props.url);
    return (    
        <li>
            <img src={props.url} alt="" />
            {/* <img src=`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg` alt="" /> */}
        </li>
    );
}

export default Photo;