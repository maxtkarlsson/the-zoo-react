import { useParams } from "react-router";
import { IAnimal } from "../../models/IAnimal";

interface AnimalProps extends IAnimal {}

// State som hämtar från localstorage när det uppdateras.

export const ShowAnimal = ({
  id,
  name,
  latinName,
  yearOfBirth,
  shortDescription,
  longDescription,
  imageUrl,
  medicine,
  isFed,
  lastFed,
}: AnimalProps) => {
  //const params = useParams();
  return (
    <div>
      <p>{id}</p>
      <h3>{name}</h3>
      <p>{latinName}</p>
      <p>{yearOfBirth}</p>
      <p>{shortDescription}</p>
      <p>{longDescription}</p>
      <p>{imageUrl}</p>
      <p>{medicine}</p>
      <p>{isFed}</p>
      <p>{lastFed}</p>
    </div>
  );
};
