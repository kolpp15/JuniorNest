import React from 'react'
import { PermIdentity, Search, Send } from '@material-ui/icons';
import { Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import { flyingPaper } from "../../assets/images";

const updateProfileImg = 'https://firebasestorage.googleapis.com/v0/b/junior-nest.appspot.com/o/UpdateProfile.png?alt=media&token=71c18d52-2cb7-4862-9301-035e10901f22'
const searchJobImg     = 'https://firebasestorage.googleapis.com/v0/b/junior-nest.appspot.com/o/SearchJob.png?alt=media&token=d5250655-1fdd-49ed-a768-33183ae72377'
const applyJobImg      = 'https://firebasestorage.googleapis.com/v0/b/junior-nest.appspot.com/o/ApplyJob.png?alt=media&token=e77696ff-7c3e-4308-a0df-9c9ec20f3b33'

export default function HomeSteps() {
  return (


    <Grid container style={{textAlign: 'center',}} spacing={8}>   
    <Grid item xs={12} md={12} lg={12}>
    <img
             class="animate__animated animate__fadeInLeft "
              src={flyingPaper}
              style={{ width: "70%", marginTop:"80px" }}
              alt="imgHome"
          />  
    
    </Grid>
    <Grid item xs={4} >
    <Card sx={{ maxWidth: 345 }} style={{height: "300px"}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="180"
          image={updateProfileImg}
          alt="update-profile"
          style={ {width: 'auto', marginInline: 'auto', marginTop: '10px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color: '#617A8E'}}>
            Step 1
          </Typography>
          <Typography variant="body2" style={{color: '#617A8E'}}>
            <PermIdentity style={{verticalAlign: "bottom", marginRight: 10, fill: '#637CBC'}}/>
            Update Profile
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={4} >
    <Card sx={{ maxWidth: 345 }} style={{height: "300px"}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="180"
          image={searchJobImg}
          alt="search-job"
          style={ {width: 'auto', marginInline: 'auto', marginTop: '10px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color: '#617A8E'}}>
            Step 2
          </Typography>
          <Typography variant="body2" style={{color: '#617A8E'}}>
            <Search style={{verticalAlign: "bottom", marginRight: 10, fill: '#637CBC'}}/>
            Search Jobs
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={4} >
    <Card sx={{ maxWidth: 345 }} style={{height: "300px"}}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="180"
          image={applyJobImg}
          alt="apply-job"
          style={ {width: 'auto', marginInline: 'auto', marginTop: '10px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color: '#617A8E'}}>
            Step 3
          </Typography>
          <Typography variant="body2" style={{color: '#617A8E'}}>
            <Send style={{verticalAlign: "bottom", marginRight: 10, fill: '#637CBC'}} />
            Apply Job
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  </Grid>


  )
}
