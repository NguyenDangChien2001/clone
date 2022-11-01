import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";

function UserBox() {
  const [user, setUser] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const userId = sessionStorage.getItem("id");
  const useSDT = sessionStorage.getItem("phone");

  useEffect(() => {
    if (userId !== null) {
      fetch(`http://localhost:3001/user/${userId}`)
        .then((res) => res.json())
        .then((user) => {
          setUser(`${user[0].LastName} ${user[0].FirstName}`);
          setPhoneNumber(`${user[0].PhoneNumber}`);
        });
    }
  }, [userId]);

  useEffect(() => {
    if (useSDT !== null) {
      fetch(`http://localhost:3001/phone/${useSDT}`)
        .then((res) => res.json())
        .then((user) => {
          setUser(`${user[0].LastName} ${user[0].FirstName}`);
          setPhoneNumber(`${user[0].PhoneNumber}`);
        });
    }
  }, [useSDT]);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="UserName">Tên người dùng</Form.Label>
        <Form.Control id="UserName" placeholder={user} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="UserPhoneNumber">Số điện thoại</Form.Label>
        <Form.Control id="UserPhoneNumber" placeholder={phoneNumber} />
      </Form.Group>
      <Button variant="dark">Cập nhật thông tin người dùng</Button>
    </Form>
  );
}

export default UserBox;
