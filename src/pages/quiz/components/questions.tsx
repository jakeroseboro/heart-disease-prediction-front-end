import { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

export const Questions = () =>{
    const [quizNumber, setQuizNumber] = useState(0);

    const onFinish = (values:any) =>{
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
                        <Option key ={1} value={1}>Male</Option>
                    </Select>
                </Form.Item>
                <Form.Item hidden={quizNumber !== 2}>

                </Form.Item>
                <Form.Item hidden={quizNumber !== 3}>

                </Form.Item>
                <Form.Item hidden={quizNumber !== 4}>

                </Form.Item>
                <Form.Item hidden={quizNumber !== 5}>

                </Form.Item>
                <Form.Item hidden={quizNumber !== 6}>

                </Form.Item>
                <Form.Item hidden={quizNumber !== 7}>

                </Form.Item>
                <Form.Item hidden={quizNumber !== 8}>

                </Form.Item>
                <Form.Item hidden={quizNumber !== 9}>

                </Form.Item>
                <Form.Item hidden={quizNumber !== 10}>

                </Form.Item>
                <Form.Item>
                    <Button hidden={quizNumber === 10} onClick={() => setQuizNumber(quizNumber + 1)}>Next</Button>
                </Form.Item>
            </Form>
        </div>
    </section>
    );
}