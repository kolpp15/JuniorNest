import React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card, makeStyles, Box, Grid } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';
import { danFace, erminioFace } from '../assets/images'; 


export default function About() {

  return (
    <>
    <Typography variant="caption" key="job-title-label">
        <h1 className='title'>The Team</h1>
    </Typography>
    
    <Grid container style={{textAlign: 'center'}} spacing={8}>   

    <Grid item xs={4} >
    <Card sx={{ maxWidth: 345 }} style={{color: "purple", height: "400px"}}>
      <CardActionArea>
        <CardMedia
          
          component="img"
          height="180"
          image={danFace}
          alt="dan-you"
          style={ {borderRadius: '50%', width: '180px', marginInline: 'auto', marginTop: '30px'}}
       
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dan
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Weird Korean Guy
          </Typography>
        </CardContent>

        <CardContent>
          <GitHub style={{margin: '10px'}} />
          <LinkedIn style={{margin: '10px'}} />
        </CardContent>

      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{color: "#178DED", height: "400px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={erminioFace}
          alt="erminio-mendes"
          style={ {borderRadius: '50%', width: '180px', marginInline: 'auto', marginTop: '30px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Erminio
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Weird Brazilian Guy. So RUDE but little funny guy 
          </Typography>
        </CardContent>

        <CardContent>
          <GitHub style={{margin: '10px'}} />
          <LinkedIn style={{margin: '10px'}} />
        </CardContent>

      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }} style={{color: "#f22b79", height: "400px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://media-exp1.licdn.com/dms/image/C5603AQH9BpeS0Lyrdw/profile-displayphoto-shrink_800_800/0/1624055617180?e=1638403200&v=beta&t=NHzh6KdoUSABB1zvql-mIR-CUtMCutIlKKwcPANqJvY"
          alt="brian-sohn"
          style={ {borderRadius: '50%', width: '180px', marginInline: 'auto', marginTop: '30px'}}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Brian
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Just a Perfect MFK 
          </Typography>
        </CardContent>

        <CardContent>
          <GitHub style={{margin: '10px'}} />
          <LinkedIn style={{margin: '10px'}} />
        </CardContent>

      </CardActionArea>
    </Card>
    </Grid>

    </Grid> 
    
    </>

  );
}

