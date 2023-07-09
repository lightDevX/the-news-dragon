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
            <Outlet></Outlet>

            <div className=' container mx-auto '>
                <div className=' grid grid-cols-12 gap-2'>
                    <div className=' col-span-3 bg-red-300'>
                        <LeftNav></LeftNav>
                    </div>
                    <div className="col-span-6 bg-cyan-200">
                        <h3 className=' text-center'>Main content coming.......</h3>
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