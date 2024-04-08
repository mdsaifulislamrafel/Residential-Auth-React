import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
  const { user, upDateProfile } = useContext(AuthContext);
  const [fullName, setFullName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');

  const handleUpdateProfile = () => {
    upDateProfile(fullName, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("Error updating profile: ", error.message);
      });
  };

  return (
    <div>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
      <br />
      <button className='btn btn-primary' onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default UpdateProfile;
