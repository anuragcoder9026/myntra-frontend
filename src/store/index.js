import{configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchSlice";
import bagSlice from "./bagSlice";
import visibleSlice from "./visibleSlice";
import profileSlice from "./profie";
const myntraStore=configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bagItem:bagSlice.reducer,
        visible:visibleSlice.reducer,
        profile:profileSlice.reducer,
    }
})
export default myntraStore;