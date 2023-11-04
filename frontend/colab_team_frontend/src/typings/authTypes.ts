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

export type ReducerAppStateTypes = {
  continueRegistrationForm: boolean;
  togglePasswordView: boolean;
};

export interface ReducerAppActionTypes {
  type: string;
  payload: boolean | any;
}
