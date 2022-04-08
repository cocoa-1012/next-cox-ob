import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { generatePath, Navigate } from "react-router-dom";
import { HOME_ROUTE } from "../../../config/routes";
import i18next from "../../../lib/localization/i18next";

const ProtectedRoute: React.FC = ({ children }) => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return null;
  }

  if (keycloak && !keycloak.authenticated) {
    return (
      <Navigate to={generatePath(HOME_ROUTE, { lang: i18next.language })} />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
