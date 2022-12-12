import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./Components/Pages/Redux_CRUD/userSlice"  


export const store = configureStore({
    reducer : {
        users : usersReducer
    }
});
