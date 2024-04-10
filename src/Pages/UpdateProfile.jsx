import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import 'animate.css';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
  const { user, upDateProfile } = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    setFullName(user.displayName || '');
    setPhotoURL(user.photoURL || '');
  }, [user]);

  const handleUpdateProfile = () => {
    upDateProfile(fullName, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("Error updating profile: " + error.message);
      });
  };

  return (
    <div className='flex flex-col justify-center items-center h-[75vh]'>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className='border-2 border-amber-300 p-5 text-center w-full md:w-[40%] space-y-5 animate__animated animate__pulse'>
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
  );
};

export default UpdateProfile;
