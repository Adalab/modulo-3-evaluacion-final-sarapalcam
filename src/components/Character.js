import '../styles/components/CharacterList.scss';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Character = ({ data, filters }) => {
  //Cambiar el placeholder de la imagen
  const getImageSrc = (image) => {
    return image === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
      : image;
  };

  //Esta función está repetida en CharacterDetails, intentar pasarla a App
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

  const renderedData = data
    .filter((eachData) => {
      return eachData.name
        .toLocaleLowerCase()
        .includes(filters.name.toLocaleLowerCase());
    })
    .filter((eachData) =>
      filters.gender === "" ? true : eachData.gender === filters.gender
    )
    .map((eachData, index) => {
      return (
        <Link key={index} to={`/character/${eachData.id}`}>
          <li >
            <article className="list__article">
              <img
                className="list__article--img"
                src={getImageSrc(eachData.image)}
                alt={`Imagen de ${eachData.name}`}
                title={`Imagen de ${eachData.name}`}
              />
              <p className="list__article--name">{eachData.name}</p>
              <p className="list__article--species">{getSpecies(eachData)}</p>
            </article>
          </li>
        </Link>
      );
    });
  if (renderedData.length > 0) {
    return renderedData;
  } else {
    return (
      <p>
        ¡Ooops! No hemos encontrado ningún personaje que coincida con el nombre
        que estás buscando.
      </p>
    );
  }
};

Character.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.object,
};

Character.defaultPropTypes = {
  filters: {
    house: "Gryffindor",
    name: "",
    gender: "",
  },
};

export default Character;
