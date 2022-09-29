import MyErrorBoundary from "components/errorBoundary/MyErrorBoundary";
import { useState } from "react";

function Bomb(): JSX.Element {
  throw new Error("💥 CABOOM 💥");
}

const Checkout = () => {
  const [isTrue, setIsTrue] = useState<boolean>(false);
  return (
    <div>
      Checkout
      <button type="button" onClick={() => setIsTrue((e) => !e)}>
        bomb
      </button>
      {/* {isTrue && <Bomb />} */}
      <MyErrorBoundary>{isTrue ? <Bomb /> : <h2>hi</h2>}</MyErrorBoundary>
    </div>
  );
};

export default Checkout;
