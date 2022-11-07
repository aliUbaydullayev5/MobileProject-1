import Container, {Logo, RightBlock} from './style'
import PersonIcon from '../../assets/svg/icon-person.svg'
import NotificationIcon from '../../assets/svg/notification.svg'
import {useRouter} from "next/router";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
// import {changeAdmin} from "../../redux/adminClear";

const NavBar = () => {

    const router = useRouter()
    // const adminType = useSelector((store)=> store.admin)
    // const dispatch = useDispatch()

    useEffect(()=> {
        // dispatch(changeAdmin())
        // eslint-disable-next-line
    },[])

    return(
        <Container className={'container'}>
            <Logo className={'nocopy'}><a href={'/main'}>Logo</a></Logo>
            <RightBlock onClick={()=> router.push('/login')}>
                <NotificationIcon alt={'notification icon'} className={'pointer'} />
                <RightBlock.Profile>
                    <RightBlock.RightTop>
                        <div>Личный кабинет</div>
                        {/*{adminType.user}*/}
                    </RightBlock.RightTop>
                    <PersonIcon alt={'person-icon'} />
                </RightBlock.Profile>
            </RightBlock>
        </Container>
    )
}

export default NavBar