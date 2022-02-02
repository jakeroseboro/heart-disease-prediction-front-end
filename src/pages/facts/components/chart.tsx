import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Select } from "antd";
import { useEffect, useState } from "react";
import { useChartData } from "../factsData";
import { Container } from "react-bootstrap";
import './chart.scss'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

ChartJS.defaults.color = "black"

const { Option } = Select;

export const FactChart = () => {
  const { data: values, refetch } = useChartData();
  const [selected, setSelected] = useState('');
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
  const [pieChartData, setPieChartData] = useState(
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
  const [pieChart2Data, setPieChart2Data] = useState(
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getWidth = () =>{
    if(window.innerWidth > 769){
      return 400
    }
    else{
      return 300
    }
  }


  const fillLists = async () => {
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
    if(values === undefined){
      let i = 0;
      while(i < 5 && values === undefined){
        if(i < 3){
          await refetch();
        }
        else{
          await refetch().catch((error) => {
            localStorage.removeItem('token');
            window.location.reload();
          })
        }
        i += 1
      }
    }
    setSelected(value)
    await fillLists()
    setChart(value)
    setPieChart1(value)
    setPieChart2(value)
  };

  const setOptions = () => {
    return {
      maintainAspectRatio: false,
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
            backgroundColor: "rgb(187, 40, 40)"
          },
          {
            label: "No Heart Disease",
            data: sexNegative,
            backgroundColor: "rgb(40, 121, 187)"
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
    if (value === "chestPainType") {
      chart = {
        labels: ["ATA: Atypical Angina", "TA: Typical Angina", "NAP: Non-Anginal Pain", "ASY: Asymptomatic"],
        datasets: [
          {
            label: "Heart Disease",
            data: chestPainTypePositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: chestPainTypeNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    if (value === "angina") {
      chart = {
        labels: ["Exercise Angina", "No Exercise Angina"],
        datasets: [
          {
            label: "Heart Disease",
            data: exerciseAnginaPositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: exerciseAnginaNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    if (value === "bs") {
      chart = {
        labels: ["FastingBS > 120 mg/dl", "FastingBS < 120 mg/dl"],
        datasets: [
          {
            label: "Heart Disease",
            data: fastingBsPositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: fastingBsNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    if (value === "hr") {
      chart = {
        labels: ["60-131", "131-202"],
        datasets: [
          {
            label: "Heart Disease",
            data: maxHrPositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: maxHrNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    if (value === "peak") {
      chart = {
        labels: ["(-)7-1", "1-7"],
        datasets: [
          {
            label: "Heart Disease",
            data: oldPeakPositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: oldPeakNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    if (value === "bp") {
      chart = {
        labels: ["Resting BP < 120 mm Hg", "Resting BP > 120 mm Hg"],
        datasets: [
          {
            label: "Heart Disease",
            data: restingBpPositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: restingBpNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    if (value === "ecg") {
      chart = {
        labels: ["Normal: Normal", "ST: Having ST-T wave abnormality", "LVH: Probable or definite left ventricular hypertrophy by Estes' criteria"],
        datasets: [
          {
            label: "Heart Disease",
            data: restingEcgPositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: restingEcgNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    if (value === "stSlope") {
      chart = {
        labels: ["Up-Sloping","Flat", "Down-Sloping"],
        datasets: [
          {
            label: "Heart Disease",
            data: stSlopePositive,
            backgroundColor: "rgb(187, 40, 40)",
          },
          {
            label: "No Heart Disease",
            data: stSlopeNegative,
            backgroundColor: "rgb(40, 121, 187)",
          },
        ],
      }
    }
    setChartData(chart)
  }

  const setPieChart1 = (value?:string) =>{
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
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
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
            backgroundColor: ['rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          }
        ],
      }
    }
    if (value === "chestPainType") {
      chart = {
        labels: ["ATA: Atypical Angina", "TA: Typical Angina", "NAP: Non-Anginal Pain", "ASY: Asymptomatic"],
        datasets: [
          {
            label: "Heart Disease",
            data: chestPainTypePositive,
            backgroundColor: ['rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',]
          }
        ],
      }
    }
    if (value === "angina") {
      chart = {
        labels: ["Exercise Angina", "No Exercise Angina"],
        datasets: [
          {
            label: "Heart Disease",
            data: exerciseAnginaPositive,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "bs") {
      chart = {
        labels: ["FastingBS > 120 mg/dl", "FastingBS < 120 mg/dl"],
        datasets: [
          {
            label: "Heart Disease",
            data: fastingBsPositive,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "hr") {
      chart = {
        labels: ["60-131", "131-202"],
        datasets: [
          {
            label: "Heart Disease",
            data: maxHrPositive,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "peak") {
      chart = {
        labels: ["(-)7-1", "1-7"],
        datasets: [
          {
            label: "Heart Disease",
            data: oldPeakPositive,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "bp") {
      chart = {
        labels: ["Resting BP < 120 mm Hg", "Resting BP > 120 mm Hg"],
        datasets: [
          {
            label: "Heart Disease",
            data: restingBpPositive,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "ecg") {
      chart = {
        labels: ["Normal: Normal", "ST: Having ST-T wave abnormality", "LVH: Probable or definite left ventricular hypertrophy by Estes' criteria"],
        datasets: [
          {
            label: "Heart Disease",
            data: restingEcgPositive,
            backgroundColor: ['rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',]
          },
        ],
      }
    }
    if (value === "stSlope") {
      chart = {
        labels: ["Up-Sloping","Flat", "Down-Sloping"],
        datasets: [
          {
            label: "Heart Disease",
            data: stSlopePositive,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    setPieChartData(chart)
  }

  const setPieChart2 = (value?:string) =>{
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
            data: sexNegative,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
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
            data: ageNegative,
            backgroundColor: ['rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          }
        ],
      }
    }
    if (value === "chestPainType") {
      chart = {
        labels: ["ATA: Atypical Angina", "TA: Typical Angina", "NAP: Non-Anginal Pain", "ASY: Asymptomatic"],
        datasets: [
          {
            label: "Heart Disease",
            data: chestPainTypeNegative,
            backgroundColor: ['rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',]
          }
        ],
      }
    }
    if (value === "angina") {
      chart = {
        labels: ["Exercise Angina", "No Exercise Angina"],
        datasets: [
          {
            label: "Heart Disease",
            data: exerciseAnginaNegative,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "bs") {
      chart = {
        labels: ["FastingBS > 120 mg/dl", "FastingBS < 120 mg/dl"],
        datasets: [
          {
            label: "Heart Disease",
            data: fastingBsNegative,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "hr") {
      chart = {
        labels: ["60-131", "131-202"],
        datasets: [
          {
            label: "Heart Disease",
            data: maxHrNegative,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "peak") {
      chart = {
        labels: ["(-)7-1", "1-7"],
        datasets: [
          {
            label: "Heart Disease",
            data: oldPeakNegative,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "bp") {
      chart = {
        labels: ["Resting BP < 120 mm Hg", "Resting BP > 120 mm Hg"],
        datasets: [
          {
            label: "Heart Disease",
            data: restingBpNegative,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    if (value === "ecg") {
      chart = {
        labels: ["Normal: Normal", "ST: Having ST-T wave abnormality", "LVH: Probable or definite left ventricular hypertrophy by Estes' criteria"],
        datasets: [
          {
            label: "Heart Disease",
            data: restingEcgNegative,
            backgroundColor: ['rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',]
          },
        ],
      }
    }
    if (value === "stSlope") {
      chart = {
        labels: ["Up-Sloping","Flat", "Down-Sloping"],
        datasets: [
          {
            label: "Heart Disease",
            data: stSlopeNegative,
            backgroundColor: ['rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)']
          },
        ],
      }
    }
    setPieChart2Data(chart)
  }

  return (
    <Container className="jumbotron">
      <div className="d-flex justify-content-center options">
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
      {selected === '' ? <div className="d-flex justify-content-center chart text-center"><h1 className="text-white">The data displayed is collected from a study conducted on 918 patients worldwide with varying heart conditions. <br/>Select an option from the dropdown to learn more</h1></div> :
      <div className="d-block justify-content-center facts-page">
       <div className="d-flex justify-content-center row">
         <div className="col">
         <div className="chart"><Bar options={setOptions()} data={chartData} defaultValue={undefined} width={400} height={400}/></div>
         </div>
         <div className="col">
         <div className="chart"><Line data={chartData} defaultValue={undefined} width={400} height={400}/></div>
         </div>
      </div>
      <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center row">
         <div className="col">
         <div className="chart"><div className="text-center">Positive:</div><div><Pie options={setOptions()} data={pieChartData} defaultValue={undefined} width={getWidth()} height={400}/></div></div>
         </div>
         <div className="col">
         <div className="chart"><div className="text-center">Negative:</div><div><Pie options={setOptions()} data={pieChart2Data} defaultValue={undefined} width={getWidth()} height={400}/></div></div>
         </div>
      </div>
      </div>
      </div>
      }
    </Container>
  );
};
