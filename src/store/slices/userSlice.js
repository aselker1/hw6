import { createSlice } from '@reduxjs/toolkit';
import {createUser, deleteUser, fetchAllUsers} from '../reducers/userReducer';


const initialState  = {
    users: [],
    isLoading: false,
    isError: '',
};


const userSlice = createSlice({
    initialState,
    name: 'users',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = '';
            state.users = [];
        })


        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = '';
            state.users = action.payload;
        })


        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
            state.users = [];
        })


        builder.addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
            state.isError = '';
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = '';
            state.users = state.users.filter((user) => user.id !== action.payload);
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        })


        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = '';
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = '';
            state.users.push (action.payload);
        })


        builder.addCase(createUser.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        })




        
    }
});


const userReducer = userSlice.reducer;



export default userReducer;