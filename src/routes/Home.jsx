import HomeItem from "../component/HomeItem";
import {useSelector} from "react-redux";
import Men from "../component/Men";
import Profile from "../component/Profile";

 function Home(){
    const items=useSelector(store=>store.items);
    
    return(
        
    <main>
      <Men />
      <Profile/>
    <div className="items-container">
      {
        items.map((item )=><HomeItem key={item.id} item={item}/>)
      }
    </div>
   </main>

    )
}

export default Home;