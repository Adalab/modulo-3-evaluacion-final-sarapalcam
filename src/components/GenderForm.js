const GenderForm = ({ filters, handleInputs }) => {
  const handleChangeGender = (ev) => {
    handleInputs(ev.target.name, ev.target.value);
  };

  return (
    <>
      <label htmlFor="gender">Escoge un género:</label>
      <select
        name="gender"
        id="gender"
        value={filters.gender}
        onChange={handleChangeGender}
      >
        <option value="">Ambos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </>
  );
};

export default GenderForm;
