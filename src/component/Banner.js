import React, { useState, useEffect } from "react";

const image = [
  "https://images.unsplash.com/photo-1450297166380-cabe503887e5?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1601597565151-70c4020dc0e1?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
];

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((preIndex) => (preIndex + 1) % image.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handlePreClick = () => {
    setImageIndex((preIndex) => (preIndex - 1) % image.length);
  };

  const handleNextClick = () => {
    setImageIndex((preIndex) => (preIndex + 1) % image.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #000000, #434343)"
      }}
    >
      <button
        onClick={handlePreClick}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          border:"none",
          color:"white",
          fontSize:"2rem",
          cursor:"pointer",
          padding:"0.5rem",
          zIndex:"1",
          left:10,
        }}
      >
        &#9664;
      </button>
      <img
        src={image[imageIndex]}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "contain",
          objectPosition: "center",
          transition: "opacity 0.5s ease-in-out",
          transform: "translateZ(0)",
          translateZ:"0",
          backfaceVisibility:"hidden",
        }}
      />
      <button
        onClick={handleNextClick}
        style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            border:"none",
            color:"white",
            fontSize:"2rem",
            cursor:"pointer",
            padding:"0.5rem",
            zIndex:"1",
            right:10,
          }}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Banner;
