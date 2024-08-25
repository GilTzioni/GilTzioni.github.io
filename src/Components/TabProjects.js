import { Container, Row, Col, Tab, Nav, CardImg, Button } from "react-bootstrap";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './Projects.css';
import Image from 'react-bootstrap/Image';
import GalleryImg from "./GalleryImg";
import headerImg from "../assets/img/header-img.svg";
import BgImg from "../assets/img/bg-img.svg";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";

import { ProjectCard } from "./ProjectCard";
import  './TabProjects.css'
// import TrackVisibility from 'react-on-screen';
function MydModalWithGrid(props) {
  return (
    <Modal {...props} className="my-modal"
    contentClassName="transparentBgClass"
    show={props.show}
    onHide={props.onHide}
    animation={false}
    size="lg"
    // fullscreen
    style={{ zIndex: 9999}}>
        
      <Modal.Header closeButton>
          {/* <Modal.Title className="contained-modal-title-vcenter" >
            Custom Modal Header
          </Modal.Title> */}
        </Modal.Header>
        <Row style={{ marginTop: 20, marginLeft: 20, marginRight: 20}}>
          {/* <Col xs={4}> */}
          
             <GalleryImg/>
             <GalleryImg/>
             <GalleryImg/>
          
        </Row>

        <Row
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <GalleryImg/>
             <GalleryImg/>
             <GalleryImg/>
          
        </Row>
        <Row
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <GalleryImg/>
             <GalleryImg/>
             <GalleryImg/>
          
         
        </Row>
        </Modal>
  );
}

const imagess= [headerImg,headerImg,headerImg];
export const TabProjects = () => {

     const [modalShow, setModalShow] = useState(false);

  return (
    <>
   <Container className="skill-bx ">
      <Row>
        
     <Col xs={6} md={6} lg={6}> 
     <div className="imgCard" onClick={() =>setModalShow(true)} >

    <div  className="proj-imgbx">
    <div className="overlay" ></div>
   
      <Image src={BgImg}  rounded/>

      <div className="proj-txtx">
        <h1>photoes</h1>
        <span>click to see</span>
      </div>
 </div> 

    </div>
    
   </Col>
   <Col xs={6} md={6} lg={6}> 
     <div className="imgCard" onClick={() =>setModalShow(true)} >

    <div  className="proj-imgbx">
    <div className="overlay" ></div>
   
      <Image src={BgImg}  rounded/>

      <div className="proj-txtx">
        <h1>photoes</h1>
        <span>click to see</span>
      </div>
 </div> 

    </div>
    
   </Col>
   </Row>
    </Container>
  

       <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      

       </>





  )
}