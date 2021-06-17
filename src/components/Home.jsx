import { Component } from 'react';

import CustomNav from './CustomNav.jsx';
import About from './About.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';

class Home extends Component {
  state = {
    margin:"0 0 0 220px",
    padding:"50px 180px 50px 180px"
  }
  render(){
    return (
      <div className="Home">
        <header></header>
        <div class="customNav"><CustomNav></CustomNav></div>
        <div id="about">
            <About background_color="white" margin={this.state.margin} padding={this.state.padding}></About>
            </div>
        <div id="projects">
          <Projects background_color="#E8E8E8" margin={this.state.margin} padding={this.state.padding}></Projects>
        </div>
        <div id="resume">
        <Resume background_color="white" margin={this.state.margin} padding={this.state.padding}></Resume>
        </div>
      </div>
    );
  }
}

export default Home;
