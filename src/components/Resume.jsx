import Container from 'react-bootstrap/Container'
import { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.background_color }}>
        <Container style={{ padding: this.props.padding, margin: this.props.margin }} >
          <h1>Resume</h1>
          <embed src="Helen_See_Resume.pdf" type="application/pdf" width="100%" height="600px" />
        </Container>

      </div>
    );
  }
}

export default Resume;
