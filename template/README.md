# vue-webpack-init

> vue项目开发种子工程

## src目录下各个目录及文件简介

- api目录 (存放与接口调用相关资源)
  - axios目录 (存放对axios的一些加工处理，方便项目中直接使用)
  - path.js文件 (存放所有接口不包含baseUrl的path部分)
- assets目录 (存放项目需要引用的资源)
  - fonts目录 (字体资源)
  - images目录 (图片资源)
  - scss目录 (全局通用的scss样式资源)
- components目录 (存放项目中的vue组件)
  - commons目录 (项目通用组件，肯定是和业务逻辑无关的组件)
  - pieces目录 (从views的页面展示组件中独立出来的组件片段，可能包含一定的业务逻辑，注意：放置在该目录的组件片段也应该是被多个views组件公用的，否则更建议直接放在相应views组件自身的目录下)
    - services.js文件 (如果pieces中有多个组件共用同一段业务逻辑代码，可以将这段代码提取到该文件中，如果没有可以删除该文件)
- data目录 (存放项目中需要用到的配置数据)
- i18n目录 (存放国际化处理的数据文件，不需要国际化处理时可删除)
- libs目录 (存放一些无法通过npm安装的第三方库)
- mixins目录 (存放多个vue组件需要共用的选项配置)
- plugins目录 (存放项目中需要使用的vue插件)
- router目录 (存放vue-router相关配置)
  - routes.js文件 (存放vue-router的所有route配置)
- store目录 (存放vuex.store相关配置)
  - modules目录 (按模块分隔store配置，如果是所有模块的通用配置可以直接写在store/index.js文件中)
- utils目录 (存放全局共享的工具函数)
  - directives.js文件 (存放全局的vue directive)
  - filters.js文件 (存放全局的vue filter)
- views目录 (存放项目的所有页面展示组件)
- App.vue文件 (主组件文件)
- main.js文件 (入口文件)

## 项目中的全局对象

- $config (包含项目的通用配置数据，数据配置文件为src/data/env.conf.js)
- $axios (用于接口请求，对axios进行了一层加工处理)
- $api (包含项目所有接口地址，数据配置文件为src/api/path.js)

## flexible 相关配置

该项目使用的是 ydui 的 flexible 方案，因为相比阿里的 flexible 方案，这套方案用起来方便的多，当前项目设置的根字体大小为50px，如果根据实际情况确定需要修改该字体大小，修改 build/utils.js 文件中 px2remLoader 对象的 options.remUnit 即可，目前而言，绝大多数的情况下应该不需要修改。

## pre-commit eslint

该项目强制要求使用 eslint 进行 js 代码语法检查，否则将面临以下问题：

- 开发时代码无法运行成功
- git commit 无法提交成功

当你执行 git commit 时，会在代码提交之前先执行 eslint 校验 src 目录下变更过的 js 或 vue 文件，为了提高执行速率，未变更的文件不会再次校验，如果 eslint 语法检查不通过，将会阻止本次提交。

如果你非要强制提交代码，可以使用 `git commit --no-verify`（强烈不推荐，因为这样你提交的代码在团队其他成员 pull 时，会报出一大堆错误，应当确保只有在 eslint 校验成功，但出现其他未知异常导致代码无法正常提交时，才使用该选项）

**注意：windows系统 npm 安装 pre-commit 插件时，可能会由于权限原因，无法在 .git/hooks 目录中生成新的 pre-commit 文件，此时需要以管理员身份运行 cmd.exe，执行 `node ./node_modules/pre-commit/install.js` 就OK了。**

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
