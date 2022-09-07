import httpClient from "@/utils/axios";
import type { ApiResult } from "../types";
import type { AccountLoginParam, LoginResult, OAuth2LoginParam } from "./types";

export function accountLogin(params: AccountLoginParam) {
  return login(Object.assign({ grant_type: "password" }, params));
}

function login(data: OAuth2LoginParam) {
  return httpClient.request<LoginResult>({
    url: "/login",
    method: "POST",
    data,
  });
}
