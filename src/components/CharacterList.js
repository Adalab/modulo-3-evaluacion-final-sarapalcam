import "../styles/components/CharacterList.scss";
import PropTypes from "prop-types";
import Loader from "./Loader";
import Character from "./Character";

const CharacterList = ({ isLoading, filteredData }) => {

  return (
    <>
      <ul className="list">
        <Loader isLoading={isLoading} />
        <Character filteredData={filteredData}/>
      </ul>
    </>
  );
};

CharacterList.propTypes = {
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
