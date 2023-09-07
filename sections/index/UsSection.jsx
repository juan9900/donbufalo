import { DarkHeader, DarkText } from "@/styles";
import styled from "@emotion/styled";

const CustomContainer = styled.div`
  padding: 3rem 0 10rem 0rem;
  background: url("/img/FONDO-2.webp");
  background-size: cover;
  background-position: 0 100%;

  @media screen and (max-width: 1281px) {
    padding: 3rem 1rem;
    background: url("/img/TEXTURA.jpg");
  }
`;

export default function UsContainer() {
  const DarkHeaderSpan = styled.span``;

  return (
    <CustomContainer id="us-container">
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 3xl:py-20 ">
        <div></div>
        <div className="flex items-center   flex-col 2xl:w-full md:mx-auto">
          <div className="w-full 2xl:pl-28 3xl:pl-40 2xl:pr-5">
            <DarkHeader className="text-center text-primary ">
              DESCUBRE QUIÉNES SOMOS Y CÓMO PUEDES INVERTIR
              <DarkHeaderSpan className="text-secondary">
                {" "}
                SABIAMENTE EN BÚFALOS
              </DarkHeaderSpan>
            </DarkHeader>

            <div className="w-4/5 md:text-left text-center text-primary 2xl:pl-7 mx-auto">
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
              <DarkText className="text-center font-bold md:text-left ">
                ¡Mejora tu ganadería con nosotros!
              </DarkText>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}
