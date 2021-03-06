import React, { useEffect, useState } from "react";
import './index.css'
import {MainLayout} from "../../layouts";
import {Table} from "antd";
import axios from "axios";

const { Column, ColumnGroup } = Table;
const MainPageView = (props) => {
    const [token, setToken] = useState()
    const [users, setUsers] = useState([])
      useEffect(() => {
          axios.post("http://127.0.0.1:8000/api/token/", {"email": "admin@admin.ru", "password": "admin"})
              .then(response => {
                setToken(response.data['access'])
              }
          ).catch(error => console.log(error))
      }, [])
    useEffect(() => {
        if (token){
             axios.get('http://127.0.0.1:8000/api/users', {
              headers: {
                "Authorization": `Bearer ${token}`
              }
          })
            .then(response => {
                setUsers(response.data)
            }).catch(error => console.log(error))
        }
      }, [token])

    return(
        <MainLayout>
            <Table dataSource={users} rowKey={'id'} bordered>
                <Column title="Id" dataIndex="id" key="id" />
                <ColumnGroup title="Name">
                  <Column title="First Name" dataIndex="firstname" key="firstname" />
                  <Column title="Last Name" dataIndex="lastname" key="lastname" />
                </ColumnGroup>
                <Column title="Username" dataIndex="username" key="username" />
                <Column title="Email" dataIndex="email" key="email" />
              </Table>
        </MainLayout>
    )
}



export default MainPageView
