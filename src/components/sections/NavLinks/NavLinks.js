// import { useKeycloak } from "@react-keycloak/web";
import classNames from "classnames";
import React from "react";
import CompareCTA from "../../cta/CompareCta";

// const AuthorizedLinks = () => {
//   return (
//     <button
//       onClick={() =>
//         keycloak.logout({
//           redirectUri: `${window.location.origin}${generatePath(HOME_ROUTE, {
//             lang: i18next.language,
//           })}`,
//         })
//       }
//       className="btn btn-link text-decoration-none me-2"
//     >
//       Logout
//     </button>
//   );
// };
//
// const UnauthorizedLinks = ({ isOffCanvas }) => {
//   return (
//     <>
//       <button
//         className={classNames("btn btn-link text-decoration-none me-2", {
//           "btn-outline-primary mb-2": isOffCanvas,
//         })}
//         onClick={() =>
//           keycloak.login({
//             redirectUri: `${window.location.origin}${generatePath(
//               MY_ACCOUNT_ROUTE,
//               { lang: i18next.language }
//             )}`,
//           })
//         }
//       >
//         Login
//       </button>
//
//       <CompareCTA isPrimary={true} />
//     </>
//   );
// };

export const AppLinks = ({ isOffCanvas }) => {
  return (
    <>
      <button
        className={classNames("btn btn-link text-decoration-none me-2", {
          "btn-outline-primary mb-2": isOffCanvas,
        })}
        onClick={() => {}}
      >
        Login
      </button>

      <CompareCTA isPrimary={true} />
    </>
  );
  // const { keycloak, initialized } = useKeycloak();
  //
  // if (!initialized) {
  //   return null;
  // }
  // return keycloak.authenticated ? (
  //   <AuthorizedLinks />
  // ) : (
  //   <UnauthorizedLinks isOffCanvas={isOffCanvas} />
  // );
};
