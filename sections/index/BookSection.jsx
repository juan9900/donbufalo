import styled from "@emotion/styled";
import { DarkHeader, DarkText, TexturedContainer } from "@/styles";
import bookImg from "/public/img/LIBRO.png";
import Image from "next/image";

export default function BookContainer() {
  const BookContainer = styled(TexturedContainer)``;
  const DarkHeaderBookContainer = styled(DarkHeader)`
    color: ${(props) => props.theme.colors.secondary};
    font-size: 5.3em;
    @media screen and (max-width: 420px) {
      font-size: 3rem;
    }
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

    @media screen and (max-width: 420px) {
      margin: 2rem auto;
    }
  `;

  const BookImage = styled(Image)`
    width: 80%;
  `;

  return (
    <BookContainer id="book-container">
      <CustomContainer className="flex md:flex-row flex-col items-start justify-center mx-auto  ">
        <div className="w-full md:w-3/6 flex flex-col justify-center md:mt-20 mt-5 pt-10  ">
          <DarkHeaderBookContainer className="md:text-left text-center">
            LIBRO &quot;EL BÚFALO&quot;
          </DarkHeaderBookContainer>

          <BookImage
            className="md:hidden mx-auto"
            src={bookImg}
            alt={`Libro "El Búfalo"`}
          />
          <DarkText className="md:w-full w-4/5 mx-auto">
            &quot;El Búfalo&quot; es un libro escrito por el Profesor Nestor
            Montiel que ofrece una visión exhaustiva y detallada sobre los
            búfalos. Posee más de 450 imágenes a todo color y más de 160 tablas
            de datos.
          </DarkText>
          <DarkText className="md:w-full w-4/5 mx-auto">
            Es una fuente invaluable de información para cualquier persona
            interesada en estos imponentes animales. Con un total de 770
            páginas, &quot;El Búfalo&quot; es un libro imprescindible para
            cualquier amante de la historia y la cultura.
          </DarkText>
          <DarkText className="md:w-full w-4/5 mx-auto">
            Si quieres conocer más sobre los búfalos, te invitamos a leer este
            increíble libro.
          </DarkText>

          <BuyButton
            href="https://api.whatsapp.com/send/?phone=584143607847&text=Necesito+informacion+del+libro+donde+comprarlo&type=phone_number&app_absent=0"
            target="_blank"
            className=""
          >
            ¡CÓMPRALO AHORA!
          </BuyButton>
        </div>

        <div className="w-full hidden md:block  md:w-2/5 flex flex-col items-end ">
          <BookImage src={bookImg} alt={`Libro "El Búfalo"`} />
        </div>
      </CustomContainer>
    </BookContainer>
  );
}
