import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Banner from "../component/Banner";


// 1. 햄버거 만들기
// 2. 검색창 엔터 시 빈배열로 만들어야 함
// 3. 로그인 커서 되면 색 바뀌기
// 4. 

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("reseize", handleResize);
    }; 
  }, [])

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은?", searchQuery)
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("API 응답 데이터:", data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    // bootstrap 에서 Container 는 아이템이 가운데로 모이게 해줌
    // Col 컬럼 
    <div>
      <Banner />
      <Container >
        <Row >
            {productList.map((menu) => (
                 <Col style={{display: isMobile ? "flex" : "", justifyContent: isMobile ? "center" : ""}} lg = {isMobile ? 12 : 3}><ProductCard item={menu} /></Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
