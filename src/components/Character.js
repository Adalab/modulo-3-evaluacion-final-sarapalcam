import "../styles/components/CharacterList.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import visualFunctions from "../services/styles_translate_functions";

const Character = ({ filteredData }) => {
  //Map
  const renderedData = filteredData
    .map((eachData, index) => {
      return (
        <Link key={index} to={`/character/${eachData.id}`}>
          <li>
            <article className={`list__article ${visualFunctions.getCardClassName(eachData)}`}>
              <img
                className="list__article--img"
                src={visualFunctions.getImageSrc(eachData)}
                alt={`Imagen de ${eachData.name}`}
                title={`Imagen de ${eachData.name}`}
              />
              <p className="list__article--name">{eachData.name}</p>
              <p className="list__article--species">{visualFunctions.getSpecies(eachData)}</p>
            </article>
          </li>
        </Link>
      );
    });

  //Function return
  if (renderedData.length > 0) {
    return renderedData;
  } else {
    return (
      <p className="list__article--not-found">
        ¡Ooops! No hemos encontrado ningún personaje que coincida con el nombre
        que estás buscando. Prueba con otro.
      </p>
    );
  }
};

Character.propTypes = {
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
