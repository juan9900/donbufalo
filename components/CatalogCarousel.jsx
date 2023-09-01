"use client";
import { memo, useEffect } from "react";
import Image from "next/image";
import CatalogItem from "./CatalogItem";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backArrow from "/public/img/FLECHA-back.png";
import { useCatalog } from "@/hooks/useCatalog";
import nextArrow from "/public/img/FLECHA.png";
import { DarkText } from "@/styles";

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
  slidesToShow: 4,
  slidesToScroll: 4,
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

const CustomSlider = styled(Slider)`
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
    margin: 1.5rem 0;
  }

  .slick-slide > div {
    height: 100%;
  }
`;

const CatalogCarousel = memo(({ items }) => {
  const data = useCatalog();
  const valid = data
    ? data.filter((animal) => animal.data.status === "Activo")
    : null;
  return (
    <>
      <div className="w-4/5 mx-auto ">
        <CustomSlider {...settings}>
          {valid ? (
            valid.map((bufalo) => {
              return (
                <CustomCardWrapper key={bufalo.data.ARETE}>
                  <CatalogItem
                    code={bufalo.data.ARETE}
                    birthday={bufalo.data["fecha nacimiento"]}
                    imageUrl={bufalo.data["foto animal"]}
                    category={bufalo.data.calsificacion}
                  />
                </CustomCardWrapper>
              );
            })
          ) : (
            <DarkText>Actualmente no hay animales para mostrar</DarkText>
          )}
        </CustomSlider>
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
