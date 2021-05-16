import React from "react";
import { Layout } from 'antd';
import './index.css'
import {MainHeader, MainFooter} from "./components";
import 'antd/dist/antd.css';

const { Content } = Layout;


const MainLayout = (props) => {
    const {children} = props
    return(
        <Layout className={"mainLayout"}>
            <MainHeader />
            <Content className={"content"}>
                {children}
            </Content>
            <MainFooter />
        </Layout>
    )
}



export default MainLayout