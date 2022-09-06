export interface AccountLoginParam {
  username?: string;
  password?: string;
}

/**
 * OAuth2 登录需要的参数
 */
export type OAuth2LoginParam = {
  grant_type: string;
} & AccountLoginParam;

export interface LoginResult {
  access_token: string;
  attributes: {
    permissions: string[];
    roleCodes: string[];
  };
}
