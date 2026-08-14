import type {ActivityT} from "../types";

export type ActivityActions = {
  type: "save-activity";
  payload: {
    newActivity: ActivityT;
  };
};

type ActivityStateT = {
  activities: ActivityT[];
};

/* Estado inicial */
export const initialState: ActivityStateT = {
  activities: [],
};

/* Reducer */
export const activityReducer = (
  state: ActivityStateT = initialState,
  action: ActivityActions,
) => {
  if (action.type === "save-activity") {
    // Este codigo maneja la logica para actualizar el state
    console.log("Desde el type de save-activity");

    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }
  return state;
};
