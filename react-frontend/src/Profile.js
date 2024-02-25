import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
        <h2>Profile Page</h2>
        <a href="/">
            <button className="btn btn-danger">Logout</button>
        </a>
    </div>
  );
};

export default Profile;
