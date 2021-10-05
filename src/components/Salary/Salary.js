import React from 'react'
import { Grid, Card, CardActionArea, DialogTitle, Typography } from "@material-ui/core";
import { Bar, Line } from 'react-chartjs-2';
import { salary } from '../../assets/data/db_salary';
import { MonetizationOn } from "@material-ui/icons";


let low = "";
let med = "";
let high = "";
let nat = "";
let job1_salary = "";
let job2_salary = "";
let job3_salary = "";
let job4_salary = "";
let job5_salary = "";
let job1 = ""
let job2 = ""
let job3 = ""
let job4 = ""
let job5 = ""




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

export default function Salary(props) {
  let jobTitle = props.item[0].title
  console.log("jobTitle*****", jobTitle)
  
    if (Object.keys(salary)[0] === "web_developer" && jobTitle === "Web Developer") {
      low = salary.web_developer.low;
      med = salary.web_developer.med;
      high = salary.web_developer.high;
      nat = salary.web_developer.National;
      job1_salary = salary.web_developer.Mobile_Applications;
      job2_salary = salary.web_developer.Software_Engineer;
      job3_salary = salary.web_developer.Web_Designer;
      job4_salary = salary.web_developer.Data_Engineer;
      job5_salary = salary.web_developer.Business_Intelligence_Architect;
      job1 = "Mobile Applications Developer: "
      job2 = "Software Developer / Engineer: "
      job3 = "Web Designer: "
      job4 = "Data Engineer: "
      job5 = "BI Architect / Developer: "
    } else {
      low = salary.accountant.low;
      med = salary.accountant.med;
      high = salary.accountant.high;
      nat = salary.accountant.National;
      job1_salary = salary.accountant.National;
      job2_salary = salary.accountant.Accounting_Supervisor;
      job3_salary = salary.accountant.Financial_Analyst;
      job4_salary = salary.accountant.Financial_Reporting_Manager;
      job5_salary = salary.accountant.Bookkeeper_Accounting_Clerk;
      job1 = "Accounting Supervisor: "
      job2 = "Financial Analyst: "
      job3 = "Financial Reporting Manager: "
      job4 = "Bookkeeper Accounting Clerk: "
      job5 = "Auditor: "
    }
  
    if (!jobTitle) {
      jobTitle = 'jobs'
    } else {
      jobTitle = props.item[0].title
    }


  const data = {
    labels: ['Low', 'Median', 'High'],
    datasets: [
      {
        label: jobTitle,
        data: [low, med, high],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };




  return (
    <>
    <Grid style={{marginBottom: 25 }}>
      <Card >
        <CardActionArea >
          
            <div className='header'>
            <DialogTitle>{jobTitle} Salary (BC)</DialogTitle>
          
            </div>
          
          <Line data={data} options={options} style={{padding: 15}}/>
        </CardActionArea>
      </Card>
    </Grid>

    <Grid style={{marginBottom: 25}}>
    <Card >
      <CardActionArea >
        
          <Grid lg={9}>
          <DialogTitle>Median Salary <MonetizationOn/></DialogTitle>
          </Grid>
          <Grid lg={3}>
          </Grid>
          <Typography  color="text.secondary" style={{paddingLeft: 25, paddingBottom: 25}}>
           National: {nat}
          </Typography>
       
        
      </CardActionArea>
    </Card>
    </Grid>

    <Grid style={{marginBottom: 25}}>
    <Card >
      <CardActionArea >
        
          <div className='header'>
          <DialogTitle>Salary for Related Jobs </DialogTitle>
          <Typography  color="text.secondary" style={{paddingLeft: 25, paddingBottom: 25, textAlign: 'lef'}}>
          {job1} {job1_salary} <br/>
          {job2} {job2_salary} <br/>
          {job3} {job3_salary} <br/>
          {job4} {job4_salary} <br/>
          {job5} {job5_salary} 
          </Typography>
          </div>
        
      </CardActionArea>
    </Card>
    </Grid>

    </>

  )
}
