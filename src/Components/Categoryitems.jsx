import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Categoryitems = (props) => {
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
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='titles'>
            {props.title}
            </Typography>
            <Button className='viewbtn'>View details</Button>
            </CardContent>
    </Card>
    </div>
  )
}

export default Categoryitems
