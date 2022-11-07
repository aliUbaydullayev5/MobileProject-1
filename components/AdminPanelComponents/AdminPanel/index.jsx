import {useEffect, useState} from "react";
import Container from './style'
import {useDispatch, useSelector} from "react-redux";
import {offAdmin} from "../../../redux/adminClear";
import {addPropertyFetch} from "../../../redux/addProduct";

const AdminPanel = () => {

    const [img1, setImg1] = useState('')
    const [img2, setImg2] = useState('')
    const [img3, setImg3] = useState('')
    const [img4, setImg4] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')

    const dispatch = useDispatch()


    const logoutFunc = () => {
        dispatch(offAdmin())
        localStorage.clear()
    }

    const addProperty = () => {
        dispatch(addPropertyFetch({img1, img2, img3, img4, title, desc, price, type}))
    }

    const user = useSelector((store)=> store.admin.user)
    const status = useSelector((store)=> store.addPropertyStatus)

    useEffect(()=> {
        if(status === 'successfully saved'){
            setImg1('')
            setImg2('')
            setImg3('')
            setImg4('')
            setTitle('')
            setDesc('')
            setPrice('')
            setType('')
        }
    }, [status])


    return(
        <Container>
            <button onClick={()=> logoutFunc()}>Logout</button>
            {
                user === 'admin@admin.com' &&
                <Container.Form>
                    <input placeholder={'Img - 1 URL'} onChange={(e)=> setImg1(e.target.value)} disabled={status === 'loading' && 'disable'} value={img1} />
                    <input placeholder={'Img - 2 URL'} onChange={(e)=> setImg2(e.target.value)} disabled={status === 'loading' && 'disable'} value={img2} />
                    <input placeholder={'Img - 3 URL'} onChange={(e)=> setImg3(e.target.value)} disabled={status === 'loading' && 'disable'} value={img3} />
                    <input placeholder={'Img - 4 URL'} onChange={(e)=> setImg4(e.target.value)} disabled={status === 'loading' && 'disable'} value={img4} />
                    <input placeholder={'Title'} onChange={(e)=> setTitle(e.target.value)} disabled={status === 'loading' && 'disable'} value={title} />
                    <input placeholder={'Description'} onChange={(e)=> setDesc(e.target.value)} disabled={status === 'loading' && 'disable'} value={desc} />
                    <input placeholder={'Price'} onChange={(e)=> setPrice(e.target.value)} disabled={status === 'loading' && 'disable'} value={price} />
                    <input placeholder={'Type of Product'} onChange={(e)=> setType(e.target.value)} disabled={status === 'loading' && 'disable'} value={type} />
                    {
                        status === 'loading' ?
                            '....'
                            :
                        <button onClick={()=> addProperty()}>Add new Property</button>
                    }
                </Container.Form>
            }
        </Container>
    )
}

export default AdminPanel