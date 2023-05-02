import { useEffect, useState } from "react";
import { Nav } from "../components/Nav/Nav";

import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const Start = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const getData = async () => {
      console.log("getData has been run");

      const response = await axios.get<IAnimal[]>(
        "https://animals.azurewebsites.net/api/animals"
      );
      setAnimals(response.data);
    };
    getData();
  }, []);

  return (
    <>
      <Nav></Nav>
      <h1>Start h1</h1>
    </>
  );
};
