import {useMemo} from "react";
import type {ActivityT} from "../types";
import {CalorieDisplay} from "./utils/CalorieDisplay";
import CalorieChart from "./utils/CalorieChart";

type CalorieTrackerPropsT = {
  activities: ActivityT[];
};

export const CalorieTracker = ({activities}: CalorieTrackerPropsT) => {
  //contadores
  const caloriesConsumed = useMemo(() => {
    return activities.reduce(
      (total, activity) =>
        activity.category === 1 ? total + activity.calories : total,
      0,
    );
  }, [activities]);

  const caloriesBurned = useMemo(() => {
    return activities.reduce(
      (total, activity) =>
        activity.category === 2 ? total + activity.calories : total,
      0,
    );
  }, [activities]);

  const netCalories = useMemo(() => {
    return caloriesConsumed - caloriesBurned;
  }, [activities]);
  return (
    <>
      <div>
        <h2 className="text-4xl font-black text-white text-center">
          Resumen de Calorias
        </h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
          <CalorieDisplay
            text={"Consumidas"}
            type={"consumed"}
            calories={caloriesConsumed}
          />

          <CalorieDisplay
            text={"Ejercicio"}
            type={"burned"}
            calories={caloriesBurned}
          />

          <CalorieDisplay
            text={"Total de Calorias"}
            type={""}
            calories={netCalories}
          />
        </div>
      </div>

      <div className="mt-10 w-64 h-64 mx-auto">
        <CalorieChart
          calories={{
            caloriesConsumed: {
              text: "Consumidas",
              quantity: caloriesConsumed,
            },
            caloriesBurned: {
              text: "Ejercicio",
              quantity: caloriesBurned,
            },
          }}
        />
      </div>
    </>
  );
};
