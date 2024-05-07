import React, { Component } from "react";
import "./home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeText: ""
        };
    }

    componentDidMount() {
        const welcomeText = "Welcome!";
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < welcomeText.length) {
                this.setState({ welcomeText: this.state.welcomeText + welcomeText.charAt(index) });
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100); // Adjust the interval duration as needed
    }

    render() {
        return (
            <div className="HomeFULL">
                <div className="HomeInDiv">
                    <h1>{this.state.welcomeText}</h1>
                    <h2>Check out our menu by selecting a dessert!</h2>
                </div>
            </div>
        );
    }
}

export default Home;
