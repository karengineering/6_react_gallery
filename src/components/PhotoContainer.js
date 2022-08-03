
import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => {
    const results = props.data;
    console.log(results);
    let photos;

    if (results.length > 0) {
        photos = results.map(photo => <Photo key={photo.id} url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} /> );
        // photos = results.map(photo => { <Photo key={photo.id} url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} /> });
        // photos = results.map(photo => { <Photo  url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} /> });
        console.log(photos);
    } else {
        photos = <NotFound />
    }
    
    return (
        <div className="photo-container">
            <h2>Results</h2>
                <ul>
                    {photos}
                </ul>
        </div>
    )
}

export default PhotoContainer;