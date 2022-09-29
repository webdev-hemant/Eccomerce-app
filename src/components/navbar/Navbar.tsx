import { NavLink, Outlet } from "react-router-dom";
import styles from "./navbar.module.scss";

interface INavroutes {
  name: string;
  route: string;
}

const Navbar = () => {
  const NavRoutes: INavroutes[] = [
    {
      name: "Electronics",
      route: "/electronics",
    },
    {
      name: "Jewelery",
      route: "/jewelery",
    },
    {
      name: "Men's clothing",
      route: "/men's clothing",
    },
    {
      name: "Women's clothing",
      route: "/women's clothing",
    },
  ];

  const activeStyle: React.CSSProperties = {
    background: "black",
    color: "white",
  };

  const activeClassName: string = "underline";

  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={styles.logoContainer}></div>
        <ul className={styles.navlinkWrapper}>
          {NavRoutes.map((item) => (
            <li key={item.name}>
              <NavLink
                end={item.route === "/"}
                to={`${item.route}`}
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
        <div className={styles.navCheckoutSection}></div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
