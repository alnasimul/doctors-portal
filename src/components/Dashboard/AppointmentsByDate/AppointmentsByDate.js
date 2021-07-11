import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments }) => {
    return (
        <div className='col-md-5'>
            <div className='mt-5'>
                <h2 className="text-brand text-center mb-5">Appointments</h2>
                {
                    appointments.length ?
                        <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                        :
                        <div className="p-5">
                            <h4 className="lead text-center">No Appointments for this Date</h4>
                        </div>
                }
            </div>
        </div>
    );
};

export default AppointmentsByDate;