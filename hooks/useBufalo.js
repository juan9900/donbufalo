import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getBufalo } from "@/helpers/getBufalo";

const calculateYears = (date) => {
  const parsedDate = new Date(date);
  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years
  const yearsPassed = currentDate.getFullYear() - parsedDate.getFullYear();

  return yearsPassed;
};

export const useBufalo = () => {
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

  return { dataLoaded, bufaloData, bufaloTabs, bufaloNotFound };
};
