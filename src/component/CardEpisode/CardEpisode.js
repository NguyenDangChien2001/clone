import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState } from "react";

function CardEpisode(props) {
  const idMovie = props.data.idMovie;
  const tap = props.data.tap;
  const [isShown, setIsShown] = useState(false);

  return (
    <Col>
      <Card
        variant="dark"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <Link to={`/movie/${idMovie}/${tap}`}>
          {!isShown && <Card.Img variant="top" src="holder.js/100px160" />}
        </Link>
        {isShown && (
          <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Text>{props.data.description}</Card.Text>
          </Card.Body>
        )}
      </Card>
    </Col>
  );
}

export default CardEpisode;
