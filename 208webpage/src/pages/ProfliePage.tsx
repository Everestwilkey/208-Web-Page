import React from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import ProfilePageComponent from "../components/profile";

const ProfilePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <ProfilePageComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;