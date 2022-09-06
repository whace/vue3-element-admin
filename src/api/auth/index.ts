import httpClient from "@/utils/axios";
import type { AccountLoginParam, LoginResult, OAuth2LoginParam } from "./types";

export function accountLogin(params: AccountLoginParam) {
  login(Object.assign({ grant_type: "password" }, params));
}

const a: OAuth2LoginParam = Object.assign({ grant_type: "a" });


function login(data: OAuth2LoginParam) {
  debugger;
  return httpClient.request<LoginResult>({
    url: "/login",
    method: "POST",
    data,
  });
}
