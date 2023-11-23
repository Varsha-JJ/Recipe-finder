import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';   
import { useParams } from 'react-router-dom';



const Cardsmodel = (props) => {

  return (
    <div>
      {/* <Link to={`/category/${props.id}`} className='linkdec'> */}
       <Card sx={{ maxWidth: 345 }} className='cardstyle'>
            <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="green iguana"
            className='imgs'
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='title'>
                {props.categorytitle}
            </Typography>
            </CardContent>
    </Card>
    {/* </Link> */}
    </div>
  )
}

export default Cardsmodel
