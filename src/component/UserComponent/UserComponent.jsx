// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from "../../store/authReducer";
//
// const UserPage = () => {
//     const user = useSelector((state) => state.auth.user);
//     const dispatch = useDispatch();
//
//     const handleLogout = () => {
//         dispatch(logout());
//     };
//
//     return (
//         <div>
//             <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
//             <p>Email: {user ? user.email : 'N/A'}</p>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthLoading, setUser, setAuthError } from "../../store/authReducer";

const UserPage = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchData = () => {
            try {
                dispatch(setAuthLoading());

                // Simulate fetching user data from local storage
                const storedUser = JSON.parse(localStorage.getItem('user'));

                if (storedUser) {
                    dispatch(setUser(storedUser));
                } else {
                    throw new Error('User data not found');
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                dispatch(setAuthError('Failed to fetch user data.'));
            }
        };

        fetchData();
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>User Page</h1>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    {/* Render other user information here */}
                </div>
            )}
        </div>
    );
};

export default UserPage;
