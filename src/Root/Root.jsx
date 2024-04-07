import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
const Root = () => {
    return (
        <div className='w-full md:w-[95%] mx-auto'>
            <Navbar />
            <div className='min-h-[calc(100vh-60px)]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;