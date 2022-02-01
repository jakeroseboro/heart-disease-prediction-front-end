import { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

export const Questions = () =>{
    const [quizNumber, setQuizNumber] = useState(0);

    const onFinish = (values:any) =>{
        console.log("Do i work")
        console.log(values)
    }

    const questions = ["How old are you?","What is your sex?","What is your chest pain type?", "What is your resting blood pressure? (mm Hg)", "Is your fasting blood sugar above 120 mg/dl?",
  "What is your resting ECG?", "What is your max heart rate?", "Have you experienced exercise angina?", "What is your Oldpeak?", "What is your St Slope", "What is your cholesterol?"]

    return(
    <section className="jumbotron">
        <div className='d-flex justify-content-center'>
            <Form onFinish={onFinish}>
                <Form.Item hidden={quizNumber !== 0} label="Age" name="age" rules={[{required:true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 1} label="Sex" name="sex" rules={[{required:true}]}>
                    <Select defaultValue={1}>
                        <Option key ={0} value={0}>Female</Option>
                        <Option key ={1} value={1}>Male</Option>
                    </Select>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 2} label="Chest Pain Type" name="ChestPainType" rules={[{required:true}]}>
                    <Select defaultValue={0}>
                        <Option key ={0} value={0}>Typical Angina</Option>
                        <Option key ={1} value={1}>Atypical Angina</Option>
                        <Option key ={2} value={2}>Non-Anginal Pain</Option>
                        <Option key ={3} value={3}>Asymptomatic</Option>
                    </Select>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 3} label="Resting Blood Pressure" name="RestingBP" rules={[{required:true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 4} label="Fasting Blood Sugar" name="FastingBS" rules={[{required:true}]}>
                    <Select defaultValue={0}>
                        <Option key ={0} value={0}>No</Option>
                        <Option key ={1} value={1}>Yes</Option>
                    </Select>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 5} label="Resting ECG" name="RestingECG" rules={[{required:true}]}>
                    <Select defaultValue={0}>
                        <Option key ={0} value={0}>Normal</Option>
                        <Option key ={1} value={1}>ST: having ST-T wave abnormality</Option>
                        <Option key ={2} value={2}>LVH: showing probable or definite left ventricular hypertrophy by Estes' criteria</Option>
                    </Select>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 6} label="Max Heart Rate" name="MaxHR" rules={[{required:true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 7} label="Exercise Angina" name="ExerciseAngina" rules={[{required:true}]}>
                    <Select defaultValue={0}>
                        <Option key ={1} value={1}>No</Option>
                        <Option key ={0} value={0}>Yes</Option>
                    </Select>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 8} label="Old Peak" name="Oldpeak" rules={[{required:true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 9} label="ST Slope" name="ST_Slope" rules={[{required:true}]}>
                    <Select defaultValue={0}>
                        <Option key ={0} value={0}>Up</Option>
                        <Option key ={1} value={1}>Flat</Option>
                        <Option key ={2} value={2}>Down</Option>
                    </Select>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 10} label="Cholesterol" name="Cholesterol" rules={[{required:true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button  hidden={quizNumber !== 10} type="primary" htmlType="submit" style={{margin: 15}}>Submit</Button>
                    <Button hidden={quizNumber === 10} onClick={() => setQuizNumber(quizNumber + 1)}>Next</Button>
                </Form.Item>
            </Form>
        </div>
    </section>
    );
}