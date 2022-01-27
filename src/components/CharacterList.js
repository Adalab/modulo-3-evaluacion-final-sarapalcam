import "../styles/components/CharacterList.scss";
import PropTypes from "prop-types";
import Loader from "./Loader";
import Character from "./Character";

const CharacterList = ({ isLoading, data, filters }) => {

  return (
    <>
      <ul className="list">
        <Loader isLoading={isLoading} />
        <Character data={data} filters={filters} />
      </ul>
    </>
  );
};

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.object,
};

CharacterList.defaultPropTypes = {
  filters: {
    house: "Gryffindor",
    name: "",
    gender: "",
  },
};

export default CharacterList;
