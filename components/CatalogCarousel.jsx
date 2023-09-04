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
  swipeToSlide: false,
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

  @media screen and (max-width: 420px) {
    .slick-dots {
      bottom: -45px;
    }
  }
`;

const CustomSpinner = styled(Spinner)`
  .border-b-warning {
    border-bottom-color: ${(props) => props.theme.colors.secondary};
  }

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const CatalogCarousel = () => {
  const { data, loading, error } = useCatalog();

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
        <CustomSlider {...settings}>
          {data ? (
            data.map((bufalo) => {
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
    </>
  );
};

CatalogCarousel.displayName = "CatalogCarousel";

export default CatalogCarousel;
