import styled from "@emotion/styled";

export const DarkHeader = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 4rem;
  font-weight: 800;
  line-height: 3.9rem;
  font-family: "Anzeigen", sans-serif;
`;

export const DarkText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2em;
  margin-top: 1.5rem;
  font-family: "Poppins-regular", sans-serif;
`;

export const TexturedContainer = styled.div`
  background: url("/img/TEXTURA.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
