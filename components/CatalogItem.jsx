import { useState } from "react";
import styled from "@emotion/styled";
import { Skeleton } from "@nextui-org/skeleton";
import Image from "next/image";
import { Link, toggle } from "@nextui-org/react";
import * as pixel from "/app/lib/fpixel";
import { gtmEvent } from "@/app/lib/gtm";

const CustomCard = styled(Link)`
  width: 80%;
  margin: 0 auto;
  position: relative;
  height: 100%;
  box-shadow: 1px 1px 10px #3b3b3ba2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 1rem;

  p {
    font-weight: 400;
    font-family: "Poppins-regular", sans-serif;
  }

  .animal-info p:first-of-type {
    font-size: 1.5em;
  }

  @media (min-width: 641px) {
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    width: 80%;
  }
  @media (min-width: 950px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
    width: 70%;
  }
  @media (min-width: 1025px) {
    /* big landscape tablets, laptops, and desktops */
  }
  @media (min-width: 1281px) {
    /* hi-res laptops and desktops */
    width: 77%;
  }
  @media (min-width: 1920px) {
    /* hi-res laptops and desktops */
    width: 75%;
  }
`;

const MissingImg = styled.div`
  background: #5b5b5bc9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  width: 100%;
  p {
    color: #f0f0f08e;
  }
`;

const CustomSkeleton = styled(Skeleton)`
  > div {
    height: 100%;
  }
`;

export default function CatalogItem({ code, imageUrl, category, birthday }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showError, setShowError] = useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  const setLoaded = () => {
    setIsLoaded(true);
    setShowError(true);
  };

  return (
    <CustomCard
      onClick={() => {
        pixel.event(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID, "ViewContent");
      }}
      href={`/bufalo/${code}`}
      className="flex flex-col h-full bg-cardBackground"
    >
      <CustomSkeleton
        isLoaded={isLoaded}
        className="relative w-full rounded-t-lg h-full flex-1"
      >
        <div className="h-full rounded-t-lg flex-1 ">
          {showError ? (
            <MissingImg className="rounded-t-lg">
              <p className="text-primary">No se pudo cargar la imagen</p>
            </MissingImg>
          ) : (
            <Image
              onError={setLoaded}
              onLoad={toggleLoad}
              fill
              objectFit="fill"
              src={imageUrl}
              alt={`Bufalo de Don Bufalo, código: ${code}`}
              sizes="(max-width: 768px) 40vw, 20vw"
              className="w-full"
            />
          )}
        </div>
      </CustomSkeleton>

      <div className="animal-info py-5 text-center">
        <p className="text-primary">{code}</p>

        <p className="text-primary">CATEGORÍA: {category}</p>
      </div>
    </CustomCard>
  );
}
