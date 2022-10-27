import { Button } from "react-bootstrap";

function CustomButton(props) {
  return (
    <Button
      className={`me-3 btn btn-${props.color} `}
      style={{ fontSize: "1.2vw" }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default CustomButton;
