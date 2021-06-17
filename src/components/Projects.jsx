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
          <br />
          <Row>
            <Col>
              <h3 id="python-pipeline">Python Data Pipeline</h3>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor:"white"}}>
              <Row>
                <Col>
                  <a href="imgs/sketches-python-pipeline-1.png" target="_blank" rel="noopener noreferrer">
                    <img style={{ maxWidth:"400px", maxHeight:"300px" }} alt="py-1" src="imgs/sketches-python-pipeline-1.png"/>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col><br /></Col>
              </Row>
              <Row>
                <Col>
                  <a href="imgs/sketches-python-pipeline-2.png" target="_blank" rel="noopener noreferrer">
                    <img style={{ maxWidth:"400px", maxHeight:"300px" }} alt="py-2" src="imgs/sketches-python-pipeline-2.png"/>
                  </a>    
                </Col>
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
                of recommendations to end users. Using databricks, python grabs specific external 
                data from a publicly available graphDB and saving into an internal graphDB. 
                Then later, the content is accessed and modified to include feature vectors, located in S3, and 
                image urls, access from an external API. That is then placed into ElasticSearch. There is 
                additional code for reindexing or updating fields for the purpose of testing.</Col>
              </Row>
            </Col>
          </Row>
          <br />
          { /***********************************************************************/}
          <br />
          <Row>
            <Col>
              <h3 id="flask-react-app">Flask and React App</h3>
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor:"white"}}>
              <Row>
                <Col>
                  <a href="imgs/sketches-react-app-1.png" target="_blank" rel="noopener noreferrer">
                    <img style={{ display:"block", margin:"auto", maxWidth:"300px", maxHeight:"300px" }} alt="react-1" src="imgs/sketches-react-app-1.png"/>
                  </a>
                </Col>
              </Row>
              <Col><br /></Col>
              <Row>
                <Col>
                  <a href="imgs/sample-react-app.png" target="_blank" rel="noopener noreferrer">
                    <img style={{ maxWidth:"400px", maxHeight:"400px" }} alt="react-2" src="imgs/sample-react-app.png"/>
                  </a>
                </Col>
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
                <Col><br /></Col>
              </Row>
              <Row>
                <Col><h3>Description</h3></Col>
              </Row>
              <Row>
                <Col>Sample of a content item page with an overview. Below, the item has rows of different
                machine learning model's recommendations. Up to 15 recommendations per row. The feature
                vectors are provided internally. ElasticSearch provides content item details, the distance 
                function for the feature vectors, and autosuggest on titles in the searchbar.
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          { /***********************************************************************/}
          <br />
        
        </Container>

      </div>
    );
  }
}

export default Projects;
