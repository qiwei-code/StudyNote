## `ESLint`代码规范

#### `ESLint `支持几种格式的配置文件，如果同一个目录下有多个配置文件，`ESLint `只会使用一个。优先级顺序如下：

1. **`JavaScript`** 使用 `.eslintrc.js` 然后输出一个配置对象。
2. **`YAML`** 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
3. **`JSON`** 使用 `.eslintrc.json` 去定义配置的结构，`ESLint `的 `JSON `文件允许 `JavaScript `风格的注释。
4. **`Deprecated`** 使用` .eslintrc`，可以使 `JSON `也可以是 `YAML`。
5. **`package.json`** 在 `package.json` 里创建一个 `eslintConfig`属性，在那里定义你的配置。

具体配配置可

[点击查看]:http://eslint.cn/docs/user-guide/configuring
[示例查看]:https://blog.csdn.net/bbsyi/article/details/88816637

