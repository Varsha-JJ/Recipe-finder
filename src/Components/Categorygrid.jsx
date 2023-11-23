import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Categoryitems from './Categoryitems';
import { useParams } from 'react-router-dom';
import Search from './Search';
 

const Categorygrid = () => {
    const { id } = useParams();
    const [data,setdata] = useState([])

    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`).then((res)=>{
        console.log("res", res.data);
        setdata(res.data.meals);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

  return (
    <div>
      <div>
      <Container >
        <Row className='alignrow'>
            {data?.map((item)=>(
                    <Col md="auto" className='mt-4'  key={item.idMeal}><Categoryitems image={item.strMealThumb} title={item.strMeal} cate={item.strCategory} id={item.idMeal}  /></Col>
            ))}    
        </Row>
      
    </Container>
    </div>
    </div>
  )
}

export default Categorygrid
