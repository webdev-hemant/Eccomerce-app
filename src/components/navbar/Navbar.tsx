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
  const { reducerDispatch } = useContext(GlobalCtx);
  const navigate = useNavigate();

  useEffect(() => {
    // verify if user logged in
    if (
      !localStorage.getItem("userName") &&
      !localStorage.getItem("password")
    ) {
      navigate("/signup-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    reducerDispatch({ type: "emtyCart" });
    localStorage.clear();
    navigate("/signup-login");
  };

  const NavRoutes: INavroutes[] = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Electronics",
      route: "/category/electronics",
    },
    {
      name: "Jewelery",
      route: "/category/jewelery",
    },
    {
      name: "Men's clothing",
      route: "/category/men's clothing",
    },
    {
      name: "Women's clothing",
      route: "/category/women's clothing",
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
        <div className={styles.navCheckoutSection}>
          <span className={styles.cartNumber}>
            {JSON.parse(localStorage.getItem("cartData") || "")?.length || 0}
          </span>
          <img
            onClick={() => navigate("/checkout?step=1")}
            src={shoppingcart}
            alt=""
          />
          <div onClick={() => handleLogout()} className={styles.logoutButton}>
            <button>Logout</button>
          </div>
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
          <div onClick={() => handleLogout()} className={styles.mobileLogout}>
            <button>Logout</button>
          </div>
        </div>
      </MobileNavMenu>
    </>
  );
};

export default Navbar;
