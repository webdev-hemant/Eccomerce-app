import { useSearchParams } from "react-router-dom";
import Cart from "components/cart/Cart";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      {searchParams.get("step") === "1" && <Cart />}
      {searchParams.get("step") === "2" && <Cart />}
    </div>
  );
};

export default Checkout;
