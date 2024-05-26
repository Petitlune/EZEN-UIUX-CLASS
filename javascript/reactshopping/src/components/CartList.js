import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-width: 980px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  border: 4px solid #eee;
  border-radius: 8px;
  position: relative;
  img:first-child {
    width: 180px;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
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

const ItemDetail = styled.div`
  display: flex;
  gap: 16px;
  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    p:first-child {
      color: #555;
      font-size: 13px;
    }
    p:nth-child(2),
    p:nth-child(3) {
      padding-bottom: 8px;
      font-size: 18px;
      font-weight: 600;
      max-width: 150px;
    }
    p:last-child {
      margin-top: 16px;
      font-size: 14px;
    }
  }
`;
const ItemCount = styled.div`
  margin-right: 80px;
  span {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    border-right: none;
    border-left: none;
    text-align: center;
    line-height: 40px;
    color: #000;
    &:first-child,
    &:last-child {
      color: #555;
      cursor: pointer;
    }
    &:first-child {
      border-left: 1px solid #ddd;
    }
    &:last-child {
      border-right: 1px solid #ddd;
    }
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
  img:last-child {
    width: 24px;
    height: auto;
  }
`;

const Button = styled.button`
  border: none;
  width: 150px;
  height: 40px;
  background: rebeccapurple;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`;

const CartList = ({
  cart,
  priceKR,
  cartItemCount,
  removeItem,
  handleCheckList,
  checkLists,
  setCheckLists,
}) => {
  return (
    <Container>
      <HiddenCheckbox
        onChange={(e) => {
          handleCheckList(e.currentTarget.checked, cart.id);
        }}
        checked={checkLists.includes(cart.id) ? true : false}
        id={cart.id}
      />
      <CustomLabel htmlFor={cart.id} />
      <ItemDetail>
        <div>
          <img src={cart.image} alt="itemImage" />
        </div>

        <div>
          <p>{cart.provider}</p>
          <p>{cart.name}</p>
          <p>{priceKR(cart.price * cart.itemCount)}원</p>
          <p>택배배송 / 무료배송</p>
        </div>
      </ItemDetail>
      <ItemCount>
        <span
          onClick={(e) => cartItemCount(e, cart.id, cart.itemCount - 1)}
          className="minus"
        >
          -
        </span>
        <span>{cart.itemCount}</span>
        <span
          onClick={(e) => cartItemCount(e, cart.id, cart.itemCount + 1)}
          className="plus"
        >
          +
        </span>
      </ItemCount>
      <div>
        <p></p>
        <Button>주문하기</Button>
      </div>
      <CloseBtn onClick={() => removeItem(cart.id)}>
        <img src="images/icon-delete.svg" alt="delete" />
      </CloseBtn>
    </Container>
  );
};

export default CartList;
