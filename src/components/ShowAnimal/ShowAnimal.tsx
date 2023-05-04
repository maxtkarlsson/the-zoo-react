import { IAnimal } from "../../models/IAnimal";
import { getLocalStorage } from "../../helpers/getLocalStorage";

interface AnimalProps extends IAnimal {}

const handleClick = (currentAnimalId: number) => {
  const animalsFromLs = getLocalStorage();
  //Uppdatera listan, map loop
  //
};

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
      <p>id - {id}</p>
      <h3>name - {name}</h3>
      <p>latinName - {latinName}</p>
      <p>yearOfBirth - {yearOfBirth}</p>
      <p>shortDescription - {shortDescription}</p>
      <p>longDescription - {longDescription}</p>
      <p>imageUrl - {imageUrl}</p>
      <p>medicine - {medicine}</p>
      <p>isFed - {isFed}</p>
      <p>lastFed - {lastFed}</p>
    </div>
  );
};
