import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div>
                        {/* <a href='http://localhost:3000' className='navbar-brand'> */}
                        Kiddohub Application
                        {/* </a> */}
                    </div>
                    {/* <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                            <li className='nav-item'>
                            <NavLink to="/todos" className="nav-link">Todos</NavLink>
                        </li>
                    </ul>

                </div> */}
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to="/signup" className="nav-link">Register</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </li>

                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header