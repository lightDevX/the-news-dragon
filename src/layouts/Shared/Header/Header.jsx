import React from 'react';
import logo from '../../../assets/images/Logo.jpg'
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';
import { Button } from '@material-tailwind/react';

const Header = () => {
    return (
        <div>
            <div className=" container mx-auto text-center">
                <img src={logo} alt="" className='mx-auto' />
                <p><small>First Weekly News Paper</small></p>
                <p>{moment().format('dddd, LL')}</p>
                <div className=' flex mb-3 w-max'>
                    <Button color='red' size='sm'>Letest News</Button>
                    <Marquee pauseOnHover={true}>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Header;