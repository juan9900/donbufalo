import { db } from "@/firebase/config";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

export const useCatalog = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const bufalosRef = collection(db, "bufalos");
        const q = query(
          bufalosRef,
          where("status", "==", "Activo"),
          orderBy("nacimiento")
        );

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setError("No hay datos");
          throw new Error("No hay datos");
        }
        const data = querySnapshot.docs.map((doc) => doc.data());
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/api/make/", {
  //         method: "GET",
  //         headers: {
  //           // "Cache-Control": "no-cache",
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error. Status:${response.status}`);
  //       }
  //       const data = await response.json();
  //       const animalList = data.data.records;
  //       const validAnimals = animalList.filter(
  //         (animal) => animal.data.status === "Activo"
  //       );
  //       setData(validAnimals);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setError(error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // return { data, loading, error };
};
