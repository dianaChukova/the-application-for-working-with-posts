import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Posts } from './pages/posts';
import { Root } from './components/Root';
import { EditPost } from './pages/posts/edit';
import { DetailPost } from './pages/posts/detail';
import { AddPost } from './pages/posts/add';
import { Auth } from './pages/auth';
import { Register } from './pages/register';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path:"posts",
        element: <Posts/>,
      },
      {
        path:"posts/:id",
        element: <DetailPost/>,
      },
      {
        path:"posts/:id/edit",
        element: <EditPost/>,
      },
      {
        path:"posts/add",
        element: <AddPost/>,
      },
      {
        path:"auth",
        element: <Auth/>,
      },
      {
        path:"register",
        element: <Register/>,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
