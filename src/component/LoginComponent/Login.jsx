import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import styles from './Login.module.css'

export const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const login = () => {

        const payload = users.find(user => user.userName === userName && user.password === password)

        if (payload) {
            dispatch({
                type: 'Login',
                payload
            })
            alert('success')
        } else {
            alert('error')
        }

    }


    return (
        <div className={styles.Login}>
            <div className={styles.Login__main}>
                <input className={styles.main__filed} type="text" placeholder="username" value={userName} onChange={e => setUserName(e.target.value)}/>
                <input className={styles.main__filed} type="password" placeholder="password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
            </div>
            <button className={styles.Login__snap} type="button" value="register" onClick={login}>Login</button>
        </div>
    )
}