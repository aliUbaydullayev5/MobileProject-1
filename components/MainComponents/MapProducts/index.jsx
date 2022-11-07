import Container from './style'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllFetch} from "../../../redux/getAllProduct";
import Card from "../Card";
import {useRouter} from "next/router";

const MapProducts = () => {

    const data = useSelector((store)=> store.allProduct)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllFetch())
        // eslint-disable-next-line
    }, [])

    const query = useRouter()

    return(
        <Container>
            {
                data?.getAllStatus === 'success' ?
                    data?.data?.length &&
                    <Container.Inset>

                        {data?.data.map((value)=> (
                            <div key={value._id}>
                                <Card _id={value._id} img1={value.img1} title={value.title} price={value.price} click={()=> query.push(`/product/${value._id}`)} />
                            </div>
                        ))}

                    </Container.Inset>
                    :
                    <div>Loading</div>
            }
        </Container>
    )
}

export default MapProducts