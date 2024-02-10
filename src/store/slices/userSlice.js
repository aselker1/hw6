import { createSlice } from '@reduxjs/toolkit';
import { createUser, deleteUser, editUser, fetchAllUsers } from '../reducers/reducer';


const initialState  = {
    users: [],
    isUsersLoading: false,
    usersError: '',
    userStatus: 'pending',
};


const userSlice = createSlice({
    initialState,
    name: 'users',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.pending, (state) => {
            state.isUsersLoading = true;
            state.usersError = '';
            state.users = [];
            state.userStatus = 'pending';
        })


        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.users = action.payload;
            state.userStatus = 'fulfilled';
        })


        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.usersError = action.payload;
            state.isUsersLoading = false;
            state.userStatus = 'rejected';
        })


        builder.addCase(deleteUser.pending, (state) => {
            state.isUsersLoading = true;
            state.usersError = '';
            state.users = [];
            state.userStatus = 'pending';
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.userStatus = 'fulfilled';
            state.users = state.users.filter((user) => user.id !== action.payload);
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.usersError = action.payload;
            state.isUsersLoading = false;
            state.userStatus = 'rejected';
        })


        builder.addCase(createUser.pending, (state) => {
            state.isUsersLoading = true;
            state.usersError = '';
            state.users = [];
            state.userStatus = 'pending';
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isUsersLoading = false;
            state.userStatus = 'fulfilled';
            state.users.push (action.payload);
        })


        builder.addCase(createUser.rejected, (state, action) => {
            state.usersError = action.payload;
            state.isUsersLoading = false;
            state.userStatus = 'rejected';
        })




        
    }
});


const userReducer = userSlice.reducer;



export default userReducer;