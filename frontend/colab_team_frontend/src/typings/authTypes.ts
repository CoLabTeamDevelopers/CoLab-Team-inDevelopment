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

export interface BasicTextFieldPropTypes {
  id: string;
  label: string;
  name: string;
  type: string;
  control: any;
  sx: any;
}
