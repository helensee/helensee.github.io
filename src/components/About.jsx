import Container from 'react-bootstrap/Container'
import { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.background_color}}>
        <Container style={{ padding: this.props.padding, margin: this.props.margin }}>
          <h1>About Me</h1>
          <p>Hello! My name is Helen. I am a full-time software developer. 
            I got a Bachelor in Science for Computer Science at Rutgers University - New 
            Brunswick 2016. Still a work in progress.</p>
        </Container>
      </div>
    );
  }
}

export default About;
