import axios from "axios";
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
import { Select } from 'antd';
import { useEffect, useState } from "react";
import { useChartData} from '../factsData'
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
  const {data: data, isLoading, refetch} = useChartData()
  const [selected, setSelected] = useState('sex');
  const [chartData, setChartData] = useState([[0], [0]]);
  const [labels, setLabels] = useState([""])
  const [options, setOptions] = useState(Object);
  const [chart, setChart] = useState({
    labels: labels,
    datasets:[
      {
        label: 'Heart Disease',
        data: chartData[1],
        backgroundColor: 'rgb(187, 40, 40)',

      },
      {
        label: 'No Heart Disease',
        data: chartData[2],
        backgroundColor: 'rgb(40, 121, 187)',
      },
    ]
  });
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
      if(data)
      {for (let i of data?.age[0]) {
        agePositive.push(i);
      }
      for (let i of data?.age[1]) {
        ageNegative.push(i);
      }
      for (let i of data?.chest_pain_type[0]) {
        chestPainTypePositive.push(i);
      }
      for (let i of data?.chest_pain_type[1]) {
        chestPainTypeNegative.push(i);
      }
      for (let i of data?.exercise_angina[0]) {
        exerciseAnginaPositive.push(i);
      }
      for (let i of data?.exercise_angina[1]) {
        exerciseAnginaNegative.push(i);
      }
      for (let i of data?.fasting_bs[0]) {
        fastingBsPositive.push(i);
      }
      for (let i of data?.fasting_bs[1]) {
        fastingBsNegative.push(i);
      }
      for (let i of data?.max_hr[0]) {
        maxHrPositive.push(i);
      }
      for (let i of data?.max_hr[1]) {
        maxHrNegative.push(i);
      }
      for (let i of data?.old_peak[0]) {
        oldPeakPositive.push(i);
      }
      for (let i of data?.old_peak[1]) {
        oldPeakNegative.push(i);
      }
      for (let i of data?.resting_bp[0]) {
        restingBpPositive.push(i);
      }
      for (let i of data?.resting_bp[1]) {
        restingBpNegative.push(i);
      }
      for (let i of data?.resting_ecg[0]) {
        restingEcgPositive.push(i);
      }
      for (let i of data?.resting_ecg[1]) {
        restingEcgNegative.push(i);
      }
      for (let i of data?.sex[0]) {
        sexPositive.push(i);
      }
      for (let i of data?.sex[1]) {
        sexNegative.push(i);
      }
      for (let i of data?.st_slope[0]) {
        stSlopePositive.push(i);
      }
      for (let i of data?.st_slope[1]) {
        stSlopeNegative.push(i);
      }}
      });

  const handleChange = (value: any) =>{
    setSelected(value)
    if(selected === "sex"){
      setChartData([sexPositive, sexNegative]);
      setLabels(["Male", "Female"])
      setOptions({
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Sex Data',
          },
        },
      })
    }
    setChart( {
      labels: labels,
      datasets:[
        {
          label: 'Heart Disease',
          data: chartData[0],
          backgroundColor: 'rgb(187, 40, 40)',

        },
        {
          label: 'No Heart Disease',
          data: chartData[1],
          backgroundColor: 'rgb(40, 121, 187)',
        },
      ],
    }
    );
  }
  return (
    <Container className="jumbotron">
      <div className="d-flex justify-content-center">
    <Select defaultValue="sex" style={{ width: 360 }} onChange={handleChange}>
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
      <Bar options={options} data={chart} defaultValue={undefined}/>
    </div>
    </Container>
  );
};
