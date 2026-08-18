<div align="center">

# 🔥 Calorie Tracker — React + TypeScript

Aplicación web para registrar **calorías consumidas y quemadas**, administrar actividades y visualizar el balance calórico mediante un resumen dinámico y una gráfica interactiva.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4-FF6384?logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

[Ver repositorio](https://github.com/AldaMayorgaDev/04-Calorie-Tracker-React-TS-Chart)

</div>

## 📋 Descripción

**Calorie Tracker** es una aplicación frontend desarrollada con **React, TypeScript, Vite y Tailwind CSS** que permite llevar un registro sencillo de las calorías asociadas a alimentos y actividades físicas.

Cada registro se clasifica como **Comida** o **Ejercicio**. A partir de la información capturada, la aplicación calcula automáticamente:

- Calorías consumidas.
- Calorías quemadas mediante ejercicio.
- Balance neto de calorías.
- Distribución visual de calorías mediante una gráfica tipo **Doughnut**.

El estado principal de la aplicación se administra con **`useReducer`**, mientras que las actividades se almacenan en **`localStorage`**, permitiendo conservar la información incluso después de recargar o cerrar el navegador.

El proyecto fue construido con un enfoque educativo para practicar manejo de estado, formularios controlados, reducers, persistencia local, tipado con TypeScript, renderizado dinámico y visualización de datos.

> [!NOTE]
> La información se almacena únicamente en el `localStorage` del navegador. El proyecto no utiliza backend, base de datos ni sincronización entre dispositivos.

## ✨ Funcionalidades principales

| Funcionalidad                 | Descripción                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| **Registro de actividades**   | Permite agregar alimentos o ejercicios indicando nombre y cantidad de calorías.        |
| **Categorías**                | Clasifica cada registro como `Comida` o `Ejercicio`.                                   |
| **Validación del formulario** | Impide guardar registros sin nombre o con calorías iguales o menores a cero.           |
| **Edición de registros**      | Permite seleccionar una actividad existente, cargarla en el formulario y actualizarla. |
| **Eliminación de registros**  | Permite eliminar individualmente cualquier actividad registrada.                       |
| **Persistencia local**        | Guarda automáticamente las actividades en `localStorage`.                              |
| **Resumen calórico**          | Calcula calorías consumidas, quemadas y el balance neto.                               |
| **Gráfica dinámica**          | Representa calorías consumidas y quemadas mediante una gráfica Doughnut con Chart.js.  |
| **Reinicio de la aplicación** | Elimina todas las actividades y restablece el estado inicial.                          |
| **IDs únicos**                | Genera identificadores únicos para cada actividad mediante `uuid`.                     |
| **Interfaz responsive**       | Utiliza Tailwind CSS para adaptar la interfaz a diferentes tamaños de pantalla.        |
| **Iconografía**               | Integra Font Awesome y Heroicons para mejorar la experiencia visual.                   |

## 🧠 Conceptos aplicados

Este proyecto pone en práctica varios conceptos importantes de React y TypeScript:

- Componentes funcionales con React.
- Estado local mediante `useState`.
- Manejo de estado complejo con `useReducer`.
- Acciones y estado del reducer tipados con TypeScript.
- Formularios controlados.
- Manejo de eventos con tipos de React.
- Renderizado condicional.
- Renderizado de listas mediante `map()`.
- Actualización inmutable de arreglos mediante `map()` y `filter()`.
- Cálculo de valores derivados mediante `reduce()`.
- Memoización con `useMemo`.
- Efectos secundarios mediante `useEffect`.
- Persistencia de datos con `localStorage`.
- Generación de IDs únicos con `uuid`.
- Visualización de datos con Chart.js y `react-chartjs-2`.
- Estilos utilitarios y diseño responsive con Tailwind CSS.
- Separación de responsabilidades entre componentes, datos, tipos y reducer.

## 🧱 Estructura del proyecto

```text
04-calorie-tracker/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── utils/
│   │   │   ├── CalorieChart.tsx
│   │   │   └── CalorieDisplay.tsx
│   │   ├── ActivityList.tsx
│   │   ├── CalorieTracker.tsx
│   │   └── Form.tsx
│   ├── data/
│   │   └── categories.ts
│   ├── reducers/
│   │   └── activity-reducer.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🧩 Responsabilidad de cada módulo

| Archivo                                   | Responsabilidad                                                                                             |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `src/App.tsx`                             | Inicializa el reducer, sincroniza las actividades con `localStorage` e integra los componentes principales. |
| `src/components/Form.tsx`                 | Gestiona el formulario para crear y editar alimentos o ejercicios.                                          |
| `src/components/ActivityList.tsx`         | Renderiza las actividades registradas y expone las acciones de editar y eliminar.                           |
| `src/components/CalorieTracker.tsx`       | Calcula y presenta calorías consumidas, quemadas y balance neto.                                            |
| `src/components/utils/CalorieDisplay.tsx` | Componente reutilizable para mostrar cada indicador del resumen calórico.                                   |
| `src/components/utils/CalorieChart.tsx`   | Configura y renderiza la gráfica Doughnut mediante Chart.js.                                                |
| `src/reducers/activity-reducer.ts`        | Centraliza el estado y las acciones de guardar, editar, eliminar y reiniciar actividades.                   |
| `src/data/categories.ts`                  | Define las categorías disponibles: comida y ejercicio.                                                      |
| `src/types/index.ts`                      | Define los tipos TypeScript utilizados para categorías y actividades.                                       |
| `src/index.css`                           | Importa Tailwind CSS, la fuente Rubik y los estilos base de la aplicación.                                  |

## 🔄 Flujo de estado

La aplicación utiliza `useReducer` para centralizar las operaciones relacionadas con las actividades.

```text
Formulario
   │
   │ dispatch(action)
   ▼
activityReducer
   │
   ├── save-activity
   ├── set-activeId
   ├── delete-activity
   └── restart-app
   │
   ▼
state.activities
   │
   ├── ActivityList
   ├── CalorieTracker
   └── localStorage
```

### Acciones disponibles

| Acción            | Propósito                                                            |
| ----------------- | -------------------------------------------------------------------- |
| `save-activity`   | Crea una actividad nueva o actualiza la que se encuentra en edición. |
| `set-activeId`    | Indica qué actividad será editada.                                   |
| `delete-activity` | Elimina una actividad por su identificador.                          |
| `restart-app`     | Vacía las actividades y reinicia el estado de la aplicación.         |

## 🧮 Cálculo de calorías

Las actividades utilizan una categoría numérica:

```text
1 = Comida
2 = Ejercicio
```

A partir de esas categorías, el resumen calcula:

```text
calorías consumidas = suma de las calorías de actividades categoría 1

calorías quemadas   = suma de las calorías de actividades categoría 2

balance neto        = calorías consumidas - calorías quemadas
```

Los valores derivados se calculan a partir del arreglo de actividades mediante `reduce()` y se memoizan con `useMemo`.

## 💾 Persistencia con localStorage

Al iniciar la aplicación, el reducer intenta recuperar los datos previamente almacenados bajo la clave:

```text
activities
```

Cuando cambia el arreglo de actividades, `App.tsx` actualiza automáticamente el almacenamiento local:

```ts
useEffect(() => {
  localStorage.setItem("activities", JSON.stringify(state.activities));
}, [state.activities]);
```

Gracias a esto, los registros permanecen disponibles después de recargar la página.

> [!IMPORTANT]
> `localStorage` pertenece al navegador y dispositivo actual. Limpiar los datos del navegador, utilizar otro navegador o cambiar de dispositivo puede hacer que los registros ya no estén disponibles.

## 🛠️ Tecnologías utilizadas

- **React 19** — Construcción de la interfaz mediante componentes.
- **TypeScript 6** — Tipado estático de datos, acciones, props y eventos.
- **Vite 8** — Servidor de desarrollo y generación del build de producción.
- **Tailwind CSS 4** — Diseño de la interfaz mediante clases utilitarias.
- **Chart.js 4** — Creación de la gráfica de calorías.
- **react-chartjs-2** — Integración de Chart.js con componentes React.
- **UUID** — Generación de identificadores únicos.
- **Font Awesome** — Iconografía para tipos de actividad.
- **Heroicons** — Iconos para las acciones de editar y eliminar.
- **ESLint** — Análisis estático y validación de calidad del código.

## ✅ Requisitos previos

Antes de ejecutar el proyecto, necesitas:

- **Node.js `20.19.0` o superior dentro de la rama 20**, o **Node.js `22.12.0` o superior**.
- **npm**, incluido normalmente con Node.js.
- Un navegador moderno como Chrome, Edge, Firefox o Safari.

Puedes comprobar las versiones instaladas con:

```bash
node --version
npm --version
```

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/AldaMayorgaDev/04-Calorie-Tracker-React-TS-Chart.git
cd 04-Calorie-Tracker-React-TS-Chart
```

### 2. Instalar las dependencias

```bash
npm install
```

También puedes realizar una instalación reproducible utilizando el archivo `package-lock.json`:

```bash
npm ci
```

### 3. Ejecutar el proyecto en desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local de la aplicación, normalmente:

```text
http://localhost:5173
```

### 4. Generar el build de producción

```bash
npm run build
```

El build generado se almacena en:

```text
dist/
```

### 5. Previsualizar el build

```bash
npm run preview
```

### 6. Ejecutar ESLint

```bash
npm run lint
```

## 📜 Scripts disponibles

| Comando           | Descripción                                                       |
| ----------------- | ----------------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo de Vite.                         |
| `npm run build`   | Ejecuta TypeScript y genera el build de producción con Vite.      |
| `npm run lint`    | Analiza el código fuente mediante ESLint.                         |
| `npm run preview` | Sirve localmente el build de producción para su previsualización. |

## 🧾 Modelo de datos

Las actividades utilizan una estructura sencilla y tipada:

```ts
export type ActivityT = {
  id: string;
  category: number;
  name: string;
  calories: number;
};
```

Las categorías se representan mediante:

```ts
export type CategoryT = {
  id: number;
  name: string;
};
```

Actualmente existen dos categorías:

```ts
export const categories = [
  {id: 1, name: "Comida"},
  {id: 2, name: "Ejercicio"},
];
```

## 📊 Visualización de datos

El componente `CalorieChart` utiliza **Chart.js** junto con **react-chartjs-2** para representar en una gráfica Doughnut:

- Calorías consumidas.
- Calorías quemadas mediante ejercicio.

La gráfica se actualiza automáticamente cuando se agrega, modifica o elimina una actividad, ya que sus valores provienen directamente del estado global de la aplicación.

## 🎨 Interfaz

La interfaz está construida con **Tailwind CSS** y utiliza una distribución responsive para facilitar su uso en distintos tamaños de pantalla.

La aplicación está dividida visualmente en tres áreas principales:

1. **Formulario de captura**, para agregar o editar actividades.
2. **Resumen de calorías**, con indicadores y gráfica.
3. **Listado de actividades**, con controles de edición y eliminación.

La fuente principal es **Rubik**, cargada desde Google Fonts.

## ⚠️ Alcance del proyecto

Este proyecto es una aplicación frontend con fines educativos y de práctica. Actualmente no incluye:

- Backend o API.
- Base de datos.
- Autenticación de usuarios.
- Sincronización entre dispositivos.
- Registro de fechas o historial diario.
- Objetivos personalizados de calorías.
- Seguimiento de macronutrientes.
- Cálculos de metabolismo basal o gasto energético diario.
- Recomendaciones nutricionales.
- Pruebas automatizadas.

## 🗺️ Posibles mejoras

Algunas funcionalidades que pueden incorporarse en futuras versiones:

- Agregar fecha y hora a cada actividad.
- Crear filtros por fecha, categoría o periodo.
- Definir una meta diaria de calorías.
- Mostrar progreso respecto a la meta establecida.
- Incorporar seguimiento de proteínas, carbohidratos y grasas.
- Añadir nuevas categorías personalizables.
- Crear gráficas históricas por día, semana o mes.
- Exportar información a CSV o PDF.
- Incorporar una API y una base de datos.
- Implementar autenticación y sincronización entre dispositivos.
- Agregar pruebas unitarias para el reducer y los componentes.
- Añadir pruebas de integración para los principales flujos de usuario.
- Convertir la aplicación en PWA para facilitar su uso desde dispositivos móviles.

## 📌 Estado del proyecto

Proyecto funcional desarrollado con fines educativos para practicar **React, TypeScript, `useReducer`, persistencia con `localStorage`, manejo de formularios y visualización de datos con Chart.js**.

## 📄 Licencia

Actualmente, el repositorio no incluye un archivo de licencia.

Si deseas permitir formalmente su reutilización, modificación y distribución, puedes agregar una licencia como **MIT**.

## 👨‍💻 Autor

Desarrollado por [@AldaMayorgaDev](https://github.com/AldaMayorgaDev).

---

<div align="center">

Desarrollado con **React + TypeScript + Vite**

</div>
