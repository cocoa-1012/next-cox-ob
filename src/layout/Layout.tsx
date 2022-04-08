import React, { ReactNode } from "react";
import PreviewBanner from "../components/PreviewBanner";

const Layout = ({
  children,
  preview,
}: {
  children: ReactNode;
  preview?: boolean;
}) => {
  return (
    <>
      {preview && <PreviewBanner />}
      <div className={"main-wrapper"}>{children}</div>
    </>
  );
};

export default Layout;
