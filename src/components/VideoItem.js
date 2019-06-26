import React from "react";
import "../sass/App.scss"



const VideoItem = ({video}) => {

    return (

        <div className="video-item">

            <div >
                <img className="video-item__img" src={video.snippet.thumbnails.medium.url}/>
            </div>

            <div className="video-item__thumbnail">
                <h2>{video.snippet.title}</h2>
                <h4>sub decsription</h4>
                <p className="video-item__thumbnail-p">{video.snippet.description}</p>
            </div>
        </div>
    )

};


export default VideoItem