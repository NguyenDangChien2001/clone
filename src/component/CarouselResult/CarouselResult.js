import CustomCard from "../CustomCard/CustomCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CarouselResult() {
  const [datas, setDatas] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/movie/result/${title}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, [title]);

  return (
    <div className="mt-5">
      <Container fluid="md" className="d-flex">
        <h3 className="mt-5 text-light">Kết quả cho: {title}</h3>
      </Container>

      <Container fluid="md" className="d-flex">
        <Row>
          {datas.map((eachData, index) => (
            <Col xs={6} md={4} key={index}>
              <CustomCard data={eachData} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CarouselResult;
