## git的使用

### git的使用逻辑

1. 将修改的文件首先存放在“暂存区”中，使用`git add 文件名`命令

2. 将文件提交到本地库中，提交需要“提交说明”，使用`git commit -m 提交说明`

3. 将文件提交到服务器，一般为GitHub，使用 `git push`

### git的使用

**第一次使用git的配置**

* `git config --globle user.name 提交人名`  设置提交人
* `git config --globle user.email 提交人邮箱`  设置提交人邮箱
* `git config list`  查看配置信息

* 如果对上述配置信息进行修改，只需要重复执行一次

**提交到本地仓库步骤**

1. `git init`  初始化仓库

2. `git status`  查看文件状态

3. `git add 文件名`  将文件存入“暂存区”,`git add *`  提交所有文件到“暂存区”

4. `git commit -m 提交说明`  将文件提交到本地仓库，需要提交备注

5. `git log`  查看提交日志

**提交到服务器步骤**
