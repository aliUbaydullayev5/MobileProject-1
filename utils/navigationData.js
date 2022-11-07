import MainIcon from '../assets/svg/icon-main.svg'
import ListIcon from '../assets/svg/icon-list.svg'
import ProductIcon from '../assets/svg/icon-product.svg'
import StarIcon from '../assets/svg/icon-star.svg'
import BasketIcon from '../assets/svg/basket.svg'
import Image from "next/image";

const navigationData = [
    {
        id: 1,
        icon: <MainIcon className={'img'} />,
        title: 'Главная',
        path: '/main',
        profile: false,
        hidden: false
    },
    {
        id: 2,
        icon: <ListIcon className={'img'} />,
        title: 'Заказы',
        path: '/order',
        profile: true,
        hidden: false
    },
    {
        id: 3,
        icon: <ProductIcon className={'img'} />,
        title: 'Товары',
        path: '/product',
        profile: false,
        hidden: false
    },
    {
        id: 4,
        icon: <StarIcon className={'img'} />,
        title: 'Отзывы',
        path: '/review',
        profile: false,
        hidden: false
    },
    {
        id: 5,
        icon: <BasketIcon className={'img'} />,
        title: 'Оформить заказ',
        path: '/placeorder',
        profile: true,
        hidden: false
    },
    {
        id: 6,
        icon: '',
        title: 'Login',
        path: '/login',
        profile: true,
        hidden: true
    },
]
export default navigationData