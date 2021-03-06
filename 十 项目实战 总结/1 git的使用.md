## git的使用







### 1. git的使用逻辑

1. 将修改的文件首先存放在“暂存区”中，使用`git add 文件名`命令

2. 将文件提交到本地库中，提交需要“提交说明”，使用`git commit -m 提交说明`

3. 将文件提交到服务器，一般为GitHub，使用 `git push`

### 2. git的使用

**2.1 第一次使用git的配置**

* `git config --global user.name 提交人名`  设置提交人
* `git config --global user.email 提交人邮箱`  设置提交人邮箱
* `git config list`  查看配置信息
* 如果对上述配置信息进行修改，只需要重复执行一次

**2.2 提交到本地仓库步骤**

1. `git init`  初始化仓库
2. `git status`  查看文件状态
3. `git add 文件名`  将文件存入“暂存区”,`git add *`  提交所有文件到“暂存区”
4. `git commit -m 提交说明`  将文件提交到本地仓库，需要提交备注
5. `git log`  查看提交日志
6. `git rm --cached`  移除“缓存区”中的文件，如果不加`--cached` “工作区”中也会被移除掉
7. `git rest --hard commitID`  恢复到指定的提交版本，`commitID`是版本号，可以通过`git log`查看。改变的是本地仓库。

**2.3 有关分支的命令**

* `git branch`  查看分支
* `git branch 分支名称`  创建分支
* `git checkout 分支名称`  切换分支
* `git merge 分支名称`  合并分支
* `git branch -d 分支名称`  删除分支（分支被合并后才允许删除，-D强制删除）

**2.4 暂时保存更改**

在git中，可以暂时提取出所有的改动，让开发人员得到一个干净的工作副本，零时转向其它工作场景，主要用于临时的分支切换但又不想提交代码到本地仓库

*  `git stash`  储存零时改动
*  `git stash pop`  恢复改动

**2.5 代码提交到远程仓库**

* `git push 远程仓库地址 master`  提交本地仓库代码到服务器，最后是分支名称
* `git remote add 别名 远程仓库地址`  给服务器地址添加**别名**
* `git push -u 远程仓库地址别名 master`  `-u`记住推送地址及分支，下次推送输入`git push`即可
* `git clone 远程仓库地址`  克隆远程仓库数据到本地
* `git pull 远程仓库地址 分支名称`  拉取远程仓库最新版本

**2.6 GitHub使用ssh免密提交**

1. `ssh-keygen`  在git中使用命令`ssh-keygen`生成密匙
2. `id_rsa.pub`   公钥名称，`id_rsa`  私钥名称
3. 将公钥添加到`GitHub`上即可

### 3. 注意区别

**3.1 git reset --hard/git revert/ git stash/git restore的区别** [相关博客](https://blog.csdn.net/albertsh/article/details/104719370/)

* `git reset --hard 版本号`  版本回滚到某一版本，对本地版本产生影响，**不对远程分支产生影响**
	* `--mixed` 默认选项，被回退的那些版本的修改会放在工作目录，可以先加到暂存区，然后再提交。
	* `--soft`  被回退的那些版本的修改会被放在暂存区，可以再次提交。
	* `--hard` 被回退的那些版本的修改会直接舍弃，好像它们没有来过一样。
* `git revert 版本号1 版本号2`  撤销指定的一个或多个版本，**会对远程分支产生影响**，对后面和前面的版本没有影响
* `git stash`  保存当前状态，可以理解成存档，用在切换分支时，又不想commit当前分支时使用
* `git restore`  单纯的撤销，用“本地库中”的文件覆盖“暂存区”和本地的修改

**3.2 Git 2.23 新增git switch 和 git restore 与git checkout的区别**

**1) 分支管理**
`git checkout <分支名>` 和 `git checkout -b <分支名>`
对应的switch命令
`git switch <分支名>` 和 `git switch -c <分支名>`

**2) 文件恢复**
`$ git restore --source HEAD~3 --staged --worktree 文件名`恢复到三次前的提交
更多高级应用待学习

**3.3 `git add .` 与`git add *` 的区别

`git add .` 会把本地所有`untrack`的文件都加入暂存区，并且会根据`.gitignore`做过滤，但是`git add *` 会忽略`.gitignore`把任何文件都加入

**3.3 git批量删除文件和批量提交**

1) 删除单个文件：上面已经有了

2) 删除某个文件夹下所有文件：

```
$ git rm "文件夹"		// 文件夹也被删了
```

或者` cd `到你要删除的目录下

```git
// -r 代表 recursively（递归）
$ git rm * -r
$ git commit -m "clear"
$ git push
```

3) 手动在文件管理器中删除批量文件，然后执行命令：

```git
$ git add .
$ git commit -m "clear"
$ git push
```

