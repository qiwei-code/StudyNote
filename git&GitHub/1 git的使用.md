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
6. `git rm --cached`  移除“缓存区”中的文件
7. `git rest --hard commitID`

**有关分支的命令**

* `git branch`  查看分支
* `git branch 分支名称`  创建分支
* `git checkout 分支名称`  切换分支
* `git merge 分支名称`  合并分支
* `git branch -d 分支名称`  删除分支（分支被合并后才允许删除，-D强制删除）

**暂时保存更改**

在git中，可以暂时提取出所有的改动，让开发人员得到一个干净的工作副本，零时转向其它工作场景，主要用于临时的分支切换但又不想提交代码到本地仓库

*  `git stash`  储存零时改动
*  `git stash pop`  恢复改动

**代码提交到远程仓库**

* `git push 远程仓库地址 master`  提交本地仓库代码到服务器，最后是分支名称
* `git remote add 别名 远程仓库地址`  给服务器地址添加别名
* `git push -u 远程仓库地址别名 master`  `-u`记住推送地址及分支，下次推送输入`git push`即可
* `git clone 远程仓库地址`  克隆远程仓库数据到本地
* `git pull 远程仓库地址 分支名称`  拉取远程仓库最新版本

**GitHub使用ssh免密提交**

1. `ssh-keygen`  在git中使用命令ssh-keygen生成密匙
2. `id_rsa.pub`   公钥名称，`id_rsa`  私钥名称
3. 将公钥添加到GitHub上即可