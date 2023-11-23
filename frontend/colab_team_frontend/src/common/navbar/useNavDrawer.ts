import { useReducer } from "react";

type ActionType =
  | "OPEN_LEFT_DRAWER"
  | "CLOSE_LEFT_DRAWER"
  | "OPEN_RIGHT_DRAWER"
  | "CLOSE_RIGHT_DRAWER";

type Action = { type: ActionType };

const initialState = { openLeftDrawer: false, openRightDrawer: false };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "OPEN_LEFT_DRAWER": {
      return { ...state, openLeftDrawer: true };
    }
    case "CLOSE_LEFT_DRAWER": {
      return { ...state, openLeftDrawer: false };
    }
    case "OPEN_RIGHT_DRAWER": {
      return { ...state, openRightDrawer: true };
    }
    case "CLOSE_RIGHT_DRAWER": {
      return { ...state, openRightDrawer: false };
    }
  }
};

export default function useNavDrawer() {
  const [{ openLeftDrawer, openRightDrawer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return {
    leftDrawerOpen: openLeftDrawer,
    rightDrawerOpen: openRightDrawer,
    openLeftDrawer: () => dispatch({ type: "OPEN_LEFT_DRAWER" }),
    openRightDrawer: () => dispatch({ type: "OPEN_RIGHT_DRAWER" }),
    closeLeftDrawer: () => dispatch({ type: "CLOSE_LEFT_DRAWER" }),
    closeRightDrawer: () => dispatch({ type: "CLOSE_RIGHT_DRAWER" }),
  };
}
