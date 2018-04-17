/**
 * File: /Users/michaelbeeson/Documents/VSCode/angular-001/lists-pro/src/app/auth/store/auth.actions.ts
 */

import { Action } from "@ngrx/store";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const SET_TOKEN = "SET_TOKEN";

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor() {}
}

export class Signin implements Action {
  readonly type = SIGNIN;

  constructor() {}
}

export class Signout implements Action {
  readonly type = SIGNOUT;

  constructor() {}
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: { token: string }) {}
}

export type AuthActions = Signin | Signout | Signup | SetToken;
