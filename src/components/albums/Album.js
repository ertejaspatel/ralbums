import React from 'react';

const Album = (props) =>{
    return (<div className="album" data-testid="album">
        <div className="image"><img src="http://placekitten.com/260/200" alt="Album" /></div>
        <div className="content">            
            <h5 className="title">
                <a href={`/albums/${props.album.id}/photos`} >{props.album.title}</a>
            </h5>
            <h6 className="author">{props.user ? props.user.name : ""}</h6>            
        </div>
    </div>)
}

export default Album;