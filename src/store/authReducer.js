// import { createSlice } from '@reduxjs/toolkit';
//
// export const authReducer = createSlice({
//     name: 'auth',
//     initialState: {
//         user: [],
//         isAuthenticated: false,
//     },
//     reducers: {
//         loginUser: (state, action) => {
//             state.user = action.payload;
//             state.isAuthenticated = true;
//         },
//         logoutUser: (state) => {
//             state.user = null;
//             state.isAuthenticated = false;
//         },
//     },
// });
//
// export const { loginUser, logoutUser } = authReducer.actions;
//
// export default authReducer.reducer;
//
// import { createSlice } from '@reduxjs/toolkit';
//
// export const authReducer = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null,
//         isAuthenticated: false,
//         loginError: null,
//         registrationError: null,
//     },
//     reducers: {
//         loginUser: (state, action) => {
//             state.user = action.payload;
//             state.isAuthenticated = true;
//             state.loginError = null;
//         },
//         loginError: (state, action) => {
//             state.loginError = action.payload;
//         },
//         logoutUser: (state) => {
//             state.user = null;
//             state.isAuthenticated = false;
//             state.loginError = null;
//         },
//         registerUser: (state, action) => {
//             state.user = action.payload;
//             state.isAuthenticated = true;
//             state.registrationError = null;
//         },
//         registrationError: (state, action) => {
//             state.registrationError = action.payload;
//         },
//     },
// });
//
// export const { loginUser, loginError, logoutUser, registerUser, registrationError } = authReducer.actions;
//
// export default authReducer.reducer;

import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
        setAuthLoading: (state) => {
            state.loading = true;
        },
        setAuthError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    setUser,
    setAuthLoading,
    setAuthError,
    logout,
} = authReducer.actions;
export default authReducer.reducer;
