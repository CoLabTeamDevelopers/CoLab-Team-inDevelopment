export const continueSignupForm = {
  signupForm: false,
  submit: false,
};

export function authFormReducer(state, action) {
  switch (action.type) {
    case "continueSignupForm": {
      return { signupForm: !state.signupForm };
    }
    case "submit": {
      console.log("Hello");
      return "Form Submitted";
    }
    default: {
      return null;
    }
  }
}
