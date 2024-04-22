import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const changeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_BY_USERNAME",
      payload: { keyword },
    });
  };
  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={changeKeyword}
          />
        </Col>
        <Col lg={2}>
          <Button>찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
