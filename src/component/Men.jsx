import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { visibleAction } from "../store/visibleSlice";
function Men() {
  const TopWear = ["T-Shirts","Casual Shirts","Formal Shirts","Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets",];
  const FestWear=["Kurtas & Kurta Sets","Sherwanis", "Nehru Jackets", "Dhotis"];
  const ButtomWear=["Jeans","Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers" ];
  const Sleepwear=["Briefs & Trunks","Boxers","Vests","Sleepwear & Loungewear","Thermals"];
  const Footwear=["Casual Shoes","Sports Shoes","Formal Shoes","Sneakers","Sandals & Floaters", "Flip Flops", "Socks"];
  const sportswear=["Sports Shoes", "Sports Sandals","Active T-Shirts",
    "Track Pants & Shorts", "Tracksuits", "Jackets & Sweatshirts", "Sports Accessories", "Swimwear"];
    const gadgets=["Smart Wearables","Fitness Gadgets","Headphones","Speakers"]
     
    const visibility=useSelector(store=>store.visible);

    const dispatch=useDispatch();
    const Leave=()=>{
        dispatch(visibleAction.setVisible('invisible'));
    }
  return (
    <div className={`container ${visibility} men`}>
      <div className="row">
        
        <div className="col-3" style={{ backgroundColor: "rgb(246, 246, 246)" }}>
          <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px",marginTop:"10px" }}><b>TopWear</b></p>
           {TopWear.map((item)=><p>{item}</p>) }
          <hr />
          <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px" }}><b>Indian & Festival wear</b></p>
          { FestWear.map((item)=><p>{item}</p>)}
        </div>

        <div className="col-3" style={{ backgroundColor: "white" }}>
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px",marginTop:"10px" }}><b>ButtomWear</b></p>
        {ButtomWear.map((item)=><p>{item}</p>) }
        <hr />
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px" }}><b>Innerwear & Sleepwear</b></p>
        {Sleepwear.map((item)=><p>{item}</p>) }
        <hr />
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px" }}><b>Plus Size</b></p>
        </div>

        <div className="col-3" style={{ backgroundColor: "rgb(246, 246, 246)" }}>
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px",marginTop:"10px" }}><b>Footwear</b></p>
        {Footwear.map((item)=><p>{item}</p>) }
        <hr />
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px" }}><b>Personal Care & Grooming</b></p>
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px" }}><b>Sunglasses & Frames</b></p>
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px" }}><b>Watches</b></p>
        </div>


        <div className="col-3" style={{ backgroundColor: "white",marginTop:"10px" }}>
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px" }}><b>Sports and Active Wear <img src="images/close.jpg" style={{width:"50px",height:"50px"}} className="emoji" onClick={Leave}/></b></p>
        {sportswear.map((item)=><p>{item}</p>) }
        <hr />
        <p style={{ color: "rgb(250, 3, 155)", marginBottom: "7px" }}><b>Gadgets</b></p>
        {gadgets.map((item)=><p>{item}</p>) }
        </div>
       
      </div>
    </div>
  );
}
export default Men;
