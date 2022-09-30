import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import MobileNavMenu from "./MobileNavMenu";
import closeIcon from "images/close.png";
import hamburger from "images/hamburger.png";
import styles from "./navbar.module.scss";

interface INavroutes {
  name: string;
  route: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
        <div className={styles.logoContainer}>
          <Link to={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div onClick={() => setIsOpen(true)} className={styles.mobileHam}>
          <img src={hamburger} width={24} height={24} alt="" />
        </div>
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
        <div className={styles.mobileViewLogo}>
          <Link to={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className={styles.navCheckoutSection}></div>
      </nav>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
      <MobileNavMenu open={isOpen}>
        <div className={styles.mobile_nav_wrapper}>
          <div onClick={() => setIsOpen(false)} className={styles.closeHamIcon}>
            <img src={closeIcon} width={24} height={24} alt="" />
          </div>
          <ul className={styles.mobileNavListContainer}>
            {/* {navbarRoutes.map((item: InavbarRoutes) => (
              <li
                key={item.name}
                className={`${router.pathname === item.route && styles.active}`}
              >
                <Link href={item.route}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      </MobileNavMenu>
    </>
  );
};

export default Navbar;
