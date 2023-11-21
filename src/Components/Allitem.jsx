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

const Allitem = (props) => {
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
            <Typography gutterBottom variant="h5" component="div" className='titles'>
            {props.title} {props.id}   
            </Typography>
            <div className='btnalign'>
            <Link to={`/detail/${props.id}`}><Button className='viewbtn'>View details</Button></Link>
            </div>
            </CardContent>
    </Card>
    </div>
  )
}

export default Allitem
