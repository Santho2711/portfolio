import { createSlice } from "@reduxjs/toolkit";

const Tabs = createSlice({
    name : 'tabsSetting',
    initialState : {
        tab : 0
    },
    reducers : {
        setTab : (state,action) => {
            state.tab = action.payload
        }
    }
})


export const { setTab } = Tabs.actions
export default Tabs.reducer 