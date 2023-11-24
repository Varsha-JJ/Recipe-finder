import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from './Pages/Navbars';
import Products from './Pages/Products';
import Favorate from './Pages/Favorate';
import Popular from './Components/Popular';
import Cardsmodel from './Components/Cardsmodel';
import Cardbutton from './Components/Cardbutton';
import Detailpage from './Pages/Detailpage';
import { Provider } from 'react-redux';
import store from './Components/Store';
import Grids from './Components/Grids';
import Categorygrid from './Components/Categorygrid';
import Categoryitem from './Pages/Categoryitem';
import Country from './Pages/Country';
import Countryfilter from './Components/Countryfilter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbars/>}>
          <Route path="/" element={<App/>}/>
          <Route path="all" element={<Products/>}/>
          <Route path="favorates" element={<Favorate/>}/>
          <Route path="popular" element={<Popular/>}/>
          <Route path="country" element={<Country/>}/>
          <Route path="card" element={<Cardsmodel/>}/>
          <Route path="grid" element={<Grids/>}/>
          <Route path="cardbtn" element={<Cardbutton/>}/>
          <Route path="/detail/:id/" element={<Detailpage/>}/>
          <Route path="categoryitem" element={<Categoryitem/>}/>
          <Route path="/category/:id/" element={<Categorygrid/>}/> 
          <Route path="/country/:id/" element={<Countryfilter/>}/>    
        </Route>
       
       
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
