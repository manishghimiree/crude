import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { deepPurple, green, orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../student/List";
import { useNavigate, useParams } from "react-router-dom";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addstucolor: {
    background: green[400],
    color: "white",
  },
});

const Edit = () => {
  const classes = useStyles();
  const {id} = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    stuname: "",
    email: ""
  });

  useEffect (()=>{
    async function getStudent(){
      try{
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        setStudent(student.data);
      }
      catch(error){
        console.log("something is wrong");
      }
      }
      getStudent();}
      , [id] );
       
      function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  })
 }

 
async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.put(`http://localhost:3333/students/${id}`, student)
   navigate("/");
  //  setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }  
 function handleClick() {
   navigate("/");
 }
  

  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>
      <Grid container textAlign="center" justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addstucolor} mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  autoFocus
                  value={student.stuname}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={student.email}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleClick}>
              BAck to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
