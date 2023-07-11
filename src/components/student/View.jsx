import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import {  orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link, useParams,  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
  stuListColor: {
    background: orange[400],
    color: "white",
  },
  tableHeadCell: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});

const View = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [student, setStudent] = useState([]);
const navigate = useNavigate();

useEffect(() => { async function getStudent() {
  try {
    const student = await axios.get(`http://localhost:3333/students/${id}`);
    // console.log(student.data);
    setStudent(student.data);
  } catch (error) {
    console.log("something is wrong");
  }
}
  getStudent();
},[id]);

function handleClick(){
  navigate("/")

}
  return ( 
    <>
      <Box textAlign="center" mb={2} p={2} className={classes.stuListColor}>
        <Typography variant="h4">Student Detail</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}TableRow>
              <TableCell align="center" className="{classes.tableHeadCell}">
                ID
              </TableCell>
              <TableCell align="center" className="{classes.tableHeadCell}">
                Name
              </TableCell>
              <TableCell align="center" className="{classes.tableHeadCell}">
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.stuname}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
              <TableCell align="center" ></TableCell>
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
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Back to Home
        </Button>
      </Box>
    </>
  );
};

export default View;
