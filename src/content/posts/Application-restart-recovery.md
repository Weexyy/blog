---
title: 关于解决降级系统应用重启恢复问题
description: 让miui降级系统应用，且重启后不恢复。本教程适用于小米/红米手机，其他设备自行尝试
pubDate: 2024-06-02
categories: [经验]
---

本教程适用于小米/红米手机，其他设备自行尝试


众所周知，小米手机通过核心破解降级安装系统应用，**重启后会恢复**成原来的。
在更新玩1.0.3系统后，修改版桌面版本号低于原版，导致重启恢复。
这个问题我在酷安上没有找到解决办法，在我瞎搞的时候，意外解决了。
虽然不知道为什么酷安上没有（可能有什么BUG）但至少重启不会恢复了


----------


下面是详细步骤（这里以系统桌面为例）

先找到系统默认应用的apk位置（可以用**西米露**开启**显示更多应用信息**，一般在 `/produck/priv-app/` ，名称为软件名）

![1](https://cdn.zhengweixin.top/img/blog/application-restart-recovery/1.jpg)

安装应用，找到**安装后**的应用apk目录（一般在 `/data/app/` ，apk名称b`ase.apk`）

![2](https://cdn.zhengweixin.top/img/blog/application-restart-recovery/2.jpg)

将安装后的apk和同目录下oat文件夹中所有base字样改为默认应用的名称（如把`base.apk`改为`MiuiHome.apk`）

![3](https://cdn.zhengweixin.top/img/blog/application-restart-recovery/3.jpg)

然后替换原来的文件，最后手机管家里卸载更新
大功告成


----------


再次声明，这是我乱搞发现的，有没有问题我不知道，出问题自己负责！