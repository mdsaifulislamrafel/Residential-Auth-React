import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="flex flex-col justify-center items-center h-[80vh]" data-aos="zoom-out-up">
            <div className="p-20 shadow-lg font-sans rounded-xl space-y-4 flex flex-col justify-center items-center mx-auto bg-white" >
                <div className="relative group">
                    <img  data-aos="zoom-in" data-aos-delay="500" className="w-[200px] h-[200px] bg-slate-500 object-cover rounded-full" src={user?.photoURL} alt="card navigate ui" />
                </div>

                <div className="text-center space-y-1">
                    <h1 data-aos="fade-left" data-aos-duration="2000" className="text-3xl font-bold text-gray-700">{user?.displayName}</h1>
                    <p data-aos="fade-right" data-aos-duration="3000" className="text-gray-600 text-sm font-semibold">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;