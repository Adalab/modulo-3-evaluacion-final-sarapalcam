import '../styles/components/CharacterDetails.scss';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GryffindorLogo from "../images/gryffindor_logo.png";
import HufflepuffLogo from "../images/hufflepuff_logo.png";
import RavenclawLogo from "../images/ravenclaw_logo.png";
import SlytherinLogo from "../images/slytherin_logo.png";

const CharacterDetails = ({ selectedCharacter }) => {

  const getClassName = () => {
    if (selectedCharacter.house === 'Gryffindor'){
      return 'gryffindor_character'
    } else if (selectedCharacter.house === 'Hufflepuff'){
      return 'hufflepuff_character'
    } else if (selectedCharacter.house === 'Ravenclaw'){
      return 'ravenclaw_character'
    } else if (selectedCharacter.house === 'Slytherin'){
      return 'slytherin_character'
    }
  }


  const getImageSrc = (image) => {
    return image === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
      : image;
  };

  const getAlternateNames = () => {
    const htmlAlternateNames = selectedCharacter.alternateNames.map(
      (eachName, index) => {
        return <li className="character__altNames--item" key={index}>{eachName}</li>;
      }
    );
    if (selectedCharacter.alternateNames.length !== 0) {
      return (
        <>
          <p className="character__text">Nombres alternativos:</p>
          <ul className="character__altNames">{htmlAlternateNames}</ul>
        </>
      );
    }
  };

  const getStatus = () => {
    if (selectedCharacter.alive) {
      if (selectedCharacter.gender === "female") {
        return "Viva";
      } else {
        return "Vivo";
      }
    } else if (!selectedCharacter.alive) {
      if (selectedCharacter.gender === "female") {
        return "Muerta";
      } else {
        return "Muerto";
      }
    }
  };

  //Esta función está repetida en Character, intentar pasarla a App
  const getSpecies = () => {
    if (selectedCharacter.species === "human") {
      if (selectedCharacter.gender === "female") {
        return "Humana";
      } else {
        return "Humano";
      }
    } else if (selectedCharacter.species === "half-giant") {
      return "Medio-gigante";
    } else if (selectedCharacter.species === "ghost") {
      return "fantasma";
    } else if (selectedCharacter.species === "werewolf") {
      return "Hombre-lobo";
    }
  };

  const getGender = () => {
    return selectedCharacter.gender === "female" ? "Mujer" : "Hombre";
  };

  const getHouseImg = (house) => {
    if (house === "Gryffindor") {
      return GryffindorLogo;
    } else if (house === "Hufflepuff") {
      return HufflepuffLogo;
    } else if (house === "Ravenclaw") {
      return RavenclawLogo;
    } else if (house === "Slytherin") {
      return SlytherinLogo;
    }
  };

  return (
    <>
    <Link to="/">
        <button className="character__btn">Volver al listado</button>
      </Link>
    <article className={`character ${getClassName()}`}>
      
      <img 
      className="character__img"
      src={getImageSrc(selectedCharacter.image)}
      alt={`Imagen de ${selectedCharacter.name}`}
      title={`Imagen de ${selectedCharacter.name}`} />
      <p className="character__name">{selectedCharacter.name}</p>
      {getAlternateNames()}
      <p className="character__text">
        Estatus: {getStatus()}{" "}
        {selectedCharacter.alive ? (
          <i className="fas fa-heartbeat character__alive"></i>
        ) : (
          <i className="fas fa-skull character__alive"></i>
        )}
      </p>
      <p className="character__text">Especie: {getSpecies()}</p>
      <p className="character__text">Género: {getGender()}</p>
      <p className="character__text">
        Casa: {selectedCharacter.house}
        <img
        className="character__house"
          src={getHouseImg(selectedCharacter.house)}
          alt={`Escudo de ${selectedCharacter.house}`}
          title={`Escudo de ${selectedCharacter.house}`}
        />
      </p>
    </article>
    </>
  );
};

CharacterDetails.propTypes = {
  selectedCharacter: PropTypes.object.isRequired,
};

//Cambiar el placeholder de la imagen y hacer esa función fuera del html
export default CharacterDetails;
