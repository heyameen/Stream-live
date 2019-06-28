import React, {Component} from "react";
import Loader from 'react-loader-spinner'
import VideoItem from './VideoItem'
import "../sass/App.scss"
import {NavLink} from "react-router-dom";


class VideoList extends Component {


    state = {
        input: this.props.onSearch,
        data: this.props.searchData,
        loader: true,
        selectedVideo: {}
    };


    onInputChange = (e) => {
        this.setState({input: e.target.value})
    };


    onFormSubmit = (e) => {

        e.preventDefault();
        this.props.onFormSubmit(this.state.input);

    };

    onVideoSelect = (i) => {
       /* this.setState({selectedVideo: i});*/
        this.props.history.push({
            pathname:'video',
            state: i
        });
        console.log(i);
    };



    render() {

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


                {this.state.data.length > 0 ? (this.state.data.map( video=> {

                    return (

                            <div onClick={() => {this.onVideoSelect(video)}}>
                                <VideoItem video={video}/>
                            </div>

                        );

                })) : <Loader type="ThreeDots" color="#somecolor" height={80} width={80}/>}


            </div>
        )
    }

};


export default VideoList;