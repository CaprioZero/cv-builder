import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProfilePhoto = ({ getData, imageSrc }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(true);
    getData(true, imageSrc);
  };

  const deletePic = () => {
    setToggle(false);
    getData(false, "");
  };

  return (
    <div className="container">
      <button
        type="button"
        onClick={handleToggleClick}
        className="btn btn-primary rounded-circle mt-2 opaque profile-pic"
        disabled={toggle && imageSrc}
      >
        {(!toggle || !imageSrc) && (
          <PersonIcon fontSize="large" />
        )}
        {toggle && imageSrc && (
          <img
            alt="profile"
            src={imageSrc}
            className="rounded-circle"
            width="100%"
          />
        )}
      </button>
      {toggle && imageSrc && (
        <button
          type="button"
          className="btn btn-danger rounded-circle position-relative delete-button"
          onClick={deletePic}
        >
          <DeleteForeverIcon fontSize="small" />
        </button>
      )}
    </div>
  );
};

export default ProfilePhoto;
