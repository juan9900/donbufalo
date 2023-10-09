import CatalogCarousel from "/components/CatalogCarousel";
import styled from "@emotion/styled";
import Slider from "react-slick";
import { TexturedContainer } from "@/styles";

import bubilla5 from "/public/img/Bubillas/bubilla5.jpg";
import bubilla6 from "/public/img/Bubillas/bubilla6.jpg";
import bubilla7 from "/public/img/Bubillas/bubilla7.jpg";
import bubilla8 from "/public/img/Bubillas/bubilla8.jpg";
import bubilla11 from "/public/img/Bubillas/bubilla11.jpg";

import Image from "next/image";
import backArrow from "/public/img/FLECHA-back.png";
import nextArrow from "/public/img/FLECHA.png";
import wsLogo from "/public/icons/WS.svg";
import * as pixel from "/app/lib/fpixel";

const CustomContainer = styled(TexturedContainer)`
  padding-top: 5rem;
  padding-bottom: 5rem;

  position: relative;

  h2 {
    font-size: 6rem;
    font-family: "Anzeigen", sans-serif;
    font-weight: 800;
    width: fit-content;
  }

  h2:before {
    content: "BUBILLAS PREÑADAS";
    font-size: 10rem;
    font-weight: 100;
    display: block;
    position: absolute;
    top: -45%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    text-align: center;
    color: transparent;
    -webkit-text-stroke: 1px #592c334a;
    text-stroke: 1px #592c334a;
    z-index: 0;
  }

  .subtitle {
    font-size: 1.3rem;
    margin-top: -2rem;
    font-family: "Poppins-regular", sans-serif;
  }

  @media (min-width: 320px) {
    h2 {
      font-size: 3.5rem;
      word-wrap: break-word;
      line-height: 3.2rem;
    }
    h2:before {
      font-size: 3.5rem;
      word-wrap: break-word;
      padding: 0 1rem;
      top: -10%;
    }
    .subtitle {
      margin-top: 0;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 481px) {
    h2 {
      font-size: 3.5rem;
      word-wrap: break-word;
      line-height: 3.2rem;
    }

    h2:before {
      font-size: 3.5rem;
      word-wrap: break-word;
      padding: 0 1rem;
      top: -60%;
    }

    .subtitle {
      margin-top: 0;
      font-size: 1.2rem;
    }
  }
  @media (min-width: 641px) {
    h2 {
      font-size: 2.5rem;
      word-wrap: break-word;
      line-height: 2.2rem;
    }

    h2:before {
      font-size: 2.5rem;
      word-wrap: break-word;
      padding: 0 1rem;
      top: -15%;
    }

    .subtitle {
      margin-top: 0;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 950px) {
    h2:before {
      top: -15%;
    }
  }

  @media (min-width: 1281px) {
    h2 {
      font-size: 6rem;
      word-wrap: break-word;
      line-height: 6rem;
    }
    h2:before {
      font-size: 7rem;
      word-wrap: break-word;
      padding: 0 1rem;
      top: -20%;
    }
  }

  /* @media screen and (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
      word-wrap: break-word;
      line-height: 2.5rem;
    }

    h2:before {
      font-size: 2.5rem;
      top: -5%;
      content: "CATÁLOGO DE BUBILLAS PREÑADAS";
    }

    .subtitle {
      margin-top: 0;
      font-size: 1.2rem;
    }
  } */
`;

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

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CustomSlider = styled(Slider)`
  height: 23rem;
  margin-bottom: 5rem;

  .image-container {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
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

  .slick-dots {
    left: 0;
  }
  @media (min-width: 320px) {
    height: 13rem;
    margin-top: 1rem;
  }

  @media (min-width: 481px) {
    height: 15rem;
    margin-top: 1rem;
    .slick-dots {
      bottom: -25px;
    }
  }

  @media (min-width: 641px) {
    height: 15rem;
    margin-top: 1rem;
    .slick-dots {
      bottom: -35px;
    }
  }

  @media (min-width: 950px) {
    height: 20rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    .slick-dots {
      bottom: 10px;
    }

    .slick-slider {
      background-color: red;
    }
  }

  @media (min-width: 1281px) {
    height: 23rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    .slick-dots {
      bottom: -10px;
    }
  }

  @media (min-width: 1920px) {
    height: 18rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    .slick-dots {
      bottom: -10px;
    }
  }

  /* @media screen and (max-width: 768px) {
    height: 12rem;
    margin-top: 3rem;
    .slick-dots {
      bottom: -45px;
      left: 0;
    }

    .image-container image {
      width: 90%;
    }
  }
  @media screen and (min-width: 1920px) {
    height: 23rem;
    margin-bottom: 5rem;
  } */
`;

const WhatsappButton = styled.a`
  background-color: #37bc30;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 1.2rem;
  padding: 0.2rem 2rem;
  border-radius: 0.6rem;
  border: none;
  margin-top: 0rem;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #198d44;
  }
`;
export default function BubillaSection() {
  return (
    <CustomContainer id="bubillas-container">
      <div className="relative title-container">
        <h2 className="text-secondary mx-auto  text-center md:text-left  mb-5">
          CATÁLOGO DE BUBILLAS PREÑADAS
        </h2>
        <p className="subtitle text-black text-center text-xl my-5 text-base px-3">
          Disponibles para la venta bubillas certificadas 5/8 por nuestras{" "}
          <br />
          mejores búfalas puras, con promedio de 4 a 6 meses de gestación.{" "}
          <br />
          <span className="font-bold text-2xl">$1300 C/U</span>
        </p>
      </div>

      <div>
        <CustomSlider
          {...settings}
          className="text-center md:px-0 px-5 w-4/5 md:w-2/5 3xl:w-1/5 mx-auto "
        >
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bubilla5}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bubilla6}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bubilla7}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bubilla8}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bubilla11}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </CustomSlider>

        <WhatsappButton
          href={`https://donbufalo.com/whatsapp-bubillas
          `}
          target="_blank"
          className="flex flex-row items-center justify-center w-3/6 md:w-1/6 mx-auto"
          onClick={() => {
            pixel.event(
              process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
              "btn-bubillas"
            );
          }}
        >
          <Image
            className="h-[2rem] w-[2rem] pr-1 py-1"
            src={wsLogo}
            alt="logo whatsapp"
          />{" "}
          Consultar
        </WhatsappButton>
      </div>
    </CustomContainer>
  );
}
