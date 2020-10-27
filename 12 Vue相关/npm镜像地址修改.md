##  修改npm镜像地址

##### n.1 直接编辑npm文件（后面还是直接使用npm命令调用）

```
npm config edit
```

直接修改registry地址

sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=https://registry.npm.taobao.org

##### n.2 代码更改npm配置文件

第一种（后面还是继续使用npm命令）

```
npm config set registry http://registry.npm.taobao.org
```

第二种（后面用到npm命令的地方都改为cnpm）

```
npm install -g cnpm –registry=https://registry.npm.taobao.org
```

##### n.3 使用nrm管理registry地址

* 安装nrm

```
npm install -g nrm
```

* 查看镜像列表

```
nrm ls
```

* 切换镜像

```
nrm use taobao
```

`r_name`镜像名字，` r_ur`l镜像地址

* 在nrm添加自己的镜像地址

```
nrm add r_name r_url
```

* 删除

```
nrm del r_name
```

* 测试镜像的相应速度

```
nrm test r_name
```

