import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import 'animate.css';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
  const { user, upDateProfile, setReload } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    setFullName(user.displayName || '');
    setPhotoURL(user.photoURL || '');
  }, [user]);


  const handleUpdateProfile = () => {
    upDateProfile(fullName, photoURL)
      .then(() => {
        setReload(prevReload => !prevReload);
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("Error updating profile: " + error.message);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center md:h-[75vh]'>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className='md:flex w-full  justify-center gap-5 mt-2 md:gap-10'>
        <div className='space-y-3 flex flex-col items-center border-2 border-green-500 p-2 md:p-10'>
          <h2 className='text-3xl font-extrabold border-b-4 border-cyan-400 tracking-[.25em] uppercase'>Profile</h2>
          <img data-aos="zoom-in" data-aos-duration="1000" className='ring-4 ring-pink-500 rounded-full w-48 md:w-52' src={user?.photoURL} alt="" />
          <h4 data-aos="zoom-out-right" data-aos-duration="1200" className="text-xl md:text-2xl font-bold">Name : {user?.displayName}</h4>
          <p data-aos="zoom-out-right" data-aos-duration="1400" className='text-sm md:text-xl font-semibold'>Email : {user?.email || "Email is not found"}</p>

        </div>
        <div className='border-2 border-amber-300 p-2 md:p-5 text-center w-full md:w-[40%] md:space-y-5 animate__animated animate__pulse'>
          <h2 className="text-3xl font-bold mb-10 border-b-4 border-y-cyan-500 animate__animated animate__backInDown">
            <span className='bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient uppercase'>
              User Profile Update
            </span>
          </h2>
          <div className='w-full mx-auto space-y-5'>
            <input className="input input-bordered input-error w-full max-w-xs animate__animated animate__backInDown animate__delay-0.5s" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <input className="input input-bordered input-error w-full max-w-xs animate__animated animate__backInDown animate__delay-0.25s" type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
          </div>
          <button className='btn w-fit mx-auto btn-primary animate__animated' onClick={handleUpdateProfile}>Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
