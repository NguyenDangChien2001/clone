import Carousel from "react-bootstrap/Carousel";
import CustomCard from "../CustomCard/CustomCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../CustomButton";
import { useState, useEffect } from "react";

function CustomCarousel() {
  const [datas, setDatas] = useState([]);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("");

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
    fetch(`http://localhost:3001/movie/${type}`)
      .then((res) => res.json())
      .then((datas) => {
        var result = chunkArray(datas, 6);
        setDatas(result);
      });
  }, [type]);

  useEffect(() => {
    fetch("http://localhost:3001/type")
      .then((res) => res.json())
      .then((types) => {
        setTypes(types);
      });
  }, []);

  return (
    <div className="mb-5">
      <Container fluid="md" className="text-light py-3">
        {types.map((type, index) => (
          <CustomButton
            key={type.id}
            color={"light"}
            onClick={() => {
              setType(type.id);
            }}
          >
            {type.name}
          </CustomButton>
        ))}
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
