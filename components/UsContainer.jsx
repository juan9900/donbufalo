import { DarkHeader, DarkText } from "@/styles";
import styled from "@emotion/styled";

export default function UsContainer() {
  const UsContainer = styled.div`
    padding: 3rem 0 10rem 8rem;
    background: url("/img/FONDO-2.jpg");
    background-size: cover;
    background-position: 0 50%;
  `;

  const DarkHeaderSpan = styled.span`
    color: ${(props) => props.theme.colors.secondary};
  `;

  return (
    <UsContainer id="us-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div></div>
        <div className="flex items-center flex-col">
          <DarkHeader className="text-center">
            DESCUBRE QUIÉNES SOMOS <br></br>Y CÓMO PUEDES INVERTIR <br></br>
            <DarkHeaderSpan> SABIAMENTE EN BÚFALOS</DarkHeaderSpan>
          </DarkHeader>

          <div className="w-4/5 text-left">
            <DarkText>
              Somos una agropecuaria que se especializa en la cría de búfalos de
              alta calidad, con búfalos importados de Brasil y Colombia con una
              genética 100% raza Murrah.
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
  );
}
