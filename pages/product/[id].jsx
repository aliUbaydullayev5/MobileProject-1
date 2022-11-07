import {useRouter} from "next/router";
import Root from "../../root";
import Container, {TypeKredits} from "./style";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBasketFetch} from "../../redux/basketGetAll";
import {addBasketFetch} from "../../redux/addBasketProduct";
import Buy from '../../assets/svg/buy.svg'

const UniqComponent = () => {
    const [data, setData] = useState()
    const query = useRouter()
    useEffect(()=> {
        fetch(`https://phonemarketf.herokuapp.com/api/${query?.query?.id}`)
            .then((res)=> res.json())
            .then((res)=> setData(res[0]))
    }, [])

    const [state, setState] = useState(3)
    const [img, setImg] = useState(1)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getBasketFetch())
        // eslint-disable-next-line
    }, [])

    const status = useSelector((store)=> store.addBasket)

    const addFunc = () => {
        dispatch(addBasketFetch({id: query.query.id}))
        // eslint-disable-next-line
    }

    return(
        <Root>
            <Container>
                { data &&
                    <Container.inset>
                        <p className={'title'}>{data?.title}</p>
                        <br /><br />
                        <Container.MainComponent>
                            <div className={'left'}>
                                <div>
                                    {img === 1 && <img src={data?.img1} />}
                                    {img === 2 && <img src={data?.img2} />}
                                    {img === 3 && <img src={data?.img3} />}
                                    {img === 4 && <img src={data?.img4} />}
                                </div>
                                <Container.LeftBottom>
                                    {data?.img1?.length > 5 && <Container.LeftRound onClick={()=> setImg(1)}><div style={img===1?{background:'#3D639D'}:{}}></div></Container.LeftRound>}
                                    {data?.img2?.length > 5 && <Container.LeftRound onClick={()=> setImg(2)}><div style={img===2?{background:'#3D639D'}:{}}></div></Container.LeftRound>}
                                    {data?.img3?.length > 5 && <Container.LeftRound onClick={()=> setImg(3)}><div style={img===3?{background:'#3D639D'}:{}}></div></Container.LeftRound>}
                                    {data?.img4?.length > 5 && <Container.LeftRound onClick={()=> setImg(4)}><div style={img===4?{background:'#3D639D'}:{}}></div></Container.LeftRound>}
                                </Container.LeftBottom>
                            </div>
                            <div className={'right'}>
                                <Container.GreyText>Цена телефона</Container.GreyText>
                                <Container.Title>{data?.price} сум</Container.Title>
                                <br /><hr /><br/>
                                <Container.GreyText>Месечная цена (с наценкой)</Container.GreyText>
                                <Container.Title>{(Math.floor((Number(data?.price?.split(' ').join('')) * 100 / 5) / state)).toString().split('').reverse().map((v,i)=> i%3==0?`${v} `:v ).reverse().join('')} сум</Container.Title>
                                <br />
                                <TypeKredits>
                                    <TypeKredits.Section className={'nocopy'} onClick={()=> setState(3)} style={state === 3 ? {background: '#00C48C', color: '#fff'} : {}}>3 мес</TypeKredits.Section>
                                    <TypeKredits.Section className={'nocopy'} onClick={()=> setState(6)} style={state === 6 ? {background: '#00C48C', color: '#fff'} : {}}>6 мес</TypeKredits.Section>
                                    <TypeKredits.Section className={'nocopy'} onClick={()=> setState(12)} style={state === 12 ? {background: '#00C48C', color: '#fff'} : {}}>12 мес</TypeKredits.Section>
                                    <TypeKredits.Section className={'nocopy'} onClick={()=> setState(24)} style={state === 24 ? {background: '#00C48C', color: '#fff'} : {}}>24 мес</TypeKredits.Section>
                                </TypeKredits>
                                <Container.Title style={{textAlign: 'center'}}>Наценка: 5%</Container.Title>
                                <br /><hr /><br/>
                                <Container.GreyText>Общие характеристики</Container.GreyText>
                                <Container.Desc>{data?.desc}</Container.Desc>
                            </div>
                        </Container.MainComponent>
                        <Container.ChaeckBasket onClick={()=> addFunc()}>
                            {
                                status.status === 'success' && <Buy />
                            }
                        </Container.ChaeckBasket>
                    </Container.inset>
                }
            </Container>
        </Root>
    )
}

export default UniqComponent