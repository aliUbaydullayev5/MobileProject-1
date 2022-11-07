import CardBlock from './style'
import him from '../../../assets/svg/buy.svg'
import Image from "next/image";

const Card = ({_id, img1, title, price, click}) => {

    return(
        <CardBlock key={_id} onClick={()=> click && click()}>
            <div className={'first'}>
                <img src={img1} />
            </div>
            <div className={'second'}>
                <p className={'title'}>{title.split(' ').splice(0, 3)}</p>
                <p className={'price'}>{price} сум</p>
                <p className={'minPrice'}>{Math.floor((Number(price.split(' ').join('')) * 100 / 5) / 24)} сум</p> <span>x24 + 5%</span>
            </div>
        </CardBlock>
    )
}

export default Card