import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

//---------------------------------------------- Monthly Data
const genData = () => ({
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],

  datasets: [
    {
      type: 'bar',
      label: 'Applications',
      backgroundColor: `rgb(255, 99, 132)`,
      borderWidth: 2,
      data: [10, 2, 5, 8, 10, 3, 5, 9, 11, 4, 6, 2],
    },
    {
      type: 'bar',
      label: 'Hired',
      backgroundColor: `rgb(54, 162, 235)`,
      borderWidth: 2,
      data: [3, 0, 1, 2, 4, 0, 1, 2, 4, 0, 1, 0],
    },
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
  createData('Brian', 'abc@abc.com', "7781234567", "kolpp15", "LINK"),
  createData('Dan', 'cde@abc.com', "7781234567", "abc", "LINK"),
  createData('Erminio', 'fge@abc.com', "7781234567", "def", "LINK"),
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
    <h1 className='title'>Dashboard</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Applicant Name</strong></TableCell>
              <TableCell align="right"><strong>Email</strong></TableCell>
              <TableCell align="right"><strong>Phone</strong></TableCell>
              <TableCell align="right"><strong>LinkedIn</strong></TableCell>
              <TableCell align="right"><strong>Resume</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.map((applicant) => (
              <TableRow
                key={applicant.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {applicant.name}
                </TableCell>
                <TableCell align="right">{applicant.email}</TableCell>
                <TableCell align="right">{applicant.phone}</TableCell>
                <TableCell align="right">{applicant.linkedin}</TableCell>
                <TableCell align="right">{applicant.resume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    
      <div className='header'>
        <h1 className='title'>Monthly Applicants</h1>
      </div>
      <Bar data={data} options={options} />
    </>
  )
}



