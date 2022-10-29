import Carousel from "react-bootstrap/Carousel";
import CustomCard from "../CustomCard/CustomCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

function CustomCarousel() {
  const [datas, setDatas] = useState([]);

  function chunkArray(myArray, chunk_size) {
    var index = 0;
    const arrayLength = myArray.length;
    const tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  useEffect(() => {
    fetch("http://localhost:3001/movie")
      .then((res) => res.json())
      .then((datas) => {
        var result = chunkArray(datas, 6);
        setDatas(result);
      });
  }, []);

  return (
    <div className="mb-5">
      <Container fluid="md" className="text-light">
        <p>{datas.type}</p>
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
