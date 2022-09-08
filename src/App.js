import { useState } from "react";
import './Styles.css';
import MiApi from './components/MiApi';
import Search from './components/Search';

function App() {

  const [charSearch, setCharSearch] = useState([]);

  return (
    <div>
      <Search setCharSearch={ setCharSearch } />
      <MiApi charSearch={ charSearch } />
    </div>
  );
};

export default App;
