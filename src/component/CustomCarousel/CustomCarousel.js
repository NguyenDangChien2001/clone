import Carousel from "react-bootstrap/Carousel";
import CustomCard from "../CustomCard/CustomCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CustomCarousel(props) {
  const datas = props.data;

  return (
    <div className="mb-5">
      <Container fluid="md" className="text-light">
        <p>{props.type}</p>
      </Container>

      <Carousel variant="light" pause="hover" indicators={false}>
        {datas.map((data, index) => (
          <Carousel.Item key={index}>
            <Container fluid="md" className="d-flex">
              <Row>
                {data.map((eachData, index) => (
                  <Col xs={6} md={4} key={index}>
                    <CustomCard data={eachData} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
