import React, { useState } from "react";
import { styled } from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import GuestBook from "./GuestBook";

const Container = styled.div`
  width: 100%;
  margin-top: 74px;
`;

const SlideWrap = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 150px);
  grid-template-columns: repeat(3, 1fr);
  margin: 40px 10px 20px;
`;

const ImgSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;

  &:first-child {
    grid-column: 1 / 4;
    grid-row: 1/ 3;
    object-position: 50% 0;
  }
  &:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 3/ 5;
    object-position: 50% 0;
  }
  &:nth-child(3) {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    object-position: center -120px;
  }
  &:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 4 / 5;
    object-position: center -65px;
  }
  &:nth-child(5) {
    grid-column: 3 /4;
    grid-row: 5 / 6;
    object-position: 50% -10px;
  }
  &:nth-child(6) {
    grid-column: 1 / 3;
    grid-row: 5 / 7;
  }
  &:nth-child(8) {
    grid-column: 1 / 4;
    grid-row: 7 / 8;
    height: 220px;
    object-position: 50% -90px;
  }
`;
const SlideAll = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 18px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #f8a4a4;
  }
`;

const PhotoBook = ({ Subtitle, SubtitleKR }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "./img/wedding02.jpg",
    "./img/wedding03.jpg",
    "./img/wedding04.jpg",
    "./img/wedding05.jpg",
    "./img/wedding06.jpg",
    "./img/wedding07.jpg",
    "./img/wedding08.jpg",
    "./img/wedding09.jpg",
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSlideAllClick = () => {
    setSelectedIndex(0);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Subtitle>photo gallery</Subtitle>
      <SubtitleKR>사진첩</SubtitleKR>
      <SlideWrap>
        {images.map((src, index) => (
          <ImgSlide
            key={index}
            src={src}
            alt={`weddingImg${index}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </SlideWrap>
      <SlideAll onClick={handleSlideAllClick}>
        사진 전체보기 <FaAngleRight />
      </SlideAll>
      {isModalOpen && (
        <GuestBook initialIndex={selectedIndex} onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default PhotoBook;
