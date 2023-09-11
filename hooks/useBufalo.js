"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getBufalo } from "@/helpers/getBufalo";

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const calculateYears = (date) => {
  // Split the date string into components
  const parts = date.split("/");
  const day = parseInt(parts[0], 10);
  const monthName = parts[1];
  const year = parseInt(parts[2], 10);

  // Define a map of month names to month numbers
  const monthMap = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11,
  };

  // Use the map to get the month number
  const month = monthMap[monthName.toLowerCase()];

  // Create the Date object
  const parsedDate = new Date(year, month, day, 0, 0, 0, 0);
  const formatedDate = formatDateToYYYYMMDD(parsedDate);
  console.log(formatedDate);

  const birthdateArray = formatedDate.split("-"); // Assuming birthdate is in 'YYYY-MM-DD' format
  const birthYear = parseInt(birthdateArray[0], 10);
  const birthMonth = parseInt(birthdateArray[1], 10);
  const birthDay = parseInt(birthdateArray[2], 10);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const currentDay = currentDate.getDate();

  let age = currentYear - birthYear;

  // Check if the birthdate for this year has not yet occurred
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }
  console.log(age);
  return age;
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
      const response = await getBufalo(id);
      if (!response.ok) {
        setBufaloData(false);
        setBufaloNotFound(true);
        return;
      }
      const age = calculateYears(response.data.nacimiento);
      const bufaloDataFull = { ...response.data, age };
      setBufaloData(bufaloDataFull);

      setBufaloTabs([
        {
          title: "Padre Ve.",
          content: bufaloDataFull.registro_padre_venezolano,
        },
        {
          title: "Padre Or.",
          content: bufaloDataFull.registro_padre_origen,
        },
        {
          title: "Madre Ve.",
          content: bufaloDataFull.registro_madre_venezolano,
        },
        {
          title: "Madre Br.",
          content: bufaloDataFull.registro_madre_origen,
        },
      ]);
      setDataLoaded(true);
    };

    fecthBufalo();
  }, [id]);

  return { dataLoaded, bufaloData, bufaloTabs, bufaloNotFound };
};
