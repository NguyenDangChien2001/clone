import { useState } from "react";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserBox from "../UserBox";

function LoginOTP() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("INPUT_PHONE_NUMBER");
  const [result, setResult] = useState("");

  const signin = () => {
    if (phoneNumber === "") return;

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    );

    const verify = window.recaptchaVerifier;
    const vnPhoneNumber = `+84 ${phoneNumber}`;
    signInWithPhoneNumber(auth, vnPhoneNumber, verify)
      .then((result) => {
        setResult(result);
        setStep("VERIFY_OTP");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const ValidateOtp = () => {
    if (otp === null) return;

    result
      .confirm(otp)
      .then((result) => {
        setStep("VERIFY_SUCCESS");
        sessionStorage.setItem("phone", phoneNumber);
      })
      .catch((err) => {
        alert("Incorrect code");
      });
  };

  return (
    <Form>
      {step === "INPUT_PHONE_NUMBER" && (
        <div>
          <Form.Group className="mb-3" controlId="formBasicOTP">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              placeholder="VD: 0379166934"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </Form.Group>
          <div id="recaptcha-container"></div>
          <Button variant="dark" onClick={signin}>
            Tiếp tục với SDT
          </Button>
        </div>
      )}

      {step === "VERIFY_OTP" && (
        <div>
          <Form.Group className="mb-3" controlId="formBasicValidate">
            <Form.Label>Nhâp mã OTP</Form.Label>
            <Form.Control
              placeholder="Nhập mã OTP"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="dark" onClick={ValidateOtp}>
            Tiếp tục với SDT
          </Button>
        </div>
      )}

      {step === "VERIFY_SUCCESS" && <UserBox />}

      {step === "VERIFY_FAIL" && <h3>Verify Fail</h3>}
    </Form>
  );
}

export default LoginOTP;
