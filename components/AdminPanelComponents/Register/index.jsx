import {useState} from "react";
import Container from './style'
import {useDispatch, useSelector} from "react-redux";
import {registerFetch} from "../../../redux/register";

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const status = useSelector((store)=> store.register)
    const registerFunc = () => {
        dispatch(registerFetch({
            email,
            password
        }))
    }


    return(
        <Container>
            <h1 style={{color: '#fff'}}>Register</h1>
            <input placeholder={'Email'} type={'text'} value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input placeholder={'Password'} type={'password'} value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={()=> registerFunc()}>Register</button>
        </Container>
    )
}

export default Register