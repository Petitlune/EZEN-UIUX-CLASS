import React, { useState } from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 20px auto;
  gap: 20px;
  header {
    height: 68px;
  }
`;

const BasketEmpty = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;
  color: #555;
`;
const Cart = ({ cart, setCart, priceKR, checkLists, setCheckLists }) => {
  const [total, setTotal] = useState(0);
  const handleCheckList = (checked, id) => {
    if (checked) {
      setCheckLists([...checkLists, id]);
    } else {
      setCheckLists(checkLists.filter((list) => list !== id));
    }
  };

  const allChecked = (checked) => {
    if (checked) {
      const checkItems = [];
      cart.map((cart) => checkItems.push(cart.id));
      setCheckLists(checkItems);
    } else {
      setCheckLists([]);
    }
  };
  const isAllChecked = cart.length === checkLists.length && cart.length !== 0;
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    setCheckLists(checkLists.filter((check) => check !== id));
  };

  const cartItemCount = (e, id, count) => {
    const found = cart.filter((item) => item.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      image: found.image,
      id: found.id,
      name: found.name,
      price: found.price,
      provider: found.provider,
      itemCount: count,
    };
    if (e.target.className === "minus") {
      if (count > 0) {
        setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
      }
    } else if (e.target.className === "plus") {
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    }
  };

  const found = checkLists.map((checkList) =>
    cart.filter((item) => item.id === checkList)
  );
  return (
    <Container>
      <header>
        <h1>장바구니</h1>
      </header>
      <CartHeader allChecked={allChecked} isAllChecked={isAllChecked} />
      {cart.length === 0 ? (
        <BasketEmpty>
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
        </BasketEmpty>
      ) : (
        cart.map((cart) => {
          return (
            <CartList
              key={`key-${cart.id}`}
              priceKR={priceKR}
              cart={cart}
              setCart={setCart}
              cartItemCount={cartItemCount}
              removeItem={removeItem}
              handleCheckList={handleCheckList}
              checkLists={checkLists}
              setCheckLists={setCheckLists}
            />
          );
        })
      )}
      {cart.length === 0 ? (
        ""
      ) : (
        <CartTotal
          cart={cart}
          total={total}
          setTotal={setTotal}
          found={found}
          priceKR={priceKR}
        />
      )}
    </Container>
  );
};

export default Cart;
