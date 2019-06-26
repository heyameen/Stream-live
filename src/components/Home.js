import React, {Component} from "react";
import "../sass/App.scss";



class Home extends Component {
    state = {
        inputText: ""
    };

    onInputChange = (e) => {
        this.setState({
            inputText: e.target.value
        })

    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.inputText);

    };

    render() {
        return (

            <div className="App">
                <div className="Title">
                    <h1 className="Title__logo"> Stream Live </h1>
                    <p className="Title__info"> Search for videos that you're interested in </p>
                </div>

                <div className="searchBox">

                    <form onSubmit={this.onFormSubmit}>
                        <input
                            type="text"
                            value={this.state.inputText}
                            className="searchBox__input"
                            onChange={this.onInputChange}/>
                    </form>

                </div>
            </div>


        )

    }

}

export default Home