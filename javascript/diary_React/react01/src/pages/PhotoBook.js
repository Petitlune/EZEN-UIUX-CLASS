import React, { useState } from "react";
import { styled } from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import GuestBook from "./GuestBook";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 80px;
`;

const SlideWrap = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 150px);
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
  }
  &:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }
  &:nth-child(3) {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    object-position: center -15px;
  }
  &:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    object-position: center -55px;
  }
  &:nth-child(5) {
    grid-column: 1 / 3;
    grid-row: 4 / 6;
  }
  &:nth-child(6) {
    grid-column: 3 / 4;
    grid-row: 4 / 6;
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
    color: #f8a4a4;
  }
`;

const PhotoBook = ({ Subtitle, SubtitleKR }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "./img/photos-by-lanty-qHjwSGv2p8c-unsplash.jpg",
    "./img/nikita-shirokov-qGgjalogCdE-unsplash.jpg",
    "./img/rikonavt-oAIEk6xqYYc-unsplash.jpg",
    "./img/leonardo-miranda-dvF6s1H1x68-unsplash.jpg",
    "./img/eugenivy_now-mUYjrnQLrSA-unsplash.jpg",
    "./img/ulyana-tim-AbnCRgL2DNs-unsplash.jpg",
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
