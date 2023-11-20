import React from 'react';
import homeimage from '../Images/home1.png';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import '../Css/Styles.css';


const Home = () => {
    const item = {
        display : 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }

    
    

  return (
    <div style={{position: 'relative'}}>
    <div xs={2} md={4} lg={1024} xl={1192}>
        <Image src={homeimage} style={{ width: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div style={item}>
            <h1 className='headingStyle'>Find recipies for every occasion</h1>
            <h1 className='headingStyle'> Cooking never was easier</h1>
          </div>
    </div>
    </div>
  )
}

export default Home
