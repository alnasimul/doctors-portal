import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useEffect } from 'react';
import { useState } from 'react';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/isDoctor/${loggedInUser.email}`)
            .then( res => res.json() )
            .then(data => setIsDoctor(data))
    }, [])
    console.log(isDoctor)
    return (
        <div className="col-md-2">
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    {loggedInUser.email && <li className=''>
                        <small className='nav-link text-dark rounded-pill bg-white'>{loggedInUser.name} </small>
                    </li> }
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                    {
                        isDoctor && <div>
                            <li>
                                <Link to="/allAppointments" className="text-white">
                                    <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addDoctor" className="text-white" >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/doctor/setting" className="text-white" >
                                    <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                                </Link>
                            </li>
                        </div>
                    }
                </ul>
                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;