import { createBrowserRouter } from 'react-router-dom'


//layouts
import MainLayout from '../ui/layouts/MainLayout'

//pages
import HomePage from '../pages/Home/index'
import WelcomePage from '../pages/Welcome/index'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/home',
                element: <HomePage />,
            },
            {
                index: true,
                element: <WelcomePage />,
            }
        ]

    }
])
