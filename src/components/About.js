import React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card, makeStyles, Box } from '@material-ui/core';
import { danFace, erminioFace } from '../assets/images';


export default function about() {

  return (
    <>

    <Box display="flex" justifyContent="center" p={5}>

    <Card sx={{ maxWidth: 345 }} style={{color: "red"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={danFace}
          alt="erminio-mendes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={erminioFace}
          alt="erminio-mendes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={danFace}
          alt="erminio-mendes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </Box>
  </>

  );
}