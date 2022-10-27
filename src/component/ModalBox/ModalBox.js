import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CustomButton from "../CustomButton";

function ModalBox(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CustomButton color="dark" onClick={handleShow}>
        {props.children}
      </CustomButton>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="bg-black px-0">
          <div className="position-relative">
            <video autoPlay muted className="w-100">
              <source src={props.video} />
            </video>

            <div
              className="position-absolute top-0 d-flex align-items-end h-100"
              style={{ width: "40%" }}
            >
              <Container className="container-md text-light">
                <div className="w-100 text-light">
                  <img src={props.image} alt="logo" className="w-100" />
                  <p className="mt-3" style={{ fontSize: "1.2vw" }}>
                    {props.text}
                  </p>
                  <div className="mt-3">
                    <CustomButton color="light">
                      <FontAwesomeIcon icon={faPlay} />
                      <span className="ms-3">Play</span>
                    </CustomButton>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Container className="container-md text-light">
            <Row>
              <Col sm={8} className="text-light">
                {props.description}
              </Col>
              <Col sm={4} className="text-light">
                <span>Cast:</span>
                <p>
                  {props.cast.map((eachCast, index) => (
                    <span key={index}>{eachCast}</span>
                  ))}
                </p>
                <span>Genres:</span>
                <p>
                  {props.genres.map((eachCast, index) => (
                    <span key={index}>{eachCast}</span>
                  ))}
                </p>
                <span>This Show Is:</span>
                <p>
                  {props.thisShowIs.map((eachCast, index) => (
                    <span key={index}>{eachCast}</span>
                  ))}
                </p>
              </Col>
            </Row>
            <Row style={{ fontSize: "2rem" }}>
              <Col sm={6}>Tap</Col>
              <Col sm={6} className="text-end">
                {props.title}
              </Col>
            </Row>
            <div>
              <div></div>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBox;
