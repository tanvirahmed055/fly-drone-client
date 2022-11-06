import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import Total from "./components/Total";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container fluid className="bg-light">
      <div className="d-flex">
        <div className="">
          <div>
            <h3 className="text-start pt-3">Shopping Cart</h3>
            <hr></hr>
            {cart?.map((item) => (
              <CartItem
                key={item._id}
                _id={item._id}
                productImg={item.productImg}
                productName={item.productName}
                productPrice={item.productPrice}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        <div className="pt-5">
          <Total />
        </div>
      </div>
    </Container>
  );
};

export default Cart;
