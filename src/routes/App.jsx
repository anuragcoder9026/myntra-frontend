import { useSelector } from "react-redux"
import FetchItem from "../component/FetchItems"
import Footer from "../component/Footer"
import Header from "../component/Header"
import { Outlet } from "react-router-dom"
import Loading from "./Loading"
function App() {
  const fetchState=useSelector(store=>store.fetchStatus.currentlyFetching);
  return (
    <>
     <Header/>
     <FetchItem/>
     {fetchState ? <Loading/> :  <Outlet/>}
    <Footer/>
    </>
  )
}

export default App
