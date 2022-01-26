import '../styles/components/Form.scss';
import PropTypes from 'prop-types';
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
        <form className="form" action="" onSubmit={handleSubmit}>
            <NameForm filters={filters} handleInputs={handleInputs}/>
            <HouseForm filters={filters} handleInputs={handleInputs}/>
            <GenderForm filters={filters} handleInputs={handleInputs}/>
            <button className="form__reset" onClick={handleClickReset}>Eliminar filtros</button>
        </form>
        )
}



Form.propTypes = {
    filters: PropTypes.object,
    handleInputs: PropTypes.func.isRequired,
    handleResetForm: PropTypes.func
  };
  
  Form.defaultPropTypes = {
    filters: {
      house: "Gryffindor",
      name: "",
      gender: "",
    }
  }
  
export default Form;