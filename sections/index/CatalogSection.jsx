import CatalogCarousel from "/components/CatalogCarousel";
import styled from "@emotion/styled";
import { TexturedContainer } from "@/styles";

const CustomContainer = styled(TexturedContainer)`
  padding-top: 6rem;
  padding-bottom: 5rem;

  position: relative;

  h2 {
    font-size: 6rem;
    font-family: "Anzeigen", sans-serif;
    font-weight: 800;
    width: fit-content;
  }

  h2:before {
    content: "REPRODUCTORES";
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
    -webkit-text-stroke: 1px #592c334a;
    text-stroke: 1px #592c334a;
    z-index: 0;
  }

  .subtitle {
    font-size: 1.3rem;
    margin-top: -2rem;
    font-family: "Poppins-regular", sans-serif;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
      word-wrap: break-word;
      line-height: 2.2rem;
    }

    h2:before {
      font-size: 2.5rem;
      word-wrap: break-word;
      padding: 0 1rem;
      top: -10%;
    }

    .subtitle {
      margin-top: 0;
      font-size: 1.2rem;
    }
  }
`;
export default function CatalogContainer() {
  return (
    <CustomContainer id="catalogo-container">
      <div className="relative title-container">
        <h2 className="text-secondary mx-auto  text-center md:text-left">
          CATÁLOGO DE REPRODUCTORES
        </h2>
      </div>

      <p className="text-primary subtitle mx-auto w-fit text-center md:text-left px-3 md:px-0">
        REVISA NUESTRO CATÁLOGO DE BÚFALOS MACHO
      </p>
      <CatalogCarousel />
    </CustomContainer>
  );
}
