import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchSlice";
function FetchItem(){
   const fetchStatus=useSelector(store=>store.fetchStatus);
   const dispatch=useDispatch();
   
  useEffect(()=>{
     if(fetchStatus.fetchDone) return;

     const controller=new AbortController();
     const signal=controller.signal;

     dispatch(fetchStatusAction.markFetchingStarted());
     fetch("https://vercel-backend-ogay.vercel.app/items",{signal})
     .then((res)=>res.json())
     .then(({items})=>{
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(itemsAction.addinInitialItem(items));
        dispatch(fetchStatusAction.markFetchingFinished());
     });

     
  },[fetchStatus]);

   return(
    <></>
   )
}
export default FetchItem;