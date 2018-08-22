import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe title="Actual Elm st. house" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.9245492887626!2d-118.36004858478373!3d34.09707328059368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bec3354aedaf%3A0xad9fb660ecea86b3!2s1428+N+Genesee+Ave%2C+Los+Angeles%2C+CA+90046%2C+USA!5e0!3m2!1sen!2sca!4v1534895857141"
        width="100%" height="500px"
        frameBorder="0"
        allowFullScreen></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;