import React from 'react';
const user = {
  username: 'JohnDoe',
  profilePicture: 'https://via.placeholder.com/100', // Replace with actual image URL
};
const HomePage = () => {
  return (
    <div className={`flex flex-col h-screen mobile-layout`}>
      {/* Navigation Menu */}
      <div className="bg-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={user.profilePicture}
              alt="User Profile"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-lg font-semibold">{user.username}</span>
          </div>
          <a href="/settings" className="text-blue-500">
            {/* Add your settings icon (e.g., gear icon) here */}
            Settings
          </a>
        </div>
      </div>

      {/* Project List */}
      {/* Add your project list component here */}
      {/* Include filters and pagination as needed */}
    </div>
  );
};

export default HomePage;
