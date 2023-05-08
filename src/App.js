import './App.css';

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

import HomePage from './containers/home/HomePage';
import Header from './containers/header/Header';
import Product from './containers/product/Product';
import Register from './containers/register_login/Register';

export { app, analytics} from './config/firebase_config'

function App() {
  return (
    <div className='root flex flex-col items-center justify-center'>
      { !window.location.pathname.includes('login') || window.location.pathname.includes('register') && <Header />}
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/product/:id' element={<Product />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
