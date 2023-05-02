import { useParams } from "react-router";
import { Nav } from "../components/Nav/Nav";
import { ShowAnimal } from "../components/ShowAnimal/ShowAnimal";

export const Animal = () => {
  const params = useParams();
  return (
    <>
      <Nav></Nav>
      <ShowAnimal></ShowAnimal>
      <h1>PageAnimal</h1>
    </>
  );
};
