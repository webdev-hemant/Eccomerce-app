import { useSearchParams } from "react-router-dom";
import StepOne from "components/checkoutsteps/StepOne";
import StepTwo from "components/checkoutsteps/StepTwo";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      {searchParams.get("step") === "1" && <StepOne />}
      {searchParams.get("step") === "2" && <StepTwo />}
    </div>
  );
};

export default Checkout;
