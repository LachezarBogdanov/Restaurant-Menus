import { BrowserRouter, Route, Routes } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'

import Home from './components/Home/Home';
import KitchenMain from './components/KitchenMain/KitchenMain';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/kitchen' element={<KitchenMain />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
