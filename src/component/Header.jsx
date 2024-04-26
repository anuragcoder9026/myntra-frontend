import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { visibleAction } from "../store/visibleSlice";
import { profileAction } from "../store/profie";
function Header(){
    const itemBag=useSelector(store=>store.bagItem);
    const dispatch=useDispatch();
    const Enter=()=>{
        dispatch(visibleAction.setVisible('visible'));
    }
    const handleProfile=()=>{
        dispatch(profileAction.setProfile('visible'))
    }
    return(
        <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
         <Link to="#" onClick={Enter}>Men</Link>
         <Link to="#" onClick={Enter}>Women</Link>
         <Link to="#" onClick={Enter}>Kids</Link>
         <Link to="#" onClick={Enter}>Home & Living</Link>
         <Link to="#" onClick={Enter}>Beauty</Link>
         <Link to="#" onClick={Enter}>Studio <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon"><IoMdSearch className="fs-5 mb-2" /></span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container" onClick={handleProfile}>
            <IoPersonOutline className="fs-5"/>
                <span className="action_name profile">Profile</span>
            </div>

            <div className="action_container">
            <IoIosHeartEmpty className="fs-5"/>
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bag">
            <IoBagOutline className="fs-5"/>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{itemBag.length}</span>
            </Link>
        </div>
    </header>
    )
}
export default Header;