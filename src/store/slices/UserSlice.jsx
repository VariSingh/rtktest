import { lightGreen } from "@mui/material/colors";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload);
        },
        removeUser(state, action) {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
});

console.log(userSlice);

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;