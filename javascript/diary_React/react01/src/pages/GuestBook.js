import React, { useState, useEffect, useRef } from "react";
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  max-width: 400px;
  height: 62%;
  min-height: 480px;
  background-color: #f8a4a4;
  z-index: 100;
  border-radius: 8px;
  color: #fff;
  overflow: hidden;
`;
const Buttons = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 36px;
  font-weight: lighter;
`;

const ClosedButtons = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  font-size: 36px;
  cursor: pointer;
`;

const SlideWrap = styled.div`
  display: flex;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  transition: all 1s ease-in-out;
`;
const InnerImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;
const GuestBook = ({ initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const images = [
    "./img/photos-by-lanty-qHjwSGv2p8c-unsplash.jpg",
    "./img/nikita-shirokov-qGgjalogCdE-unsplash.jpg",
    "./img/rikonavt-oAIEk6xqYYc-unsplash.jpg",
    "./img/leonardo-miranda-dvF6s1H1x68-unsplash.jpg",
    "./img/eugenivy_now-mUYjrnQLrSA-unsplash.jpg",
    "./img/ulyana-tim-AbnCRgL2DNs-unsplash.jpg",
  ];

  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
    startAutoSlide();
  };

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleMouseEnter = () => {
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };

  return (
    <Container>
      <ModalBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SlideWrap currentIndex={currentIndex}>
          {images.map((src, index) => (
            <InnerImg key={index} src={src} alt={`weddingImg${index}`} />
          ))}
        </SlideWrap>
        <Buttons>
          <FaAngleLeft style={{ cursor: "pointer" }} onClick={prevSlide} />
          <FaAngleRight style={{ cursor: "pointer" }} onClick={nextSlide} />
        </Buttons>
        <ClosedButtons onClick={onClose}>
          <IoIosCloseCircle />
        </ClosedButtons>
      </ModalBox>
    </Container>
  );
};

export default GuestBook;
