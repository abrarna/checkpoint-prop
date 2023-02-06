import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { profile, children, handleName } = props;

  const { fullName, bio, profession } = profile;
  const handleClick = (e) => {
    handleName(fullName);
  };

  return (
    <div className="card mb-3">
      {children}
      <div className="card-body">
        <h3 className="car-title text-center">{fullName}</h3>

        <p className="card-text text-center">{bio}</p>
        <p className="card-text text-center">{profession}</p>
        <a href="#!" className="card-link" onClick={handleClick}>
          fullName
        </a>
      </div>
    </div>
  );
};
Profile.defaultProps = {
  profile: {
    fullName: "default fullName",
    bio: "default bio",
    profession: "default profesion",
  },
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Profile;
