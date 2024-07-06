import {
  type Auth0Client,
  type User,
  createAuth0Client,
} from "@auth0/auth0-spa-js";
import type { Options, Result } from "./types";

let client: Auth0Client | null = null;
let isAuthenticated: boolean;
let user: User | undefined;

export default function useSuspenseAuth0(options: Options): Result {
  if (client === null) {
    throw createAuth0Client({
      domain: options.domain,
      clientId: options.clientId,
      authorizationParams: {
        redirect_uri: options.redirectUri,
        audience: options.audience,
        scope: options.scope,
      },
    }).then(async (response) => {
      client = response;
      isAuthenticated = await client.isAuthenticated();
      user = await client.getUser();
    });
  }

  return {
    client,
    isAuthenticated,
    user,
  };
}
