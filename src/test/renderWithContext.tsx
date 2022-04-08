import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContext } from "../lib/contextLib";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../lib/keycloak";

export const renderWithContext = (
  ui: {} | null | undefined,
  { providerProps, ...renderOptions } = { providerProps: { value: {} } }
) => {
  return render(
    <ReactKeycloakProvider authClient={keycloak}>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>
        </BrowserRouter>
      </QueryClientProvider>
    </ReactKeycloakProvider>,
    renderOptions
  );
};
