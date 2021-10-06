import React from 'react';
import { LinkedIn, GitHub }     from '@material-ui/icons';
import { danFace, erminioFace } from '../assets/images'; 
import { CardActionArea, Typography, CardMedia, CardContent, Card, Grid } from '@material-ui/core';


export default function About() {

  return (
    <>
    <Typography variant="caption" key="job-title-label">
        <h1 className='title'>The Team</h1>
    </Typography>
    
    <Grid container style={{textAlign: 'center'}} spacing={8}>   

    <Grid item xs={4} >
    <Card sx={{ maxWidth: 345 }} style={{color: "#617A8E", minHeight: "500px"}}>
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
            Full stack web developer transitioning from e-commerce industry. I enjoy making smooth functions and code and am excited to improve my skills in development while creating products that enrich the community.
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
    <Card sx={{ maxWidth: 345 }} style={{color: "#617A8E", minHeight: "500px"}}>
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
          Eight years working experience as a system analyst at Bank Itaú Unibanco S.A. (Brazil). I am creative, innovative, self-motivated, and a forward-thinker. Extremely collaborative with colleagues and clients, fostering relationships of respect.


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
    <Card sx={{ maxWidth: 345 }} style={{color: "#617A8E", minHeight: "500px"}}>
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
            Full Stack web developer with experience in the financial, education, and fashion industry. I am passionate about learning and developing user-friendly web applications and am excited to work collaboratively with a team to develop further as a coder.
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

