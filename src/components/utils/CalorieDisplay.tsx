type CalorieDisplayPropsT = {
  calories: number;
  text: string;
  type: string;
};
export const CalorieDisplay = ({
  calories,
  text,
  type,
}: CalorieDisplayPropsT) => {
  const getColorByType = (type: string): string => {
    switch (type) {
      case "consumed":
        return `lime`;

      case "burned":
        return `orange`;

      default:
        return "while";
    }
  };

  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className={`font-black text-6xl text-${getColorByType(type)}-500`}>
        {calories}
      </span>{" "}
      {text}
    </p>
  );
};
