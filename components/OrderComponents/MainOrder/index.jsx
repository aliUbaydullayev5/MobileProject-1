import Container from './style'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBasketFetch} from "../../../redux/basketGetAll";
import Card from "../../MainComponents/Card";
import {deleteBasketFetch} from "../../../redux/deleteUniqBasket";

const MainOrder = () => {

    const dispatch = useDispatch()
    const data = useSelector((store) => store.getBasket)

    useEffect(()=> {
        dispatch(getBasketFetch())
        // eslint-disable-next-line
    }, [])


    const deleteFunc = (id) => {
        dispatch(deleteBasketFetch(id))
        // eslint-disable-next-line
        setTimeout(()=> {
            dispatch(getBasketFetch())
            // eslint-disable-next-line
        }, 200)
    }

    return(
        <Container>
            <br />
            {
                data?.status === 'success' ?
                    <Container.Inset>
                        {data?.data?.length && data?.data?.map((value)=> (
                            <div key={value._id}>
                                <Card _id={value._id} img1={value.img1} title={value.title} price={value.price} />
                                <div className={'delete'} onClick={()=> deleteFunc(value._id)} >Delete</div>
                            </div>
                        ))}
                    </Container.Inset>
                    :
                    <div>Loading</div>
            }
        </Container>
    )
}

export default MainOrder