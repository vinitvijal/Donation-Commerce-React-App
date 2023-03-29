import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Catalog from './components/Catalog';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Catalog/>}/>

      </Routes>
    </Router>
  );
}

export default App;
