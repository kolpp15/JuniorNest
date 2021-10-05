import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

//---------------------------------------------- Monthly Data
const genData = () => ({
  labels: ['OCT 3', 'OCT 4', 'OCT 5', 'OCT 6', 'OCT 7'],

  datasets: [
    {
      type: 'bar',
      label: 'Applications',
      backgroundColor: `rgb(255, 99, 132)`,
      borderWidth: 2,
      data: [0, 0, 0, 0, 2]
    },
    // {
    //   type: 'bar',
    //   label: 'Hired',
    //   backgroundColor: `rgb(54, 162, 235)`,
    //   borderWidth: 2,
    //   data: [3, 0, 1, 2, 4, 0, 1, 2, 4, 0, 1, 0],
    // },
  ],
});

const options = {
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

//---------------------------------------------- Table Data

function createData(name, email, phone, linkedin, resume) {
  return { name, email, phone, linkedin, resume };
}

const applicants = [
  createData('Emily', 'emily@gmail.com', "7781234567", "emilygithub", "LINK"),
  // createData('Dan', 'cde@abc.com', "7781234567", "abc", "LINK"),
  // createData('Erminio', 'fge@abc.com', "7781234567", "def", "LINK"),
];

// ------------------------------------------- Render

export default function EmployerDash() {
  const [data, setData] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={8}>
      <Typography variant="caption" key="job-title-label">
        <h1 className='title'>Job Posts</h1>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">

          <TableHead>
            <TableRow>
              <TableCell><strong>Job Title</strong></TableCell>
              <TableCell align="left"><strong>Contract Type</strong></TableCell>
              <TableCell align="left"><strong>Location</strong></TableCell>
              <TableCell align="left"><strong>Skills</strong></TableCell>
              <TableCell align="left"><strong>Salary</strong></TableCell>
              <TableCell align="left"><strong>Description</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody >
            <TableRow>
              <TableCell>
              <Typography>
                  <Link to="/jobDetails/dZAu7ors4R9QndBKm3Hx" style={{ textDecoration: 'none', color: '#637DBB' }}>Web Developer</Link>
                </Typography>
              </TableCell>
              <TableCell align="left">Full Time</TableCell>
              <TableCell align="left">Remote</TableCell>
              <TableCell align="left">React, JS, Firebase</TableCell>
              <TableCell align="left">$60,000</TableCell>
              <TableCell align="left">We are looking for a talented Junior!</TableCell>
            </TableRow>
          </TableBody>

        </Table>
      </TableContainer>

      <Typography variant="caption" key="job-title-label">
        <h1 className='title'>Applicants</h1>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Applicant Name</strong></TableCell>
              <TableCell align="left"><strong>Email</strong></TableCell>
              <TableCell align="left"><strong>Phone</strong></TableCell>
              <TableCell align="left"><strong>LinkedIn</strong></TableCell>
              <TableCell align="left"><strong>Resume</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {applicants.map((applicant) => (
              <TableRow
                key={applicant.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {applicant.name}
                </TableCell>
                <TableCell align="left">{applicant.email}</TableCell>
                <TableCell align="left">{applicant.phone}</TableCell>
                <TableCell align="left">{applicant.linkedin}</TableCell>
                <TableCell align="left">
                  <Typography>
                    <a href="https://firebasestorage.googleapis.com/v0/b/junior-nest.appspot.com/o/files%2Ffaba5031-08ba-4b2a-be99-f1bb1a600213?alt=media&token=a9a74eb9-d8ff-4c4a-bda4-135f916ab6d6" target="_blank" style={{ textDecoration: 'none', color: '#637DBB' }}>LINK</a>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>

    

      <Grid item xs={4} >
        <Typography variant="caption" key="job-title-label">
          <h1 className='title'>Applications</h1>
        </Typography>
          <Card>
            <Bar data={data} options={options} style={{padding: 10}}/>
          </Card>
      </Grid>

      </Grid>
    </>
  )
}



