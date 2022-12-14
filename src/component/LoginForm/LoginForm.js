import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserBox from "../UserBox";

function LoginForm() {
  const [form, setForm] = useState(() => {
    if (sessionStorage.length > 0) {
      return "user";
    }
    return "Login";
  });

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("none");

  const [users, setUsers] = useState([]);

  const data = {
    LastName: null,
    FirstName: null,
    Email: email,
    Password: password,
    PhoneNumber: null,
    CreationDate: null,
    LastUpdate: null,
  };

  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  function Register(data) {
    const validate = users.some((user) => user.Email === data.Email);

    if (password === confirmPassword && validate === false) {
      fetch("http://localhost:3001/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((datas) => {
          setForm("Login");
          setError("success");
        });
    }

    if (password === confirmPassword && validate === true) {
      setError("available");
    }

    if (password !== confirmPassword) {
      setError("error");
    }
  }

  function Login(data) {
    const loginSuccess = users.some(
      (user) => user.Email === data.Email && user.Password === data.Password
    );

    if (loginSuccess === true) {
      setError("");
      users.forEach((user) => {
        if (user.Email === data.Email && user.Password === data.Password) {
          sessionStorage.setItem("id", user.id);
          setForm("user");
        }
      });
    } else {
      setError("loginFail");
    }
  }

  return (
    <div>
      {form === "Login" && (
        <Form>
          {error === "success" && (
            <Form.Group className="mb-3">
              <Form.Control placeholder="????ng k?? th??nh c??ng" disabled />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          {error === "loginFail" && (
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Email ho???c m???t kh???u kh??ng ????ng"
                disabled
              />
            </Form.Group>
          )}
          <Button variant="dark" onClick={() => Login(data)}>
            ????ng nh???p
          </Button>
          <Button variant="dark" onClick={() => setForm("Register")}>
            ????ng k??
          </Button>
        </Form>
      )}

      {form === "Register" && (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Group>
          {error === "error" && (
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="M???t kh???u v?? m???t kh???u x??c minh kh??ng kh???p"
                disabled
              />
            </Form.Group>
          )}
          {error === "available" && (
            <Form.Group className="mb-3">
              <Form.Control placeholder="Email ???? t???n t???i" disabled />
            </Form.Group>
          )}
          <Button variant="dark" onClick={() => Register(data)}>
            ????ng k??
          </Button>
        </Form>
      )}
      {form === "user" && <UserBox />}
    </div>
  );
}

export default LoginForm;
