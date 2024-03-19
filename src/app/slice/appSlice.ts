import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAllState} from "../../interfaces/allState.interface";
import {IUser} from "../../interfaces/user.interface";
import {instance} from "../../api/instance";

const initialState: IAllState = {
    loading: false,
    error: null,
    token: null,
    user: null
};

export const signUp = createAsyncThunk(
    'signUp',
    async (data: IUser) => {
        try {
            const response = await instance.post('/register', data);
            console.log(response.data)
            return response.data
        } catch (e: any) {
            throw new Error(e)
        }

    }
)

export const signIn = createAsyncThunk(
    'signIn',
    async (data: IUser) => {
        try {
            const response = await instance.post('/login', data);
            console.log(response.data)
            return response.data
        } catch (e: any) {
            throw new Error(e)
        }

    }
)

export const logOut = createAsyncThunk(
    'logOut',
    async () => {
        try {
            const response = await instance.post('/logout', null)
            return response.data
        } catch (e: any) {
            throw new Error(e);
        }
    }
)


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(signUp.pending, state => {
            state.loading = true;
        })
        .addCase(signUp.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
        })
        .addCase(signUp.rejected, state => {
            state.loading = false;
            state.error = 'Fetch failed...';
        })

        .addCase(signIn.pending, state => {
            state.loading = true;
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
        })
        .addCase(signIn.rejected, state => {
            state.loading = false;
            state.error = 'Fetch failed...';
        })

        .addCase(logOut.pending, state => {
            state.loading = true
        })
        .addCase(logOut.fulfilled, state => {
            state.loading = false;
            state.user = null;
            state.token = null;
        })
        .addCase(logOut.rejected, state => {
            state.loading = false;
            state.error = 'Fetch failed...'
        })

});
