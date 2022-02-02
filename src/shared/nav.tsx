import { Menu } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";



export const Nav = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const clickHandler = (e:any) =>{
        navigate(e.key)
    }

    return(
    <div style={{width: '100%'}}>
    <Menu mode="horizontal" selectedKeys={[location.pathname]} onClick={clickHandler}> 
    <Menu.Item key="/">
        Home
    </Menu.Item>
    <Menu.Item key="/quiz">
        Take The Quiz
    </Menu.Item>
    <Menu.Item key="/facts">
        Quick Facts
    </Menu.Item>
    </Menu>
    </div>
    );
}