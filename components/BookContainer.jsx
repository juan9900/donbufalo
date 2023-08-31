import styled from "@emotion/styled";
import { DarkHeader, DarkText } from "@/styles";
import bookImg from "/public/img/LIBRO.png";
import Image from "next/image";

export default function BookContainer() {
  const BookContainer = styled.div`
    background: url("/img/TEXTURA.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;
  const DarkHeaderBookContainer = styled(DarkHeader)`
    color: ${(props) => props.theme.colors.secondary};
    font-size: 5.3em;
  `;

  const CustomContainer = styled.div`
    max-width: 80%;
    @media screen and (max-width: 1024px) {
      max-width: 90%;
    }
  `;

  const BuyButton = styled.a`
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 10rem;
    width: fit-content;
    padding: 0rem 2rem;
    margin-top: 2rem;
    font-family: "Anzeigen", sans-serif;
    font-size: 2.5rem;
    transition: ease 0.3s;
    &:hover {
      background: ${(props) => props.theme.colors.secondaryDarker};
    }
  `;

  return (
    <BookContainer>
      <CustomContainer className="flex flex-row items-start justify-center mx-auto">
        <div className="w-3/6 flex flex-col justify-center mt-20 pt-10">
          <DarkHeaderBookContainer>
            LIBRO &quot;EL BÚFALO&quot;
          </DarkHeaderBookContainer>
          <DarkText>
            &quot;El Búfalo&quot; es un libro escrito por el Profesor Nestor
            Montiel que ofrece una visión exhaustiva y detallada sobre los
            búfalos. Posee más de 450 imágenes a todo color y más de 160 tablas
            de datos.
          </DarkText>
          <DarkText>
            Es una fuente invaluable de información para cualquier persona
            interesada en estos imponentes animales. Con un total de 770
            páginas, &quot;El Búfalo&quot; es un libro imprescindible para
            cualquier amante de la historia y la cultura.
          </DarkText>
          <DarkText>
            Si quieres conocer más sobre los búfalos, te invitamos a leer este
            increíble libro.
          </DarkText>

          <BuyButton
            href="https://api.whatsapp.com/send/?phone=584143607847&text=Necesito+informacion+del+libro+donde+comprarlo&type=phone_number&app_absent=0"
            target="_blank"
          >
            ¡CÓMPRALO AHORA!
          </BuyButton>
        </div>

        <div className="w-2/5 flex flex-col items-center ">
          <Image src={bookImg} alt={`Libro "El Búfalo"`} />
        </div>
      </CustomContainer>
    </BookContainer>
  );
}
