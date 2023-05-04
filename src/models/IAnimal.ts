/*export interface IAnimal {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: number;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  medicine: string;
  isFed: boolean;
  lastFed: string;
}*/

export class IAnimal {
  constructor(
    public id: number,
    public name: string,
    public latinName: string,
    public yearOfBirth: number,
    public shortDescription: string,
    public longDescription: string,
    public imageUrl: string,
    public medicine: string,
    public isFed: boolean,
    public lastFed: string
  ) {}
}
