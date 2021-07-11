import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        const newDate = selectedDate.toDateString();
        fetch('http://localhost:5000/appointmentsByDate', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({date: newDate})
        })
        .then( res => res.json())
        .then( data => {
            setAppointments(data)
        })
    },[selectedDate])
  //  console.log(selectedDate);

  console.log(appointments)

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        //border: '1px solid red'
    }


    return (
        <section>
            <div style={containerStyle} className="row">
                <Sidebar></Sidebar>
                <div className="col-md-4 ms-5 mt-5">
                    <h1 className='mb-5'>Calendar</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
            </div>
        </section>
    );
};

export default Dashboard;