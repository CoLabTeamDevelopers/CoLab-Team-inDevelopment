export const continueSignupForm = {
  signupForm: false,
  register: false,
};

export function authFormReducer(state, action) {
  switch (action.type) {
    case "continueSignupForm": {
      return { signupForm: !state.signupForm };
    }
    case "register": {
      return "Form Submitted";
    }
    case "login": {
      return "Logged In Successfully";
    }
    default: {
      return null;
    }
  }
}
