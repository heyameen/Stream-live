import React, {Component} from "react";
import "../sass/App.scss"



class VideoItem extends Component  {

    state= {
        selectedVideo: []
    };




    render()  {

        return (

            <div className="video-item" onClick={this.props.onClick}>

                <div>
                    <img className="video-item__img" src={this.props.video.snippet.thumbnails.medium.url}/>
                </div>

                <div className="video-item__thumbnail">
                    <h2>{this.props.video.snippet.title}</h2>
                    <h4>sub decsription</h4>
                    <p className="video-item__thumbnail-p">{this.props.video.snippet.description}</p>
                </div>
            </div>
        )

    }

}



export default VideoItem;