import "../styles/components/Form.scss";
import PropTypes from "prop-types";

const GenderForm = ({ filters, handleInputs }) => {
  const handleChangeGender = (ev) => {
    handleInputs(ev.target.name, ev.target.value);
  };

  return (
    <div className="form__section">
      <label className="form__section--label" htmlFor="gender">
        Escoge un género:
      </label>
      <select
        className="form__section--input"
        name="gender"
        id="gender"
        value={filters.gender}
        onChange={handleChangeGender}
      >
        <option className="form__section--option" value="">
          Ambos
        </option>
        <option className="form__section--option" value="female">
          Mujer
        </option>
        <option className="form__section--option" value="male">
          Hombre
        </option>
      </select>
    </div>
  );
};

GenderForm.propTypes = {
  filters: PropTypes.object,
  handleInputs: PropTypes.func.isRequired,
};

GenderForm.defaultPropTypes = {
  filters: {
    house: "Gryffindor",
    name: "",
    gender: "",
  },
};

export default GenderForm;
