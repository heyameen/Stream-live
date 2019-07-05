import React, {Component} from "react";
import "../sass/App.scss"
import youtubeApi from "../APIs/youtube";



class SelectedVideo extends Component  {
    state= {
        relatedVideos: [],
        input: "",
        currentVideoId: this.props.location.state.id.videoId
    };

    onInputChange = (e) => {
        this.setState({input: e.target.value})
    };


    onFormSubmit = (e) => {

        e.preventDefault();
        this.props.onFormSubmit(this.state.input);

    };

    playRelatedVideo = (video) => {
        this.setState({currentVideoId: video})
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

        const videoLink = `https://www.youtube.com/embed/${this.state.currentVideoId}`;
        return (
            <div>
                <div className="videos-header">

                    <h3 className="videos-header__logo">Stream Live</h3>


                    <form className="videos-header__form" onSubmit={this.onFormSubmit}>
                        <input type="text"
                               onChange={this.onInputChange}
                               value={this.state.input}
                               className="videos-header__input"/>
                    </form>

                </div>

                <div className="renderVideo">
                    <iframe className="video" src={videoLink}/>

                    <div className="flex">
                        {
                            this.state.relatedVideos.map(video => {
                                return (
                                    <div className="relatedVideo" onClick={() => {this.playRelatedVideo(video.id.videoId)}}>
                                        <img className='relatedVideo__image' src={video.snippet.thumbnails.medium.url} alt=""/>
                                        <div className="relatedVideo__text-block">
                                        <h2>{video.snippet.title}</h2>
                                        <h4 className="video-item__thumbnail-p">{video.snippet.channelTitle}</h4>
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>


        )
    }


};


export default SelectedVideo;