import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import MobileNavMenu from "./MobileNavMenu";
import closeIcon from "images/close.png";
import hamburger from "images/hamburger.png";
import shoppingcart from "images/shoppingcart.png";
import codeIcon from "images/code.png";
import { GlobalCtx } from "context/GlobalContextProvider";
import styles from "./navbar.module.scss";

interface INavroutes {
  name: string;
  route: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { state } = useContext(GlobalCtx);
  const navigate = useNavigate();

  useEffect(() => {
    // verify if user logged in
    localStorage.getItem("token") || navigate("/signup-login");
  }, []);

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
          {NavRoutes.map((item: INavroutes) => (
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
        <div
          onClick={() => navigate("/checkout")}
          className={styles.navCheckoutSection}
        >
          <span className={styles.cartNumber}>{state?.cartItems?.length}</span>
          <img src={shoppingcart} alt="" />
        </div>
      </nav>
      <main className={styles.mainContainer}>
        <Outlet />
        <footer
          style={{
            margin: "0.2rem",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <img src={codeIcon} width={20} height={20} alt="" />
          <p>made with passion by Hemant Jadhav</p>
        </footer>
      </main>
      <MobileNavMenu open={isOpen}>
        <div className={styles.mobile_nav_wrapper}>
          <div onClick={() => setIsOpen(false)} className={styles.closeHamIcon}>
            <img src={closeIcon} width={24} height={24} alt="" />
          </div>
          <ul className={styles.mobileNavListContainer}>
            {NavRoutes.map((item: INavroutes) => (
              <li key={item.name}>
                <NavLink
                  end={item.route === "/"}
                  to={`${item.route}`}
                  className={({ isActive }) =>
                    `${styles.navbarLinkMobile} ${
                      isActive && styles.activeNavbar
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </MobileNavMenu>
    </>
  );
};

export default Navbar;
