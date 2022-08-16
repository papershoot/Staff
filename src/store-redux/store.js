import { configureStore, } from "@reduxjs/toolkit";
import Staffreducer from '../redux/ListStaff';


const store = configureStore({
    reducer: {
        staff: Staffreducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({

            serializableCheck: false,
        }),
})

export default store;