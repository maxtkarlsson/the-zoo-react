import { useParams } from "react-router";
import { Nav } from "./Nav";
import { ShowAnimal } from "./ShowAnimal";
import { getLocalStorage } from "../helpers/getLocalStorage";
import { IAnimal } from "../models/IAnimal";

export const AnimalPage = () => {
  const params = useParams();
  const animals = getLocalStorage();

  const currentAnimal = animals.find(
    (animal) => animal.id.toString() === params.id
  );

  const handleClick = () => {
    //Uppdatera listan, map loop
    //Spara listan i LS
  };

  if (currentAnimal === undefined) {
    return <h1>Inget djur är valt.</h1>;
  } else {
    return (
      <>
        <Nav></Nav>
        <ShowAnimal {...currentAnimal}></ShowAnimal>
        <button>Mata djuret</button>
      </>
    );
  }
};
