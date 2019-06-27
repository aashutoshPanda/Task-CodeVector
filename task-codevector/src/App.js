import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Card from './components/Card/cardsUI';
import Carousel from './components/Carousel/Carousel';


const img_url_demo = "https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/23455.jpg";
class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div >
      <nav>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </nav>
        <main style={{marginTop: '64px'}}>
          <div className="top-shows-heading">
              <h2 >POPULAR SHOWS</h2>
          </div>          
          <Carousel/>
          <div className="top-shows-heading">
              <h2 >TOP PICKS FOR YOU</h2>
          </div>
          <div className="gradient-wrapper" >
            <div className="show-container">
              <Card title="GOT" img_url={img_url_demo} para="lorem ipsum" />
              <Card title="GOT" img_url={img_url_demo} para="lorem ipsum" />
              <Card title="GOT" img_url={img_url_demo} para="lorem ipsum" />
              <Card title="GOT" img_url={img_url_demo} para="lorem ipsum" />
            </div>
          </div>
        </main>
        
      </div>
    );
  }
}

export default App;
