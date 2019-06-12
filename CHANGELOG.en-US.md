---
order: 6
title: Change Log
toc: false
timeline: true
---

`antd` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

#### Release Schedule

- Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
- Monthly release: minor version at the end of every month for new features.
- Major version release is not included in this schedule for breaking change and new features.

---

## 3.19.3

`2019-06-06`

- 📝 Add FAQ for DatePicker/RangePicker with `mode` cannot be selected. [#16984](https://github.com/ant-design/ant-design/pull/16984)
- 🐞 Fix Breadcrumb validateDOMNesting warning. [#16929](https://github.com/ant-design/ant-design/pull/16929)
- 🐞 Fix Breadcrumb path error when `children` is selected. [#16885](https://github.com/ant-design/ant-design/pull/16885) [@haianweifeng](https://github.com/haianweifeng)
- 🐞 Fix InputNumber with `number` type display native spinner. [#16926](https://github.com/ant-design/ant-design/pull/16926)
- 🐞 Fix Transfer render Empty when customize without data. [#16925](https://github.com/ant-design/ant-design/pull/16925)
- 🐞 **Fix Table header extra vertical scrollbar problem.** [#16950](https://github.com/ant-design/ant-design/pull/16950)
- 🐞 Fix Table miss `border-radius` in Firefox. [#16957](https://github.com/ant-design/ant-design/pull/16957)
- 🐞 Fix Table error when `rowSelection.getCheckboxProps()` has no return value. [#15224](https://github.com/ant-design/ant-design/pull/15224)
- 🐞 Fix Table abnormal scrollbar in Chrome when using `title` and `rowSelection`. [#16934](https://github.com/ant-design/ant-design/pull/16934)
- 🐞 Fix Divider `orientation="center"` style. [#16988](https://github.com/ant-design/ant-design/pull/16988)
- 🐞 Fix Cascader error when type space. [#16918](https://github.com/ant-design/ant-design/pull/16918) [@Durisvk](https://github.com/Durisvk)
- 🐞 Fix missing spanish translations. [#17002](https://github.com/ant-design/ant-design/pull/17002) [@morellan](https://github.com/morellan)
- TypeScript
  - 🐞 Fix Upload `RcFile` definition. [#16851](https://github.com/ant-design/ant-design/pull/16851)
  - ⚡️ Export `TextProps` type in Typography. [#17003](https://github.com/ant-design/ant-design/pull/17003) [@Jarvis1010](https://github.com/Jarvis1010)
