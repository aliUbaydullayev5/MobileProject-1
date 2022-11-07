import {configureStore} from '@reduxjs/toolkit'
import adminClear from "./adminClear"
import addPropertyStatus from './addProduct'
import getAllProduct from './getAllProduct'
import getAllBasketProduct from './basketGetAll'
import addBasket from './addBasketProduct'
import register from './register'

export default configureStore({
    reducer: {
        admin: adminClear,
        addPropertyStatus: addPropertyStatus,
        allProduct: getAllProduct,
        getBasket: getAllBasketProduct,
        addBasket: addBasket,
        register: register
    }
})