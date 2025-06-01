import React, { useEffect, useState } from "react";
import { fetchData } from "./apiService";

export default function CatFacts({}) {
    const [data, setData] = useState([]

    )
  useEffect(() => {
    async function load() {
      try {
        const catfacts = await fetchData("https://catfact.ninja/fact" );
        setData(catfacts);
        console.log(catfacts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    load();
    console.log(data)
  }, []);
  return (
    <div>
      <h1>{data.fact}</h1>
     
    </div>
  );
}
