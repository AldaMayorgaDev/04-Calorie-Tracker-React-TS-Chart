import {useState, useEffect} from "react";
import type {ChangeEvent, Dispatch, SubmitEvent} from "react";
import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPersonRunning, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {categories} from "../data/categories";
import type {ActivityT} from "../types";
import type {
  ActivityActions,
  ActivityStateT,
} from "../reducers/activity-reducer";

type FormPropsT = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityStateT;
};
const initialState: ActivityT = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};
const Form = ({dispatch, state}: FormPropsT) => {
  /* Hooks */
  const [activity, setActivity] = useState<ActivityT>(initialState);

  /* UseEffect se ejecuta siempre que hay un activeId, es decir que se selecicona para editar
  Si tenemos un id en el state-activeId, filtra trodo el arreglo de activites y nos devuelve el elemento con el mismo id de activeID
  Se coloca [0] porque el filter regresa un arreglo y queremos solo el primer elemento
  s Se setean los valores setActivity para que aparezcan en el formulario
   */
  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter(
        (stateActivity) => stateActivity.id === state.activeId,
      )[0];
      // eslint-disable-next-line
      setActivity(selectedActivity);
    }
  }, [state.activeId]);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    setActivity({
      ...activity,
      /* Se convierte el valor, si isNumberField es true, el e.target.value se convierte a numero con el +, y si isFieldNumber es false se pasa el valor como tal  */
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = (): boolean => {
    const {name, calories} = activity;

    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "save-activity",
      payload: {
        newActivity: activity,
      },
    });

    setActivity({...initialState, id: uuidv4()});
  };
  return (
    <form
      className="space-y-5 bg-white rounded-lg shadow p-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-semibold">
          Categoría:
        </label>
        <select
          name="categoria"
          id="category"
          className="border-slate-300 p-2 rounded-lg w-full bg-white border"
          value={activity.category}
          onChange={(e) => handleChange(e)}
        >
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-semibold">
          Actividad:
        </label>
        <input
          type="text"
          id="name"
          className="border border-slate-300 rounded-lg w-full p-2 placeholder:font-light placeholder:italic"
          placeholder="Ejemplo: Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta "
          value={activity.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-semibold">
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 rounded-lg w-full p-2 placeholder:font-light placeholder:italic"
          placeholder="Ejemplo: 300 o 1500 "
          value={activity.calories}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>

      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full rounded-lg p-2 font-bold uppercase text-slate-100 hover:cursor-pointer space-x-2 disabled:opacity-10"
        disabled={!isValidActivity()}
      >
        {activity.category === 1 ? (
          <>
            <FontAwesomeIcon icon={faUtensils} />
            <span> Guardar Comida </span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPersonRunning} />
            <span>Guardar Ejercicio </span>
          </>
        )}
      </button>
    </form>
  );
};

export default Form;
