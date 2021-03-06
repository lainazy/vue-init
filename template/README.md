# {{ name }}

> {{ description }}

## src 目录下各个目录及文件简介

* api 目录 (存放与接口调用相关资源)
  * axios 目录 (存放对 axios 的一些加工处理，方便项目中直接使用)
  * path.js 文件 (存放所有接口不包含 baseUrl 的 path 部分)
* assets 目录 (存放项目需要引用的资源)
  * fonts 目录 (字体资源)
  * images 目录 (图片资源)
  * scss 目录 (全局通用的 scss 样式资源)
* components 目录 (存放项目中的 vue 组件)
* data 目录 (存放项目中需要用到的配置数据)
* i18n 目录 (存放国际化处理的数据文件，需要请自行添加)
* libs 目录 (存放一些无法通过 npm 安装的第三方库)
* mixins 目录 (存放多个 vue 组件需要共用的选项配置，需要请自行添加)
* router 目录 (存放 vue-router 相关配置)
  * routes.js 文件 (存放 vue-router 的所有 route 配置)
{{#if vuex}}
* store 目录 (存放 vuex.store 相关配置)
  * modules 目录 (按模块分隔 store 配置，如果是所有模块的通用配置可以直接写在 store/index.js 文件中)
{{/if}}
* utils 目录 (存放全局共享的工具函数)
  * directives.js 文件 (存放全局的 vue directive)
  * filters.js 文件 (存放全局的 vue filter)
* views 目录 (存放项目的所有页面展示组件)
* App.vue 文件 (主组件文件)
* main.js 文件 (入口文件)

## 项目中的全局对象

* $config (包含项目的通用配置数据，数据配置文件为 src/data/config/*.env.js)
* $axios (用于接口请求，对 axios 进行了一层加工处理)
* $api (包含项目所有接口地址，数据配置文件为 src/api/path.js)

## flexible 相关配置

该项目使用的是 ydui 的 flexible 方案，因为相比阿里的 flexible 方案，这套方案用起来方便的多，当前项目设置的根字体大小为 50px，如果根据实际情况确定需要修改该字体大小，修改 config/index.js 文件中 base 对象的 remUnit 即可，目前而言，绝大多数的情况下应该不需要修改。

## pre-commit eslint

该项目默认启用 eslint 进行 js 代码语法检查，检查不通过时将出现以下现象：

* 开发环境代码运行报错
* git commit 无法提交成功

当你执行 git commit 时，会在代码提交之前先执行 eslint 校验 src 目录下变更过的 js 或 vue 文件，为了提高执行速率，未变更的文件不会再次校验，如果 eslint 语法检查不通过，将会阻止本次提交。

如果你非要强制提交代码，可以使用 `git commit --no-verify` (强烈不推荐，因为这样你提交的代码在团队其他成员 pull 时，会报出一大堆错误，应当确保只有在 eslint 校验成功，但出现其他未知异常导致代码无法正常提交时，才使用该选项)

如果想定制 eslint 校验规则，修改 .eslintrc.js 文件

如果你的项目不想使用 eslint，将 config/index.js 文件中的 base.useEslint 设置为 false 即可 (推荐启用 eslint)

**注意：windows 系统 npm 安装 pre-commit 插件时，可能会由于权限原因，无法在 .git/hooks 目录中生成新的 pre-commit 文件，此时需要以管理员身份运行 cmd.exe，执行 `node ./node_modules/pre-commit/install.js` 就 OK 了。**

## Build Setup

```bash
# install dependencies
yarn

# 安装 phantomjs-prebuilt 经常报错，常常需要切换镜像源 (以下3个源哪个正常用哪个)
# yarn config set phantomjs_cdnurl https://bitbucket.org/ariya/phantomjs/downloads
# yarn config set phantomjs_cdnurl https://cnpmjs.org/downloads
# yarn config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs

# 安装 node-sass 也很容易报错，通常换成淘宝镜像就好了
# yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass

# 安装 chromedriver 也会报错，源镜像被墙了，换成淘宝镜像
# yarn config set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report
{{#if test}}
# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
{{/if}}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
