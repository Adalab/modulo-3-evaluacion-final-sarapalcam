const NameForm = ( {filters, handleInputs} ) => {

    const handleChangeName = (ev) => {
        handleInputs(ev.currentTarget.name, ev.currentTarget.value)
    }

  return (
    <>
      <label htmlFor="name">Filtra por el nombre del personaje:</label>
      <input type="text" name="name" id="name" placeholder="Ej.: Harry Potter" value={filters.name} onChange={handleChangeName}/>
    </>
  );
};

export default NameForm;
