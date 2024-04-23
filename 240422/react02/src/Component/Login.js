import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const trueok = useSelector((state) => state.auth.authenticate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(trueok);
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };
  const changeEmail = (e) => {
    setId(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={changeEmail}
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
            onChange={changePassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
