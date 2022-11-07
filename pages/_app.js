import '../styles/global.css'
import {Provider} from 'react-redux'
import store from '../redux/store'

export default function MyApp({Component, PageProps}){
  return(
      <Provider store={store} >
        <Component {...PageProps} />
      </Provider>
  )
}