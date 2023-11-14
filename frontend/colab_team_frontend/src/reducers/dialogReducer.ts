import { dialogInitialState } from "@/states/dialogState";

type dialogActions =
  | { type: "EDIT_BANNER_IMAGE_DIALOG" }
  | { type: "EDIT_PROFILE_IMAGE_DIALOG" }
  | { type: "EDIT_USER_DETAILS_DIALOG" };

export const dialogReducer = (
  state: typeof dialogInitialState,
  action: dialogActions
): typeof dialogInitialState => {
  switch (action.type) {
    case "EDIT_BANNER_IMAGE_DIALOG": {
      return {
        ...state,
        openEditBannerImageDialog: !state.openEditBannerImageDialog,
      };
    }
    case "EDIT_PROFILE_IMAGE_DIALOG": {
      return {
        ...state,
        openEditUserImageDialog: !state.openEditUserImageDialog,
      };
    }
    case "EDIT_USER_DETAILS_DIALOG": {
      return { ...state, openEditUserDialog: !state.openEditUserDialog };
    }
  }
};
