import { navDrawerInitialState } from "@/states/navDrawerState";

type drawerActions =
  | { type: "OPEN_LEFT_DRAWER" }
  | { type: "CLOSE_LEFT_DRAWER" }
  | { type: "OPEN_RIGHT_DRAWER" }
  | { type: "CLOSE_RIGHT_DRAWER" };

export const drawerReducer = (
  state: typeof navDrawerInitialState,
  action: drawerActions
): typeof navDrawerInitialState => {
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
