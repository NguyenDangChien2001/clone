import { useState } from "react";
import Card from "react-bootstrap/Card";

import ModalBox from "../ModalBox";

function CustomCard(props) {
  const [hide, setHide] = useState(true);

  return (
    <div
      onMouseOver={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
      onClick={() => setHide(true)}
    >
      <ModalBox
        id={props.data.id}
        video={props.data.trailer}
        image={props.data.logo}
        description={props.data.description}
        title={props.data.title}
        cast={props.data.cast}
        genres={props.data.genres}
        thisShowIs={props.data.thisShowIs}
      >
        <Card
          style={{ border: "dark" }}
          className="card border-dark bg-dark text-light"
        >
          {hide && (
            <Card.Img
              variant="top"
              src={require("../../asset/image/" + props.data.image + ".jpg")}
              role="button"
            />
          )}
          {!hide && (
            <video autoPlay className="w-100">
              <source
                src={require("../../asset/video/" +
                  props.data.trailer +
                  ".mp4")}
                type="video/mp4"
              />
            </video>
          )}
        </Card>
      </ModalBox>
    </div>
  );
}

export default CustomCard;
