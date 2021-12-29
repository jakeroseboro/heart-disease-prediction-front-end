import axios from "axios";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartTypeRegistry,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  LogarithmicScale,
  PointElement,
  Tooltip,
  TooltipModel,
} from "chart.js";
import { useEffect, useState } from "react";

export const FactChart = () => {
  const [data, setData] = useState(Object);
  const agePositive: number[] = [];
  const ageNegative: number[] = [];

  const chestPainTypePositive: number[] = [];
  const chestPainTypeNegative: number[] = [];

  const exerciseAnginaPositive: number[] = [];
  const exeriseAnginaNegative: number[] = [];

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

  const fetchData = async () => {
    const response = await axios.get(
      "https://heart-disease-ml-api.herokuapp.com/data?format=list"
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
    for (let i of data?.age[0]) {
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
      exeriseAnginaNegative.push(i);
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
    }
  }, []);

  return (
    <div className="d-flex cards justify-content-center">{data?.age[0][0]}</div>
  );
};
