import { AuthInitialState } from "@/states/authInitialState";

type AuthAction =
  | { type: "TOGGLE_PASSWORD_VIEW" }
  | { type: "CONTINUE_REGISTRATION_FORM" };

export const authReducer = (
  state: typeof AuthInitialState,
  action: AuthAction
): typeof AuthInitialState => {
  switch (action.type) {
    case "CONTINUE_REGISTRATION_FORM": {
      return state;
    }
    case "TOGGLE_PASSWORD_VIEW": {
      return { ...state, togglePasswordView: !state.togglePasswordView };
    }
    default: {
      return state;
    }
  }
};
