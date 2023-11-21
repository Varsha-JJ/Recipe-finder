import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import item from '../Images/item.png';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const Cardbutton = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className='cardstyles'>
            <CardMedia
            component="img"
            height="140"
            image={item}  
            alt="green iguana"
            className='imags'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='titles'>
              Cheesy Sausage Lasagna with soup
              </Typography>
              <Button className='viewbtn'>View details</Button>
            </CardContent>
    </Card>
    </div>
  )
}

export default Cardbutton
