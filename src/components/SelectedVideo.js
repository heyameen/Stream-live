import React, {Component} from "react";
import "../sass/App.scss"
import youtubeApi from "../APIs/youtube";



class SelectedVideo extends Component  {
    state= {
        relatedVideos: []
    };


    onSearch = async (input) => {


        const response = await youtubeApi.get('/search', {
            params: {
                q: input,
                relatedToVideoId: this.props.location.state.id.videoId
            }
        });

        this.setState({relatedVideos: response.data.items});
        console.log(this.state.relatedVideos);

    };

    componentDidMount() {
        this.onSearch();
    }

    render(){
        const { state } = this.props.location;
        const videoLink = `https://www.youtube.com/embed/${state.id.videoId}`;
        return (
            <div className="renderVideo">
                <iframe className="video" src={videoLink}/>

                <div >
                    {
                        this.state.relatedVideos.map(video => {
                            return (
                                <div className="relatedVideo">
                                    <img src={video.snippet.thumbnails.medium.url} alt=""/>
                                    <h2>{video.snippet.title}</h2>
                                    <h4>sub decsription</h4>
                                    <p className="video-item__thumbnail-p">{video.snippet.description}</p>

                                </div>
                            );
                    })
                }

                </div>
            </div>

        )
    }


};


export default SelectedVideo;