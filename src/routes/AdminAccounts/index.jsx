import * as React from "react";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../store/slices/UserSlice";
import { ADMIN, INACTIVE } from "../../constants";
import SubmitButton from "../../components/SubmitButton";
const AdminAccounts = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const addNewUser = () => {
    console.log("addNewUser");
    const obj = {
      name: "User 4",
      empId: 4,
      role:ADMIN,
      email:"user4@yopmail.com",
      phone:9896098960,
      lastLogin:"2021-09-01",
      status: INACTIVE
    };
    dispatch(addUser(obj));
  };

  const deleteUser = (empId) => {
    dispatch(removeUser(empId));
  };

  function createData(name, empId, role, email, phone, lastLogin, status) {
    return { name, empId, role, email, phone, lastLogin, status };
  }

  //create array of 10 dummy accounts with random but relevant data
  const rows = [
    createData(
      "Deepak",
      1024,
      "Admin",
      "deepak@yopmail.com",
      9896098960,
      "2021-09-01",
      "Active"
    ),
    createData(
      "Raj",
      1025,
      "Admin",
      "raj@yopmail.com",
      9896098960,
      "2021-09-01",
      "Active"
    ),
    createData(
      "John",
      1026,
      "User",
      "john@yopmail.com",
      9896098961,
      "2021-09-02",
      "Inactive"
    ),
    createData(
      "Sarah",
      1027,
      "User",
      "sarah@yopmail.com",
      9896098962,
      "2021-09-03",
      "Active"
    ),
    createData(
      "Michael",
      1028,
      "Admin",
      "michael@yopmail.com",
      9896098963,
      "2021-09-04",
      "Active"
    ),
    createData(
      "Emma",
      1029,
      "User",
      "emma@yopmail.com",
      9896098964,
      "2021-09-05",
      "Inactive"
    ),
    createData(
      "David",
      1030,
      "User",
      "david@yopmail.com",
      9896098965,
      "2021-09-06",
      "Active"
    ),
    createData(
      "Sophia",
      1031,
      "Admin",
      "sophia@yopmail.com",
      9896098966,
      "2021-09-07",
      "Active"
    ),
  ];

  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography variant="h5">List of Admin Accounts</Typography>
        <SubmitButton color="error">Add new user</SubmitButton>
        <Grid container spacing={2} columns={{xs:12}}>
          <Grid item xs={12} sm={12} md={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">EmployeeID</TableCell>
                    <TableCell align="right">Role</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Last Login</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.empId}</TableCell>
                      <TableCell align="right">{row.role}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.phone}</TableCell>
                      <TableCell align="right">{row.lastLogin}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">Edit</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminAccounts;
