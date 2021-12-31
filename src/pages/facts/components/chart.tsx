import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Select } from "antd";
import { useEffect, useState } from "react";
import { useChartData } from "../factsData";
import { Container } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { Option } = Select;

export const FactChart = () => {
  const { data: values, isLoading, refetch } = useChartData();
  const [chartData, setChartData] = useState(
    {
    labels: ["", ""],
    datasets: [
      {
        label: "Heart Disease",
        data: [0],
        backgroundColor: "rgb(187, 40, 40)",
      },
      {
        label: "No Heart Disease",
        data: [0],
        backgroundColor: "rgb(40, 121, 187)",
      },
    ],
  })
  const agePositive: number[] = [];
  const ageNegative: number[] = [];

  const chestPainTypePositive: number[] = [];
  const chestPainTypeNegative: number[] = [];

  const exerciseAnginaPositive: number[] = [];
  const exerciseAnginaNegative: number[] = [];

  const fastingBsPositive: number[] = [];
  const fastingBsNegative: number[] = [];

  const maxHrPositive: number[] = [];
  const maxHrNegative: number[] = [];

  const oldPeakPositive: number[] = [];
  const oldPeakNegative: number[] = [];

  const restingBpPositive: number[] = [];
  const restingBpNegative: number[] = [];

  const restingEcgPositive: number[] = [];
  const restingEcgNegative: number[] = [];

  const sexPositive: number[] = [];
  const sexNegative: number[] = [];

  const stSlopePositive: number[] = [];
  const stSlopeNegative: number[] = [];

  useEffect(() => {
    fillLists();
  },[]);


  const fillLists = async () => {
    await refetch()
    if (values) {
      for (let i of values.age[0]) {
        agePositive.push(i);
      }
      for (let i of values.age[1]) {
        ageNegative.push(i);
      }
      for (let i of values.chest_pain_type[0]) {
        chestPainTypePositive.push(i);
      }
      for (let i of values.chest_pain_type[1]) {
        chestPainTypeNegative.push(i);
      }
      for (let i of values.exercise_angina[0]) {
        exerciseAnginaPositive.push(i);
      }
      for (let i of values.exercise_angina[1]) {
        exerciseAnginaNegative.push(i);
      }
      for (let i of values.fasting_bs[0]) {
        fastingBsPositive.push(i);
      }
      for (let i of values.fasting_bs[1]) {
        fastingBsNegative.push(i);
      }
      for (let i of values.max_hr[0]) {
        maxHrPositive.push(i);
      }
      for (let i of values.max_hr[1]) {
        maxHrNegative.push(i);
      }
      for (let i of values.old_peak[0]) {
        oldPeakPositive.push(i);
      }
      for (let i of values.old_peak[1]) {
        oldPeakNegative.push(i);
      }
      for (let i of values.resting_bp[0]) {
        restingBpPositive.push(i);
      }
      for (let i of values.resting_bp[1]) {
        restingBpNegative.push(i);
      }
      for (let i of values.resting_ecg[0]) {
        restingEcgPositive.push(i);
      }
      for (let i of values.resting_ecg[1]) {
        restingEcgNegative.push(i);
      }
      for (let i of values.sex[0]) {
        sexPositive.push(i);
      }
      for (let i of values.sex[1]) {
        sexNegative.push(i);
      }
      for (let i of values.st_slope[0]) {
        stSlopePositive.push(i);
      }
      for (let i of values.st_slope[1]) {
        stSlopeNegative.push(i);
      }
    }
  }

  const handleChange = async(value?: any) => {
    await fillLists()
    setChart(value)
  };

  const setOptions = () => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: false,
        },
      },
    }
  }

  const setChart = (value?:string) => {
    if(!value){
      value = "sex"
    }
    let chart:any = {};
    if (value === "sex") {
      chart = {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Heart Disease",
            data: sexPositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: sexNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    if (value === "age") {
      chart = {
        labels: ["20-40", "40-60", "60-80"],
        datasets: [
          {
            label: "Heart Disease",
            data: agePositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: ageNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    setChartData(chart)
  }

  return (
    <Container className="jumbotron">
      <div className="d-flex justify-content-center">
        <Select
          style={{ width: 360 }}
          onChange={handleChange}
        >
          <Option value={"age"}>Age</Option>
          <Option value={"sex"}>Sex</Option>
          <Option value={"chestPainType"}>Chest Pain Type</Option>
          <Option value={"angina"}>Exercise Angina</Option>
          <Option value={"bs"}>Fasting Blood Sugar</Option>
          <Option value={"hr"}>Max Heart Rate</Option>
          <Option value={"peak"}>Old Peak(ST)</Option>
          <Option value={"bp"}>Resting Blood Pressure</Option>
          <Option value={"ecg"}>Resting Electrocardiogram Results</Option>
          <Option value={"stSlope"}>ST Slope</Option>
        </Select>
      </div>
      <div className="d-flex justify-content-center">
        <Bar options={setOptions()} data={chartData} defaultValue={undefined} />
      </div>
    </Container>
  );
};
