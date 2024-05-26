import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 75%;
  height: 68vh;
  min-width: 860px;
  margin: 50px 0;
  img {
    width: 100%;
    max-height: 420px;
    max-width: 580px;
    margin: 10px 0;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  gap: 6vh;
  width: 50%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  span:first-child {
    font-size: 14px;
    color: #555;
  }
  span:nth-child(2) {
    font-size: 24px;
    font-weight: 600;
    color: #222;
  }
  span:nth-child(3) {
    display: inline-block;
    margin-top: 15px;
    font-size: 22px;
    font-weight: 500;
    color: #222;
    span {
      font-size: 16px;
    }
  }
`;
const Delivery = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  div:first-child {
    font-size: 14px;
    padding-bottom: 18px;
    padding-left: 8px;
    color: #555;
    border-bottom: 1px solid #ddd;
  }
  div:nth-child(2) {
    display: flex;
    font-size: 14px;
    padding-bottom: 16px;
    padding-left: 8px;
    color: #555;
    border-bottom: 1px solid #ddd;
    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #ddd;
      border-right: none;
      border-left: none;

      font-size: 18px;
      text-align: center;
      line-height: 30px;
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
  }
`;
const TotalPrice = styled.div`
  margin-top: 40px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  display: flex;
  gap: 12px;
  line-height: 28px;
  align-items: center;
  color: #555;
  font-size: 14px;
  p {
    border-right: 1px solid #ddd;
    padding-right: 14px;
  }
  span:last-child {
    font-weight: 500;
    color: rebeccapurple;
    span {
      font-size: 28px;
    }
  }
`;

const Buy = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: space-around;
  height: 40px;
  gap: 5%;
  div:first-child,
  div:last-child {
    background: rebeccapurple;
    width: 60%;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    line-height: 40px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #fff;
      color: rebeccapurple;
      border: 2px solid rebeccapurple;
    }
  }
  div:last-child {
    width: 40%;
    background: #ddd;
    &:hover {
      color: rebeccapurple;
      background: #ddd;
      border: 2px solid transparent;
    }
  }
`;
const ProductDetail = ({ priceKR, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios
      .get("/data/products.json")
      .then((data) =>
        setProduct(
          data.data.products.find((product) => product.id === parseInt(id))
        )
      );
  }, [id]);
  //수량 증감
  const priceChange = (e) => {
    if (e.target.className === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  // 장바구니 추가
  const duplicateItem = (id, itemCount) => {
    const found = cart.find((it) => it.id === id);
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      provider: product.provider,
      itemCount: itemCount,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const addCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      provider: product.provider,
      itemCount: count,
    };
    const found = cart.find((it) => it.id === cartItem.id);
    if (found) {
      duplicateItem(cartItem.id, found.itemCount + count);
    } else {
      setCart([...cart, cartItem]);
    }
  };

  return (
    <Container>
      <div>
        <img src={product.image} alt="product" />
      </div>
      <Description>
        <Item>
          <span>{product.provider}</span>
          <span>{product.name}</span>
          <span>
            {priceKR(product.price + "")}
            <span>원</span>
          </span>
        </Item>
        <Delivery>
          <div>택배배송 / 무료배송</div>
          <div>
            <span onClick={(e) => priceChange(e)} className="minus">
              -
            </span>
            <span>{count}</span>
            <span onClick={(e) => priceChange(e)} className="plus">
              +
            </span>
          </div>
          <TotalPrice>
            <h3>총 상품 금액</h3>
            <Price>
              <p>
                총 수량 <span>{count}</span>개
              </p>
              <span>
                <span>{priceKR(count * product.price + "")}</span>원
              </span>
            </Price>
          </TotalPrice>
        </Delivery>
        <Buy>
          <div>바로구매</div>
          <div onClick={addCart}>장바구니</div>
        </Buy>
      </Description>
    </Container>
  );
};

export default ProductDetail;
