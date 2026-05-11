import { BrowserRouter, Route, Routes } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'

import Home from './components/Home/Home';
import Details from './components/Details/Details';
import MenuPage from './components/MenuPage/MenuPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/kitchen' element={<MenuPage />}></Route>
        <Route path='/details' element={<Details />}></Route>
        <Route path='/bar' element={<MenuPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
