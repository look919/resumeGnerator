import React from 'react';
import { FormattedMessage } from 'react-intl';

const Clause = ({ user }) => {
  if (!user) user = require('../../../utils/defaultUser.json');

  return (
    <div className="resumePreview__clause">
      <FormattedMessage
        id="Clause"
        defaultMessage="I hereby consent to my personal data being processed by "
      />
    </div>
  );
};
export default Clause;
// {user.company}
//       <FormattedMessage
//         id="ClauseTwo"
//         defaultMessage="for the purpose of considering my application for the vacancy advertised under reference number (123XX6 etc.)"
//       />
