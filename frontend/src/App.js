import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { CreateUser } from './components/CreateUser';

function App() {
  return (
    <div className='App'>
      <h5>React CRUD Oprations using PHP API and MySQL</h5>

      <CreateUser />

    </div>
  );
}

export default App;
