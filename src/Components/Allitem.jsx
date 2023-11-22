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
import { useDispatch } from 'react-redux';
import { removefav } from '../Components/DataSlice';

const Allitem = (props) => {
  const dispatch = useDispatch()
  const handleDelete = (id) =>{
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
            <CardContent className='alignbtnview'>
            <Typography gutterBottom variant="h5" component="div" className='titles stylealigns'>
            {props.title}   
            </Typography>
            <div className='btnalign'>
              <Button className='viewbtn' onClick={()=>handleDelete(props.id)}>Remove</Button>
            </div>
            </CardContent>  
    </Card>
    </div>
  )
}

export default Allitem
