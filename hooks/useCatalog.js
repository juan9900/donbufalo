import { useState, useEffect } from "react";

export const useCatalog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/make/", {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error. Status:${response.status}`);
        }
        const data = await response.json();
        const animalList = data.data.records;
        const validAnimals = animalList.filter(
          (animal) => animal.data.status === "Activo"
        );
        setData(validAnimals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
};
