import * as React from 'react';
import { getLocalStorageValue } from '../_util/localStorage';

export declare interface IAuthProps {
  authCode?: string;
  authorities?: string[];
}

const AuthWidget = (WrappedComponent: React.ReactNode) => {
  return class extends React.Component<IAuthProps> {
    state = {};

    render(): React.ReactNode {
      const { authCode, authorities, ...props } = this.props;
      if (!authCode || process.env.NODE_ENV === 'development') {
        // @ts-ignore
        return <WrappedComponent {...props} />;
      }
      let authList: string | string[] | undefined = authorities;
      if (!authList || !authList.length) {
        authList = getLocalStorageValue('authList') || [];
        if (authList && authList.includes(authCode)) {
          // @ts-ignore
          return <WrappedComponent {...props} />;
        }
      }
      return null;
    }
  };
};

export default AuthWidget;
