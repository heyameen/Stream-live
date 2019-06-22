import React, {Component} from "react";
import "../sass/App.scss"


class VideoList extends Component {


    state = {
        input: (this.props.onSearch) ? this.props.onSearch : "",
        data: []
    };


    onInputChange = (e) => {
        this.setState({input: e.target.value})
    };


    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.input);
    };

    render(){
        return (
            <div>
                <div className="videos-header">

                    <h3 className="videos-header__logo">Stream Live</h3>

                    <form onSubmit={this.onFormSubmit}>
                    <input type="text"
                           onChange={this.onInputChange}
                           value={this.state.input}
                           className="videos-header__input"/>
                    </form>

                </div>

               {/* <div className="loader">
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
                </div>*/}


            </div>
        )
    }

};


export default VideoList;