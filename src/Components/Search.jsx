import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setsearchdatas } from './DataSlice'

const Search = () => {

  const result = useSelector((state)=>state.datastore.searchdatas)

  const dispatch = useDispatch();

  const [searchdata,setsearchdata] = useState('')




  const change = (event) =>{
    setsearchdata(event.target.value)
    console.log(searchdata);

  }

  const handlesearch = () => {
          axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchdata}`).then((res)=>{
            console.log(res.data);
            dispatch(setsearchdatas(res.data.meals));
            console.log(result);
          
           
            
          }).catch((error)=>{
            console.log(error);
          })
  }

  


  return (
    <div className='search-bar'>
      <Container className="mt-5 searchalign">
            <Form className='widthform d-flex' >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
                onChange ={change}
              />
              
              <Button className="rounded-pill" variant="outline-primary" onClick={handlesearch} >
                Search
              </Button>
            </Form>
    </Container>
   
    </div>
  )
}

export default Search
