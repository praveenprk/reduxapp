import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './authSlicer'
import Header from '../../components/Header'


const Auth = () => {
    
    const isLogged = useSelector((state) => state.auth.isLogged)
    const dispatch = useDispatch()

    return (
    <div>
        <h1>Auth</h1>
        {
            isLogged ? <Header/> : 'Please Login'
        }
        <hr/>
        {
             isLogged ? <button onClick={() => dispatch(logout())}>Logout</button> : <button
             onClick={() => {dispatch(login())}}>Login</button>
        }
    </div>
  )
}

export default Auth