import React from 'react';
import logo from '../../../assets/images/Logo.jpg'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div>
            <div className=" container mx-auto text-center">
                <img src={logo} alt="" className='mx-auto' />
                <p><small>First Weekly News Paper</small></p>
                <p>{moment().format('dddd, LL')}</p>
            </div>
        </div>
    );
};

export default Header;