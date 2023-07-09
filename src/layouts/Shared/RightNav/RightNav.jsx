import { Button } from '@material-tailwind/react';
import React from 'react';

const RightNav = () => {
    return (
        <div>
            <h3>Login</h3>
            <Button>Login with Google</Button>
            <Button>Login with GitHub</Button>
        </div>
    );
};

export default RightNav;