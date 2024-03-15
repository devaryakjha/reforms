import {
  handleAuth,
  handleLogin,
  handleLogout,
} from "@auth0/nextjs-auth0/edge";

export const GET = handleAuth({
  signup: handleLogin({
    authorizationParams: { screen_hint: "signup" },
    returnTo: "/dashboard",
  }),
  login: handleLogin({ returnTo: "/dashboard" }),
  logout: handleLogout({ returnTo: "/about" }),
});

export const runtime = "edge";
