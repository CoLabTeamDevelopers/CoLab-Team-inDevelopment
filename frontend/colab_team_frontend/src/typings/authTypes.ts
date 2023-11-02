/* eslint-disable @typescript-eslint/no-explicit-any */

export interface loginTypes {
  email: string;
  password: string;
}

export interface registrationTypes {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface forgotPasswordTypes {
  email: string;
}

export interface resetPasswordTypes {
  password: string;
  confirmPassword: string;
}

export interface BasicTextFieldPropertyTypes {
  id: string;
  label: string;
  name: string;
  type: string;
  control: any;
  inputProps?: any;
  sx: any;
}

export interface BasicButtonType {
  id: string;
  label: string;
  sx: any;
  type?: any;
  dispatch?: any;
  dispatchType?: any;
  dispatchState?: any;
  dispatchFlag?: boolean;
}

export type ReducerAppStateTypes = {
  continueRegistrationForm: boolean;
  togglePasswordView: boolean;
};

export interface ReducerAppActionTypes {
  type: string;
  payload: boolean | any;
}
