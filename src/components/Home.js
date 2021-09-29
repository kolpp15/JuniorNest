import React from "react";
import {
  Grid,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  makeStyles,
  Box,
  Item,
  DialogTitle,
  Button,
  Divider,
} from "@material-ui/core";
import { homeImage } from "../assets/images";
import { Bar, Radar } from "react-chartjs-2";
import { useBoxStyles } from './Helper/StyleHelper';
import GoogleTrends2 from "./GoogleTrends/GoogleTrends2";
// import Script from 'react-load-script'
import Safe from "react-safe"


//-----------------------------------------------------------

const dataBar = {
  labels: ["DB", "Front-End", "Back-End", "test", "test"],
  datasets: [
    {
      label: "# of Votes", 
      data: [10, 8, 9, 7, 12, 3],
      backgroundColor: [
        "#F54C48",
        "#2DCEB1",
        "#6B6BE4",
        "rgba(30,165,239, 1)",
        "rgb(251,163,64, 0.9)",
      ],
      borderColor: [
        "#F54C48",
        "#2DCEB1",
        "#6B6BE4",
        "rgba(30,165,239, 1)",
        "rgb(251,163,64, 0.9)",
      ],
      borderWidth: 1,
    },
  ],
};

const optionsBar = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

//-----------------------------------------------------------

const dataRadar = {
  labels: ["React", "Ruby", "JavaScript", "Python", "TypeScript", "MaterialUI"],
  datasets: [
    {
      label: "# of Votes",
      data: [9, 0, 5, 6, 7, 9],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const optionsRadar = {
  scale: {
    ticks: { beginAtZero: true },
  },
};

//-----------------------------------------------------------

function Home() {

  const classes = useBoxStyles();
      const keywords = ["Canada Salary"];
      const geo = "CA";
      const time = "today 12-m";
      const property = "";
      const comparison = keywords.map((q) => ({ keyword: q, geo: geo, time: time}));
      const keyword = keywords.join();

  return (
    <>
      <Grid container spacing={9} >

        <Grid item xs={6}>
          <Box className={classes.wrapper} mb={3}>
            <DialogTitle>Web Developer Salary</DialogTitle >
            <Bar data={dataBar} options={optionsBar} />
          </Box>
     




   
          {/* <Box className={classes.wrapper}>
            <DialogTitle>Google Trends</DialogTitle>

              <GoogleTrends2
                type="TIMESERIES"
                comparison={comparison}
                keyword={keyword}
                geo={geo}
                time={time}
                property={property}
              />

            {/* <Safe.script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></Safe.script> 
            <Safe.script type="text/javascript"> trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"Salary Canada","geo":"CA","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=Salary%20Canada&geo=CA&date=today 12-m","guestPath":"https://trends.google.pt:443/trends/embed/"}); </Safe.script> */}
          {/* </Box> */}
     

          <Box className={classes.wrapper}>
            <DialogTitle>Web Developer Skills</DialogTitle>
            <Divider/>
            <Radar data={dataRadar} options={optionsRadar} />
          </Box>

          <Box className={classes.wrapper}>
            <DialogTitle>Web Developer Skills</DialogTitle>


            <GoogleTrends2
            type="GEO_MAP"
            comparison={comparison}
            keyword={keyword}
            geo={"geo"}
            time={time}
            property={property}
            />



          </Box>

        </Grid>
        
        <Grid item xs={6}>
          <Box className={classes.wrapper}>
            <img
              src={homeImage}
              style={{ width: "-webkit-fill-available" }}
              alt="gettheFUCKout"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
