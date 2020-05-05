import React from 'react';

const Clause = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__clause">
      {`I hereby consent to my personal data being processed by ${user.company} for
      the purpose of considering my application for the vacancy advertised under
      reference number (123XX6 etc.)`}
    </div>
  );
};
export default Clause;
