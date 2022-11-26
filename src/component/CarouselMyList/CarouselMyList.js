import CustomCard from "../CustomCard/CustomCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CarouselMyList() {
  const [datas, setDatas] = useState([]);
  const [id, setId] = useState(() => {
    if (sessionStorage.length > 0) {
      return sessionStorage.getItem("id");
    }
    return "";
  });

  useEffect(() => {
    fetch(`http://localhost:3001/list/${id}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, [id]);

  return (
    <div className="mt-5">
      <Container fluid="md" className="d-flex">
        <h3 className="mt-5 text-light">Danh sách phim của bạn</h3>
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

export default CarouselMyList;
