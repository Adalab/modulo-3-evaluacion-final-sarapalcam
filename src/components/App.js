import "../styles/index.scss";
import "../styles//App.scss";
import { useEffect, useState } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import localStorage from "../services/localStorage";
import callToApi from "../services/fetch";
import Header from "./Header";
import Form from "./Form";
import CharacterList from "./CharacterList";
import Footer from "./Footer";
import CharacterDetails from "./CharacterDetails";
import NotFoundPage from "./NotFoundPage";

function App() {
  const [data, setData] = useState(localStorage.get('api_data', []));
  const [filters, setFilters] = useState(localStorage.get('filters', {
    house: "Gryffindor",
    name: "",
    gender: "",
  }));
  const [isLoading, setIsLoading] = useState(false);

  //Fetch
  useEffect(() => {
       setIsLoading(true);
    callToApi(filters.house).then((dataFromApi) => {
      setData(dataFromApi);
      setIsLoading(false)
    })  
  }, [filters.house]);

  //LocalStorage
  useEffect(() => {
    localStorage.set('api_data', data);
    localStorage.set('filters', filters);
  }, [data, filters]);

  //Filters handler
  const handleInputs = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  //Router
  const routeData = useRouteMatch("/character/:characterId");

  const getCharactersRoute = () => {
    const characterDetails =
      routeData !== null ? routeData.params.characterId : "";    
    const selectedCharacter = data.find(
      (eachData) => eachData.id === characterDetails
    );
    return selectedCharacter || { name: "El personaje que buscas no existe :(",
    alternateNames: [],
    species: "undefined",
    gender: "undefined",
    house: "undefined",
    alive: false,
    image: "undefined",
    id: "undefined"
  }};

  //Styles 
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
  };

  //Reset filters
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
          <Route exact path="/character/:characterId">
            <CharacterDetails selectedCharacter={getCharactersRoute()} />
          </Route>
          <Route exact path="/">
            <Form
              filters={filters}
              handleInputs={handleInputs}
              handleResetForm={handleResetForm}
            />
            <CharacterList isLoading={isLoading} data={data} filters={filters}/>
          </Route >
          <Route component={NotFoundPage}/>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
