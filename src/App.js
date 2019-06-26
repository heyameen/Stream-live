import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Route from "react-router-dom/Route";
import youtubeApi from "./APIs/youtube"
import './sass/App.scss'

//Internal component
import Home from "./components/Home";
import VideoList from "./components/VideoList";
import VideoItem from "./components/VideoItem";


class App extends Component {

    state = {
        data:[],
        searchTerm:" "
     };



    onSearch = async (input) => {


        const response = await youtubeApi.get('/search', {
            params: {
                q: input
            }
        });

        this.setState({data: response.data.items, searchTerm: input});

        console.log(this.state.searchTerm);
        console.log(this.state.data);

        this.props.history.push("/videos")

    };


    componentDidMount() {

    }




    render() {

        return (

                <div>

                    <Route path="/" exact strict component={ () => <Home onFormSubmit={this.onSearch} />} />
                    <Route path="/videos" component={(props) => <VideoList onSearch={this.state.searchTerm}
                                                                        searchData = {this.state.data}
                                                                        onFormSubmit = {this.onSearch}{...props}/>}/>
                    {/*<Route  path="/videos" component={ () => <VideoList onSearch = {this.state.searchTerm}/>} />*/}
                    <Route path="/video" component={VideoItem}/>

                </div>

        );
    }

}

export default withRouter(App);
