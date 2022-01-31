import GryffindorLogo from "../images/gryffindor_logo.png";
import HufflepuffLogo from "../images/hufflepuff_logo.png";
import RavenclawLogo from "../images/ravenclaw_logo.png";
import SlytherinLogo from "../images/slytherin_logo.png";

const getImageSrc = (character) => {
  if (character.image === "") {
    if (character.house === "Gryffindor") {
      return GryffindorLogo;
    } else if (character.house === "Hufflepuff") {
      return HufflepuffLogo;
    } else if (character.house === "Ravenclaw") {
      return RavenclawLogo;
    } else if (character.house === "Slytherin") {
      return SlytherinLogo;
    }
  } else {
    return character.image;
  }
};

const getCardClassName = (character) => {
  if (character.house === "Gryffindor") {
    return "gryffindor__card";
  } else if (character.house === "Hufflepuff") {
    return "hufflepuff__card";
  } else if (character.house === "Ravenclaw") {
    return "ravenclaw__card";
  } else if (character.house === "Slytherin") {
    return "slytherin__card";
  }
};

const getSpecies = (character) => {
  if (character.species === "human") {
    if (character.gender === "female") {
      return "Humana";
    } else {
      return "Humano";
    }
  } else if (character.species === "half-giant") {
    return "Medio-gigante";
  } else if (character.species === "ghost") {
    return "fantasma";
  } else if (character.species === "werewolf") {
    return "Hombre-lobo";
  }
};

const getCharacterClassName = (character) => {
    if (character.house === "Gryffindor") {
      return "gryffindor_character";
    } else if (character.house === "Hufflepuff") {
      return "hufflepuff_character";
    } else if (character.house === "Ravenclaw") {
      return "ravenclaw_character";
    } else if (character.house === "Slytherin") {
      return "slytherin_character";
    }
  };

  const getAlternateNames = (character) => {
    const htmlAlternateNames = character.alternateNames.map(
      (eachName, index) => {
        return (
          <li className="character__altNames--item" key={index}>
            {eachName}
          </li>
        );
      }
    );
    if (character.alternateNames.length !== 0) {
      return (
        <>
          <p className="character__text">Nombres alternativos:</p>
          <ul className="character__altNames">{htmlAlternateNames}</ul>
        </>
      );
    }
  };

  const getStatus = (character) => {
    if (character.alive) {
      if (character.gender === "female") {
        return "Viva";
      } else {
        return "Vivo";
      }
    } else if (!character.alive) {
      if (character.gender === "female") {
        return "Muerta";
      } else {
        return "Muerto";
      }
    }
  };

  const getGender = (character) => {
    return character.gender === "female" ? "Mujer" : character.gender === "male" ? "Hombre" : "undfined";
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

const visualFunctions = {
  getImageSrc: getImageSrc,
  getCardClassName: getCardClassName,
  getCharacterClassName: getCharacterClassName,
  getSpecies: getSpecies,
  getAlternateNames: getAlternateNames,
  getStatus: getStatus,
  getGender: getGender,
  getHouseImg: getHouseImg
};

export default visualFunctions;
