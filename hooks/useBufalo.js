"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getBufalo } from "@/helpers/getBufalo";

function formatDateToDDMMYYYY(timestamp) {
  const date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );

  // Extract the day, month, and year components
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
  const year = date.getFullYear();

  // Format the date as "DD/MM/YYYY"
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

const calculateYears = (date) => {
  const birthdateArray = date.split("/"); // Assuming birthdate is in 'DD-MM-YYYY' format
  const birthYear = parseInt(birthdateArray[2], 10);
  const birthMonth = parseInt(birthdateArray[1], 10) - 1; // Months are zero-based
  const birthDay = parseInt(birthdateArray[0], 10);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let ageYears = currentYear - birthYear;
  let ageMonths = currentMonth - birthMonth;
  let ageDays = currentDay - birthDay;

  // Check if the birthdate for this year has not yet occurred
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    ageYears--;
    ageMonths = 12 - birthMonth + currentMonth - 1;
    if (currentDay < birthDay) {
      ageMonths--;
      ageDays = ageDays + 30; // Assuming an average month length of 30 days
    }
  } else if (currentDay < birthDay) {
    ageMonths--;
    ageDays = ageDays + 30; // Assuming an average month length of 30 days
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
};

export const useBufalo = () => {
  const [bufaloData, setBufaloData] = useState({
    arete: "",
    chip_completo: "",
    clasificacion: "",
    nacimiento: "",
    age: "",
    foto_animal: "",
    ficha_animal: "",
    registro_padre_venezolano: "",
    registro_padre_origen: "",
    registro_madre_venezolano: "",
    registro_madre_origen: "",
  });
  const [bufaloTabs, setBufaloTabs] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  const [abuelaTabs, setAbuelaTabs] = useState([
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

      const formatDate = formatDateToDDMMYYYY(response.data.nacimiento);
      const age = calculateYears(formatDate);
      const bufaloDataFull = {
        arete: response.data.arete,
        chip_completo: response.data.chip_completo,
        clasificacion: response.data.clasificacion,
        nacimiento: formatDate,
        age: age,
        foto_animal: response.data.foto_animal,
        ficha_animal: response.data.ficha_animal,
        registro_abuela_origen: response.data.registro_abuela_origen,
        registro_abuela_venezuela: response.data.registro_abuela_venezuela,
        registro_padre_venezolano: response.data.registro_padre_venezolano,
        registro_padre_origen: response.data.registro_padre_origen,
        registro_madre_venezolano: response.data.registro_madre_venezolano,
        registro_madre_origen: response.data.registro_madre_origen,
      };
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

      setAbuelaTabs([
        {
          title: "Abuela Or.",
          content: bufaloDataFull.registro_abuela_origen,
        },
        {
          title: "Abuela Ve.",
          content: bufaloDataFull.registro_abuela_venezuela,
        },
      ]);
      setDataLoaded(true);
    };

    fecthBufalo();
  }, [id]);

  return { dataLoaded, bufaloData, bufaloTabs, bufaloNotFound, abuelaTabs };
};
