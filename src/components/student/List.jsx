import {
  Box,
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
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles({

  stuListColor: {
    background: orange[400],
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
});

const List = () => {
    const classes = useStyles();
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        async function getAllStudent() {
          try {
            const students = await axios.get("http://localhost:3333/students");
            // console.log(students.data);
            setStudents(students.data);
          } catch (error) {
            console.log("something is wrong");
          }
        }
getAllStudent();
    },[]) 
  
   const handleDelete = async (id) => {
     await axios.delete(`http://localhost:3333/students/${id}`);
     var newstudent = students.filter((item) => {
       // console.log(item);
       return item.id !== id;
     });
     setStudents(newstudent);
   };

  return (
    <>
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
            {
              students.map((student, i)=>{
                return (
                  <TableRow key={i}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell align="center">{student.stuname}</TableCell>
                    <TableCell align="center">{student.email}</TableCell>
                    <TableCell align="center"></TableCell>
                    <Tooltip title="view">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(student.id)}>
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableRow>
                );
              })
            }
            
          </TableBody>
        </Table>
      </Box>
      <TableContainer component={Paper}></TableContainer>
    </>
  );
};

export default List;
