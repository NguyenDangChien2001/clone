import ModalBox from "../../component/ModalBox";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Lander() {
  const [status, setStatus] = useState(false);

  return (
    <div style={{ height: "100hv" }}>
      <button>Click</button>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Lander;
