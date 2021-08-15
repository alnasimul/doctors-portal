import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (

        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {
                    loggedInUser.email && <span className='rounded-pill nav-link text-white bg-success'> Welcome, {loggedInUser.name} </span> 
                }
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto ">

                        <li class="nav-item">
                            <a class="nav-link me-5" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 " href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class={ window.location.pathname === '/appointment' ? 'nav-link me-5' : 'nav-link me-5 text-white'} href="#">Contact us</a>
                        </li>
                        <li class="nav-item ">
                            <Link className={ window.location.pathname === '/appointment' ? 'nav-link me-5' : 'nav-link me-5 text-white'} to='/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className={ window.location.pathname === '/appointment' ? 'nav-link me-5' : 'nav-link me-5 text-white' } to='/login'>
                                {loggedInUser.email ? 'Log out' : 'Login / Sign Up'}
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;