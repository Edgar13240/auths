// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { loginUser } from  "../../store/authReducer";
// import styles from './Registration.module.css'
//
// const RegistrationForm = () => {
//     const { handleSubmit, register } = useForm();
//     const dispatch = useDispatch();
//
//     const onSubmit = (data) => {
//         dispatch(loginUser(data));
//     };
//
//     return (
//         <form className={styles.Registration__main} onSubmit={handleSubmit(onSubmit)}>
//             <label>Name:</label>
//             <input type="text" {...register('name')} />
//             <label>Email:</label>
//             <input type="text" {...register('email')} />
//             <label>Password:</label>
//             <input type="password" {...register('password')} />
//             <button type="submit">Register</button>
//         </form>
//     );
// };
//

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setAuthLoading, setUser, setAuthError } from"../../store/authReducer";

const RegistrationForm = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        try {
            dispatch(setAuthLoading());
            localStorage.setItem('user', JSON.stringify(data));

            dispatch(setUser(data));
        } catch (error) {
            console.error('Registration failed:', error);
            dispatch(setAuthError('Registration failed. Please try again.'));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('username', { required: 'Username is required' })} />
            {errors.username && <p>{errors.username.message}</p>}

            <input {...register('password', { required: 'Password is required' })} />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
