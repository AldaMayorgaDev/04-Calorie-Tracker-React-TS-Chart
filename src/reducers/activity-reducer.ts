import type {ActivityT} from "../types";

export type ActivityActions =
  | {
      type: "save-activity";
      payload: {
        newActivity: ActivityT;
      };
    }
  | {
      type: "set-activeId";
      payload: {
        id: ActivityT["id"];
      };
    }
  | {
      type: "delete-activity";
      payload: {
        id: ActivityT["id"];
      };
    };

export type ActivityStateT = {
  activities: ActivityT[];
  activeId: ActivityT["id"];
};

/* Estado inicial */
export const initialState: ActivityStateT = {
  activities: [],
  activeId: "",
};

/* Reducer */
export const activityReducer = (
  state: ActivityStateT = initialState,
  action: ActivityActions,
) => {
  if (action.type === "save-activity") {
    // Este codigo maneja la logica para actualizar el state

    let updatedActivities: ActivityT[];

    //Se comprueba si el activeId existe en actividades siginfica que estamos editando, si no estamos creando una actividad nueva

    if (state.activeId) {
      updatedActivities = state.activities.map((activity) => {
        return activity.id === state.activeId
          ? action.payload.newActivity
          : activity;
      });
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity];
    }

    return {
      ...state,
      activities: updatedActivities,
      activeId: "",
    };
  }

  if (action.type === "set-activeId") {
    console.log("Actived ID actions", action.payload.id);

    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if (action.type === "delete-activity") {
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== action.payload.id,
      ),
    };
  }
  return state;
};
