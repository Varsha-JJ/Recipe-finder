import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Categoryitems = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className='cardstyles mt-3'>
            <CardMedia
            component="img"
            height="140"
            image={props.image}   
            alt="food-image"  
            className='imags'
            />
            <CardContent>
            <Typography gutterBottom variant="p" component="div" className='stylealigns' >
            {props.cate}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" className='titles  stylealigns'>
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

export default Categoryitems
