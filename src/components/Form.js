import HouseForm from "./HouseForm";
import NameForm from "./NameForm";
import GenderForm from "./GenderForm";

const Form = ( {filters, handleInputs, handleResetForm} ) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    const handleClickReset = () => {
        handleResetForm()
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <NameForm filters={filters} handleInputs={handleInputs}/>
            <HouseForm filters={filters} handleInputs={handleInputs}/>
            <GenderForm filters={filters} handleInputs={handleInputs}/>
            <button onClick={handleClickReset}>Eliminar filtros</button>
        </form>
        )
}

export default Form;