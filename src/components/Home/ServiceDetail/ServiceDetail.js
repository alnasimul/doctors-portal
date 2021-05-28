import React from 'react';

const ServiceDetail = ({service}) => {
    const {title,img} = service
    return (
        <div className="col-md-4 text-center">
            <img style={{ height: '50px' }} src={img} alt="" />
            <h5 className='mt-4 mb-4'>{title}</h5>
            <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, obcaecati.</p>
        </div>
    );
};

export default ServiceDetail;