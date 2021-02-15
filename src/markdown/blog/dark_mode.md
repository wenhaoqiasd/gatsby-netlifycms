---
path: /stories/dark_mode/
class: stories
slug: ngc-0006
cover: /assets/darkmode.png
color: rgba(128,128,128,0.24)
title: Dark Mode
tags:
  - Design
  - Studies
  - Code
  - Test
date: 2020-07-31T05:25:15.433Z
---
![](https://dl.airtable.com/.attachments/ed28d369c9638b44163ae42848d40c81/c32fcdfd/darkmode_1.png)

> **Dark Mode 元年**<br/>
> Apple 的 iOS 13、iPadOS、macOS，Google 的 Android 10（Dark theme），主流浏览器都引入 Dark Mode 这一特性，成为了过去的 2019 年的一个设计趋势之一。<br/>
> 为了工作项目中 Dark Mode 的实施，我阅读了 Apple HIG 与 Material Design 还有 WebKit 开发文档，总结了一些自己对于 Dark Mode 的理解。

- - -

# 为什么做 Dark Mode？

为应用开发 Dark Mode 是对设计者与开发者的大考验，需要针对以往的规范与组件进行重新定义与修改。可以根据以下 Dark Mode 的优势与特性参考，评估开发成本与收益。

## 省电

![](https://dl.airtable.com/.attachments/06710394038b04815b77e82adbad027a/7d981961/darkmode_2.png)

OLED 广色域、高对比度等优势，逐渐在移动设备中普及。OLED 显示原理与我们常见的 LCD 不同，OLED 的每个像素单元内有一组发光二极管，像素的显色通过内部不同色彩的发光二极管的亮度决定。发光二极管与灯泡一样，越亮能耗越高。所以，像素显示色彩越暗越省电。

外媒也用专业测试手段证明了 iOS 13 的 Dark Mode 比 Light Mode 省电约 10% ~ 20%。Dark Mode 就是利用技术特性，通过设计的手段达到省电的目的。

## 护眼

OLED 屏幕有这么好的显示效果与优势，为什么普及这么慢？其中有几大重要原因：

* 造价成本高，先在移动设备进行试验。
* 亮度变化影响偏色，需要强大的灯光管理技术。
* 低亮度通过降低屏幕闪烁，需要强大的灯光管理技术。

就算 Apple 这样具备强大技术的公司，在低光亮下还是有轻微的闪烁。夜晚使用低亮度 OLED 移动设备伤眼不至于，但会比 LCD 屏幕更容易视疲劳。

利用 Dark Mode 来关闭不必要的像素，降低整体屏幕闪烁，通过设计的手段达到保护视力。

## 视觉设计

### 专注

> **Focus on your content.** Dark Mode puts the focus on the content areas of your interface, allowing that content to stand out while the surrounding UI recedes into the background.<br/>
> — [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/)

暗色背景更容易将注意力集中到内容上面，内容与容器的层级更明确。

### 美学

> **Dark Mode is an aesthetic choice for users.** Users can choose Dark Mode as their default interface style, and may use it at any time of day or in any lighting conditions.<br/>
> — [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/)

用户可将 Dark Mode 作为常规主题来使用，可以在任意时间进行使用，区分于夜间模式。从界面设计上给用户新鲜感。

# 怎么做 Dark Mode？

对于暗色模式的设计来说，不是简简单单将 UI 元素进行 “反色” 处理，而是制作一个与亮色模式相同信息层级体验的暗色主题。
我认为，有以下三个设计难点。

* 背景层级
* 前景色与背景色的对比度
* 规则简洁且高度复用

## 背景层级

<video autoplay="autoplay" preload="metadata" loop="loop"><source type="video/mp4" src="https://dl.airtable.com/.attachments/d0d9333b3c2ab6b47f64731dd4717eaa/25ab8ff6/mio-staging_mio-design_1579302979877_assets_1MHUUJUUsP5V7UUaeeVrgzOuJ6r4FFlIG_darktheme-light-dark-elevation.mp4">
</video>

由于亮色模式下，控件通过阴影来区分前后层级。但在 Dark Mode 下，阴影看不到了，使用亮色阴影（高光）也无法突出层级关系，所以 Google material design 的“层”在 Dark Mode 下是通过依此提高亮度来实现的。如果使用了系统默认的层级，暗色模式将自动按照规则适配。Material design 的开放使得设计师使用这套规则并不轻松。

<iframe height="440" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FkRxl6XtNpmBUl7jG8ZK4lV%2FiOS-13-UI-Kit-Built-for-Figma-Community%3Fnode-id%3D126%253A18121&chrome=DOCUMENTATION" allowfullscreen></iframe>

苹果在对于层级处理上也使用了相同的思路，不过苹果对于“层”的使用很是收敛，大部分的功能尽可能的用“间距”或者“组”来呈现。在 iOS 中，层级适配被限制简化了，在 iOS 13 的抬起模态中，页面层级可以动态抬起（提亮）。

简单理解下来就是，在过去亮色 UI 下，无论使用的是中性灰还是阴影来塑造的层级，在暗色模式下，可以使用提亮的方式进行塑造层级。

## 前景色与背景色的对比度

![](https://dl.airtable.com/.attachments/386cddaa3e660ce192627b469849f74a/7931a222/duibi.png)

对于文字与 icon 类型的前景色，可以使用 Alpha 通道透明度替代中性灰。在暗色模式下，使用透明度要比中性灰文字与背景的对比度更大，如果暗色模式使用了带有颜色倾向的灰，带有透明度的文字还会融入一些背景的颜色倾向。

![](https://dl.airtable.com/.attachments/71ed131d4bf32937696b9269b5fdadf8/eafc91f2/color.png)

信息强调色，Google material design 配色的提亮逻辑会丧失色彩与亮色模式下的一致性。所以我倾向 Apple 的做法，
可以根据对比度匹配与主观感受，针对亮度与饱和度调整，保证感官上色彩一致，次要颜色也使用 Alpha 通道透明度来呈现。

## 规则简洁且高度复用

### 设计

在新设计一个项目或者修改一个老项目支持 Dark Mode 时，首先要将背景层级与文字层级逻辑建立起来，然后将两套配色匹配到层级逻辑中，形成一个对照关系表。无论设计使用还是开发使用，只需了解使用何种层级背景与层级文字。



### 开发 (Web)

为了与系统界面匹配，浏览器也迅速支持了 Dark Mode，我的网站第一时间就支持了这一特性。

我使用了 CSS 的新媒体查询 `@media (prefers-color-scheme: dark) {}`，类似宽度媒体查询一样，直接在`{}`内部写 Dark Mode 下的样式即可。

[Dark Mode Support in WebKit](https://webkit.org/blog/8840/dark-mode-support-in-webkit/)

![](https://dl.airtable.com/.attachments/c153a32aca51182d2b51030fff8dc389/10c781ca/csscolor.png)

下面的 CSS 是按照使用场景设计的两套配色对照关系。

```CSS
html {
  /* 背景色 */
  --BG-P: rgb(250, 248, 246);
  --BG-OP: rgba(250, 248, 246, 0);
  --BG-S: rgb(242, 240, 238);
  /* 文字色 */
  --Text-1: rgb(26, 26, 26);
  --Text-2: rgba(26, 26, 26, 0.6);
  --Text-3: rgba(26, 26, 26, 0.2);
  /* 磨砂玻璃 */
  --Glass: saturate(200%) blur(1.5rem);
  --Glass-BG-P: #fff;
  --Glass-BG-S: var(--BG-P);
  /* 强调色 */
  --Style: #5364ff;
}
@supports (backdrop-filter: none) {
  html {
    --Glass-BG-P: rgba(255, 255, 255, 0.88);
    --Glass-BG-S: rgba(250, 248, 246, 0.75);
  }
}
@media (prefers-color-scheme: dark) {
  html {
    --BG-P: rgb(24, 26, 28);
    --BG-OP: rgba(24, 26, 28, 0);
    --BG-S: rgb(33, 35, 37);
    --Text-1: rgb(255, 255, 255);
    --Text-2: rgba(255, 255, 255, 0.6);
    --Text-3: rgba(255, 255, 255, 0.2);
    --Glass-BG-P: rgb(42, 44, 46);
    --Glass-BG-S: var(--BG-P);
  }
  @supports (backdrop-filter: none) {
    html {
      --Glass-BG-P: rgba(42, 44, 46, 0.88);
      --Glass-BG-S: rgba(24, 26, 28, 0.75);
    }
  }
}
```

<video autoplay="autoplay" preload="metadata" loop="loop"><source type="video/mp4" src="https://dl.airtable.com/.attachments/b3a37600af1efc23ebb51b5b7780e309/ba96268c/22.mp4">
</video>

在开发过程中，我只关注调用背景层级与文字层级，哪怕设计稿只有一份亮色或暗色模式的设计稿。

# 最后

在我现在写完这篇文档时，我已经将我的全新支持 Dark Mode 的个人网站开发完成。在工作项目中，已经将 Dark Mode 进一步在产品中尝试，也已经有上线的产品支持了此项特性。对于商业项目，要慎重考虑是否将自己产品的支持 Dark Mode，设计团队与工程团队需要重构产品基础样式部分，设计系统越复杂，改造成本就越高。当然 Dark Mode 在省电与带给用户耳目一新的感受方面还是有很大价值的。

我愿意与更多的设计师一起研究关于 Dark Mode 设计适配。