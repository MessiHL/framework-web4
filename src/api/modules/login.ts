import { Login } from "@/api/interface/index";
import authMenuList from "@/assets/json/authMenuList.json";
import authButtonList from "@/assets/json/authButtonList.json";
import http from "@/api";
import qs from "qs";

/**
 * @name 登录模块
 */

export const loginApi = (params: any) => {
  // let config = { noLoading: true, "Content-Type": "application/x-www-form-urlencoded" };
  // return http.post<Login.ResLogin>("http://192.168.1.121:8000" + `/login`, params, config);
  return http.post<Login.ResLogin>(`base/login`, qs.stringify(params));
};

export const getUserInfo = () => {
  // let config = { noLoading: true, "Content-Type": "application/x-www-form-urlencoded" };
  // return http.post<Login.ResLogin>("http://192.168.1.121:8000" + `/login`, params, config);
  return http.get<any>("base/framework-engin2/userSession/user");
};

// 用户户退出登录
export const logoutApi = () => {
  return http.post(`base/logout`);
};

// 获取菜单列表
export const getAuthMenuListApiBase = () => {
  return authMenuList;
};

// 获取菜单列表
export const getAuthMenuListApi = () => {
  return http.get<any>("base/framework-engin2/menu");
};

// 获取按钮权限
export const getAuthButtonListApi = () => {
  return authButtonList;
};
