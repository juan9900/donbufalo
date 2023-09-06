"use client";
import Image from "next/image";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backArrow from "/public/img/FLECHA-back.png";
import { useCatalog } from "@/hooks/useCatalog";
import nextArrow from "/public/img/FLECHA.png";
import { Spinner } from "@nextui-org/react";
import CatalogItem from "./CatalogItem";
import { DarkText } from "@/styles";
import { useBufaloStore } from "@/hooks/useBufaloStore";

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
  /* display: flex;
  justify-content: center;
  align-items: center; */
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
  swipeToSlide: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CustomSlider = styled(Slider)`
  height: 27rem;
  .slick-list {
    height: 100%;
  }
  .slick-track {
    display: flex !important;
    height: 100%;
  }

  .slick-slide {
    height: 100%;
    margin: 0;
    min-height: 100%;
  }

  .slick-slide > div {
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    .slick-dots {
      bottom: -45px;
    }
  }
  @media screen and (min-width: 1920px) {
    height: 35rem;
  }
`;

const CustomSpinner = styled(Spinner)`
  .border-b-warning {
    border-bottom-color: #592c33;
  }

  span {
    color: #2c272b;
  }
`;

const CatalogCarousel = () => {
  const { data, loading, error } = useCatalog();
  console.log({ data, loading, error });
  console.log(data);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full mt-20">
        <CustomSpinner label="Cargando..." color="warning" />
      </div>
    );
  }

  return (
    <>
      <div className="w-4/5 mx-auto md:mt-10 mt-5 ">
        {data ? (
          <CustomSlider {...settings} className="">
            {data.map((bufalo) => {
              return (
                <CustomCardWrapper className="py-10" key={bufalo.arete}>
                  <CatalogItem
                    code={bufalo.arete}
                    birthday={bufalo.nacimiento}
                    imageUrl={bufalo.foto_animal}
                    category={bufalo.categoria}
                  />
                </CustomCardWrapper>
              );
            })}
          </CustomSlider>
        ) : (
          <DarkText className="text-black text-center ">
            Actualmente no hay búfalos para mostrar
          </DarkText>
        )}
      </div>
    </>
  );
};

CatalogCarousel.displayName = "CatalogCarousel";

export default CatalogCarousel;
