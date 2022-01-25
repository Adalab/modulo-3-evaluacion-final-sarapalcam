import '../styles/index.scss';
import '../styles//App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/fetch';
import Header from './Header';
import Form from './Form';
import List from './List';
import Footer from './Footer';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    house: 'Gryffindor',
    name: ''
  });

  useEffect(() => {
    callToApi(filters.house).then((dataFromApi) => {
      setData(dataFromApi);
    });
  }, [filters.house]);

  const handleInputs = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    })
  }

return (
    <div className="App">
      <Header/>
      <main>
        <Form filters={filters} handleInputs={handleInputs}/>
        <List data={data} filters={filters}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
