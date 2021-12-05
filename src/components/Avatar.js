import React, { useState } from "react";
import ProfilePhoto from "./ProfilePhoto";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/styles.scss";
import CreateAvatar from "./CreateAvatar";
import Portal from "./Portal";

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const getData = (isOpened, imageSrc) => {
    setIsOpen(isOpened);
    setImageSrc(imageSrc);
  };

  return (
    <>
      <ProfilePhoto getData={getData} imageSrc={imageSrc} />
      <div id="createAvatarDiv" />
      {isOpen && !imageSrc && (
        <Portal portalDiv="createAvatarDiv">
          <div className="createAvatarDiv_content m-auto">
            <CreateAvatar getData={getData} />
          </div>
        </Portal>
      )}
      <br />
    </>
  );
};

export default Avatar