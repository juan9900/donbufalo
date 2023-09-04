import styled from "@emotion/styled";
import { Image } from "@nextui-org/react";
export default function HeaderContainer() {
  const GreenText = styled.p`
    color: green;
  `;
  const CustomHeader = styled.div`
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
      font-size: 4rem;
      line-height: 3rem;
    }
  `;

  const HeaderTitleSpan = styled.span`
    display: block;
    font-size: 0.4em;
    @media (max-width: 420px) {
      font-size: 0.5em;
    }
  `;

  const BorderedText = styled.p`
    border: 1px solid ${(props) => props.theme.colors.foreground};
    border-radius: 10rem;
    line-height: 1.2rem;
    font-family: "Poppins-regular", sans-serif;
  `;
  return (
    <CustomHeader
      id="header-container"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 pb-0  md:pb-20"
    >
      <div className="flex items-center flex-col pt-10 md:pt-0">
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
    </CustomHeader>
  );
}
