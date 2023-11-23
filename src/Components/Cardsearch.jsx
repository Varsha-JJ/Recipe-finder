import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import item from '../Images/item.png';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { setfav,removefav } from '../Components/DataSlice';
import { useDispatch,useSelector } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Cardsearch = (props) => {


  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.datastore.fav);

  const isFavorite = favorites.find((item) => item.id === props.id);

  const addToFavorites = () => {
    dispatch(setfav(props));
    
  };

  const handleDelete = (id) => {
    dispatch(removefav(id))
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className='cardstyles'>
            <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="green iguana"
            className='imags'  
            />
            <button onClick={isFavorite ? ()=>handleDelete(props.id)  : addToFavorites} className='btnheart heartalign'>{isFavorite ? <FaHeart /> : <FaRegHeart />}</button>
            <CardContent>
            <Typography gutterBottom variant="p" component="div" className='stylealigns' >
            {props.cate}
            </Typography>  
            <Typography gutterBottom variant="h5" component="div" className='titles stylealigns'>
            {props.title} 
            </Typography>
            <div className='btnalign'>
            <Link to={`/detail/${props.id}`}>
            <Button className='viewbtn'>View details</Button>
            </Link>
            </div>
            </CardContent>
    </Card>
    
    </div>
  )
}

export default Cardsearch
