import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import LoginForm from "../LoginForm";
import LoginOTP from "../LoginOTP";

function LoginBox(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        {props.children}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {form === "" && (
            <div className="d-grid gap-2">
              <Button
                variant="dark"
                size="lg"
                onClick={() => setForm("OTPForm")}
              >
                Đăng nhập số điện thoại
              </Button>
              <Button
                variant="dark"
                size="lg"
                onClick={() => setForm("LoginForm")}
              >
                Đăng nhập tài khoản Netflix
              </Button>
            </div>
          )}
          {form === "OTPForm" && <LoginOTP />}
          {form === "LoginForm" && <LoginForm />}
        </Modal.Body>
        {form === "LoginForm" && (
          <Modal.Footer>
            <Button
              variant="dark"
              onClick={() => {
                setForm("");
                sessionStorage.clear();
              }}
            >
              Quay lại
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </div>
  );
}

export default LoginBox;
