import { NavLink, Outlet } from "react-router-dom";

interface INavroutes {
  name: string;
  route: string;
}

const Navbar = () => {
  const activeStyle: React.CSSProperties = {
    background: "black",
    color: "white",
  };

  const activeClassName: string = "underline";

  const NavRoutes: INavroutes[] = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Checkout",
      route: "/checkout",
    },
    {
      name: "Unknown",
      route: "/unknown",
    },
  ];

  return (
    <nav>
      <ul>
        {NavRoutes.map((item) => (
          <li key={item.name}>
            <NavLink
              end={item.route === "/"}
              to={item.route}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
