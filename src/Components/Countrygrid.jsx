import React, { useEffect, useState } from 'react';
import Coutrycard from './Coutrycard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Countryfilter from './Countryfilter';

const Countrygrid = () => {
   const { id } = useParams();
   const [data,setdata] = useState([])

   useState(()=>{
    axios('https://www.themealdb.com/api/json/v1/1/list.php?a=list').then((res)=>{
        setdata(res.data.meals)
        console.log("data",res.data);
    })
   },[])

    

  return (
    <div>
       <Container >
        <Row className='alignrow'>
         {data?.map((item)=>(
            <Col md="auto" className='mt-4' ><Coutrycard area={item.strArea} /></Col>
         ))}
        
        </Row>
      
    </Container>
    </div>
  )
}

export default Countrygrid
