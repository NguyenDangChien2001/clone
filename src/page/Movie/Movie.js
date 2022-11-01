import MovieBox from "../../component/MovieBox";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ListEpisode from "../../component/ListEpisode";

function Movie(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/episode/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  return (
    <div>
      <MovieBox />
      <ListEpisode data={data} />
    </div>
  );
}

export default Movie;
