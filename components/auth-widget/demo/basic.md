---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.

```jsx
import { AuthWidget } from 'spid';
import { Button } from 'antd';

const AuthButton = AuthWidget(Button);

ReactDOM.render(<AuthButton type="primary">123</AuthButton>, mountNode);
```
