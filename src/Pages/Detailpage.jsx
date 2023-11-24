import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { setfav,removefav ,} from '../Components/DataSlice';
import { useDispatch,useSelector } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Detailpage = () => {
  const {id} = useParams()
  const [detail,setdetail] = useState([])
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.datastore.fav);

 

  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=>{
      console.log("data",res.data);
      setdetail(res.data.meals[0]);
    }).catch((error)=>{
      console.log(error);
    })
  },[id])

  const isFavorite = favorites.find((item) => item.id === detail.idMeal);

  const addToFavorites = ()=>{
  const newItem = { id: detail.idMeal, ...detail };
  dispatch(setfav(newItem));
  console.log("fav", favorites);
  }

  const handleDelete = (id) => {
    dispatch(removefav(id))
  }



  return (
    <div className='detail-style'>
          <Card style={{ width: '65%',border:0 }} className='carddetail'>
            <Card.Body>  
            <Card.Img variant="top" src={detail.strMealThumb} className='img-detail' />
              <Card.Title className='mt-3 namestyle'>{detail.strMeal} <button className='btnheart' onClick={isFavorite ? ()=>handleDelete(detail.idMeal)  : addToFavorites} >{isFavorite ? <FaHeart /> : <FaRegHeart />} </button></Card.Title>     
              <Card.Title className='mt-3 desc'>Instructions</Card.Title>
              <Card.Subtitle className="mb-2 mt-3 text-muted descalign">{detail.strInstructions}</Card.Subtitle>
              <Card.Title className='mt-3 desc'>Ingredients</Card.Title>
              <Card.Subtitle className="mb-2 mt-3 text-muted">
                <ul>
                  <li>{detail.strIngredient1}</li>
                  <li>{detail.strIngredient2}</li>
                  <li>{detail.strIngredient3}</li>
                  <li>{detail.strIngredient4}</li>
                  <li>{detail.strIngredient5}</li>
                  <li>{detail.strIngredient6}</li>
                  <li>{detail.strIngredient7}</li>
                  <li>{detail.strIngredient8}</li>
                  <li>{detail.strIngredient9}</li>
                  <li>{detail.strIngredient10}</li>
                  <li>{detail.strIngredient11}</li>
                  <li>{detail.strIngredient12}</li>
                  <li>{detail.strIngredient13}</li>
                </ul>
              </Card.Subtitle>
              <Card.Title className='mt-3 desc'>Media</Card.Title>
              <Card.Subtitle className="mb-2 mt-3 text-muted">
                <div className="iframe-container">
                  <iframe src={detail.strYoutube} className='media' />
                </div>
              </Card.Subtitle>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Detailpage
