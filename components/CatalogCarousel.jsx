import { memo, useEffect } from "react";
import Image from "next/image";
import CatalogItem from "./CatalogItem";
import styled from "@emotion/styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Slider from "react-slick";
import testImage from "../public/img/05905.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backArrow from "../public/img/FLECHA-back.png";

import nextArrow from "../public/img/FLECHA.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image
      alt="flecha siguiente"
      src={nextArrow}
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image
      src={backArrow}
      alt="flecha atrás"
      className={className}
      onClick={onClick}
    />
  );
}

const CatalogCarousel = memo(({ items }) => {
  useEffect(() => {
    console.log("rendered");
  }, []);

  const CustomCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    lazyload: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-4/5 mx-auto">
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <CustomCardWrapper key={item.code}>
                <CatalogItem
                  code={item.code}
                  birthday={item.birthday}
                  imageUrl={item.imageUrl}
                  category={item.category}
                />
              </CustomCardWrapper>
            );
          })}
        </Slider>
      </div>
      {/* <div className="flex flex-row w-3/5 justify-between mx-auto mt-10">
        {items.map((item) => {
          return (
            <CatalogItem
              key={item.code}
              code={item.code}
              birthday={item.birthday}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          );
        })}
      </div> */}
      {/* <Image src={"/public/img/"} /> */}
    </>
  );
});

CatalogCarousel.displayName = "CatalogCarousel";

export default CatalogCarousel;
