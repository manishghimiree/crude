import { Box, Grid, TextField, Typography } from "@mui/material";
import { deepPurple, green, orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

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
  return (
    <>
      <Box className={classes.headingColor} textAlign="center" mb={2} p={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addstucolor} mb={2}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outline"
                  required
                  fullWidth
                  id="stuname"
                  Label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outline"
                  required
                  fullWidth
                  id="email"
                  Label="Email Address"
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <h1>Student List</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
