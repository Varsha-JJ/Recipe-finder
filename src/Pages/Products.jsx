import React from 'react';
import Grids from '../Components/Grids';
import Search from '../Components/Search';
import 'bootstrap/dist/css/bootstrap.css';
import Searchgrid from '../Components/Searchgrid'
import Allitemgrid from '../Components/Allitemgrid';
import Categorygrid from '../Components/Categorygrid';
import Popular from '../Components/Popular';


const Products = () => {
  return (
    <div>
      <Search/>
      <Searchgrid/>
      
    </div>
  )
}

export default Products
