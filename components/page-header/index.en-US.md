---
category: Components
type: Navigation
title: PageHeader
cols: 1
subtitle:
---

The header can be used to declare the page topic, display important information about the page that the user is interested in, and carry the action items related to the current page (including page-level operations, inter-page navigation, etc.)

## When To Use

It can also be used as inter-page navigation when it is needed to make the user quickly understand what the current page is and to facilitate the user to use the page function.

## API

| Param | Description | Type | Default value |
| --- | --- | --- | --- |
| backIcon | custom back icon, if false the back icon will not be displayed | ReactNode | `<Icon type="arrow-left" />` |
| breadcrumb | breadcrumb config | [breadcrumb](https://ant.design/components/breadcrumb-cn/) | - |
| extra | Operating area, at the end of the line of the title line | ReactNode | - |
| footer | PageHeader's footer, generally used to render TabBar | ReactNode | - |
| subTitle | custom subTitle text | ReactNode | - |
| tags | Tag list next to title | [Tag](https://ant.design/components/tag-cn/)\[] \| [Tag](https://ant.design/components/tag-cn/) | - |
| title | custom title text | ReactNode | - |
| onBack | back icon click event | `()=>void` | `()=>history.back()` |
