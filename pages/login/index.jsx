import Container from './style'
import {useSelector} from "react-redux";
import LoginPanel from "../../components/AdminPanelComponents/LoginPanel";
import Root from "../../root";
import AdminPanel from "../../components/AdminPanelComponents/AdminPanel";
import Register from "../../components/AdminPanelComponents/Register";
const Login = () => {

    const adminType = useSelector((store)=> store.admin.state)

    return(
        <Container>
            <Root>
                {
                    adminType ?
                        <AdminPanel />
                        :
                        <div style={{display: 'flex'}}>
                            <LoginPanel />
                            <Register />
                        </div>
                }
            </Root>
        </Container>
    )
}

export default Login