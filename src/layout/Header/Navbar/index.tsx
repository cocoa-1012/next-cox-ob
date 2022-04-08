import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useCallback,
} from "react";
import classNames from "classnames";
import Link from "next/link";
import { AppLinks } from "../../../components/sections/NavLinks/NavLinks";
import { AppContext } from "../../../lib/contextLib";
import CmsImage from "../../../components/common/CmsImage";
import OffCanvasMenu from "./OffCanvasMenu";
import NavLinks from "./NavLinks";

const checkTheme = (classList = []) => {
  const list: any = [...classList];

  if (list.includes("bg-white")) {
    return "bg-white";
  }
  if (list.includes("bg-dark")) {
    return "bg-dark";
  }
  if (list.includes("bg-dark-soft")) {
    return "bg-dark-soft";
  }
  if (list.includes("bg-light")) {
    return "bg-light";
  }
  if (list.includes("bg-green")) {
    return "bg-green";
  }
  return "";
};

const Navbar = ({ navDark }: any) => {
  const [scroll, setScroll] = useState(0);
  const [theme, setTheme] = useState("");
  const context = useContext(AppContext);
  const navRef = useRef<any>(null);

  const handleScroll = useCallback(() => {
    const sections: any = document.getElementsByTagName("section");
    if (sections) {
      const currentSection = [...sections]
        .reverse()
        .find(
          (section) =>
            section.offsetTop - navRef?.current?.offsetHeight < window.scrollY
        );

      if (currentSection) {
        const sectionTheme = checkTheme(currentSection?.classList);
        if (theme !== sectionTheme) {
          setTheme(sectionTheme);
        }
      }
      if (window.scrollY === 0) {
        setTheme("");
      }
    }
    setScroll(window.scrollY);
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const global = context?.siteData?.global;

  const logo = global?.data?.attributes?.logo;
  const logoInverse = global?.data?.attributes?.inverseLogo;
  return (
    <>
      <header className={`main-header w-100 bg-light`}>
        <nav
          ref={navRef}
          className={`navbar navbar-expand-xl ${
            navDark ? "navbar-dark" : "navbar-light"
          } sticky-header ${scroll ? "affix" : ""} ${theme}`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link href={"/"}>
              <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
                <CmsImage
                  image={logoInverse}
                  className={classNames("img-fluid nav-logo", {
                    "logo-white": theme !== "bg-dark" && theme !== "bg-green",
                  })}
                />
                <CmsImage
                  image={logo}
                  className="img-fluid logo-color nav-logo"
                />
              </a>
            </Link>

            <button
              data-testid="offcanvas-menu"
              className="navbar-toggler position-absolute right-0 border-0"
            >
              <span
                className="far fa-bars"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              />
            </button>

            <div
              data-testid={"menu-nav-links"}
              className="collapse navbar-collapse justify-content-center"
            >
              <NavLinks />
            </div>

            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <AppLinks isOffCanvas={false} />
            </div>
            <OffCanvasMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
