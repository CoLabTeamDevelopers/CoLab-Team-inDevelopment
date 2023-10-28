export const authFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function authInputFormReducer(state, action) {
  switch (action.type) {
    case "username": {
      console.log(authFormFields.us);
      return {
        username: action.value,
      };
    }
    case "email": {
      return {
        email: action.value,
      };
    }
    case "password": {
      return {
        password: action.value,
      };
    }
    case "confirmPassword": {
      return {
        confirmPassword: action.value,
      };
    }
    default: {
      return null;
    }
  }
}
