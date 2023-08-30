"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import styled from "@emotion/styled";

import planImg from "../public/img/IMAGEN-3.png";
import CatalogCarousel from "@/components/CatalogCarousel";
import CatalogItem from "@/components/CatalogItem";
import { data } from "@/mockData/bufalosData";

export default function Home() {
  const GreenText = styled.p`
    color: green;
  `;

  const ResponsiveImage = styled(Image)`
    img {
      max-width: 100%;
      height: auto;
    }
  `;

  const HeaderContainer = styled.div`
    background: url("/img/FONDO-1.jpg");
    background-size: cover;
    background-position: 0 60%;
    background-repeat: no-repeat;
    height: 100vh;
  `;

  const HeaderTitle = styled.h1`
    font-weight: 800;
    font-size: 8rem;
    text-align: center;
    margin-top: -2rem;
    font-family: "Anzeigen", sans-serif;
    line-height: 5rem;
    @media (max-width: 420px) {
      font-size: 2rem;
    }
  `;

  const HeaderTitleSpan = styled.span`
    display: block;
    font-size: 0.4em;
  `;

  const BorderedText = styled.p`
    border: 1px solid ${(props) => props.theme.colors.foreground};
    border-radius: 10rem;
    line-height: 1.2rem;
    font-family: "Poppins-regular", sans-serif;
  `;
  const BorderedTextBrown = styled(BorderedText)`
    border: 3px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.darkText};
    font-size: 1.3em;

    span {
      font-weight: 800;
      color: ${(props) => props.theme.colors.secondary};
    }
  `;

  const UsContainer = styled.div`
    padding: 3rem 0 10rem 8rem;
    background: url("/img/FONDO-2.jpg");
    background-size: cover;
    background-position: 0 50%;
  `;

  const DarkHeader = styled.h2`
    color: ${(props) => props.theme.colors.primary};
    font-size: 4rem;
    font-weight: 800;
    line-height: 3.9rem;
    font-family: "Anzeigen", sans-serif;
  `;

  const DarkHeaderSpan = styled.span`
    color: ${(props) => props.theme.colors.secondary};
  `;

  const DarkText = styled.p`
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.2em;
    margin-top: 1.5rem;
    font-family: "Poppins-regular", sans-serif;
  `;

  const PlanContainer = styled.div`
    background: url("/img/TEXTURA.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
  `;

  const FullHeader = styled(DarkHeader)`
    width: 100%;
    color: ${(props) => props.theme.colors.foreground};
    background: ${(props) => props.theme.colors.black};
  `;

  const FullHeaderSpan = styled(DarkHeaderSpan)`
    color: ${(props) => props.theme.colors.gray};
  `;

  const PlanDownloadButton = styled.a`
    font-family: "Anzeigen", sans-serif;
    font-size: 3.2rem;

    display: block;
    width: fit-content;
    margin: 0 auto;
    background: ${(props) => props.theme.colors.secondary};
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  `;

  const ImageContainer = styled.div`
    width: 90%;
    position: relative;
    margin: 0 auto;
    > div {
      position: unset !important;
    }

    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  `;

  const CatalogContainer = styled.div`
    background: url("/img/TEXTURA.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    padding-top: 10rem;
    padding-bottom: 10rem;

    position: relative;

    h2 {
      color: ${(props) => props.theme.colors.secondary};
      font-size: 6rem;
      font-family: "Anzeigen", sans-serif;
      font-weight: 800;
      width: fit-content;
    }

    h2:before {
      content: "CATÁLOGO DE BÚFALOS";
      font-size: 10rem;
      font-weight: 100;
      display: block;
      position: absolute;
      top: -65%;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
      text-align: center;
      color: transparent;
      -webkit-text-stroke: 1px
        ${(props) => props.theme.colors.transparentSecondary};
      text-stroke: 1px ${(props) => props.theme.colors.transparentSecondary};
    }

    .subtitle {
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.3rem;
      margin-top: -2rem;
      font-family: "Poppins-regular", sans-serif;
    }
  `;

  const BookContainer = styled.div`
    background: url("/img/TEXTURA.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
  `;

  const DarkHeaderBookContainer = styled(DarkHeader)`
    color: ${(props) => props.theme.colors.secondary};
  `;

  return (
    <>
      <HeaderContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 pb-20">
        <div className="flex items-center flex-col">
          <Image
            src={"/img/ISO-LOGO-CON-EFECTO.png"}
            alt="Logo don bufalo"
            width={500}
            height={500}
          />
          <HeaderTitle>
            DON BÚFALO <HeaderTitleSpan>CENTRO DE CRÍA MURRAH</HeaderTitleSpan>
          </HeaderTitle>
          <BorderedText className="text-center px-5 py-2 mt-5">
            Más de 12 años de experiencia <br /> en el sector agropecuario
          </BorderedText>
        </div>

        <div>
          <GreenText className="col-span-1 ">Aqui va una imagen</GreenText>
        </div>
      </HeaderContainer>
      <UsContainer id="us-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div></div>
          <div className="flex items-center flex-col">
            <DarkHeader className="text-center">
              DESCUBRE QUIÉNES SOMOS <br></br>Y CÓMO PUEDES INVERTIR <br></br>
              <DarkHeaderSpan> INTELIGENTEMENTE EN BÚFALOS</DarkHeaderSpan>
            </DarkHeader>

            <div className="w-4/5 text-left">
              <DarkText>
                Somos una agropecuaria que se especializa en la cría de búfalos
                de alta calidad, con búfalos importados de Brasil y Colombia con
                una genética 100% raza Murrah.
              </DarkText>
              <DarkText>
                Don Búfalo garantiza la mejor calidad en sus animales. Si estás
                interesado en adquirir búfalos de alta calidad para tu finca o
                para cualquier otro propósito, no dudes en visitar nuestro
                catálogo para descubrir lo que hace que estos animales sean
                únicos.
              </DarkText>

              <DarkText>
                ¿Buscas mejorar la calidad genética de tu ganadería de búfalos?
                Don Búfalo te ofrece reproductores puros con pedigree y venta de
                animales de alta calidad.
              </DarkText>
              <DarkText>¡Mejora tu ganaería con nosotros!</DarkText>
            </div>
          </div>
        </div>
      </UsContainer>
      <PlanContainer>
        <FullHeader className="text-center pt-2 pb-2">
          TE OBSEQUIAMOS NUESTRO <FullHeaderSpan>PLAN SANITARIO</FullHeaderSpan>
        </FullHeader>
        <PlanDownloadButton
          href="/img/IMAGEN-3.png"
          target="_blank"
          className="px-20"
        >
          ¡DESCARGALO AQUÍ!
        </PlanDownloadButton>
        <DarkText className="w-3/6 text-center mx-auto">
          Te ayudará a mantener la buena salud de tus búfalos. Sigue las
          recomendaciones específicas para asegurarte de que tus animales
          reciban los cuidados adecuados y prevenir enfermedades, asegurando la
          calidad de vida de los mismos.
        </DarkText>

        <ImageContainer>
          <Image
            className="my-5"
            src={planImg}
            alt="Don Bufalo Plan Sanitario"
          ></Image>
        </ImageContainer>
        <BorderedTextBrown className="w-4/6 text-center mx-auto py-3">
          <span>¡DESCÁRGALO</span> HOY MISMO Y COMIENZA A CUIDAR DE TUS ANIMALES
          DE LA MEJOR MANERA POSIBLE!
        </BorderedTextBrown>
      </PlanContainer>
      <CatalogContainer>
        <div className="relative title-container">
          <h2 className="mx-auto"> CATÁLOGO DE BÚFALOS</h2>
        </div>

        <p className="subtitle mx-auto w-fit">
          REVISA NUESTRO CATÁLOGO DE BÚFALOS MACHO
        </p>
        <CatalogCarousel items={data} />
      </CatalogContainer>
      <BookContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <DarkHeaderBookContainer>
              LIBRO &quot;EL BÚFALO&quot;
            </DarkHeaderBookContainer>
          </div>
        </div>
      </BookContainer>
    </>
  );
}
