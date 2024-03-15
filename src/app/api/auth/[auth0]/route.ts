import { handleAuth, handleLogin } from "@auth0/nextjs-auth0/edge";

export const GET = handleAuth({
  signup: handleLogin({
    authorizationParams: { screen_hint: "signup" },
  }),
});

export const runtime = "edge";
