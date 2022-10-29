import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ModalBox from "../ModalBox";
import CustomButton from "../CustomButton";
import VideoSlideShow from "../VideoSlideShow";

function SlideShow() {
  const [slide, setSlide] = useState([]);
  const [status, setStatus] = useState(false);
  const [width, setWidth] = useState("w-100");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/random")
      .then((res) => res.json())
      .then((slide) => {
        setSlide(slide[0]);
        setStatus(true);
      });
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setWidth("w-50");
      setDescription("d-none");
    }, 5000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="img-fluid position-relative">
      {status && (
        // <video autoPlay className="w-100">
        //   <source
        //     src={require("../../asset/video/" + slide.trailer + ".mp4")}
        //     type="video/mp4"
        //   />
        // </video>
        <VideoSlideShow trailer={slide.trailer} />
      )}
      <Container className="container-md">
        <div
          className="position-absolute top-0 d-flex  h-100 align-items-center"
          style={{ width: "40%" }}
        >
          <div className="w-100 text-light">
            {status && (
              <img
                src={require("../../asset/image/logo/" + slide.logo + ".webp")}
                alt="logo"
                className={`${width}`}
              />
            )}
            <p className={`mt-3 ${description}`} style={{ fontSize: "1.2vw" }}>
              {slide.description}
            </p>
            <div className="mt-3">
              <Link to={"/movie/" + slide.id}>
                <CustomButton color="light">
                  <FontAwesomeIcon icon={faPlay} />
                  <span className="ms-3">Phát</span>
                </CustomButton>
              </Link>

              {status && (
                <ModalBox
                  id={slide.id}
                  video={slide.trailer}
                  image={slide.logo}
                  description={slide.description}
                  title={slide.title}
                  cast={["Nguyen Dang Chien"]}
                  genres={["Nguyen Dang Chien"]}
                  thisShowIs={["Nguyen Dang Chien"]}
                >
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <span className="ms-3">Thông tin chi tiết</span>
                </ModalBox>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SlideShow;
