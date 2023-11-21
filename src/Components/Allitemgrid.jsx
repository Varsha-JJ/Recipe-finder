import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardsearch from './Cardsearch';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Allitem from './Allitem';

const Allitemgrid = () => {

    const [adata,setadata] = useState([])

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((res)=>{
            console.log(res.data);
            setadata(res.data.meals)
        })
    },[])

  return (
    <div>
      <Container >  
        <Row className='alignrow'>
            {adata?.map((item)=>(  
                    <Col md="auto" className='mt-4'><Allitem image={item.strMealThumb} title={item.strMeal} id={item.idMeal}/></Col>
            ))} 
        </Row>
      
    </Container>
    </div>
  )
}

export default Allitemgrid
