import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById, updateUserById } from '../api/api';
import { useAuth } from '../context/AuthContext';

const UserProfilePage = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    avatar: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
        setFormData({
          name: userData.name,
          email: userData.email,
          avatar: userData.avatar
        });
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleUpdate = async () => {
    try {
      const updatedUser = await updateUserById(id, formData);
      setUser(updatedUser);
      setEditMode(false);
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
          <div className="px-6 pb-6 relative">
            <div className="flex items-end -mt-16">
              <img
                className="h-24 w-24 rounded-full border-4 border-white object-cover"
                src={formData.avatar || 'https://via.placeholder.com/150'}
                alt={formData.name}
              />
              <div className="ml-6">
                {editMode ? (
                  <>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="text-2xl font-bold text-gray-900 border-b border-gray-300 focus:outline-none"
                    />
                    <input 
                      type="text" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="text-gray-600 border-b border-gray-300 focus:outline-none mt-1"
                    />
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    <p className="text-gray-600">{user.email}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {currentUser && currentUser._id === id && (
          <div className="mt-6 flex justify-end">
            {editMode ? (
              <>
                <button 
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mr-2"
                >
                  Save
                </button>
                <button 
                  onClick={() => setEditMode(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Edit Profile
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
