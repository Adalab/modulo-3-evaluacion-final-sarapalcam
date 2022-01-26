import "../styles/index.scss";
import "../styles//App.scss";
import { useEffect, useState } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
// import localStorage from "../services/localStorage";
import callToApi from "../services/fetch";
import Header from "./Header";
import Form from "./Form";
import CharacterList from "./CharacterList";
import Footer from "./Footer";
import CharacterDetails from "./CharacterDetails";
import NotFoundPage from "./NotFoundPage";

//NO FUNCIONA EL LOCAL STORAGE CON LOS QUE NO SON DE GRYFFNDOR. PENSARLO BIEN
function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    house: "Gryffindor",
    name: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    callToApi(filters.house).then((dataFromApi) => {
      setData(dataFromApi);
      setIsLoading(false)
    });
  }, [filters.house]);

  const handleInputs = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const routeData = useRouteMatch("/character/:characterId");

  const getCharactersRoute = () => {
    const characterDetails =
      routeData !== null ? routeData.params.characterId : "";
    const selectedCharacter = data.find(
      (eachData) => eachData.id === characterDetails
    );
    //ESTO NO FUNCIONA PORQUE LOS NOMBRES ALTERNATIVOS SON UN ARRAY Y DA FALLO
    return selectedCharacter || {};
  };

  const setClassNameApp = () => {
    if (filters.house === `Gryffindor`){
      return "App__gryffindor"
    } else if (filters.house === "Hufflepuff") {
      return "App__hufflepuff";
    } else if (filters.house === "Ravenclaw") {
      return "App__ravenclaw";
    } else if (filters.house === "Slytherin") {
      return "App__slytherin";
    }
  }

  const handleResetForm = () => {
    setFilters({
      house: "Gryffindor",
      name: "",
      gender: "",
    });
  };

  return (
    <div className={`App ${setClassNameApp()}`}>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/character/:characterId">
            <CharacterDetails selectedCharacter={getCharactersRoute()} />
          </Route>
          <Route exact path="/">
            <Form
              filters={filters}
              handleInputs={handleInputs}
              handleResetForm={handleResetForm}
            />
            <CharacterList isLoading={isLoading} data={data} filters={filters} />
          </Route>
          {/* Funciona con las estáticas pero no con las dinámicas */}
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
