import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Link,
  NavigateFunction,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";
// useAnimation은 하나의 이벤트에 복수의 애니메이션이 일어나야하는 경우 인라인형식으로 작성하지 못하기 때문에 이 함수를 사용해서 애니메이션 정리해줌
const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  color: #fff;
  /* background: black; */
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  cursor: pointer;
  path {
    stroke: #fff;
    stroke-width: 10px;
  }
`;

const Search = styled(motion.form)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  svg {
    height: 25px;
    fill: ${(props) => props.theme.red};
  }
`;
const Input = styled(motion.input)`
  position: absolute;
  transform-origin: right center;
  right: 0;
  width: 240px;
  height: 42px;
  border-radius: 5px;
  padding-left: 40px;
  font-size: 16px;
  background-color: transparent;
  color: ${(props) => props.theme.black.lighter};
  border: none;
  z-index: -1;
`;

const Items = styled.ul`
  display: flex;
`;
const Item = styled.li`
  position: relative;
  margin-right: 20px;
  font-size: 18px;
  color: ${(props) => props.theme.red};
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.red};
  }
`;
const Circle = styled(motion.span)`
  position: absolute;
  bottom: -40%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  width: 8px;
  height: 8px;
  background: ${(props) => props.theme.red};
  border-radius: 100%;
`;

const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: { repeat: Infinity },
  },
};
const navVariants = {
  top: { backgroundColor: "rgba(255,255,255,0)" },
  scroll: { backgroundColor: "rgba(255,255,255,1)" },
};

interface IForm {
  keyword: string;
}
const Header = () => {
  const histoty = useNavigate();
  const homeMatch = useMatch("/");
  const modalMatch = useMatch("/movies/*");
  const tvMatch = useMatch("/tv");
  const inputAni = useAnimation();
  const navAni = useAnimation();
  const [search, setSearch] = useState(false);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  // const navigate: NavigateFunction = useNavigate();
  const onValid = (data: IForm) => {
    histoty(`/search?keyword=${data.keyword}`);
    setValue("keyword", "");
  };

  const gotoMain = () => {
    histoty("/");
  };

  const openSearch = () => {
    if (search) {
      inputAni.start({
        scaleX: 0,
      });
    } else {
      inputAni.start({
        scaleX: 1,
      });
    }
    setSearch((prev) => !prev);
  };
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        navAni.start("scroll");
      } else {
        navAni.start("top");
      }
    });
  }, [scrollY]);
  return (
    <Nav variants={navVariants} animate={navAni} initial="top">
      <Col>
        <Logo
          onClick={gotoMain}
          variants={logoVariants}
          initial="normal"
          whileHover="active"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path
            xmlns="http://www.w3.org/2000/svg"
            d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
          />
        </Logo>
        <Items>
          <Item>
            <Link to="/">HOME </Link>
            {homeMatch && <Circle layoutId="circle" />}
            {modalMatch && <Circle layoutId="circle" />}
          </Item>

          <Item>
            <Link to="/tv"> TV SHOWS</Link>
            {tvMatch && <Circle layoutId="circle" />}
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("keyword", { required: true, minLength: 2 })}
            type="text"
            placeholder="Search for movie or tv"
            animate={inputAni}
            initial={{ scaleX: 0 }}
            transition={{ type: "leaner" }}
          />
          <motion.svg
            onClick={openSearch}
            animate={{ x: search ? -260 : 0 }}
            transition={{ type: "leaner" }}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </motion.svg>
        </Search>
      </Col>
    </Nav>
  );
};

export default Header;