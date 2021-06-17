import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function CustomNav() {
    return (
        <div>
            <div style={{ height:"100%", position:"fixed"}}>
                <Navbar
                style={{ 
                    position:"absolute",
                    height:"100%",
                    backgroundColor:"#071C3B", 
                    padding:"0", 
                    justifyContent:"space-between",
                    flexDirection:"column",
                    width: "220px"
                }}
                variant="dark"
            >
                <Navbar.Brand style={{ fontSize:"2em", flexDirection:"column", padding:"20px 0 0 0"}}>Helen See</Navbar.Brand>
                <Nav style={{ 
                    fontSize:"1.5em", 
                    justifyContent:"end", 
                    flexDirection:"column", 
                    padding:"0 0 50px 0"}}>
                    <Nav.Item>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Brand style={{ 
                    fontSize:"1em", 
                    flexDirection:"row", 
                    padding:"0 0 20px 0"}}>
                    <a style={{ color:"white" }} href="https://www.linkedin.com/in/helen-see-02561479" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    &nbsp; &nbsp;
                    <a style={{ color:"white" }} href="https://github.com/helensee" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Navbar.Brand>
            </Navbar>
            </div>
        </div>
    )

}

export default CustomNav;