import { Link } from 'react-router-dom';

const Character = ({ data, filters }) => {
  //Esta función está repetida en CharacterDetails, intentar pasarla a App
  const getSpecies = (character) => {
    if (character.species === 'human') {
      if (character.gender === 'female') {
        return 'Humana';
      } else {
        return 'Humano';
      }
    } else if (character.species === 'half-giant') {
      return 'Medio-gigante';
    } else if (character.species === 'ghost') {
      return 'fantasma';
    } else if (character.species === 'werewolf') {
      return 'Hombre-lobo';
    }
  };

  const renderedData = data
    .filter((eachData) => {
      return eachData.name
        .toLocaleLowerCase()
        .includes(filters.name.toLocaleLowerCase());
    })
    .filter(eachData => 
        filters.gender === ''
        ? true : eachData.gender === filters.gender
    )
    .map((eachData, index) => {
      return (
        <Link key={index} to={`/character/${eachData.id}`}>
          <li>
            <img
              src={
                eachData.image === ''
                  ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'
                  : eachData.image
              }
              alt={`Imagen de ${eachData.name}`}
            />
            <p>{eachData.name}</p>
            <p>{getSpecies(eachData)}</p>
          </li>
        </Link>
      );
    })

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

//Cambiar el placeholder de la imagen y hacer esa función fuera del html
export default Character;
