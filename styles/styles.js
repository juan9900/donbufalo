import styled from "@emotion/styled";

export const Theme = {
  colors: {
    primary: "#2c272b",
    secondary: "#592c33",
    secondaryDarker: "#472429",
    transparentSecondary: "#592c334a",
    black: "#2e2c2e",
    foreground: "#fdfdfd",
    foregroundDarker: "#d1d1d1",
    darkText: "#212427",
    gray: "#a6a4a4",
    cardBackground: "#eeeeee",
    bgDark: "#202124",
  },
};

export const DarkHeader = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  line-height: 3.9rem;
  font-family: "Anzeigen", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

export const DarkText = styled.p`
  font-size: 1.2em;
  margin-top: 1.5rem;
  font-family: "Poppins-regular", sans-serif;
  @media screen and (min-width: 1920px) {
    font-size: 1.6em;
  }
`;

export const TexturedContainer = styled.div`
  background: url("/img/TEXTURA.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
