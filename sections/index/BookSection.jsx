import styled from "@emotion/styled";
import { DarkHeader, DarkText, TexturedContainer } from "@/styles";
import bookImg from "/public/img/LIBRO.webp";
import Image from "next/image";

export default function BookContainer() {
  const BookContainer = styled(TexturedContainer)``;
  const DarkHeaderBookContainer = styled(DarkHeader)`
    font-size: 5.3em;
    @media screen and (max-width: 720px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 1281px) {
      font-size: 4rem;
    }
  `;

  const CustomContainer = styled.div`
    max-width: 80%;
    min-height: 10rem;
    height: 45rem;
    @media screen and (max-width: 768px) {
      height: auto;
    }
    @media screen and (max-width: 1024px) {
      max-width: 90%;
    }
  `;

  const BuyButton = styled.a`
    border-radius: 10rem;
    width: fit-content;
    padding: 0rem 2rem;
    margin-top: 2rem;
    font-family: "Anzeigen", sans-serif;
    font-size: 2.5rem;
    transition: background ease 0.3s;
    animation: pulse 2s infinite;
    @media screen and (max-width: 768px) {
      margin: 2rem auto;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  const BookImage = styled(Image)`
    width: 80%;
  `;

  return (
    <BookContainer id="book-container">
      <CustomContainer className="flex md:pt-5 flex-col items-start justify-center mx-auto   relative md:flex-row md:justify-between">
        <div className="w-full md:w-3/6 flex flex-col justify-center  pt-10  ">
          <DarkHeaderBookContainer className="text-secondary md:text-left text-center">
            LIBRO <br className="hidden" />
            <span className="pt-5 md:pt-0 md:inline md:mt-0 block">
              &quot;EL BÚFALO&quot;
            </span>
          </DarkHeaderBookContainer>

          <BookImage
            className="md:hidden mx-auto"
            src={bookImg}
            alt={`Libro "El Búfalo"`}
          />
          <DarkText className="text-primary md:w-full w-4/5 mx-auto">
            &quot;El Búfalo&quot; es un libro escrito por el Profesor Nestor
            Montiel que ofrece una visión exhaustiva y detallada sobre los
            búfalos. Posee más de 450 imágenes a todo color y más de 160 tablas
            de datos.
          </DarkText>
          <DarkText className="text-primary md:w-full w-4/5 mx-auto">
            Es una fuente invaluable de información para cualquier persona
            interesada en estos imponentes animales. Con un total de 770
            páginas, &quot;El Búfalo&quot; es un libro imprescindible para
            cualquier amante de la historia y la cultura.
          </DarkText>
          <DarkText className="text-primary md:w-full w-4/5 mx-auto">
            Si quieres conocer más sobre los búfalos, te invitamos a leer este
            increíble libro.
          </DarkText>

          <BuyButton
            href="https://donbufalo.com/libro-bufalos"
            target="_blank"
            className="text-foreground bg-secondary hover:bg-secondaryDarker"
          >
            ¡CÓMPRALO AHORA!
          </BuyButton>
        </div>

        <div className="w-full h-full hidden md:block  md:w-2/5 flex  relative ">
          <BookImage
            className=" "
            fill
            objectFit="contain"
            src={bookImg}
            alt={`Libro "El Búfalo"`}
            sizes="(max-width: 768px) 40vw, 50vw"
          />
        </div>
      </CustomContainer>
    </BookContainer>
  );
}
