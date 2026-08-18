import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

type CalorieChartPropsT = {
  calories: {
    caloriesConsumed: {
      text: string;
      quantity: number;
    };
    caloriesBurned: {
      text: string;
      quantity: number;
    };
  };
};
const CalorieChart = ({calories}: CalorieChartPropsT) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [calories.caloriesConsumed.text, calories.caloriesBurned.text],
    datasets: [
      {
        label: "Calorias",
        data: [
          calories.caloriesConsumed.quantity,
          calories.caloriesBurned.quantity,
        ],
        backgroundColor: ["#FF6900A6", "#7CCF00A6"],
        borderColor: ["#FF6900", "#7CCF00"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default CalorieChart;
