import "../styles/components/Form.scss";
import PropTypes from "prop-types";

const HouseForm = ({ filters, handleInputs }) => {
  const handleChangeHouse = (ev) => {
    handleInputs(ev.target.name, ev.target.value);
  };

  return (
    <div className="form__section">
      <label className="form__section--label" htmlFor="house">
        Escoge una casa:
      </label>
      <select
        className="form__section--input"
        name="house"
        id="house"
        value={filters.house}
        onChange={handleChangeHouse}
      >
        <option className="form__section--option" value="Gryffindor">
          Gryffindor
        </option>
        <option className="form__section--option" value="Hufflepuff">
          Hufflepuff
        </option>
        <option className="form__section--option" value="Ravenclaw">
          Ravenclaw
        </option>
        <option className="form__section--option" value="Slytherin">
          Slytherin
        </option>
      </select>
    </div>
  );
};

HouseForm.propTypes = {
  filters: PropTypes.object,
  handleInputs: PropTypes.func.isRequired,
};

HouseForm.defaultPropTypes = {
  filters: {
    house: "Gryffindor",
    name: "",
    gender: "",
  },
};

export default HouseForm;
