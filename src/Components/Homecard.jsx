import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Homecard = () => {

    const cardalign = {
        position: 'absolute',
        zIndex: 1,
        top: '50%', 
        borderRadius : '0px',
        padding : '50px'
        
    }
  return (
    <Card sx={{ maxWidth: 545 ,position:'absolute'}} style={cardalign}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Find recipies for every occasion
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Cooking never was easier
            </Typography>
        </CardContent>
  </Card>
  )
}

export default Homecard
