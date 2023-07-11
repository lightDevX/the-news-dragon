import { Button } from '@material-tailwind/react';
import React from 'react';
import { FaGoogle, } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h3>Login</h3>
            <div className=' flex flex-col gap-2 p-5'>
                <Button className=' w-60 h-10 flex items-center gap-1 bg-red-200'><FaGoogle className=' text-blue-600'/> Login with Google</Button>
                <Button className=' w-60 h-10'>Login with GitHub</Button>
            </div>
            <div>
                <h3>Find us on:</h3>
            </div>
        </div>
    );
};

export default RightNav;