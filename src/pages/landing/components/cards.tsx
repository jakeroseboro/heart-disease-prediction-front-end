import { Card } from 'antd';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import './cards.scss'

export const Cards = () => {
    const navigate = useNavigate()
    return(
        <div className='d-flex cards justify-content-center'>
            <Card bordered={false}>
                <h1>Welcome</h1>
                <p>Did you know heart disease is the leading cause of death in the U.S?</p>
                <p>The good news is that it's preventable and treatable</p>
                <Button onClick={() => navigate('/facts')}>Click here to learn more</Button>
            </Card>
            
        </div>
    )
}