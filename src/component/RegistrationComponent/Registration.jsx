import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import styles from "./Registration.module.css";

export const Registration = () => {

    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [nameD, setNameD] = useState(false)
    const [nameError, setNameError] = useState("name invalid")
    const [passwordD, setPasswordD] = useState(false)
    const [passwordError, setPasswordError] = useState("password invalid")
    const [surnameD,setSurnameD] = useState(false)
    const [surnameError,setSurnameError] = useState("surname invalid")
    const [userNameD,setUserNameD] = useState(false)
    const [userNameError,setUserNameError] = useState("username invalid")

    const dispatch = useDispatch()

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 5 &&  e.target.value.length > 10){
            setPasswordError('password must be longer than three')
            if(!e.target.value){
                setPasswordError('invalid password')
            }
        }else{
            setPasswordError("")
        }
    }

    const nameHandler = (e) =>{
        setName(e.target.value)
        if(e.target.value.length < 6){
            setPasswordError('name must be longer than three')
            if(!e.target.value){
                setPasswordError('invalid name')
            }
        }else{
            setNameError("")
        }
    }

    const surnameHandler = (e) =>{
        setSurName(e.target.value)
        if(e.target.value.length < 6){
            setSurnameError('surname must be longer than three')
            if(!e.target.value){
                setSurnameError('invalid surname')
            }
        }else{
            setSurnameError("")
        }
    }

    const userNameHandler = (e) =>{
        setUserName(e.target.value)
        if(e.target.value.length < 6){
            setUserNameError('username must be longer than three')
            if(!e.target.value){
                setUserNameError('invalid username')
            }
        }else{
            setUserNameError("")
        }
    }


    const register = () => {
            dispatch({
                type: 'REGISTER',
                payload: {
                    id: Math.random(),
                    name, surname, userName, password
                }
            })
    }


    return (
        <div className={styles.Registration}>
            <div className={styles.Registration__main}>
                {(nameD && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                <input className={styles.main__filed} type="text" placeholder="name"
                      value={name} onChange={(e)=> nameHandler(e)}/>
                {(surnameD && surnameError) && <div style={{color: 'red'}}>{surnameError}</div>}
                <input className={styles.main__filed} type="text" placeholder="surname" value={surname}
                       onChange={e => surnameHandler(e)}/>
                {(userNameD && userNameError) && <div style={{color: 'red'}}>{userNameError}</div>}
                <input className={styles.main__filed} type="text" placeholder="username" value={userName}
                       onChange={e => userNameHandler(e)}/>
                {(passwordD && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input value={password} className={styles.main__filed} type="password" placeholder="password" value={password}
                       onChange={e => passwordHandler(e)}/>
            </div>
            <button className={styles.Registration__snap} type="button" value="register"
                    onClick={register}>Registration
            </button>
        </div>
    )
}




