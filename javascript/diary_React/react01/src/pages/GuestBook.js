import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const ModalBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
  border: 2px solid #f8a4a4;
  border-radius: 8px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: #fff;
`;
const Buttons = styled.span`
  display: inline-block;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #f8a4a4;
  font-size: 48px;
  font-weight: lighter;
  line-height: 58px;
  cursor: pointer;

  &:first-child {
    left: 0;
  }
  &:nth-child(2) {
    right: 0;
  }
  &:last-child {
    right: 10px;
    top: 40px;
  }
`;

const GuestBook = () => {
  const [modalXButton, setModalXButton] = useState(false);

  const closeModal = () => {
    setModalXButton(true);
  };

  return (
    <ModalBox>
      <Buttons>
        <FaAngleLeft />
      </Buttons>
      <Buttons>
        <FaAngleRight />
      </Buttons>
      <Buttons onClick={closeModal}>
        <IoIosCloseCircle />
      </Buttons>
    </ModalBox>
  );
};

export default GuestBook;
