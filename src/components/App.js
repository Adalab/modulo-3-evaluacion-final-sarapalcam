import '../styles/index.scss';
import '../styles//App.scss';
import { useEffect, useState } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import callToApi from '../services/fetch';
import Header from './Header';
import Form from './Form';
import CharacterList from './CharacterList';
import Footer from './Footer';
import CharacterDetails from './CharacterDetails';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    house: 'Gryffindor',
    name: '',
  });

  useEffect(() => {
    callToApi(filters.house).then((dataFromApi) => {
      setData(dataFromApi);
    });
  }, [filters.house]);

  const handleInputs = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  //Intentar meter toda esta parte de Router en una función
  const routeData = useRouteMatch('/character/:characterId');
  const characterDetails =
    routeData !== null ? routeData.params.characterId : '';

  const getCharactersRoute = () => {
    if (characterDetails) {
      return characterDetails;
    } else {
      return {};
    }
  };

  getCharactersRoute();
  /////

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Form filters={filters} handleInputs={handleInputs} />
            <CharacterList data={data} filters={filters} />
          </Route>
          <Route path="/character/:characterId">
            <CharacterDetails data={data} characterDetails={characterDetails}/>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
