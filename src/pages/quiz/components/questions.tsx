import { useState } from 'react';
import { Form, Button, Select, InputNumber, Spin, message, Card } from 'antd';
import axios from 'axios';
import './quiz.scss'

const { Option } = Select;

export const Questions = () =>{
    const [loading, setLoading] = useState(false)
    const [probability, setProbability] = useState(0.0)
    const [quizNumber, setQuizNumber] = useState(0);
    const [quizMode, setQuizMode] = useState(0);

    const fetchResults = async(values:any) =>{
        try{
            const token = localStorage.getItem('token')
            const response = await axios.post("https://heart-disease-ml-api.herokuapp.com/prediction", values, {headers:{'Authorization': `Bearer ${token}`}}).catch((error) => {
                console.error(error)
            });
            if(response != null){
                if(response.status === 401 || response.status === 500){
                    localStorage.removeItem('token')
                    window.location.reload()
                }
            }
            return response?.data;
        }
        catch(error){
            console.error(error);
            message.error("Something went wrong, please try again.")
        }
    }

    const handleRequest = async(values: any) =>{
        setLoading(true);
        let response = await fetchResults(values)
        while(response === undefined){
            response = await fetchResults(values)
        }
        if(response !== undefined){
            setProbability(response * 100)
        }
        setLoading(false);
    }

    const onFinish = (values:any) =>{
        try{
            const patient = {
                Age: values.Age,
                Sex: values.Sex,
                ChestPainType: values.ChestPainType,
                RestingBP: values.RestingBP,
                FastingBS: values.FastingBS,
                RestingECG: values.RestingECG,
                MaxHR: values.MaxHR,
                ExerciseAngina: values.ExerciseAngina,
                Oldpeak: values.Oldpeak,
                ST_Slope: values.ST_Slope,
                Cholesterol: values.Cholesterol,
            }
            handleRequest(patient)
            setQuizMode(1)
        }
        catch(error){
            console.error(error);
            message.error("Something went wrong, please try again.");
        }
    }

    const initialValues = {
        Age: 50,
        ChestPainType: 0,
        Cholesterol: 120,
        ExerciseAngina: 1,
        FastingBS: 0,
        MaxHR: 180,
        Oldpeak: 2.0,
        RestingBP: 160,
        RestingECG: 1,
        ST_Slope: 0,
        Sex: 0  
    }

    const questions = ["How old are you?","What is your sex?","What is your chest pain type?", "What is your resting blood pressure? (mm Hg)", "Is your fasting blood sugar above 120 mg/dl?",
  "What is your resting ECG?", "What is your max heart rate?", "Have you experienced exercise angina?", "What is your Oldpeak?", "What is your St Slope", "What is your cholesterol?"]

    return(
    <section className="jumbotron">
        {quizMode === 0 ? 
        <>
        <div className='d-flex justify-content-center text-center quiz'>
        <Card bordered={false} style={{backgroundColor: "#fdbb2d;", width:"30%"}}>
                    <p>{questions[quizNumber]}</p>
                    <Form name='Quiz' onFinish={onFinish} initialValues={initialValues}>
                        <Form.Item hidden={quizNumber !== 0} label="Age" name="Age" rules={[{ required: true }]}>
                            <InputNumber min={0} />
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 1} label="Sex" name="Sex" rules={[{ required: true }]}>
                            <Select>
                                <Option key={0} value={0}>Female</Option>
                                <Option key={1} value={1}>Male</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 2} label="Chest Pain Type" name="ChestPainType" rules={[{ required: true }]}>
                            <Select>
                                <Option key={0} value={0}>Typical Angina</Option>
                                <Option key={1} value={1}>Atypical Angina</Option>
                                <Option key={2} value={2}>Non-Anginal Pain</Option>
                                <Option key={3} value={3}>Asymptomatic</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 3} label="Resting Blood Pressure" name="RestingBP" rules={[{ required: true }]}>
                            <InputNumber min={0} />
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 4} label="Fasting Blood Sugar" name="FastingBS" rules={[{ required: true }]}>
                            <Select>
                                <Option key={0} value={0}>No</Option>
                                <Option key={1} value={1}>Yes</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 5} label="Resting ECG" name="RestingECG" rules={[{ required: true }]}>
                            <Select>
                                <Option key={0} value={0}>Normal</Option>
                                <Option key={1} value={1}>ST: having ST-T wave abnormality</Option>
                                <Option key={2} value={2}>LVH: showing probable or definite left ventricular hypertrophy by Estes' criteria</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 6} label="Max Heart Rate" name="MaxHR" rules={[{ required: true }]}>
                            <InputNumber min={0} />
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 7} label="Exercise Angina" name="ExerciseAngina" rules={[{ required: true }]}>
                            <Select>
                                <Option key={1} value={1}>No</Option>
                                <Option key={0} value={0}>Yes</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 8} label="Old Peak" name="Oldpeak" rules={[{ required: true }]}>
                            <InputNumber min={0} precision={1} />
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 9} label="ST Slope" name="ST_Slope" rules={[{ required: true }]}>
                            <Select>
                                <Option key={0} value={0}>Up</Option>
                                <Option key={1} value={1}>Flat</Option>
                                <Option key={2} value={2}>Down</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item hidden={quizNumber !== 10} label="Cholesterol" name="Cholesterol" rules={[{ required: true }]}>
                            <InputNumber min={0} />
                        </Form.Item>
                        <Form.Item>
                            <Button hidden={quizNumber !== 10} type="primary" htmlType="submit" style={{ margin: 15 }}>Submit</Button>
                            <Button hidden={quizNumber === 10} onClick={() => setQuizNumber(quizNumber + 1)}>Next</Button>
                        </Form.Item>
                    </Form>
                    </Card>
                </div>
                </> :
                <>
                    <div className='justify-content-center text-center quiz'>
                        {loading ? <Spin/> : <p className='text-white'>You have a {probability}% chance of heart disease based on the information provided. If you find this result worrisome, please contact your physician as this result does not replace medical advice</p>}
                    </div>
                </>
        }
    </section>
    );
}