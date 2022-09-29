import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/checkout">Checkout</Link>
      </li>
      <li>
        <Link to="/nothing-here">Nothing Here</Link>
      </li>
      <Outlet />
    </ul>
  );
};

export default Navbar;
