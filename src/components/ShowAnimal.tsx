import { IAnimal } from "../models/IAnimal";

interface IShowAnimalProps extends IAnimal {
  longDesc: boolean;
}

export const ShowAnimal = (props: IShowAnimalProps) => {
  const {
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
    longDesc,
  } = props;
  const show = isFed;

  if (longDesc) {
    return (
      <div>
        <p>id - {id}</p>
        <h3>{name}</h3>
        <p>latinName - {latinName}</p>
        <p>yearOfBirth - {yearOfBirth}</p>
        <p>shortDescription - {shortDescription}</p>
        <p>longDescription - {longDescription}</p>
        <p>imageUrl - {imageUrl}</p>
        <p>medicine - {medicine}</p>
        {!show && <p>isFed - false</p>}
        {show && <p>isFed - true</p>}
        <p>lastFed - {lastFed}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>id - {id}</p>
        <h3>{name}</h3>
        <p>latinName - {latinName}</p>
      </div>
    );
  }
};
