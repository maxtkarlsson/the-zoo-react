//import { IAnimal } from "../models/IAnimal";
import { IAnimal } from "../models/IAnimal";

export const getLocalStorage = (): IAnimal[] => {
  //let animals: IAnimal[] = [];

  let animalsFromLS: IAnimal[] = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );

  /*
  animals = animalsFromLS.map((animal) => {
    return new IAnimal(
      animal.id,
      animal.name,
      animal.latinName,
      animal.yearOfBirth,
      animal.shortDescription,
      animal.longDescription,
      animal.imageUrl,
      animal.medicine,
      animal.isFed,
      animal.lastFed
    );
  });*/
  return animalsFromLS;
};
