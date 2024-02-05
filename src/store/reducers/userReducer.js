import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";


export const fetchAllUsers = createAsyncThunk("cart/fetchAll", async (payload, thunkApi) => {
    try {
        const response = await api.getUsers();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response : 'Somthing went wrong')
    }
});



export const deleteUser = createAsyncThunk("cart/deleteUser", async (payload, thunkApi) => {
    try {
        await api.deleteUser(payload);
        return payload;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response : 'Somthing went wrong')
    }
});



export const createUser = createAsyncThunk("cart/createUser", async (payload, thunkApi) => {
    try {
        const response = await api.createUser(payload);
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response : 'Somthing went wrong')
    }
});










