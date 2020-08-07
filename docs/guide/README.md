---
title:快速上手 -
---

# 快速上手

这是一个极简的 UI 库，是我在学习 vue 的过程中，为了加强对于 vue 文档和 Api 的应用做的一个 UI 库，非常简单实用。

# 引入 Pand-UI

## 1 ：安装 Panda-UI

```
npm install panda-20200806
# OR
yarn add panda-20200806
```

## 2 ：创建一个 vue 项目

```
$ vue create demo
```

## 3 ：使用组件

```
//使用时需要引入css文件
import 'panda-20200806/dist/index.css'
import Vue from 'vue';
import { Button, Icon } from 'panda-20200806';
import App from './App';


Vue.config.productionTip = false;

Vue.component(Button, Button);
Vue.component(Input, Input);



new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```
