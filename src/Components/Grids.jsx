import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardsmodel from './Cardsmodel';  
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import  { useEffect, useState } from 'react';



const Grids = () => {
  const [data,setdata] = useState([])
  

  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res)=>{
      console.log("res",res.data);
      setdata(res.data.categories)
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (  
    <div>
       <Container >
        <Row className='alignrow'>
        {data?.map((item)=>(  
           
            <Col md="auto" className='mt-4'><Cardsmodel image={item.strCategoryThumb} categorytitle={item.strCategory} title={item.strMeal} id={item.idMeal}/></Col> 
          
        ))}  
        </Row>
      
    </Container>
    </div> 
  )
}

export default Grids
