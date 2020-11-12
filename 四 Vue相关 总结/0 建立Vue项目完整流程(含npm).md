## 建立Vue项目完整流程

#### 1. Vue项目环境搭建

##### 1.1 全局安装vue-cli

```
npm install --global vue-cli
```

##### 1.2 创建一个基于webpack模板的新项目

```
vue init webpack my-project
```

Vue build ==> 打包方式，回车即可；

Install vue-router ==> 是否要安装 vue-router；

Use ESLint to lint your code ==> 是否需要 js 语法检测；

Set up unit tests ==> 是否安装 单元测试工具；

Setup e2e tests with Nightwatch ==> 是否需要 端到端测试工具 ；

##### 1.3 安装依赖包

```
cd my-project
npm install
//然后运行
npm run dev  或者  npm run serve  或者   npm start
```

安装成功后，项目文件夹中会多出一个目录：　node_modules

#### 2. vue项目目录讲解

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502113321132-349982802.png)

##### 2.1 build：构建脚本目录

　　　　1）build.js  ==> 生产环境构建脚本；``

　　　　2）check-versions.js  ==> 检查npm，node.js版本；

　　　　3）utils.js  ==> 构建相关工具方法；

　　　　4）vue-loader.conf.js  ==> 配置了css加载器以及编译css之后自动添加前缀；

　　　　5）webpack.base.conf.js  ==> webpack基本配置；

　　　　6）webpack.dev.conf.js  ==> webpack开发环境配置；

　　　　7）webpack.prod.conf.js  ==> webpack生产环境配置；

##### 2.2 config：项目配置

　　　　1）dev.env.js  ==> 开发环境变量；

　　　　2）index.js  ==> 项目配置文件；

　　　　3）prod.env.js  ==> 生产环境变量；

##### 2.3 node_modules：npm 加载的项目依赖模块

##### 2.4 src：这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：

　　　　1）assets：资源目录，放置一些图片或者公共js、公共css。这里的资源会被webpack构建；

　　　　2）components：组件目录，我们写的组件就放在这个目录里面；

　　　　3）router：前端路由，我们需要配置的路由路径写在index.js里面；

　　　　4）App.vue：根组件；

　　　　5）main.js：入口js文件；

##### 2.5 static：静态资源目录，如图片、字体等。不会被webpack构建

##### 2.6 index.html：首页入口文件，可以添加一些 meta 信息等

##### 2.7 package.json：npm包配置文件，定义了项目的npm脚本，依赖包等信息

##### 2.8 README.md：项目的说明文档，markdown 格式

##### 2.9 `.xxxx`文件：这些是一些配置文件，包括语法配置，git配置等




