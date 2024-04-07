import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
const Root = () => {
    return (
        <div className='w-full md:w-[95%] mx-auto'>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;