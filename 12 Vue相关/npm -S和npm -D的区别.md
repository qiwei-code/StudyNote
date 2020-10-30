## `npm`安装依赖时`-S`与`-D`的区别

**`i`** 是`install`的简写

**`-g`** 是全局安装，不带 `-g` 会安装在个人文件夹

**`npm i -s`**（`s`大小写均可）是`npm install -save`的简写 会把依赖安装到生产环境`dependencies`中

**`npm i -D`**（`D`**必须大写**，小写会安装到`dependencies`中） 是`npm install --save-dev`的简写 会把依赖安装到开发环境`devDependencies`中

**如果不带`-S`或者`-D`** 默认安装到生产环境`dependencies`中

其中：

- **`dependencies`** 生产阶段的依赖,也就是项目运行时的依赖
- **`devDependencies`** 开发阶段的依赖，就是我们在开发过程中需要的依赖，只在开发阶段起作用的