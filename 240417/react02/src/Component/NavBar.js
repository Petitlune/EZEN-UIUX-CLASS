//어떠한 페이지건 공통으로 사용되는 요소

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const menuList = [
  "인기",
  "상의",
  "아우터",
  "바지",
  "원피스",
  "스커트",
  "언더웨어",
  "패션잡화",
];

const NavBar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
      e.target.value = "";
    }
  };
  return (
    <div className="NavBar">
      <div className="nav-header">
        <div className="toggle-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)} className="login-menu">
            <FontAwesomeIcon icon={faUserCheck} />
            <span> 로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")} className="login-menu">
            <FontAwesomeIcon icon={faUser} />
            <span> 로그인</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img
            width={150}
            src="https://blog.kakaocdn.net/dn/lt8Mr/btqw553U9IP/WzALVlPkn6GKKksNAeNhW1/img.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, idx) => (
            <li key={idx}>
              <Link to="/">{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input
          onKeyUp={onCheckEnter}
          type="text"
          placeholder="봄 신상 아우터"
        />
      </div>
    </div>
  );
};

export default NavBar;
