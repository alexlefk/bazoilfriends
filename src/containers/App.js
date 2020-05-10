import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./app.css";
import robots from "../robots";
import ErroBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch({ robots })
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <div className="tc">
        <h1> Loading </h1>;{" "}
      </div>
    ) : (
      <div className="tc">
        <h1 className="f2"> Bazoil Friends </h1>{" "}
        <SearchBox searchChange={this.onSearchChange} />{" "}
        <Scroll>
          <ErroBoundry>
            <CardList robots={filteredRobots} />{" "}
          </ErroBoundry>{" "}
        </Scroll>{" "}
      </div>
    );
  }
}

export default App;
