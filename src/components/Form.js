import HouseForm from "./HouseForm";
import NameForm from "./NameForm";

const Form = ( {filters, handleInputs} ) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <NameForm filters={filters} handleInputs={handleInputs}/>
            <HouseForm filters={filters} handleInputs={handleInputs}/>
        </form>
        )
}

export default Form;