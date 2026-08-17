import {useMemo} from "react";

import {PencilSquareIcon} from "@heroicons/react/24/outline";
import type {ActivityT} from "../types";
import {categories} from "../data/categories";

type ActivityListPropsT = {
  activites: ActivityT[];
};
const ActivityList = ({activites}: ActivityListPropsT) => {
  const categoryName = useMemo(
    () => (category: ActivityT["category"]) =>
      categories.map((cat) => {
        return cat.id === category ? cat.name : "";
      }),
    [activites],
  );
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>
      {activites.length === 0 ? (
        <p>Sin actividades</p>
      ) : (
        activites.map((activity) => {
          return (
            <div
              key={activity.id}
              className="px-5 py-10 bg-white mt-5 flex justify-between rounded-2xl"
            >
              <div className="space-y-2 relative">
                <p
                  className={`absolute -top-7 -left-8 px-10 py-2 uppercase font-bold text-white rounded-lg  ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"}`}
                >
                  {categoryName(+activity.category)}
                </p>
                <p className="text-2xl font-bold pt-5">{activity.name}</p>
                <p className="font-black text-4xl text-lime-500">
                  {activity.calories} <span>Calorias</span>
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <button className="hover:cursor-pointer">
                  <PencilSquareIcon className=" h-8 w-8 text-gray-800" />
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ActivityList;
