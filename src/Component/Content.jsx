import React, { useState, useRef, useEffect } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import "../Style/Content.css";
import { AiOutlineRight, AiOutlineLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion } from 'framer-motion'

function Content() {
  const [slide, setSlide] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setSlide(carousel.current.scrollWidth)
  },[])

  return (
    <div>
      <Container className="p-5" fluid>
        <Row>
          <Col lg={4}>
            <Image
              className="w-100"
              src="https://i.pinimg.com/originals/e4/98/3f/e4983f28436a4d3f34e755ea57c6be6b.png"
            ></Image>
          </Col>
          <Col lg={8} className="p-5 d-flex flex-column justify-content-center">
            <p className="Heading">Our website</p>
            <p className="fs-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              exercitationem amet error quo magni vitae architecto officiis
              fugit natus aperiam!
            </p>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="text-start p-5 bg-dark text-white Picture-layout"
      >
        <p className="display-2">Forest type</p>
        <button className="arrow left">
          <AiOutlineLeft />
        </button>
        <button className="arrow right">
          <AiOutlineRight />
        </button>
        <motion.div ref={carousel} className="Pic-container">
          <motion.div drag="x" dragConstraints={{right: 0, left: -1300}} className="slide-layout">
            <Row className="PictureBox">
              <Col>
                <div className="border border-2 picContain">
                  <div className="inside">
                    <p className="display-6">Forest</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="border border-2 picContain">
                  <div className="inside">
                    <p className="display-5">Forest</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="border border-2 picContain">
                  <div className="inside">
                    <p className="display-5">Forest</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="border border-2 picContain">
                  <div className="inside">
                    <p className="display-5">Forest</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="border border-2 picContain">
                  <div className="inside">
                    <p className="display-5">Forest</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="border border-2 picContain">
                  <div className="inside">
                    <p className="display-5">Forest</p>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </motion.div>
      </Container>

      <Container className="mt-5 text-start">
        <p className="display-2">Lorem</p>
        <Row className="content-3 mt-5">
          <Col lg={4}>
            <Image src="https://cdn-icons-png.flaticon.com/512/1598/1598431.png"></Image>
            <p className="fs-4 mt-5">save the world</p>
          </Col>
          <Col lg={4}>
            <Image src="https://cdn-icons.flaticon.com/png/512/3124/premium/3124523.png?token=exp=1655045679~hmac=dd3493b8001c4be5b46356ad43946fe3"></Image>
            <p className="fs-4 mt-5">save the world</p>
          </Col>
          <Col lg={4}>
            <Image src="https://cdn-icons.flaticon.com/png/512/4396/premium/4396420.png?token=exp=1655045679~hmac=6331ce4b9d392cc9fdefcee5ecd76c78"></Image>
            <p className="fs-4 mt-5">save the world</p>
          </Col>
        </Row>
      </Container>

      <Container className="registing">
        <p className="fs-1">Registing Member</p>
        <Image src="https://cdn-icons.flaticon.com/png/512/1357/premium/1357616.png?token=exp=1655046164~hmac=61f130fd4fd432ca1411d85c9bc3bf64"></Image>
        <br />
        <Button variant="success">Go to membership now <AiOutlineArrowRight /></Button>
      </Container>
    </div>
  );
}

export default Content;
