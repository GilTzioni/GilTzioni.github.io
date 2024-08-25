import React from 'react'
import { Container, Row, Col, Tab, Nav, CardImg, Button } from "react-bootstrap";

import Image from 'react-bootstrap/Image';
import BgImg from "../assets/img/bg-img.svg";
import headerImg from "../assets/img/header-img.svg";
function GalleryImg() {
  return (
    <Col xs={4}>
         
         <Image src={headerImg}  style={{ width: "100%" }} rounded/>
               
                
              
          </Col>
  
  )
}

export default GalleryImg