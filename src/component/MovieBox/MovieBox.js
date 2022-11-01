import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieBox() {
  const { id, episode } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/episode/${id}/${episode}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0].link);
      });
  }, [id, episode]);

  return (
    <iframe
      src={data}
      width="100%"
      height="600px"
      allow="autoplay"
      title="arcane"
      allowFullScreen
    ></iframe>
  );
}

export default MovieBox;
