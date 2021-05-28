import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        title: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        title: 'Cavity Filling',
        img: cavity,
    },
    {
        title: 'Teeth Whitening',
        img: whitening,
    }
]

const Services = () => {
    return (
        <section className='services-container'>
            <div className='text-center mt-4'>
                <h5 style={{ color: '#1CC7C1' }} >OUR SERVICES</h5>
                <h2 className='mt-3'>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5 pt-5'>
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Services;