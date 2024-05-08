import { configureStore } from "@reduxjs/toolkit";

import MenuTabContentReducer from "../components/menuTabContent/slice/MenuTabContentSlice";

const store = configureStore({
    reducer: {MenuTabContentReducer}
})

export default store;
export type RootState = ReturnType<typeof store.getState>;