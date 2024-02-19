import React from 'react';

const WaterMotor = ({ user }) => {
  if (!user) {
    return <div>No Permission to Access this page</div>;
  }

  return <div>WaterMotor</div>;
};

export default WaterMotor;
