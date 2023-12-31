import styled from "@emotion/styled";
import Image from "next/image";
import siteLogo from "/public/img/ISO-LOGO-CON-EFECTO.webp";
import arrowDown from "/public/icons/FLECHA.gif";
import ArrowDown from "@/components/ArrowDown";
import Reveal from "@/components/Reveal";

export default function HeaderContainer() {
  const CustomHeader = styled.div`
    background: url("/img/FONDO-1.webp");
    background-size: cover;
    background-position: 0 60%;
    background-repeat: no-repeat;
    @media screen and (max-width: 1400px) {
      background: url("/img/FONDO.jpg");
    }
  `;

  const HeaderTitle = styled.h1`
    font-weight: 800;
    font-size: 7.5rem;
    text-align: center;
    font-family: "Anzeigen", sans-serif;
    line-height: 5rem;
    @media (min-width: 300px) {
      font-size: 4rem;
      line-height: 3rem;
    }
    @media (min-width: 1300px) {
      font-size: 5rem;
      line-height: 3rem;
    }

    @media (min-width: 1400px) {
    }
  `;

  const HeaderTitleSpan = styled.span`
    display: block;
    font-size: 0.4em;
    @media (max-width: 768px) {
      font-size: 0.5em;
    }
  `;

  const BorderedText = styled.p`
    border-radius: 3rem;
    line-height: 1.2rem;
    font-family: "Poppins-regular", sans-serif;
  `;
  return (
    <CustomHeader
      id="header-container"
      className="grid grid-cols-1 2xl:grid-cols-2 gap-4 pt-20 pb-0  md:pb-0 min-h-screen"
    >
      <div className="flex items-center flex-col pt-0 md:pt-0 relative  3xl:pt-20">
        <div className="flex-1 relative  w-full">
          <Image
            className="object-contain"
            fill
            src={siteLogo}
            alt="Logo don bufalo"
            priority={true}
            sizes="(max-width: 768px) 35vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex-1 flex flex-col relative">
          <HeaderTitle className="text-foreground">
            DON BÚFALO{" "}
            <HeaderTitleSpan>CENTRO DE RECRÍA MURRAH</HeaderTitleSpan>
          </HeaderTitle>
          <BorderedText className="text-foreground text-center px-5 py-2 mt-5 border-foreground border">
            Más de 12 años de experiencia <br /> en el sector agropecuario
          </BorderedText>
          <div className="flex absolute bottom-20 md:bottom-0 3xl:h-[10rem] h-[4rem] flex-1  justify-center items-center overflow-auto mt-5  w-full">
            <ArrowDown className=" top-2/4 3xl:top-0" />
          </div>
        </div>
      </div>
    </CustomHeader>
  );
}
