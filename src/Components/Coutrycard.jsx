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

const Coutrycard = (props) => {
  return (
    <div>  
       <Link to={`/country/${props.area}`} className='linkdec'>
       <Card sx={{ maxWidth: 345 }} className='cardstylecounter'>
            {/* <CardMedia
            component="img"
            height="140"
            image=""
            alt="green iguana"
            className='imgs'
            /> */}
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='title'>
                {props.area}
            </Typography>
            </CardContent>
    </Card>
    </Link>
    </div>
  )
}

export default Coutrycard
