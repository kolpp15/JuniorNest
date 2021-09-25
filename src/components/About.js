import React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card, makeStyles, Box } from '@material-ui/core';



export default function about() {

  return (
    <>

    <Box display="flex" justifyContent="center" p={5}>

    <Card sx={{ maxWidth: 345 }} style={{color: "red"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media-exp1.licdn.com/dms/image/C5603AQHEoWUpQqVCyQ/profile-displayphoto-shrink_200_200/0/1612510061951?e=1636588800&v=beta&t=VX6svDk7UN1r6mWqf_BslBAZcMg94lfmuxzCX1UVFiQ"
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
          image="https://media-exp1.licdn.com/dms/image/C5603AQHEoWUpQqVCyQ/profile-displayphoto-shrink_200_200/0/1612510061951?e=1636588800&v=beta&t=VX6svDk7UN1r6mWqf_BslBAZcMg94lfmuxzCX1UVFiQ"
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
          image="https://media-exp1.licdn.com/dms/image/C5603AQHEoWUpQqVCyQ/profile-displayphoto-shrink_200_200/0/1612510061951?e=1636588800&v=beta&t=VX6svDk7UN1r6mWqf_BslBAZcMg94lfmuxzCX1UVFiQ"
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