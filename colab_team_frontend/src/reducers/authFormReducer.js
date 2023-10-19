export const continueSignupForm = {
  signupForm: false,
};

export function authFormReducer(state, action) {
  switch (action.type) {
    case "continueSignupForm": {
      return { signupForm: !state.signupForm };
    }
  }
}
