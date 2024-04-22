import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiTldkORhvaH4b9_Utv_uXz8dx7ShECpVdHK4ThSvDg&s"
          alt="profile"
        />
      </Col>
      <Col lg={10}>
        <div>{item?.name}</div>
        <div>{item?.phoneNum}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
