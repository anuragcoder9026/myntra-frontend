import { useSelector } from "react-redux";
import BagItem from "../component/BagItem";
import BagSummary from "../component/BagSummary";
import Men from "../component/Men";
import Profile from "../component/Profile";
function Bag(){
  const itemBag=useSelector(store=>store.bagItem);
    return(
    <main>
         <Men/>
         <Profile></Profile>
      <div className="bag-page">
        <div className="bag-items-container">
        {
           itemBag.map((item )=> <BagItem key={item.id} item={item}/>)
        }
        </div>
        <div className="bag-summary">
          <BagSummary/>
        </div>
      </div>
    </main> 
    )
}
export default Bag;