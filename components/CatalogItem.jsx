import styled from "@emotion/styled";
import Image from "next/image";

export default function CatalogItem({ code, imageUrl, category, birthday }) {
  const CustomCard = styled.a`
    width: 80%;
    margin: 0 auto;
    position: relative;
    background: ${(props) => props.theme.colors.cardBackground};
    height: 100%;
    box-shadow: 1px 1px 10px #3b3b3ba2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
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

  const MissingImg = styled.div`
    background: #5b5b5bc9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    p {
      color: #f0f0f08e;
    }
  `;
  return (
    <CustomCard
      href={`https://donbufalo.com/${code}`}
      target="_blank"
      className="flex flex-col"
    >
      {imageUrl.includes("airtable") ? (
        <MissingImg>
          <p>Imagen no disponible</p>
        </MissingImg>
      ) : (
        <Image
          width={600}
          height={600}
          src={imageUrl}
          alt={`Bufalo de Don Bufalo, código: ${code}`}
        />
      )}

      <div className="animal-info py-5 text-center">
        <p>{code}</p>

        <p>CATEGORÍA: {category}</p>
      </div>
    </CustomCard>
  );
}
