import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './containers/home/HomePage';
import Header from './components/header/Header';

function App() {
  return (
    <div className='root'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
