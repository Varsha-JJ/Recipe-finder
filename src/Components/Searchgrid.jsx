import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardsearch from './Cardsearch';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Popular from '../Components/Popular';


const Searchgrid = () => {
    const [data,setdata] = useState([])
    const result = useSelector((state)=>state.datastore.searchdatas)
    useEffect(()=>{
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((res)=>{
        console.log(res.data);
        setdata(res.data.meals)
      },[])
    })
    if (result == ''){
      return(
        <div>
       <Container >
        <Row className='alignrow'>
            
              {data?.map((item)=>(
                  <Col md="auto" className='mt-4'><Cardsearch image={item.strMealThumb} title={item.strMeal} cate={item.strCategory} id={item.idMeal}/></Col>
              ))}      
        </Row>
    </Container>
    </div>
      )
    } else {
      return (

        <div>
        <Container >
         <Row className='alignrow'>
             {result
               ?result.map((item)=>(
                   <Col md="auto" className='mt-4'><Cardsearch image={item.strMealThumb} title={item.strMeal} cate={item.strCategory} id={item.idMeal}/></Col>
               ))
               :<Popular title="No Results"/>} 
 
                    
         </Row>
     </Container>
     </div>

        )
    }

  
}

export default Searchgrid
