import type { Auth0Client, User } from "@auth0/auth0-spa-js";

export type Options = {
  domain: string;
  clientId: string;
  redirectUri: string;
  audience: string;
  scope: string;
};

export type Result = {
  client: Auth0Client;
  isAuthenticated: boolean;
  user: User | undefined;
};
