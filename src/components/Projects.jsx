import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.background_color }}>
        <Container style={{ padding: this.props.padding, margin: this.props.margin }} >
          <h1>Projects</h1>
          <p>Some diagrams and explanations of some project/work that I have done.</p>
          { /***********************************************************************/}
          <Row>
            <Col>
              <h3>Python Data Pipeline</h3>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor:"white"}}>
              <Row>
                <Col><img style={{ maxWidth:"400px", maxHeight:"300px" }} alt="py-1" src="imgs/sketches-python-pipeline-1.png"/></Col>
              </Row>
              <Row>
                <Col><img style={{ maxWidth:"400px", maxHeight:"300px" }} alt="py-2" src="imgs/sketches-python-pipeline-2.png"/></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col><h3>Tech</h3></Col>
              </Row>
              <Row>
                <Col>Python, Databricks, Sparkql, GraphDB, S3, ElasticSearch(OpenDistro)</Col>
              </Row>
              <Row>
                <Col><br /><h3>Description</h3></Col>
              </Row>
              <Row>
                <Col>Main purpose is to use external data as test data and to showcase different types 
                of recommendations to end users. This python data pipeline focuses on grabbing specific external 
                data from a publicaly available graphDB and saving into the team's internal graphDB. 
                Then later, the content is accessed and modified to include feature vectors, located in S3, and 
                image urls, access from an external API. That is then placed into ElasticSearch. There is also
                additional code for reindexing or updating fields for the purpose of testing.</Col>
              </Row>
            </Col>
          </Row>
          <br />
          { /***********************************************************************/}
          <Row>
            <Col>
              <h3>Flask and React App</h3>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor:"white"}}>
              <Row>
                <Col><img style={{ maxWidth:"400px", maxHeight:"300px" }} alt="react-1" src="imgs/sketches-data-dashboard-1.png"/></Col>
              </Row>
              <Row>
                <Col><img style={{ maxWidth:"400px", maxHeight:"300px" }} src=""/></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col><h3>Tech</h3></Col>
              </Row>
              <Row>
                <Col>Docker, Flask, Python, Reactjs, Javascript, HTML, CSS, ElasticSearch</Col>
              </Row>
              <Row>
                <Col><h3>Description</h3></Col>
              </Row>
              <Row>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          { /***********************************************************************/}
        
        </Container>

      </div>
    );
  }
}

export default Projects;
