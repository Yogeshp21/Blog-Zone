import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import authService from './Appwrite/Auth';
import { login, logout } from './Store/AuthSlice';
import { Footer, Header } from './Components';
import { Outlet } from 'react-router-dom';



function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false))

  }, [])

  return !loading ? (
    <div className="min-h-screen  flex flex-wrap content-between">
      
      <div className="w-full block">
        <div >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        </div>
      </div>
    </div>
  ) : null
}

export default App
