import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";


export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async (payload, thunkApi) => {
    try {
        const response = await api.getUsers();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err)
    }
});



export const deleteUser = createAsyncThunk("deleteUser", async (payload, thunkApi) => {
    try {
        await api.deleteUser(payload);
        return payload;
    } catch (err) {
        return thunkApi.rejectWithValue(err)
    }
});


export const editUser = createAsyncThunk("editUser", async (payload, thunkApi) => {
    try {
        await api.editUser(payload);
        return payload;
    } catch (err) {
        return thunkApi.rejectWithValue(err)
    }
});



export const createUser = createAsyncThunk("createUser", async (payload, thunkApi) => {
    try {
        const response = await api.createUser(payload);
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err)
    }
});