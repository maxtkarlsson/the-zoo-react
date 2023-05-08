import { IAnimal } from "../models/IAnimal";
import "./ShowAnimal.scss";

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
      <div className="animal-container">
        <div className="animal-info">
          <div className="animal-picture">
            <img className="animal-picture__img" src={imageUrl}></img>
          </div>
          <div className="animal-desc">
            <h3 className="animal-desc__name">{name}</h3>
            <span className="animal-desc__text">{shortDescription}</span>
            <p className="animal-desc__name--fact">Latinsk namn: {latinName}</p>
            <span className="animal-desc__text--fact">{longDescription}</span>
          </div>
        </div>
        <div className="animal-status">
          <p className="animal-status__info">Född: {yearOfBirth}</p>
          <p className="animal-status__info">Medicin: {medicine}</p>
          {!show && (
            <p className="animal-status__hunger--alert">{name} är hungrig.</p>
          )}
          {show && <p className="animal-status__hunger">{name} är mätt.</p>}
          <p className="animal-status__date">Senast matad: {lastFed}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="animal-container-s">
        <div className="animal-info-s">
          <div className="animal-picture-s">
            <img className="animal-picture-s__img" src={imageUrl}></img>
          </div>
          <div className="animal-desc-s">
            <h3 className="animal-desc-s__name">{name}</h3>
            <span className="animal-desc-s__text">{shortDescription}</span>
          </div>
        </div>
        <div className="animal-status-s">
          {!show && (
            <p className="animal-status-s__hunger--alert">{name} är hungrig.</p>
          )}
          {show && <p className="animal-status-s__hunger">{name} är mätt.</p>}
        </div>
      </div>
    );
  }
};
