import {configureStore} from '@reduxjs/toolkit'
import sliceReducers from './features/slices'
// import { useDispatch,useSelector } from 'react-redux'
// import {persistStore,persistReducer} from 'react-persist'

export const store= configureStore({
    reducer:{
        slice:sliceReducers,
    }
})