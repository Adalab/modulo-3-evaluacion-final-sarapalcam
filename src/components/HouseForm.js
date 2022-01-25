const HouseForm = ( {filters, handleInputs} ) => {

    const handleChangeHouse = (ev) => {
        handleInputs(ev.target.name, ev.target.value)
    }

  return (
    <>
      <label htmlFor="house">Escoge una casa:</label>
      <select name="house" id="house" value={filters.house} onChange={handleChangeHouse}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  );
};

export default HouseForm;
