import { useParams } from "react-router";
import { ShowAnimal } from "./ShowAnimal";
import { getLocalStorage } from "../helpers/getLocalStorage";
import { setLocalStorage } from "../helpers/setLocalStorage";
import { IAnimal } from "../models/IAnimal";
import { useState } from "react";
import "./AnimalPage.scss";

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
        let date = new Date();
        animal.lastFed = date.toLocaleString("se-SE", {
          timeZone: "Europe/Rome",
        });
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
        <ShowAnimal {...currentAnimal} longDesc={true}></ShowAnimal>
        <button disabled={currentAnimal?.isFed === true} onClick={handleClick}>
          Mata djuret
        </button>
      </>
    );
  }
};
