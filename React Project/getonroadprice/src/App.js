import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import CarBrandPage from './Components/CarBrandPage';
import MainFooter from './Components/MainFooter';
import MostSearchedCars from './Components/MostSearchedCars';
import NavHeader from './Components/NavHeader';
import TopHeader from './Components/TopHeader';
// import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <NavHeader />
      {/* <HomePage /> */}
      <BrowserRouter>
          <Routes>
            <Route path='/getonroadprice/home' element={<HomePage/>}/>
            <Route path='/getonroadprice/' element={<HomePage/>}/>
            <Route path='/' element={<HomePage/>}/>

            
            {/* <Route path="*" element={<ErrorPage />} /> */}
            <Route path='/getonroadprice/car-brand' element={<CarBrandPage/>}/>

            {/* <Route path='/Car' element=""/> */}
          </Routes>
        </BrowserRouter>
      <MostSearchedCars />
      <MainFooter />
    </div>
  );
}

export default App;
