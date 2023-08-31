import { DarkHeader } from "@/styles";
import styled from "@emotion/styled";
import Image from "next/image";
import planImg from "../public/img/IMAGEN-3.png";

export default function PlanContainer() {
  const DarkHeaderSpan = styled.span`
    color: ${(props) => props.theme.colors.secondary};
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

  const FullHeaderSpan = styled(DarkHeaderSpan)`
    color: ${(props) => props.theme.colors.gray};
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
  return (
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
        recomendaciones específicas para asegurarte de que tus animales reciban
        los cuidados adecuados y prevenir enfermedades, asegurando la calidad de
        vida de los mismos.
      </DarkText>

      <ImageContainer>
        <Image className="my-5" src={planImg} alt="Don Bufalo Plan Sanitario" />
      </ImageContainer>
      <BorderedTextBrown className="w-4/6 text-center mx-auto py-3">
        <span>¡DESCÁRGALO</span> HOY MISMO Y COMIENZA A CUIDAR DE TUS ANIMALES
        DE LA MEJOR MANERA POSIBLE!
      </BorderedTextBrown>
    </PlanContainer>
  );
}
