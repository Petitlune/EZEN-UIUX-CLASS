import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
  height: 100px;
  min-width: 980px;
  align-items: center;
  background: #fff;
`;
const Logo = styled.img`
  width: 150px;
  height: auto;
`;
const RightMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Search = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 50px;
  input {
    width: 280px;
    height: 40px;
    border: 2px solid rebeccapurple;
    border-radius: 5px;
    padding: 0 10px;
    &:focus {
      outline: none;
    }
  }
  img {
    cursor: pointer;
  }
`;
const MenuBar = styled.div`
  display: flex;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    &:first-child {
      position: relative;
    }
    img {
      width: 32px;
      height: auto;
    }
    span {
      font-size: 14px;
    }
  }
`;
const CartNum = styled.div`
  position: absolute;
  top: -8px;
  right: -4px;
  p {
    display: inline-block;
    width: 22px;
    height: 22px;
    font-size: 13px;
    line-height: 22px;
    text-align: center;
    background: crimson;
    border-radius: 100%;
    color: #fff;
  }
`;
const Head = ({ cart }) => {
  return (
    <Header>
      <Link to="/">
        <Logo src="/images/logo.png" alt="logo" />
      </Link>
      <RightMenu>
        <Search>
          <input type="text" placeholder="상품을 검색하세요" />
          <img src="/images/icon-search.svg" alt="search" />
        </Search>
        <MenuBar>
          <Link to="/cart">
            <div>
              <img src="/images/icon-shopping-cart.svg" alt="cart" />
              <span>장바구니</span>
              {cart.length >= 1 ? (
                <CartNum>
                  <p>{cart.length}</p>
                </CartNum>
              ) : (
                ""
              )}
            </div>
          </Link>
          <Link to="#">
            <div>
              <img src="/images/icon-user.svg" alt="user" />
              <span>로그인</span>
            </div>
          </Link>
        </MenuBar>
      </RightMenu>
    </Header>
  );
};

export default Head;
