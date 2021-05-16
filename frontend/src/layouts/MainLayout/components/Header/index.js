import React from "react";
import { Layout, Menu } from 'antd';
import './index.css'
import Logo from '../../../../img/logo.svg'
import 'antd/dist/antd.css';
const {Header} = Layout;




const MainHeader = (props) => {
    return(
        <Header className={"header"}>
            <div className="logo">
                <a href={'/'}><img className="image" src={Logo} alt={'logo'}/></a>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['users']}>
                <Menu.Item key="users">Пользователи</Menu.Item>
                <Menu.Item key="tasks" disabled={true}>Задачи</Menu.Item>
            </Menu>

        </Header>
    )
}



export default MainHeader