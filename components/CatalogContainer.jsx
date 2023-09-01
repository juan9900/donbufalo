import CatalogCarousel from "./CatalogCarousel";
import styled from "@emotion/styled";
import { data } from "@/mockData/bufalosData";
import { TexturedContainer } from "@/styles";

export default function CatalogContainer() {
  const CatalogContainer = styled(TexturedContainer)`
    padding-top: 10rem;
    padding-bottom: 5rem;

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
      z-index: 0;
    }

    .subtitle {
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.3rem;
      margin-top: -2rem;
      font-family: "Poppins-regular", sans-serif;
    }
  `;
  return (
    <CatalogContainer id="catalogo-container">
      <div className="relative title-container">
        <h2 className="mx-auto"> CATÁLOGO DE BÚFALOS</h2>
      </div>

      <p className="subtitle mx-auto w-fit">
        REVISA NUESTRO CATÁLOGO DE BÚFALOS MACHO
      </p>
      <CatalogCarousel items={data} />
    </CatalogContainer>
  );
}
