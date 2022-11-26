import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("ndc10012001@gmail.com");
  const [Password, setPassword] = useState("dangchien");
  const [res, setRes] = useState("");
  const data = { Email: Email, Password: Password };

  function handleLogin(data) {
    fetch("http://localhost:3001/handleLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setRes(data.message);
        if (data.status === "success") {
          navigate("/");
        }
      });
  }

  return (
    <div className="bg-light container-md p-5">
      <Form>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail" text="red">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" onClick={() => handleLogin(data)}>
          Submit
        </Button>
        <Form.Text className="text-muted">{res}</Form.Text>
      </Form>
    </div>
  );
}

export default Login;
