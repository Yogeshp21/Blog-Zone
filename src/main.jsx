import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Store from './Store/Store.js'
import { AuthLayout, Login } from './Components/index.js'
import { AddPost, EditPost, AllPosts, Home, Post, Signup, InfoPage, ContactUs } from './Pages'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element={<Home />} />

      <Route path='info' element={<InfoPage />} />
      
      <Route path="login"
        element={(
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>)} />
      <Route path='signup' element={(
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      )} />
      <Route path='contact-us' element={
       
          <ContactUs />
        
      } />
      <Route path='all-posts' element={(
        <AuthLayout authentication={true}>
          <AllPosts />
        </AuthLayout>
      )} />
     
      <Route path='add-post' element={(
        <AuthLayout authentication={true}>
          <AddPost />
        </AuthLayout>
      )} />
      <Route path='edit-post/:slug' element={(
        <AuthLayout authentication={true}>
          <EditPost />
        </AuthLayout>
      )} />

      <Route path='post/:slug' element={<Post />} />

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
