import { useContext } from "react";
import Link from "next/link";
import { AppContext } from "../../../lib/contextLib";
import { AppLinks } from "../../../components/sections/NavLinks/NavLinks";
import NavLinks from "./NavLinks";
import CmsImage from "../../../components/common/CmsImage";

const OffCanvasMenu = () => {
  const context = useContext(AppContext);

  return (
    <>
      <div className="offcanvas offcanvas-end" id="offcanvasWithBackdrop">
        <div className="offcanvas-header d-flex align-items-center mt-4">
          <Link href={"/"}>
            <div className="d-flex align-items-center mb-md-0 text-decoration-none">
              <CmsImage
                image={context?.siteData?.global?.data?.attributes?.logo}
                className="img-fluid ps-2 nav-logo"
              />
            </div>
          </Link>
          <button
            type="button"
            className="close-btn text-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="far fa-close" />
          </button>
        </div>
        <div className="offcanvas-body">
          <NavLinks />
          <div className="action-btns mt-4 ps-3">
            <AppLinks isOffCanvas />
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
