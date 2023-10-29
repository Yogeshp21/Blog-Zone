import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/Auth';
import { logout } from '../../Store/AuthSlice'
import { Link } from 'react-router-dom';



function LogoutBtn() {


  const dispatch = useDispatch();


  const logoutHandler = () => {

    authService.logout().then(
      dispatch(logout())


    )
  }


  return (
    <div>
      <Link to='/'>
        <button onClick={logoutHandler} className="text-sm font-bold  ">
        Logout
      </button>
    </Link>
    </div >
  )
}

export default LogoutBtn
