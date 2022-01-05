import React, { useEffect, useState } from 'react';
import { getToken } from 'common/localStorage';
import { useRouter } from 'next/router';

const withAuth = WrappedComponent => {
  return props => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      (async () => {
        const accessToken = await getToken();

        // if no accessToken was found,then we redirect to "/" page.
        if (!accessToken) {
          Router.replace('/account/signin');
        }
        setVerified(true);
      })();
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
