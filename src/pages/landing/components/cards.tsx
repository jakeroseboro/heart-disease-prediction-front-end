import { Card } from 'antd';
import { Button } from 'antd';
import './cards.scss'

export const Cards = () => {
    return(
        <div className='d-flex cards justify-content-center'>
            <Card title="Welcome" bordered={false} style={{border: '1px solid rgb(187, 40, 40)'}}>
                <p>Did you know heart disease is the leading cause of death in the U.S?</p>
                <Button>Click here to learn more</Button>
            </Card>
            
        </div>
    )
}