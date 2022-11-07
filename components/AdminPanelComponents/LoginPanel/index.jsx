import Container from './style'
import {useDispatch} from 'react-redux'
import {checkAdminFetch} from "../../../redux/adminClear";
import {useState} from "react";

const LoginPanel = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()

    const loginFunc = () => {
        dispatch(checkAdminFetch({email, password}))
    }

    return(
        <Container>
            <h1 style={{color: '#fff'}}>Login</h1>
            <input placeholder={'Email'} type={'text'} onChange={(e)=> setEmail(e.target.value)} />
            <input placeholder={'Password'} type={'password'} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={()=> loginFunc()}>Login</button>
        </Container>
    )
}

export default LoginPanel