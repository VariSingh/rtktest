import "./App.css";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./store/slices/UserSlice";

function App() {
  const dispatch = useDispatch();
  const {users} = useSelector(state=>state.users);


  const addNewUser = () => {
    console.log("addNewUser");
    const obj = {
      name: "User 4",
      id: 4
    }
    dispatch(addUser(obj));
  };

  const deleteUser = (id) => {
    console.log("deleteUser");
    console.log(id);
    dispatch(removeUser(id));
  };


  return (
    <Grid container>
      <Grid container>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RTK Test
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              A Todo app
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box>
            <Typography color="textPrimary" style={{ padding: "16px" }}>
              Users list
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                addNewUser();
              }}
            >
              {" "}
              <AddBoxIcon />
              Add user
            </Button>
            <ul style={{ color: "black" }}>
              {users.length
                ? users.map((user,index) => {
                    return (
                      <li key={index}>
                        {user.name}
                        <Button onClick={()=>{
                          deleteUser(user.id);
                        }}>
                          <DeleteIcon />
                        </Button>
                      </li>
                    );
                  })
                : "No users found"}
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography color="textPrimary"></Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography color="textPrimary"></Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
