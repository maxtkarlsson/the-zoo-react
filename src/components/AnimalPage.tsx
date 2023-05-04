import { useParams } from "react-router";
import { Nav } from "./Nav";
import { ShowAnimal } from "./ShowAnimal";
import { getLocalStorage } from "../helpers/getLocalStorage";
import { setLocalStorage } from "../helpers/setLocalStorage";
import { IAnimal } from "../models/IAnimal";
import { useState } from "react";

export const AnimalPage = () => {
  const animalsFromLs = getLocalStorage();

  const [animals, setAnimals] = useState<IAnimal[]>(animalsFromLs);

  const params = useParams();

  const currentAnimal = animals.find(
    (animal) => animal.id.toString() === params.id
  );

  const handleClick = () => {
    console.log("handleClick has been run");

    animals.map((animal) => {
      if (animal.id.toString() === params.id) {
        animal.isFed = true;
      } else {
        return;
      }
    });

    setAnimals([...animals]);
    setLocalStorage([...animals]);
  };

  if (currentAnimal === undefined) {
    return <h1>Inget djur är valt.</h1>;
  } else {
    return (
      <>
        <Nav></Nav>
        <ShowAnimal {...currentAnimal}></ShowAnimal>
        <button onClick={handleClick}>Mata djuret</button>
      </>
    );
  }
};
