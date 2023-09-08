import CatalogCarousel from "/components/CatalogCarousel";
import styled from "@emotion/styled";
import Slider from "react-slick";
import { TexturedContainer } from "@/styles";
import bufalo from "/public/img/05905.jpg";
import bufalo2 from "/public/img/15906.jpg";
import Image from "next/image";
import backArrow from "/public/img/FLECHA-back.png";
import nextArrow from "/public/img/FLECHA.png";
import wsLogo from "/public/icons/WS.svg";

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
    content: "BUBILLAS";
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

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 3.3rem;
      word-wrap: break-word;
      line-height: 3rem;
    }

    h2:before {
      font-size: 5rem;
      top: -10%;
    }

    .subtitle {
      margin-top: 0;
      font-size: 1.2rem;
    }
  }
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

  @media screen and (max-width: 768px) {
    height: 17rem;
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
  }
`;

const WhatsappButton = styled.a`
  background-color: #37bc30;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 1.2rem;
  padding: 0.2rem 2rem;
  border-radius: 0.6rem;
  border: none;
  margin-top: 2rem;
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
          BUBILLAS
        </h2>
        <p className="subtitle text-black text-center text-xl my-5 text-base px-3">
          Bubillas 5/8 de nuestras mejores búfalas <br /> Disponibles para la
          venta. Promedio de 4 a 6 meses de gestación. <br />{" "}
          <span className="font-bold text-2xl">$1300 C/U</span>
        </p>
      </div>

      <div>
        <CustomSlider
          {...settings}
          className="text-center md:px-0 px-5 w-4/5 md:w-2/5 3xl:w-1/5 mx-auto"
        >
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bufalo}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bufalo2}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bufalo}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bufalo2}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bufalo}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bufalo2}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bufalo}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="image-container">
            <Image
              alt="Bubilla Don Bufalo"
              src={bufalo2}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </CustomSlider>

        <WhatsappButton
          href={`https://wa.me/584146429164?text=Hola%2C%20me%20interesa%20una%20bubilla
          `}
          target="_blank"
          className="flex flex-row items-center justify-center w-3/6 md:w-1/6 mx-auto"
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
