import { Button } from '@material-tailwind/react';
import React from 'react';
import { FaBeer } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h3>Login</h3>
            <Button><FaBeer/>Login with Google</Button>
            <Button>Login with GitHub</Button>
        </div>
    );
};

export default RightNav;