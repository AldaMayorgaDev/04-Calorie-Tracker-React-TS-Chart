import {useState} from "react";
import type {ChangeEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import {categories} from "../data/categories";
import type {ActivityT} from "../types";

const Form = () => {
  /* Hooks */
  const [activity, setActivity] = useState<ActivityT>({
    category: 1,
    name: "",
    calories: 0,
  });

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
  return (
    <form className="space-y-5 bg-white rounded-lg shadow p-10">
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
        className="bg-gray-800 hover:bg-gray-900 w-full rounded-lg p-2 font-bold uppercase text-slate-100 hover:cursor-pointer space-x-2"
      >
        <FontAwesomeIcon icon={faFloppyDisk} />
        <span>Guardar</span>
      </button>
    </form>
  );
};

export default Form;
