import {MainPageView, ProjectsView} from '../views'
const router = {
    paths: [
        {
            path: '/users/',
            name: 'Пользователи',
            key: "users",
            view: () => <MainPageView />,
        },
        {
            path: '/projects/',
            name: 'Проекты',
            key: "projects",
            view: () => <ProjectsView/>,

        },

    ]

}


export default router
