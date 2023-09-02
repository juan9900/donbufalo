import { useState, useEffect } from "react";

export const useCatalog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/make/", {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        const data = await response.json();
        setData(data.data.records);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return data;
};
