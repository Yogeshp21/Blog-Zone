import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  //  ? Close Menu when item is selected

  function handleMenuItemClick() {
    setIsMenuOpen(false);
  }

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]



  return (
    <div className="w-full mt-4">
      <Container>
        <header className="relative w-full border-b  pb-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
            <div className="inline-flex items-center space-x-2">
              <Link to='/'>
                {/*  Logo */}
                <Logo width="125px" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="inline-flex space-x-8">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="text-sm font-semibold text-gray-800 hover:text-gray-900 hover:transform hover:scale-125 transition-transform duration-700">{item.name}</button>
                    </li>
                  ) : null
                )}

              </ul>

            </div>
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="hidden lg:block">

                {authStatus && (
                  <div

                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:cursor-pointer"
                  >
                    <LogoutBtn />
                  </div>
                )}

              </div>
            </div>
            {/* For Small window Menu */}
            <div className="lg:hidden">
              <Menu
                onMouseEnter={toggleMenu} // Open menu on hover
                onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
            </div>
            {isMenuOpen && (
              <div
                onMouseLeave={toggleMenu}
                className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center space-x-2">
                        <Link to='/'
                          onClick={handleMenuItemClick}>
                          <Logo width="75px" />
                        </Link>
                      </div>
                      <div className="-mr-2 ">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                        >
                          <span className="sr-only">Close menu</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <ul className="grid gap-y-4">
                        {navItems.map((item) =>
                          item.active ? (
                            <li onClick={handleMenuItemClick} key={item.name}>
                              <button
                                onClick={() => navigate(item.slug)}
                                className="-m-3 flex items-center rounded-md p-3 text-sm  font-semibold hover:bg-gray-50">{item.name}</button>

                            </li>
                          ) : null
                        )}


                      </ul>

                    </div>
                    {authStatus && (
                      <div
                        type="button"
                        className="mt-4  rounded-md text-center  bg-black px-3 py-2 text-sm hover:bg-red-600  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <LogoutBtn />
                      </div>


                    )}

                  </div>
                </div>
              </div>

            )}
          </div>
        </header>
      </Container>

    </div>

  )
}

export default Header
