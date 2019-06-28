import React, { Component } from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import Dropdown from "../Dropdown/Dropdown";
import data_dropDown from "../Dropdown/data.js";

class toolbar extends Component {
  constructor() {
    super();
    this.state = {
      location: data_dropDown.location,
      network: data_dropDown.network,
    };
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp
    });
  };

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => (item.selected = false));
    temp[id].selected = true;
    this.setState({
      [key]: temp
    });
  };

  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="toolbar__logo">
            <a href="/">vPLAY</a>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search Now !"
          />
          <div className="spacer" />
          <div className="toolbar_navigation-items"></div>
          <div className="wrapper">
          
            <Dropdown
              title="Select Network"
              list={this.state.network}
              resetThenSet={this.resetThenSet}
            />            
            <Dropdown
              title="Select Country"
              list={this.state.location}
              resetThenSet={this.resetThenSet}
            />

          </div>
          
        </nav>
      </header>
    );
  }
}

export default toolbar;
