import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

import CardEpisode from "../CardEpisode/CardEpisode";

function ListEpisode(props) {
  return (
    <Container fluid="lg">
      <Row xs={2} sm={3} md={4} className="g-4">
        {props.data.map((item, index) => (
          <CardEpisode key={index} data={item} />
        ))}
      </Row>
    </Container>
  );
}

export default ListEpisode;
