import { IAnimal } from "../models/IAnimal";

export const ShowAnimal = (animal: IAnimal) => {
  return (
    <div>
      <p>id - {animal.id}</p>
      <h3>name - {animal.name}</h3>
      <p>latinName - {animal.latinName}</p>
      <p>yearOfBirth - {animal.yearOfBirth}</p>
      <p>shortDescription - {animal.shortDescription}</p>
      <p>longDescription - {animal.longDescription}</p>
      <p>imageUrl - {animal.imageUrl}</p>
      <p>medicine - {animal.medicine}</p>
      <p>isFed - {animal.isFed}</p>
      <p>lastFed - {animal.lastFed}</p>
    </div>
  );
};
