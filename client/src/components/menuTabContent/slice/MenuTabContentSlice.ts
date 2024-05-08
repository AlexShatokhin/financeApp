import { createSlice } from "@reduxjs/toolkit"

const MenuTabContentSlice = createSlice({
    name: "menuTabContent",
    initialState: {
        activeTab: "Home"
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        }
    }
});

const { actions, reducer } = MenuTabContentSlice;
export default reducer;
export const {setActiveTab} = actions;