---
path: /stories/fridge/
class: stories
slug: ngc-0004
title: Fridge - Design token tools
cover: /assets/fridge.jpg
date: 2020-07-22T07:10:29.707Z
tags:
  - "Design"
color: rgba(255,218,124,0.24)
---

# 什么是 Fridge?

**Fridge** 是我与一名前端同事共同打造的用于管理与查询 **Clarity Design System** 中 **Design token** 的内部工具。

![](https://dl.airtable.com/.attachments/c60f7e23bf3c1ea655f19e46c683556a/c509568b/5eddb5b5b9769f7317120659.png)

---

## 为什么叫 Fridge?

如果把产品类比成一道料理，那么设计资产就是料理的原材料。原材料存放调取需要依赖冰箱。所以得名 Fridge。

项目最初是希望将 **Clarity Design System** 中的颜色与前端开发中名称统一，并且快速可视化。因此起名叫做 **Teambition Color**。

后来因为加入了图标、插画等其它设计资产，**“Color”** 一词无法代表全部；我们也不想让人误以为这是 **Teambition** 出品的一款正式产品，所以在命名上刻意避免与其产生关联。

![](https://dl.airtable.com/.attachments/e8700c2abc82cf196f3b639429a3fb29/c59cfb6a/5eddb24fb9769f234f120602.png)

## 为什么需要 Fridge?

| 工程师                                                                                                | 设计师                                                                                                |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![](https://dl.airtable.com/.attachments/1d2dcdabca5a9e6cdcbec64ef795bc20/d5ef6452/thoughts-1746.png) | ![](https://dl.airtable.com/.attachments/7b147a23dc9144159f723893514ee2ab/0610222d/thoughts-1749.png) |

设计师与工程师在各自的领域有着不同的语言，就好像一个来自火星一个来自金星，Design token 这个概念就像是一个翻译器，可以使得双方合作顺利，Fridge 就是将 Design token 具像化的工具。

> 在沟通设计稿时，设计师会说：这里的图标用“垃圾桶”、”圈的 info”、“向右的小箭头”，背景的颜色是 #262626...
>
> 而工程师在调用使用资源库时，需要知道库内使用名，图标是 `at-chevron-left-s` 颜色使用的是 `G80`
>
> 每一次协作都需要进行重复的在设计系统网站、iconfont、插画库里查找转换，消耗大量宝贵的时间，我们甚至试过做了一张表然后打印出来，麻烦在于无法与设计师更新保持同步，于是便研发了此工具来帮助拉近开发者与设计师彼此协作的距离。减少不必要的时间消耗。

## Fridge 能做什么？

目前支持的资源类型

- UI 与品牌主题色
- 应用图标
- SVG 矢量插画

我们使用了 **Airtable** 作为数据储存，每个元素存了尽可能全的信息，颜色我们支持 RGBA、HEX、SCSS 变量，icon 支持 ClassName、Unicode 字符，可以轻松的将 Design token 中的信息复制到设计工具与编辑器里只用。

值得一题的是 SVG 矢量插画我将图形样式量化为 7 组，还可以根据不同应用配置自己的样式属性，而开发只需要关注调用的 ID 即可。

**Fridge** 是 **Electron** 开发的，所以可以实时热更新内容。

---

最后，我们研发 **Fridge** 不仅方便了开发者与设计师的合作，也分享了一种 **Design token** 的工具解决方案。
