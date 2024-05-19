import React from "react";
import styled from "styled-components";

const InnerText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: 600;
  color: #444;
`;
const Groom = styled.span`
  display: flex;
  gap: 8px;
  color: #88e5f9;
`;

const Celebration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    color: #777;
  }
  span {
    border: 1px solid #999;
    border-radius: 5px;
    padding: 8px;
    margin: 0 24px;
    cursor: pointer;
  }
`;

const InnerContent = ({ title, name, bank }) => {
  return (
    <InnerText>
      <Groom>
        {title} <p>{name}</p>
      </Groom>
      <Celebration>
        <p>{bank}</p>
        <span>계좌번호 복사</span>
      </Celebration>
    </InnerText>
  );
};

export default InnerContent;
