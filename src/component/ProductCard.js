import React from "react";
import "../cssFile/ProductCard.css"
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }

  return ( // "\u00A0" 은 HTML의 비공백 문자를 사용하여, 공백 문자열을 그대로 표시하지 않고 공백 문자 그대로 유지.
    <div className="cardStyle" onClick={showDetail}>
      <img src={item?.img} />
      <div>{item?.choice == true ? "Conscious choice" : "\u00A0"}</div>
      <div>{item?.title}</div>
      <div>\{item?.price}</div>
      <div>{item?.new == true ? "신제품" : "\u00A0"}</div>
    </div>
  );
};

export default ProductCard;
