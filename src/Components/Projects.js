import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { TabProjects } from "./TabProjects";
// import 'react-multi-carousel/lib/styles.css';
import  './Projects.css';
import allText from '../Data/allText.json';

// import TrackVisibility from 'react-on-screen';

// import TrackVisibility from 'react-on-screen';

export const Projects = () => {

   
    
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}> */}
                <h2>Projects</h2>
                <p>Here you can see some of my works</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">{allText.projects.tab1}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{allText.projects.tab2}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">{allText.projects.tab3}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className= "animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                    {/* <div className="skill-bx "> */}
                        {/* <div className="item"> */}
                        <TabProjects />

                        {/* </div> */}
                        {/* <TabProjects /> */}
                        {/* </div> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <TabProjects />
                        <TabProjects />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <TabProjects />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              {/* </div>} */}
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}