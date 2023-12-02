// import React from 'react';
// import { useForm } from 'react-hook-form';
// import {useDispatch, useSelector} from 'react-redux';
// import { loginUser } from  "../../store/authReducer";
// import styles from './Login.module.css'
//
// const LoginForm = () => {
//     const { handleSubmit, register } = useForm();
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.auth.user);
//
//     const onSubmit = (data) => {
//         const payload = users.find(user => user.email === "email" && user.password === "password")
//         if(payload) {
//             dispatch(loginUser(data));
//         }
//     };
//
//     return (
//         <form className={styles.Login__main} onSubmit={handleSubmit(onSubmit)}>
//             <label>Email:</label>
//             <input type="text" {...register('email')} />
//             <label>Password:</label>
//             <input type="password" {...register('password')} />
//             <button type="submit">Login</button>
//         </form>
//     );
// };
//
// export default LoginForm;

// LoginForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setAuthLoading, setUser, setAuthError } from "../../store/authReducer";

const LoginForm = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        try {
            dispatch(setAuthLoading());

            // Simulate login by checking the user in local storage
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === data.username && storedUser.password === data.password) {
                dispatch(setUser(storedUser));
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            console.error('Login failed:', error);
            dispatch(setAuthError('Login failed. Please check your credentials.'));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('username', { required: 'Username is required' })} />
            {errors.username && <p>{errors.username.message}</p>}

            <input {...register('password', { required: 'Password is required' })} />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
