import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../store/profie";

function Profile(){

    const visibility=useSelector(store=>store.profile);
    const dispatch=useDispatch();
    const handleProfile=()=>{
          dispatch(profileAction.setProfile('invisible'));
    }
    return(
        <div className={`${visibility} profile-container`}>
           
          <p style={{ color: "rgb(250, 3, 155)", marginTop:"10px",marginBottom:"-4px" }}><b>Welcome</b><RxCross2 className="fs-3" style={{float:"right",cursor:"pointer"}} onClick={handleProfile}/></p>
           <p>To access account and manage orders</p>
           <button type="button" class="btn btn-outline-danger" style={{marginTop:"15px" }}>Log In/Sign Up</button>
          <hr />
           <p className="profile-element">Order</p>
           <p className="profile-element">Wishlist</p>
           <p className="profile-element">Gift Cards</p>
           <p className="profile-element">Contact Us</p>
           <p className="profile-element">Myntra Wishlist <span class="badge bg-danger fs-9" style={{transform:"skew(-25deg)",marginLeft:"8px",height:"17px"}}>New</span></p>
         <hr />
            <p className="profile-element">Myntra Credits</p>
            <p className="profile-element">Coupans</p>
            <p className="profile-element">Saved Cards</p>
            <p className="profile-element">Saved VPA</p>
            <p className="profile-element">Saved Address</p>
        </div>
        
    )
}
export default Profile;