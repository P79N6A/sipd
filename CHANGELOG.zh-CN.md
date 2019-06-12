---
order: 6
title: 更新日志
toc: false
timeline: true
---

`antd` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 3.19.3

`2019-06-06`

- 📝 增加 DatePicker/RangePicker 指定 `mode` 后无法选择的文档说明。[#16984](https://github.com/ant-design/ant-design/pull/16984)
- 🐞 修复 Breadcrumb 的 `validateDOMNesting` 警告信息。[#16929](https://github.com/ant-design/ant-design/pull/16929)
- 🐞 修复 Breadcrumb 选中子路由时浏览器路径问题。[#16885](https://github.com/ant-design/ant-design/pull/16885) [@haianweifeng](https://github.com/haianweifeng)
- 🐞 修复 InputNumber 设置 `number` 类型时会展示原生按钮的问题。[#16926](https://github.com/ant-design/ant-design/pull/16926)
- 🐞 修复 Transfer 在自定义列表为空时展示 Empty 样式。[#16925](https://github.com/ant-design/ant-design/pull/16925)
- 🐞 **修复 Table 头部多余的垂直滚动条样式。**[#16950](https://github.com/ant-design/ant-design/pull/16950)
- 🐞 修复 Table 的 `rowSelection.getCheckboxProps()` 在没有返回值时报错的问题。[#15224](https://github.com/ant-design/ant-design/pull/15224)
- 🐞 修复 Firefox 的 Table 丢失 `border-radius` 样式问题。[#16957](https://github.com/ant-design/ant-design/pull/16957)
- 🐞 修复 Table 当 `title` 和 `rowSelection` 同时指定时在 Chrome 下滚动条异常的问题。[#16934](https://github.com/ant-design/ant-design/pull/16934)
- 🐞 修复 Divider `orientation="center"` 时样式错位的问题。[#16988](https://github.com/ant-design/ant-design/pull/16988)
- 🐞 修复 Cascader 搜索时不支持空格输入的问题。[#16918](https://github.com/ant-design/ant-design/pull/16918) [@Durisvk](https://github.com/Durisvk)
- 🐞 修复部分组件的西班牙语言翻译。[#17002](https://github.com/ant-design/ant-design/pull/17002) [@morellan](https://github.com/morellan)
- TypeScript
  - 🐞 修复 Upload 的 `RcFile` 类型定义。[#16851](https://github.com/ant-design/ant-design/pull/16851)
  - ⚡️ 导出 Typography 中 `TextProps` 的类型定义。[#17003](https://github.com/ant-design/ant-design/pull/17003) [@Jarvis1010](https://github.com/Jarvis1010)
