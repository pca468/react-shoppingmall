import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "../cssFile/Navbar.css";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const logout = () => {
    setAuthenticate(false); // 로그아웃 상태로 변경
    navigate("/");
  };

  const search = (event) => {
    // 입력한 검색어를 읽어와서
    let keyword = searchKeyword;
    // url을 바꿔준다.
    navigate(`/?q=${keyword}`);
  };

  const [searchKeyword, setSearchKeyword] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchKeyword(""); // 검색어 초기화
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        <div
          className="loginStyle"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "20px",
            cursor: "pointer",
          }}
          onClick={authenticate ? logout : goToLogin} // 로그인 상태에 따라 다른 함수 호출
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "2px solid black",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              style={{
                outline: "none",
                border: "none",
                marginLeft: "1rem",
                width: isMobile ? "100%" : "auto",
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  search(event);
                  handleKeyDown(event);
                }
              }}
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={"/"}>
          <img
            src="data:image/png;base64,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"
            alt="h&m logo"
            style={{ width: 100, height: 100 }}
          />{" "}
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyleType: "none",
            alignItems: "center",
            flex: "1",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {menuList.map(
            (
              menu // menuList에서 map함수를 활용하고 map 안에는 menu가 있고 각각의 menu는 li태그에 들어있다 의 뜻
            ) => (
              <li
                style={{ padding: "10px", cursor: "pointer" }}
                className="menuStyle"
              >
                {menu}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
