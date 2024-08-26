import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/pca468/react-shoppingmall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  },[id]);

  return (
    <Container>
      <Row>
        <Col style={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={product?.img} style={{ width: 300, height: 400 }} />
        </Col>
        <Col>
          <div style={{marginBottom:"0.5rem"}}>{product?.title}</div>
          <div style={{marginBottom:"0.5rem"}}>\ {product?.price}</div>
          <div style={{ fontSize: "0.8rem", marginBottom:"0.5rem" }}>
            {product?.choice == true ? "Conscious choice" : "\u00A0"}
          </div>
          <Dropdown style={{marginBottom:"0.5rem"}}>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              size="sm"
            >
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>S</Dropdown.Item>
              <Dropdown.Item>M</Dropdown.Item>
              <Dropdown.Item>L</Dropdown.Item>
              <Dropdown.Item>XL</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div
            style={{
              backgroundColor: "black",
              fontSize: "0.8rem",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width:"30%",
              marginTop:"1rem"
            }}
          >
            <button style={{background:"none", border:"none", color:"white", width:"100%"}}>추가</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
