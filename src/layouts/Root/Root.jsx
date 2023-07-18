import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className=' container mx-auto '>
                <div className=' grid grid-cols-12 gap-2'>
                    <div className=' col-span-3 bg-red-300'>
                        <LeftNav></LeftNav>
                    </div>
                    <div className="col-span-6 px-4">
                        <Outlet></Outlet>
                    </div>
                    <div className="col-span-3 bg-orange-300">
                        <RightNav></RightNav>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;