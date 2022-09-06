import httpClient from "@/utils/axios";
import type { AccountLoginParam, LoginResult, OAuth2LoginParam } from "./types";

export function accountLogin(params: AccountLoginParam) {
  login(Object.assign({ grant_type: "password" }, params));
}

const a: OAuth2LoginParam = Object.assign({ grant_type: "a" });

console.log(a);

function login(params: OAuth2LoginParam) {
  return httpClient.request<LoginResult>({
    url: "/oauth/login",
    method: "POST",
    params,
  });
}
