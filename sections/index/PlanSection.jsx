import { DarkHeader, TexturedContainer } from "@/styles";
import styled from "@emotion/styled";
import Image from "next/image";
import planImg from "/public/img/IMAGEN-3.webp";
import { useState } from "react";

const BorderedText = styled.p`
  border-radius: 10rem;
  line-height: 1.2rem;
  font-family: "Poppins-regular", sans-serif;
`;
const BorderedTextBrown = styled(BorderedText)`
  font-size: 1.3em;

  span {
    font-weight: 800;
  }

  @media screen and (max-width: 768px) {
    font-size: 1em;
    width: 90%;
    border-radius: 1rem;
  }
`;

const DarkText = styled.p`
  font-size: 1.2em;
  font-family: "Poppins-regular", sans-serif;
`;
const CustomContainer = styled.div`
  background: url("/img/TEXTURA.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
`;

const FullHeader = styled(DarkHeader)`
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
    line-height: 2.7rem;
  }
`;
const PlanDownloadButton = styled.a`
  font-family: "Anzeigen", sans-serif;
  font-size: 3.2rem;

  display: block;
  width: fit-content;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;

    line-height: 2.7rem;
    width: fit-content;

    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

const ImageContainer = styled.div`
  padding-bottom: 20%;
  @media screen and (max-width: 768px) {
    padding-bottom: 25%;
  }
`;

export default function PlanContainer() {
  return (
    <CustomContainer id="plan-container" className="relative ">
      <FullHeader className="bg-black text-foreground text-center pt-2 pb-2 px-3 md:px-0 ">
        TE OBSEQUIAMOS NUESTRO <span className="text-gray">PLAN SANITARIO</span>
      </FullHeader>
      <PlanDownloadButton
        href="/img/IMAGEN-3.webp"
        target="_blank"
        className="bg-secondary md:px-20 px-10 mx-auto md:my-0 mt-10"
      >
        ¡DESCARGALO AQUÍ!
      </PlanDownloadButton>
      <DarkText className=" text-primary w-full px-5 my-10 md:px-0 md:w-3/6 text-center mx-auto">
        Te ayudará a mantener la buena salud de tus búfalos. Sigue las
        recomendaciones específicas para asegurarte de que tus animales reciban
        los cuidados adecuados y prevenir enfermedades, asegurando la calidad de
        vida de los mismos.
      </DarkText>

      <ImageContainer className="relative mb-10 w-full">
        <Image
          fill
          className="w-full"
          objectFit="contain"
          sizes="(max-width: 768px) 35vw, (max-width: 1200px) 50vw, 80vw"
          src={planImg}
          alt="Don Bufalo Plan Sanitario"
        />
      </ImageContainer>
      <BorderedTextBrown className="text-darkText border-3 border-secondary w-90 md:w-4/6 text-center mx-auto md:mt-0 mt-10 py-3">
        <span className="text-secondary">¡DESCÁRGALO</span> HOY MISMO Y COMIENZA
        A CUIDAR DE TUS ANIMALES DE LA MEJOR MANERA POSIBLE!
      </BorderedTextBrown>
    </CustomContainer>
  );
}
