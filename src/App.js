import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <BusinessList></BusinessList>
    </div>
  );
}

export default App;
