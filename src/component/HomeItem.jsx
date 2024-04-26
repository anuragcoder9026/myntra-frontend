import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { IoAddCircle } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
function HomeItem({item}){
    const dispatch=useDispatch();
     const bag=useSelector(store=>store.bagItem);
     const itemId=bag.map((item)=>item.id);
     const itemBaged=itemId.indexOf(item.id)>=0;
    const handleAddBag=()=>{
        dispatch(bagAction.AddToBag(item));
    }
   const handleRemoveBag=()=>{
    dispatch(bagAction.removeBag(item));
   }
    return(
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)
          </span>
      </div>
      {
        !itemBaged ?  <button className="btn bag add" onClick={handleAddBag}><IoAddCircle className=" fs-4 icon"/><span >Add to Bag</span></button> :
      <button type="button" className="btn bag remove" onClick={handleRemoveBag}><AiOutlineDelete className=" fs-4 icon"/><span>Remove </span></button>
      }
    </div>
    )
}
export default HomeItem;