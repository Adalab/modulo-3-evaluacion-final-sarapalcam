import "../styles/components/CharacterDetails.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import visualFunctions from "../services/styles_translate_functions";

const CharacterDetails = ({ selectedCharacter }) => {

  //Render
  return (
    <>
      <Link to="/">
        <button className="character__btn">Volver al listado</button>
      </Link>
      <article className={`character ${visualFunctions.getCharacterClassName(selectedCharacter)}`}>
        <img
          className="character__img"
          src={visualFunctions.getImageSrc(selectedCharacter)}
          alt={`Imagen de ${selectedCharacter.name}`}
          title={`Imagen de ${selectedCharacter.name}`}
        />
        <div className="character__container">
          <p className="character__name">{selectedCharacter.name}</p>
          {visualFunctions.getAlternateNames(selectedCharacter)}
          <p className="character__text">
            Estatus: {visualFunctions.getStatus(selectedCharacter)}{" "}
            {selectedCharacter.alive ? (
              <i className="fas fa-heartbeat character__icon--alive"></i>
            ) : (
              <i className="fas fa-skull character__icon--dead"></i>
            )}
          </p>
          <p className="character__text">Especie: {visualFunctions.getSpecies(selectedCharacter)}</p>
          <p className="character__text">Género: {visualFunctions.getGender(selectedCharacter)}</p>
          <p className="character__text">Casa: {selectedCharacter.house}</p>
          <img
            className="character__house"
            src={visualFunctions.getHouseImg(selectedCharacter.house)}
            alt={`Escudo de ${selectedCharacter.house}`}
            title={`Escudo de ${selectedCharacter.house}`}
          />
        </div>
      </article>
    </>
  );
};

CharacterDetails.propTypes = {
  selectedCharacter: PropTypes.object.isRequired,
};

CharacterDetails.defaultPropTypes = {
  selectedCharacter: {
    name: "El personaje que buscas no existe :(",
    alternateNames: [],
    species: "undefined",
    gender: "undefined",
    house: "undefined",
    alive: "undefined",
    image: "undefined",
    id: "undefined"
  },
};

export default CharacterDetails;
