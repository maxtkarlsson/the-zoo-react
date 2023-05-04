import { IAnimal } from "../models/IAnimal";

export const setLocalStorage = (animals: IAnimal[]) => {
  localStorage.setItem("animals", JSON.stringify(animals) || "[]");
};
