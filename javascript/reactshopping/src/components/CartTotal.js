import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-width: 980px;
  height: 120px;
  background: #eee;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  div {
    text-align: center;
    p:last-child {
      display: inline-block;
      font-weight: 600;
      font-size: 18px;
      margin-top: 8px;
    }
    img {
      background: #fff;
      width: 28px;
      height: 28px;
      padding: 5px;
      border-radius: 100%;
    }
  }
`;
const TotalPrice = styled.div`
  font-size: 28px;
  color: crimson;
`;

const CartTotal = ({ priceKR, cart, total, setTotal, found }) => {
  useEffect(() => {
    if (found) {
      const sum = found.map((item) => item[0].price * item[0].itemCount);
      const reducer = (acc, cur) => acc + cur;
      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [cart, total, setTotal, found]);
  return (
    <Container>
      <div>
        <p>총 상품금액</p>
        <p>{priceKR(total)}</p>
      </div>
      <div>
        <img src="/images/icon-minus-line.svg" alt="minus" />
      </div>
      <div>
        <p>상품 할인</p>
        <p>0원</p>
      </div>
      <div>
        <img src="/images/icon-plus-line.svg" alt="plus" />
      </div>
      <div>
        <p>배송비</p>
        <p>0원</p>
      </div>
      <div>
        <p>결제 예정 금액</p>
        <TotalPrice>{priceKR(total)}</TotalPrice>
      </div>
    </Container>
  );
};

export default CartTotal;
