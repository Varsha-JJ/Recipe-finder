import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Popular = (props) => {

  


  return (
    <div>
      <Card  className='popularstyle mt-4'>
        <CardContent>
            
            <Typography gutterBottom variant="h5" component="div" className='headstylepop'>
            {props.title}
           </Typography>
       
        </CardContent>
    </Card>
     
    </div>
  )
}

export default Popular
