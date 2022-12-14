import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import ListEpisode from "../ListEpisode";
import CustomButton from "../CustomButton";

function ModalBox(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [res, setRes] = useState("Thêm vào danh sách yêu thích");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/episode/${props.id}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, [props.id]);

  const data = {
    idMovie: props.id,
    idUser: sessionStorage.getItem("id"),
  };

  function handleAddToList() {
    fetch(`http://localhost:3001/list/${data.idUser}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setRes(data.message);
      });
  }

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
              <source
                src={require("../../asset/video/" + props.video + ".mp4")}
              />
            </video>

            <div
              className="position-absolute top-0 d-flex align-items-end h-100"
              style={{ width: "40%" }}
            >
              <Container className="container-md text-light">
                <div className="w-100 text-light">
                  <img
                    src={require("../../asset/image/logo/" +
                      props.image +
                      ".webp")}
                    alt="logo"
                    className="w-100"
                  />
                  <p className="mt-3" style={{ fontSize: "1.2vw" }}>
                    {props.text}
                  </p>
                  <div className="mt-3">
                    <Link to={"/movie/" + props.id + "/1"}>
                      <CustomButton color="light">
                        <FontAwesomeIcon icon={faPlay} />
                        <span className="ms-3">Phát</span>
                      </CustomButton>
                    </Link>
                    {sessionStorage.length > 0 && (
                      <CustomButton
                        color="dark"
                        onClick={() => handleAddToList()}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="ms-3">{`${res}`}</span>
                      </CustomButton>
                    )}
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
                {/* <span>Cast:</span>
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
                </p> */}
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
            <div className="text-dark">
              <ListEpisode data={datas} />
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBox;
