import styled from "@emotion/styled";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function CatalogItem({ code, imageUrl, category, birthday }) {
  const CustomCard = styled.div`
    width: 80%;
    margin: 2rem auto;
    position: relative;
    background: ${(props) => props.theme.colors.cardBackground};

    box-shadow: 1px 1px 10px #3b3b3ba2;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: 100% 100%;
      border-radius: 0;
    }

    p {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 400;
      font-family: "Poppins-regular", sans-serif;
    }

    .animal-info p:first-of-type {
      font-size: 1.5em;
    }
  `;

  const CardTitle = styled.h4`
    font-weight: 800;
    font-family: "Anzeigen", sans-serif;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primary};
  `;
  return (
    <CustomCard>
      <Image src={imageUrl} alt={`Bufalo de Don Bufalo, código: ${code}`} />
      <div className="animal-info py-5 text-center">
        <p>{code}</p>

        <p>CATEGORÍA: {category}</p>
      </div>
    </CustomCard>
  );
}
