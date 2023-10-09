"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import { Spinner, Skeleton } from "@nextui-org/react";
import BufaloTabs from "@/components/BufaloTabs";
import Link from "next/link";
import Footer from "@/components/Footer";
import wsLogo from "/public/icons/WS.svg";
import { useBufalo } from "@/hooks/useBufalo";
import * as pixel from "/app/lib/fpixel";

const CustomContainer = styled.div`
  background: url("/img/TEXTURA.jpg");
`;
const CustomAnimalTitle = styled.h1`
  font-family: "Anzeigen";
  color: #484848;
`;

const CustomAnimalDescription = styled.p`
  font-family: "Poppins-Regular";
  margin: 0.3rem 0;
  display: inline-block;
  color: #484848;
`;

const CustomAnimalSubTitle = styled.h2`
  font-family: "Anzeigen";
  margin: 0.3rem 0;
  color: #484848;
`;

const AnimalImageContainer = styled.div`
  height: 30rem;
  position: relative;
`;

const CustomSpinner = styled(Spinner)`
  .border-b-warning {
    border-bottom-color: #e6e6e6;
  }

  span {
    color: #e6e6e6;
  }
`;

const CustomImage = styled(Image)`
  border-radius: 1rem;
`;

const WhatsappButton = styled.a`
  background-color: #37bc30;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 1.2rem;
  padding: 0.2rem 2rem;
  border-radius: 0.6rem;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #198d44;
  }
`;

const CustomHeading = styled.h2`
  font-family: "Anzeigen";
`;

