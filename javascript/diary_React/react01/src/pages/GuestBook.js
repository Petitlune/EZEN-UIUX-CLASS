import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: hidden;
`;

const ModalBox = styled.div`
  position: relative;
  width: 90%;
  height: 80vh;
  background-color: #fff;
  z-index: 100;
  border: 2px solid #f8a4a4;
  border-radius: 8px;
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
const SlideAll = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const GuestBook = () => {
  const [modal, setModal] = useState(false);
  const [modalXButton, setModalXButton] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      {modal === true ? (
        <Container>
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
        </Container>
      ) : null}
      <SlideAll onClick={openModal}>
        사진 전체보기 <FaAngleRight />
      </SlideAll>
    </div>
  );
};

export default GuestBook;
