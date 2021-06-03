import React from "react";
import { Layout, Menu } from 'antd';
import './index.css'
import Logo from '../../../../img/logo.svg'
import 'antd/dist/antd.css';
import router from '../../../../router'
import {Link} from 'react-router-dom'

const {Header} = Layout;




const MainHeader = (props) => {
    return(
        <Header className={"header"}>
            <div className="logo">
                <a href={'/'}><img className="image" src={Logo} alt={'logo'}/></a>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['users']}>
              {router.paths.map(path => <Menu.Item key={path.key}><Link to={path.path}>{path.name}</Link></Menu.Item>)}
            </Menu>

        </Header>
    )
}



export default MainHeader
