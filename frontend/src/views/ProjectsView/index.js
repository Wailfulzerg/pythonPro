import React, { useEffect, useState } from "react";
import './index.css'
import {MainLayout} from "../../layouts";
import {Table} from "antd";
import axios from "axios";
import { Link } from 'react-router-dom'

const { Column } = Table;
const ProjectsView = (props) => {
    const [token, setToken] = useState()
    const [projects, setProjects] = useState([])
      useEffect(() => {
          axios.post("http://127.0.0.1:8000/api/token/", {"email": "admin@admin.ru", "password": "admin"})
              .then(response => {
                setToken(response.data['access'])
              }
          ).catch(error => console.log(error))
      }, [])
    useEffect(() => {
        if (token){
             axios.get('http://127.0.0.1:8000/api/notes/project', {
              headers: {
                "Authorization": `Bearer ${token}`
              }
          })
            .then(response => {
                setProjects(response.data)
            }).catch(error => console.log(error))
        }
      }, [token])

    return(
        <MainLayout>
            <Table dataSource={projects} rowKey={'id'} bordered>
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="title" dataIndex="title" key="title" render={
                  (title, row) => (
                    <Link to={`/projects/${row.id}/`}>title</Link>
                  )
                }/>
                <Column title="description" dataIndex="description" key="description" />
              </Table>
        </MainLayout>
    )
}



export default ProjectsView
