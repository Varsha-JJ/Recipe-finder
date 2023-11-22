import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardsearch from './Cardsearch';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Allitem from './Allitem';
import { useSelector } from 'react-redux';

const Allitemgrid = () => {

  const result = useSelector((state)=>state.datastore.fav)
  console.log(result);
  return (
    <div>
      <Container >  
        <Row className='alignrow'>
            {result?.map((item)=>(  
                    <Col md="auto" className='mt-4'><Allitem image={item.image} title={item.title} id={item.id}/></Col>

            ))} 
        </Row>
      
    </Container>
    </div>
  )
}

export default Allitemgrid
