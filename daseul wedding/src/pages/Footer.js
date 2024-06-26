import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f8a4a4;
  height: 100px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;
const Text = styled.div`
  color: #fff;
  font-style: italic;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 200;
  margin-top: 40px;
`;
const Reserved = styled.div`
  color: #666;
  font-size: 8px;
  font-weight: 200;
  font-style: italic;
  font-family: "Inter";
`;

const Footer = () => {
  return (
    <Container>
      <Text>Gihwan & Daseul's Wedding Invitation Letter</Text>
      <Reserved>
        ©Copyright 2024 Daseul’s friend Yiseul - All Rights Reserved
      </Reserved>
    </Container>
  );
};

export default Footer;
