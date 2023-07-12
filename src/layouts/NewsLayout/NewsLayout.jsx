import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import RightNav from '../Shared/RightNav/RightNav';


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className=' container mx-auto '>
                <div className=' grid grid-cols-12 gap-2'>
                    <div className="col-span-9 bg-cyan-200">
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

export default NewsLayout;