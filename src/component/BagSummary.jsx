import { useSelector } from "react-redux";

function BagSummary(){
  const itemBag=useSelector(store=>store.bagItem);
  let Toriginal_price=0;
  let Tcurrent_price=0;
  for (let i = 0; i<itemBag.length; i++) {
     Tcurrent_price+=itemBag[i].current_price;
     Toriginal_price+=itemBag[i].original_price;
  }
    const bagSummary={
        totalItem:itemBag.length,
        totalMRP:Math.floor(Toriginal_price),
        totalDiscount:Math.floor(Toriginal_price-Tcurrent_price),
        finalPayment:Math.floor(Tcurrent_price+99),
    }
    return (
        <>
           <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagSummary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagSummary.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{bagSummary.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
        </>
    )
}

export default BagSummary;