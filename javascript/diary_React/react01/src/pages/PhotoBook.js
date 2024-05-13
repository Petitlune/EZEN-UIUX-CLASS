import React, { useState } from "react";
import { styled } from "styled-components";
import GuestBook from "./GuestBook";
import { FaAngleRight } from "react-icons/fa";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const SlideWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 20px;
`;

const ImgSlide = styled.img`
  display: inline-block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  &:nth-child(2) {
    width: 60%;
    height: auto;
  }
  &:nth-child(3) {
    width: 40%;
    height: 180px;
    object-fit: cover;
    object-position: 5% 2%;
  }
  &:nth-child(4) {
    position: absolute;
    right: 0;
    top: 380px;
    width: 40%;
    height: auto;
    z-index: -1;
    object-fit: cover;
    object-position: 5% 22%;
  }
  &:nth-child(5) {
    width: 50%;
    height: auto;
  }
  &:nth-child(6) {
    width: 50%;
    height: auto;
  }
`;


const PhotoBook = () => {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <h3 className="subtitle">photo gallery</h3>
      <h2>사진첩</h2>
      <SlideWrap>
        <ImgSlide
          src="./img/photos-by-lanty-qHjwSGv2p8c-unsplash.jpg"
          alt="weddingImg"
        />
        <ImgSlide
          src="./img/nikita-shirokov-qGgjalogCdE-unsplash.jpg"
          alt="weddingImg"
        />
        <ImgSlide
          src="./img/rikonavt-oAIEk6xqYYc-unsplash.jpg"
          alt="weddingImg"
        />
        <ImgSlide
          src="./img/leonardo-miranda-dvF6s1H1x68-unsplash.jpg"
          alt="weddingImg"
        />
        <ImgSlide
          src="./img/eugenivy_now-mUYjrnQLrSA-unsplash.jpg"
          alt="weddingImg"
        />
        <ImgSlide
          src="./img/ulyana-tim-AbnCRgL2DNs-unsplash.jpg"
          alt="weddingImg"
        />
      </SlideWrap>
  <GuestBook />
    </Container>
  );
};

export default PhotoBook;
