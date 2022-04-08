import Keycloak from "keycloak-js";

const keycloak = Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  clientId: String(process.env.REACT_APP_KEYCLOAK_CLIENT_ID),
  realm: String(process.env.REACT_APP_KEYCLOAK_REALM),
});

export default keycloak;