export default function BufaloScreen() {
  const { bufaloData, bufaloTabs, dataLoaded, bufaloNotFound, abuelaTabs } =
    useBufalo();

  const abuelaTabsFilter = abuelaTabs.filter((tab) => tab.content !== "");
  if (bufaloData === false) {
    return (
      <CustomContainer className="overflow-hidden min-h-screen flex flex-col justify-center items-center px-10 text-center">
        <h1 className="text-3xl text-black font-bold">
          No pudimos encontrar al búfalo que estabas buscando
        </h1>
        <p className="text-black text-xl  mt-10">
          Puedes ver nuestro catálogo haciendo click{" "}
          <Link
            className="text-secondary font-bold text-xl"
            href={"/#catalogo-container"}
          >
            AQUÍ
          </Link>
        </p>
      </CustomContainer>
    );
  }

  return (
    <CustomContainer className="3xl:pt-40 pt-20 min-h-screen h-full">
      <Link
        className="text-xl rounded-lg px-5 py-2 ml-20 mt-20  bg-gray-200 ease-in-out duration-100 transition-all hover:bg-gray-300 text-black md:ml-20 ml-3 mr-auto md:mr-0 w-fit"
        href={"/#catalogo-container"}
      >
        {"Volver a inicio"}
      </Link>
      <div className="w-100  flex flex-col lg:flex-row mt-10">
        <div className="flex-1 flex flex-col lg:flex-row  justify-end ">
          <Skeleton
            isLoaded={dataLoaded}
            className="rounded-lg w-full lg:w-1/2  md:mr-10 w-5/6 mx-auto mb-2 md:mb-0"
          >
            <AnimalImageContainer className="rounded w-full">
              {bufaloData?.foto_animal && (
                <CustomImage
                  className="h-full"
                  src={bufaloData.foto_animal || ""}
                  fill
                  objectFit="contain"
                  alt={`Bufalo ${bufaloData.arete}`}
                  sizes="(max-width: 768px) 80vw, 33vw"
                ></CustomImage>
              )}
            </AnimalImageContainer>
          </Skeleton>
        </div>

        <div className="flex flex-1 flex-col justify-center md:items-start  items-center">
          <Skeleton isLoaded={dataLoaded} className="rounded-lg">
            <CustomAnimalTitle className="text-6xl  w-fit mb-10 ">
              {`Arete: `}
              <CustomAnimalDescription className="text-5xl">
                {`${bufaloData.arete}`}
              </CustomAnimalDescription>
            </CustomAnimalTitle>
          </Skeleton>

          <Skeleton isLoaded={dataLoaded} className="rounded-lg mt-1">
            <CustomAnimalSubTitle className="text-4xl">
              Chip:{" "}
              <CustomAnimalDescription className="text-3xl">
                {bufaloData.chip_completo}
              </CustomAnimalDescription>
            </CustomAnimalSubTitle>
          </Skeleton>

          <Skeleton isLoaded={dataLoaded} className="rounded-lg mt-1">
            <CustomAnimalSubTitle className="text-4xl">
              Clasificación:{" "}
              <CustomAnimalDescription className="text-3xl">
                {bufaloData.clasificacion}
              </CustomAnimalDescription>
            </CustomAnimalSubTitle>
          </Skeleton>
          <Skeleton isLoaded={dataLoaded} className="rounded-lg mt-1">
            <CustomAnimalSubTitle className="md:text-left text-center text-4xl">
              Fecha de nacimiento:{" "}
              <CustomAnimalDescription className="text-3xl">
                {bufaloData.nacimiento}
              </CustomAnimalDescription>
            </CustomAnimalSubTitle>
          </Skeleton>

          <Skeleton isLoaded={dataLoaded} className="rounded-lg mt-1 ">
            <CustomAnimalSubTitle className="text-4xl">
              Edad:{" "}
              <CustomAnimalDescription className="text-3xl">
                {bufaloData.age.years === 1
                  ? "1 año "
                  : bufaloData.age.years === 0
                  ? ""
                  : `${bufaloData.age.years} años`}
                {bufaloData.age.years > 1 && bufaloData.age.months > 0 && " y "}
                {bufaloData.age.months === 1
                  ? "1 mes"
                  : bufaloData.age.months === 0
                  ? ""
                  : `${bufaloData.age.months} meses`}
              </CustomAnimalDescription>
            </CustomAnimalSubTitle>
          </Skeleton>

          <WhatsappButton
            href={`https://donbufalo.com/whatsapp-reproductores`}
            target="_blank"
            isDisabled={!dataLoaded}
            className="flex flex-row items-center justify-center"
            onClick={() => {
              pixel.event(
                process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
                `btn-${bufaloData.arete}`
              );
            }}
          >
            <Image
              className="h-[2rem] w-[2rem] pr-1 py-1"
              src={wsLogo}
              alt="logo whatsapp"
            />{" "}
            ¡Me interesa!
          </WhatsappButton>
        </div>
      </div>
      <CustomHeading className="text-5xl text-black text-center mt-16">
        Ficha
      </CustomHeading>
      <div className=" bg-background drop-shadow rounded-lg p-5 w-11/12 3xl:w-2/6 mt-5 md:w-3/6 mx-auto h-[20rem] xl:h-[40rem]">
        <Skeleton isLoaded={dataLoaded} className="rounded-lg w-full h-full ">
          <Image
            className="w-full"
            objectFit="contain"
            alt={`Ficha de bufalo ${bufaloData.arete}`}
            src={bufaloData.ficha_animal}
            fill
          />
        </Skeleton>
      </div>

      {abuelaTabsFilter.length > 0 && (
        <>
          <CustomHeading className="text-5xl text-black text-center mt-16">
            Registros de abuela
          </CustomHeading>

          <div className=" 3xl:w-2/6  md:w-3/6 mx-auto  ">
            <Skeleton isLoaded={dataLoaded} className="rounded-lg mt-0  ">
              <BufaloTabs tabs={abuelaTabs} />
            </Skeleton>
          </div>
        </>
      )}

      <CustomHeading className="text-5xl text-black text-center mt-10">
        Registros de padres
      </CustomHeading>
      <div className=" 3xl:w-2/6  md:w-3/6 mx-auto  ">
        <Skeleton isLoaded={dataLoaded} className="rounded-lg mt-0 ">
          <BufaloTabs tabs={bufaloTabs} />
        </Skeleton>
      </div>
      <Footer />
    </CustomContainer>
  );
}
