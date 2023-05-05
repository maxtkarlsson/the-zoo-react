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
        <p>imageUrl - {imageUrl}</p>
        <p>Född: {yearOfBirth}</p>
        <p>{shortDescription}</p>
        <p>Latinsk namn: {latinName}</p>
        <p>{longDescription}</p>
        <p>Medicin: {medicine}</p>
        {!show && <p>{name} är hungrig.</p>}
        {show && <p>{name} är mätt.</p>}
        <p>Senast matad: {lastFed}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>id - {id}</p>
        <h3>{name}</h3>
        <p>imageUrl - {imageUrl}</p>
        <p>{shortDescription}</p>
        {!show && <p>{name} är hungrig.</p>}
        {show && <p>{name} är mätt.</p>}
      </div>
    );
  }
};
