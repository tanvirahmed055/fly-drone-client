import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItem,
} from "../../../redux/cartSlice";

const CartItem = ({
  _id,
  productImg,
  productName,
  productPrice,
  quantity = 0,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex mt-5 pt-3 mb-5">
      <img
        className=""
        src={productImg}
        alt="item"
        style={{
          objectFit: "contain",
          width: "30%",
          height: "30%",
          marginRight: "5%",
        }}
      />
      <div className="">
        <p className=" text-start fs-5 fw-bold">{productName}</p>
        <p className="fw-bold fs-5 text-start">
          <small>$</small>
          <strong>{productPrice}</strong>
        </p>
        <div className="d-flex justify-content-between align-items-center w-25">
          <button
            onClick={() => dispatch(decrementItemQuantity(_id))}
            className="border border-0 fw-light"
            style={{
              backgroundColor: "gainsboro",
              width: "25px",
              height: "25px",
              borderRadius: "100px",
            }}
          >
            -
          </button>
          <p className="pt-3 ">{quantity}</p>
          <button
            onClick={() => dispatch(incrementItemQuantity(_id))}
            className="border border-0 fw-light"
            style={{
              backgroundColor: "gainsboro",
              width: "25px",
              height: "25px",
              borderRadius: "100px",
            }}
          >
            +
          </button>
        </div>
        <div className="d-flex justify-content-start mt-3">
          <button
            className="border border-0 text-danger bg-light "
            onClick={() => dispatch(removeItem(_id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
