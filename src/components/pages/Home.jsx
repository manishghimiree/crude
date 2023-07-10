import { Box, Button, Grid, IconButton, List, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from "@mui/material";
import { deepPurple, green, orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";


const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addstucolor: {
    background: green[400],
    color: "white",
  },
  stuListColor: {
    background: orange[400],
    color: "white",
  },
  tableHeadCell: {
    // background: orange[400],
    color: "white",
  },
});

const Home = () => {
 const classes = useStyles();
 const [student, setStudent] = useState({
  stuname: "",
  email: ""
 });
 const [status, setStatus] = useState();

 function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  })
 }

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.post(`http://localhost:3333/students`, student)
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 if (status) {
  return <Home />
 }
  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addstucolor} mb={2}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
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
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box textAlign="center" mb={2} p={2} className={classes.stuListColor}>
            <Typography variant="h4">Student List</Typography>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#616161" }}>
                  <TableCell align="center" className="{classes.tableHeadCell}">
                    No
                  </TableCell>
                  <TableCell align="center" className="{classes.tableHeadCell}">
                    Name
                  </TableCell>
                  <TableCell align="center" className="{classes.tableHeadCell}">
                    Email
                  </TableCell>
                  <TableCell align="center" className="{classes.tableHeadCell}">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">Sonam</TableCell>
                  <TableCell align="center">Sonam@example.com</TableCell>
                  <TableCell align="center"></TableCell>
                  <Tooltip title="view">
                    <IconButton>
                      <Link to="/view/1">
                        <VisibilityIcon color="primary" />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton>
                      <Link to="/edit/1">
                        <EditIcon />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </Tooltip>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
          <TableContainer component={Paper}></TableContainer>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
