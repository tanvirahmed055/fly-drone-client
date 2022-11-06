import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItem,
} from "../../../redux/cartSlice";

function CartItem({
  _id,
  productImg,
  productName,
  productPrice,
  quantity = 0,
}) {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={productImg} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title">{productName}</p>
        <p className="cartItem__price text-start">
          <small>$</small>
          <strong>{productPrice}</strong>
        </p>
        <div className="cartItem__incrDec">
          <button onClick={() => dispatch(decrementItemQuantity(_id))}>
            -
          </button>
          <p className="pt-3">{quantity}</p>
          <button onClick={() => dispatch(incrementItemQuantity(_id))}>
            +
          </button>
        </div>
        <div className="d-flex justify-content-start">
          <button
            className="border border-0 text-danger"
            onClick={() => dispatch(removeItem(_id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
