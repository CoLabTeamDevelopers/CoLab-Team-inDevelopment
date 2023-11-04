<<<<<<< HEAD
=======
/* eslint-disable @typescript-eslint/no-explicit-any */

>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
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

<<<<<<< HEAD
export interface BasicTextFieldPropTypes {
  id: string;
  label: string;
  name: string;
  type: string;
  control: any;
  inputProps: any;
  sx: any;
}

=======
>>>>>>> 8c4416c3e5dbd94e051b3762b70e465c843f4eae
export type ReducerAppStateTypes = {
  continueRegistrationForm: boolean;
  togglePasswordView: boolean;
};

export interface ReducerAppActionTypes {
  type: string;
  payload: boolean | any;
}
