import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  border-radius: 8px;
  width: 100%;
  min-width: 980px;
  padding: 20px 100px;
  span {
    width: 150px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
  }
`;

const CustomLabel = styled.label`
  position: relative;
  width: 16px;
  height: 16px;
  border: 2px solid rebeccapurple;
  border-radius: 100%;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    background: rebeccapurple;
    border-radius: 100%;
    opacity: 0;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${CustomLabel}::before {
    opacity: 1;
  }
`;

const CartHeader = ({ allChecked, isAllChecked }) => {
  return (
    <Container>
      <HiddenCheckbox
        onChange={(e) => allChecked(e.currentTarget.checked)}
        id="basket"
        checked={isAllChecked}
      />
      <CustomLabel htmlFor="basket" />
      <span>상품정보</span>
      <span>수량</span>
      <span>상품금액</span>
      {/* <p>전체선택</p> */}
    </Container>
  );
};

export default CartHeader;
