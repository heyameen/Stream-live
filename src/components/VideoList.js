import React, {Component} from "react";
import Loader from 'react-loader-spinner'
import VideoItem from './VideoItem'
import "../sass/App.scss"


class VideoList extends Component {


    state = {
        input: this.props.onSearch,
        data: this.props.searchData,
        loader: true
    };



    onInputChange = (e) => {
        this.setState({input: e.target.value})
    };


    onFormSubmit = (e) => {

        e.preventDefault();
        this.props.onFormSubmit(this.state.input);

    };

    render() {

        console.log (this.state.data);
        return (
            <div>
                <div className="videos-header">

                    <h3 className="videos-header__logo">Stream Live</h3>

                    <div className="videos-header__form">
                        <form onSubmit={this.onFormSubmit}>
                            <input type="text"
                                   onChange={this.onInputChange}
                                   value={this.state.input}
                                   className="videos-header__input"/>
                        </form>
                    </div>

                </div>


                {this.state.data.length > 0 ? (this.state.data.map(video => {

                    return (

                        <VideoItem video={video}/>);

                })) : <Loader type="ThreeDots" color="#somecolor" height={80} width={80}/>}


            </div>
        )
    }

};


export default VideoList;