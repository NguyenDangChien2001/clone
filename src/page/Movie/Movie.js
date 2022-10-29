import ModalBox from "../../component/ModalBox";
import { useParams } from "react-router-dom";

function Movie(props) {
  let { id } = useParams();
  console.log(id);
  return <div></div>;
}

export default Movie;
