import * as React from 'react';
import AuthWidget, { IAuthProps } from '../auth-widget';
import { InputProps } from 'antd/es/input';
import Input from 'antd/lib/input';

export interface IInputAuthProps extends InputProps, IAuthProps {}

@AuthWidget
class InputAuth extends React.Component<IInputAuthProps, any> {
  render(): React.ReactNode {
    return <Input {...this.props} />;
  }
}

export default InputAuth;
