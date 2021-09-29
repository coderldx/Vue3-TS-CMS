import dxRequest from '../index'

import { Account, LoginInfo } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: Account) {
  return dxRequest.post<LoginInfo>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function getUserById(id: number) {
  return dxRequest.get({
    url: LoginAPI.UserInfo + id
  })
}

export function getUserMenus(id: number) {
  return dxRequest.get({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
