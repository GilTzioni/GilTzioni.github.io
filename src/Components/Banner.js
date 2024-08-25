import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import  './Banner.css';
import allText from '../Data/allText.json'
import bg from "../assets/img/bg-video.mp4";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ allText.banner.skill1, allText.banner.skill2, allText.banner.skill3, allText.banner.skill4 ];
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText.length === 1) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      } 
    
    return (
        <div className="bannerd">   
           <div className="overlay"></div>

        <section className="banner" id="home">
          
            <Container className="container">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        
                            <span className="tagline">{allText.banner.title}</span>
                            <h1>{``} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "special effects makeup artist", "hairdresser", "Beauty make-up artist" ]'></span><span className="wrap">{text}</span></h1>
                            <p>{allText.banner.about}</p>
                            <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                {/* <TrackVisibility>
                {({ isVisible }) => */}
                    {/* <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                    {/* <img src={headerImg} alt="Header Img"/> */}
                    <video autoPlay loop muted 
          style={{
            // position: "absolute",
            width: "68%",
            // right: "50%",
            marginLeft: "30%",
            marginTop: "5%",
            height:"40%",
            // objectFit: "container",
            // transform: "translate(-50%, -50%)",
            borderRadius: "20px"
            // zIndex: "-1"

          }}>
            <source src={bg}  type="video/mp4"/>
          </video>
                    {/* </div>}
                </TrackVisibility> */}
            </Col>
                </Row>
            </Container>
        </section>
        </div>
        )
    }

export default Banner