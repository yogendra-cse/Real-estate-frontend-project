
import HomePage from './routes_components/HomePage/homePage';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import ListPage from './routes_components/ListPage/listPage';
import SinglePage from './routes_components/singlePage/SinglePage';
import Profile from './routes_components/roleprofiles/profile';
import Login from './routes_components/login/login';
import Register from './routes_components/register/register';
import { Layout ,RequireAuth } from './routes_components/layout/layout';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },  
      ],
    }, 
    {
      path: "/",
      element: <RequireAuth/>,
      children:[
        {
          
            path: "/profile",
            element: <Profile />
          
        }
      ]
    }
  ]);
  return (
   
    <RouterProvider router={router}/>
    
  )
}

export default App;
