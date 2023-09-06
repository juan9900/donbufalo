"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBufalo } from "@/helpers/getBufalo";
import styled from "@emotion/styled";
import Image from "next/image";
import { Spinner, Skeleton, Button } from "@nextui-org/react";
import BufaloTabs from "@/components/BufaloTabs";
import Link from "next/link";
import Footer from "@/components/Footer";
import wsLogo from "/public/icons/WS.svg";
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

const BackButton = styled(Link)``;

const calculateYears = (date) => {
  console.log({ date });
  // const splitedDate = date.split("/");
  // const formatedDate = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`;
  // Parse the date string into a JavaScript Date object
  // console.log({ formatedDate });
  const parsedDate = new Date(date);
  console.log({ parsedDate });
  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years
  const yearsPassed = currentDate.getFullYear() - parsedDate.getFullYear();

  return yearsPassed;
};

export default function BufaloScreen() {
  // TODO: Add a skeleton on every item while the page is loading
  const [bufaloData, setBufaloData] = useState({
    arete: "",
    chip_completo: "",
    clasificacion: "",
    nacimiento: "",
    foto_animal: "",
    registro_padre_venezolano: "",
    registro_padre_colombiano: "",
    registro_madre_venezolana: "",
    registro_madre_brasilena: "",
  });
  const [bufaloTabs, setBufaloTabs] = useState([
    {
      title: "",
      content: "",
    },
  ]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [bufaloNotFound, setBufaloNotFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fecthBufalo = async () => {
      console.log(id);
      const response = await getBufalo(id);
      if (!response.ok) {
        console.log("error");
        setBufaloData(false);
        setBufaloNotFound(true);
        return;
      }
      const age = calculateYears(response.data.nacimiento);
      console.log({ age });
      const bufaloDataFull = { ...response.data, age };
      setBufaloData(bufaloDataFull);

      setBufaloTabs([
        {
          title: "Padre Ve.",
          content: bufaloDataFull.registro_padre_venezolano,
        },
        {
          title: "Padre Co.",
          content: bufaloDataFull.registro_padre_colombiano,
        },
        {
          title: "Madre Ve.",
          content: bufaloDataFull.registro_madre_venezolana,
        },
        {
          title: "Madre Br.",
          content: bufaloDataFull.registro_madre_brasilena,
        },
      ]);
      setDataLoaded(true);
    };

    fecthBufalo();
  }, [id]);

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

  // if (bufaloData === null) {
  //   // return a nextui spinner
  //   return (
  //     <div className="w-full h-screen flex justify-center items-center">
  //       <CustomSpinner
  //         size="large"
  //         label="Cargando bufalo..."
  //         color="warning"
  //       />
  //     </div>
  //   );
  // }

  return (
    <CustomContainer className="3xl:pt-40 pt-20 min-h-screen h-full">
      <Link
        className="text-xl rounded-lg px-5 py-2 ml-20 mt-20  bg-gray-200 text-black md:ml-20 ml-3 mr-auto md:mr-0 w-fit"
        href={"/#catalogo-container"}
      >
        {"< Volver a inicio"}
      </Link>
      <div className="w-100  flex flex-col lg:flex-row mt-10">
        <div className="flex-1 flex flex-col lg:flex-row  justify-end ">
          <Skeleton
            isLoaded={dataLoaded}
            className="rounded-lg w-full lg:w-1/2  md:mr-10 w-5/6 mx-auto mb-2 md:mb-0"
          >
            <AnimalImageContainer className="rounded w-full">
              <CustomImage
                onLoad={() => setImageLoaded(true)}
                className="h-full"
                src={bufaloData.foto_animal}
                fill
                objectFit="contain"
                alt={`Bufalo ${bufaloData.arete}`}
                sizes="(max-width: 768px) 80vw, 33vw"
              ></CustomImage>
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
                {bufaloData.age > 1 ? `${bufaloData.age} años` : "1 año"}
              </CustomAnimalDescription>
            </CustomAnimalSubTitle>
          </Skeleton>

          <WhatsappButton
            href={`https://wa.me/584146429164?text=Hola%2C%20me%20interesa%20el%20búfalo%20con%20arete%20${encodeURIComponent(
              bufaloData.arete
            )}`}
            target="_blank"
            isDisabled={!dataLoaded}
            className="flex flex-row items-center justify-center"
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
      <div className="w-full 3xl:w-2/6  md:w-3/6 mx-auto ">
        <Skeleton isLoaded={dataLoaded} className="rounded-lg mt-10 ">
          <BufaloTabs tabs={bufaloTabs} />
        </Skeleton>
      </div>
      <Footer />
    </CustomContainer>
  );
}
