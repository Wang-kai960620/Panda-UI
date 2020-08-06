# Panda-UI --一个UI库

# 介绍
这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

# 开始使用
添加 CSS 样式 使用本框架前，请在 CSS 中开启 border-box
```
*,*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式。



IE 15 及以上浏览器都支持此样式。

# 安装 Panda-UI
```
npm i --save panda-20200806
```

引入 panda
```
import {Button, ButtonGroup, Icon} from 'panda-20200806'


export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```

# 文档
# 提问
# 变更记录
# 联系方式
# 贡献代码