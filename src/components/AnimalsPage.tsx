import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { ShowAnimal } from "./ShowAnimal";
import { IAnimal } from "../models/IAnimal";
import axios from "axios";
import { getLocalStorage } from "../helpers/getLocalStorage";
import { setLocalStorage } from "../helpers/setLocalStorage";
import { Link } from "react-router-dom";

export const AnimalsPage = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  const animalsFromLs = getLocalStorage();
  console.log("animalsFromLs = ", animalsFromLs);

  const getData = async () => {
    console.log("getData has been run");

    const response = await axios.get<IAnimal[]>(
      "https://animals.azurewebsites.net/api/animals"
    );
    setAnimals(response.data);
    console.log("setAnimals has been run with response.data");
    setLocalStorage(response.data);
    console.log("setLocalStorage has been run with response.data");
  };

  useEffect(() => {
    if (animalsFromLs.length !== 0) {
      setAnimals(animalsFromLs);
      console.log("setAnimals has been run with animalsFromLs");
    } else if (animalsFromLs.length === 0) {
      // Kör om ls är tom lista:
      getData();
    }
  }, []);

  return (
    <>
      {animals.map((animal, index) => (
        <Link key={index} to={animal.id.toString()}>
          <ShowAnimal {...animal}></ShowAnimal>
        </Link>
      ))}
    </>
  );
};
