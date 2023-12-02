import React from 'react';
// import {useSelector } from 'react-redux';
import LoginForm from "./component/LoginComponent/LoginForm";
import RegistrationForm from "./component/RegistrationComponent/RegistrationForm";
import UserPage from "./component/UserComponent/UserComponent";
import './App.css'

// const App = () => {
//
//     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//
//     return (
//             <div className={"App"} >
//                 {!isAuthenticated ? (
//                     <>
//                         <h1>Login</h1>
//                         <LoginForm />
//                         <h1>Registration</h1>
//                         <RegistrationForm />
//                     </>
//                 ) : <UserPage />
//                 }
//             </div>
//     );
// };
//
// export default App;
//

const App = () => {
    return (
            <div>
                <h1>Registration</h1>
                <RegistrationForm />
                <hr />
                <h1>Login</h1>
                <LoginForm />
                <hr />
                <UserPage />
            </div>
    );
};

export default App;
