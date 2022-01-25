const callToApi = (inputValue) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${inputValue.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.map((eachData) => {
        return {
          name: eachData.name,
          alternate_names: eachData.alternate_names,
          species: eachData.species,
          gender: eachData.gender,
          house: eachData.house,
          alive: eachData.alive,
          image: eachData.image,
        };
      });
      return filteredData;
    });
};

export default callToApi;
