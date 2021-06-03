import React, { useEffect, useState } from "react";
import './index.css'
import {MainLayout} from "../../layouts";
import {Table, Tag} from "antd";
import axios from "axios";
import { useParams } from 'react-router-dom'

const { Column } = Table;


const ProjectsView = (props) => {
  const [token, setToken] = useState()
  const [project, setProject] = useState()
  let { id } = useParams();
  useEffect(() => {
    axios.post("http://127.0.0.1:8000/api/token/", {"email": "admin@admin.ru", "password": "admin"})
      .then(response => {
          setToken(response.data['access'])
        }
      ).catch(error => console.log(error))
  }, [])
  useEffect(() => {
      if (token && id){
           axios.get(`http://127.0.0.1:8000/api/notes/project/${id}/`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
        })
          .then(response => {
              setProject([response.data])
          }).catch(error => console.log(error))
      }
    }, [token, id])

  return(
      <MainLayout>
        {project ?
          <Table dataSource={project} rowKey={'id'} bordered>
              <Column title="Id" dataIndex="id" key="id" />
              <Column title="title" dataIndex="title" key="title" />
              <Column title="description" dataIndex="description" key="description" />
            <Column title="link" dataIndex="link" key="link" />
            <Column title="members" dataIndex="members" key="members" render={members => (
              <>
                {members.map(member => (
                  <Tag color="blue" key={member.id}>
                    {member.email}
                  </Tag>
                ))}
              </>
            )}/>
            <Column title="notes" dataIndex="notes" key="notes"  render={notes => (
              <>
                {notes.map(note => (
                  <Tag color={note.done ? "green" : "blue" } key={note.id}>
                    {note.text}
                  </Tag>
                ))}
              </>
            )}/>
            </Table>
          :
          <></>
        }
      </MainLayout>
  )
}



export default ProjectsView
