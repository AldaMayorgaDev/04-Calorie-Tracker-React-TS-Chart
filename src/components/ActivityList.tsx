import {useMemo} from "react";
import type {ActionDispatch} from "react";

import {PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import type {ActivityT} from "../types";
import {categories} from "../data/categories";
import type {ActivityActions} from "../reducers/activity-reducer";

type ActivityListPropsT = {
  activites: ActivityT[];
  dispatch: ActionDispatch<[ActivityActions]>;
};
const ActivityList = ({activites, dispatch}: ActivityListPropsT) => {
  const categoryName = useMemo(
    () => (category: ActivityT["category"]) =>
      categories.map((cat) => {
        return cat.id === category ? cat.name : "";
      }),
    [activites],
  );

  const isEmpty = useMemo(() => activites.length === 0, [activites]);
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>
      {isEmpty ? (
        <p className="mt-8 text-2xl text-slate-400 text-center capitalize">
          Sin actividades
        </p>
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
                <button
                  className="hover:cursor-pointer"
                  onClick={() => {
                    dispatch({
                      type: "set-activeId",
                      payload: {id: activity.id},
                    });
                  }}
                >
                  <PencilSquareIcon className=" h-8 w-8 text-gray-800" />
                </button>

                <button
                  className="hover:cursor-pointer"
                  onClick={() => {
                    dispatch({
                      type: "delete-activity",
                      payload: {id: activity.id},
                    });
                  }}
                >
                  <TrashIcon className=" h-8 w-8 text-red-800" />
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
