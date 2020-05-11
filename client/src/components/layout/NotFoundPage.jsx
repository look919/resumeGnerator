import React from 'react';
import { FormattedMessage } from 'react-intl';

const NotFoundPage = () => {
  return (
    <section className="notFound">
      <FormattedMessage id="NotFoundPage" defaultMessage="404 Not found" />
    </section>
  );
};

export default NotFoundPage;
