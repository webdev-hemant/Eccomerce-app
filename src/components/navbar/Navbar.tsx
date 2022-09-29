import { NavLink, Outlet } from "react-router-dom";
import styles from "./navbar.module.scss";

interface INavroutes {
  name: string;
  route: string;
}

const Navbar = () => {
  const NavRoutes: INavroutes[] = [
    {
      name: "Home",
      route: "/",
    },
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
                className={({ isActive }) =>
                  `${styles.navbarLink} ${isActive && styles.activeNavbar}`
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
