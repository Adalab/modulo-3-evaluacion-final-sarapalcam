import "../styles/components/Form.scss";
import PropTypes from "prop-types";

const NameForm = ({ filters, handleInputs }) => {
  const handleChangeName = (ev) => {
    handleInputs(ev.currentTarget.name, ev.currentTarget.value);
  };

  return (
    <div className="form__section">
      <label className="form__section--label" htmlFor="name">
        Escribe un nombre:
      </label>
      <input
        className="form__section--input"
        type="text"
        name="name"
        id="name"
        placeholder="Ej.: Severus Snape"
        value={filters.name}
        onChange={handleChangeName}
      />
    </div>
  );
};

NameForm.propTypes = {
  filters: PropTypes.object,
  handleInputs: PropTypes.func.isRequired,
};

NameForm.defaultPropTypes = {
  filters: {
    house: "Gryffindor",
    name: "",
    gender: "",
  },
};

export default NameForm;
