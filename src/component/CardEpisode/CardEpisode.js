import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function CardEpisode(props) {
  const idMovie = props.data.idMovie;
  const tap = props.data.tap;

  return (
    <Col>
      <Card variant="dark">
        <Link to={`/movie/${idMovie}/${tap}`}>
          <Card.Img variant="top" src={props.data.image} />
        </Link>

        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>{props.data.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardEpisode;
