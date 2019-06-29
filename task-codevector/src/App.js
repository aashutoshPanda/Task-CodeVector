import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Card from "./components/Card/cardsUI";
import Carousel from "./components/Carousel/Carousel";

const img_url_demo =
  "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg";
class App extends Component {
  state = {
    sideDrawerOpen: false,
    query: "",
    filtered_array: [],
    style_for_carousel: {}
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  searchText = event => {
    this.setState({
      query: event.target.value
    });
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      isLoading: true,
      tv_shows: []
    });

    fetch("https://www.episodate.com/api/most-popular?page=1")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.tv_shows.map(tv_show => ({
          name: `${tv_show.name}`,
          id: `${tv_show.id}`,
          image_thumbnail_path: `${tv_show.image_thumbnail_path}`
        }))
      )
      .then(tv_shows =>
        this.setState({
          tv_shows,
          isLoading: false
        })
      )
      .catch(error => console.log("parsing failed", error));
  }

  render() {
    if (this.state.query == "") {
      this.state.style_for_carousel = { display: "block" };
    } else {
      this.state.style_for_carousel = { display: "none" };
    }
    let backdrop;
    this.state.filtered_array = this.state.tv_shows.filter(show => {
      return (
        show.name.toLowerCase().indexOf(this.state.query.toLowerCase()) != -1
      );
    });

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <nav>
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            search_fun={this.searchText}
          />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </nav>
        <main style={{ marginTop: "64px" }}>
          <div
            className="carousel-container"
            style={this.state.style_for_carousel}
          >
            <div className="top-shows-heading">
              <h2>POPULAR SHOWS</h2>
            </div>
            <Carousel />
          </div>

          <div className="top-shows-heading">
            <h2>
              {this.state.query == ""
                ? "TOP PICKS FOR YOU"
                : " HERE'S WHAT WE GOT FOR YOU"}
            </h2>
          </div>
          <div className="gradient-wrapper">
            {this.state.filtered_array.length == 0 ? (
              <div
                className="show-container"
                style={{
                  backgroundImage:
                    'url("https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              ></div>
            ) : (
              <div className="show-container">
                {this.state.filtered_array.map(tv_show => {
                  return (
                    <Card
                      title={tv_show.name}
                      img_url={tv_show.image_thumbnail_path}
                      id={tv_show.id}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
