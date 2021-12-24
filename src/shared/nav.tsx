import { Menu } from 'antd';

export const Nav = () => {
    return(
    <div style={{width: '100%'}}>
    <Menu mode="horizontal" selectedKeys={['home']}> 
    <Menu.Item key="home">
        Home
    </Menu.Item>
    <Menu.Item key="quiz">
        Take The Quiz
    </Menu.Item>
    <Menu.Item key="facts">
        Quick Facts
    </Menu.Item>
    </Menu>
    </div>
    );
}