import { Link } from 'react-router-dom';
import GryffindorLogo from '../images/gryffindor_logo.png';
import HufflepuffLogo from '../images/hufflepuff_logo.png';
import RavenclawLogo from '../images/ravenclaw_logo.png';
import SlytherinLogo from '../images/slytherin_logo.png';

const CharacterDetails = ({ data, characterDetails }) => {
  const selectedCharacter = data.find(
    (eachData) => eachData.id === characterDetails
  );

  const getAlternateNames = () => {
    const htmlAlternateNames = selectedCharacter.alternateNames.map(
      (eachName, index) => {
        return <li key={index}>{eachName}</li>;
      }
    );
    if (selectedCharacter.alternateNames.length !== 0) {
      return (
        <>
          <p>Nombres alternativos:</p>
          <ul>{htmlAlternateNames}</ul>
        </>
      );
    }
  };

  const getStatus = () => {
    if (selectedCharacter.alive) {
      if (selectedCharacter.gender === 'female') {
        return 'Viva';
      } else {
        return 'Vivo';
      }
    } else if (!selectedCharacter.alive) {
      if (selectedCharacter.gender === 'female') {
        return 'Muerta';
      } else {
        return 'Muerto';
      }
    }
  };

  //Esta función está repetida en Character, intentar pasarla a App
  const getSpecies = () => {
    if (selectedCharacter.species === 'human') {
      if (selectedCharacter.gender === 'female') {
        return 'Humana';
      } else {
        return 'Humano';
      }
    } else if (selectedCharacter.species === 'half-giant') {
      return 'Medio-gigante';
    } else if (selectedCharacter.species === 'ghost') {
      return 'fantasma';
    } else if (selectedCharacter.species === 'werewolf') {
      return 'Hombre-lobo';
    }
  };

  const getGender = () => {
    return selectedCharacter.gender === 'female' ? 'Mujer' : 'Hombre';
  };

  const getHouseImg = (house) => {
    if (house === 'Gryffindor') {
      return GryffindorLogo;
    } else if (house === 'Hufflepuff') {
      return HufflepuffLogo;
    } else if (house === 'Ravenclaw') {
      return RavenclawLogo;
    } else if (house === 'Slytherin') {
      return SlytherinLogo;
    }
  };

  return (
    <article>
      <Link to="/">
        <button>Volver al listado</button>
      </Link>
      <img
        src={
          selectedCharacter.image === ''
            ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'
            : selectedCharacter.image
        }
        alt={`Imagen de ${selectedCharacter.name}`}
      />
      <p>{selectedCharacter.name}</p>
      {getAlternateNames()}
      <p>
        Estatus: {getStatus()}{' '}
        {selectedCharacter.alive ? (
          <i className="fas fa-heartbeat"></i>
        ) : (
          <i className="fas fa-skull"></i>
        )}
      </p>
      <p>Especie: {getSpecies()}</p>
      <p>Género: {getGender()}</p>
      <p>
        Casa: {selectedCharacter.house}
        <img
          src={getHouseImg(selectedCharacter.house)}
          alt={`Escudo de ${selectedCharacter.house}`}
          title={`Escudo de ${selectedCharacter.house}`}
        />
      </p>
    </article>
  );
};

//Cambiar el placeholder de la imagen y hacer esa función fuera del html
export default CharacterDetails;

// name: eachData.name,
// alternate_names: eachData.alternate_names,
// species: eachData.species,
// gender: eachData.gender,
// house: eachData.house,
// alive: eachData.alive,
// image: eachData.image,
// id: `${eachData.house.toLowerCase()}_${index}`
