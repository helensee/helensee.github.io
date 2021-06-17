import { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

class Experience extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.background_color }}>
        <Container style={{ padding: this.props.padding, margin: this.props.margin }} >
          <Row>
            <Col><h2>Work Experience</h2></Col>
          </Row>
          <br />
          <Row>
            <Col>ViacomCBS</Col>
            <Col>Software Engineer</Col>
            <Col>October 2018 - Present</Col>
          </Row>
          <Row>
            <Col>Description</Col>
          </Row>

          <Row>
            <Col><br /><br /></Col>
          </Row>

          <Row>
            <Col>ViacomCBS</Col>
            <Col>Associate Software Engineer</Col>
            <Col>October 2016 - October 2018</Col>
          </Row>
          <Row>
            <Col>Description Pending</Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>

          <Row>
            <Col><br /><br /></Col>
          </Row>
          
          <Row>
            <Col>UAA/SA Information Technology Services</Col>
            <Col>Software Developer</Col>
            <Col>June 2014 – May 2016</Col>
          </Row>
          <Row>
            <Col>Description Pending</Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          
          <Row>
            <Col><br /><br /></Col>
          </Row>
          
          <Row>
            <Col>iconectiv</Col>
            <Col>Software Developer</Col>
            <Col>May 2015 – Aug. 2015</Col>
          </Row>
          <Row>
            <Col>Description Pending</Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          
          
        </Container>

      </div>
    );
  }
}

export default Experience;
