import axios from 'axios';
import { useQuery } from 'react-query';

export const getChartData = async()=>{
    const token = localStorage.getItem('token')
    const response = await axios.get("https://heart-disease-ml-api.herokuapp.com/data?format=list", {headers:{'Authorization': `Bearer ${token}`}});
    return response;
}

export const useChartData =() => 
useQuery('chartData', () =>
getChartData().then(r => {return r.data}))