import CarouselMyList from "../../component/CarouselMyList";
import { Container } from "react-bootstrap";

function MyList() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {sessionStorage.length > 0 && <CarouselMyList />}
      {sessionStorage.length === 0 && (
        <Container fluid="md">
          <h3 className="mt-5 pt-5 text-light">
            Đăng nhập để thực hiện chức năng này
          </h3>
        </Container>
      )}
    </div>
  );
}

export default MyList;
