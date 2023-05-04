import { useParams } from "react-router";
import { Nav } from "../components/Nav/Nav";
import { ShowAnimal } from "../components/ShowAnimal/ShowAnimal";
import { getLocalStorage } from "../helpers/getLocalStorage";

export const Animal = () => {
  const params = useParams();
  const animals = getLocalStorage();

  const currentAnimal = animals.find(
    (animal) => animal.id.toString() === params.id
  );

  if (currentAnimal === undefined) {
    return <h1>Inget djur är valt.</h1>;
  } else {
    return (
      <>
        <Nav></Nav>
        <ShowAnimal {...currentAnimal}></ShowAnimal>
      </>
    );
  }
};
