---
title: 手机串流玩PC原神
description: 刷抖音的时候看见有人手机玩PC原神，浅浅研究了一下，发现还挺简单的，大家可以逝世。
pubDate: 2024-02-04
categories: [经验]
---

冬天里，电脑玩游戏太冷，手机画质又太拉。刷抖音的时候看见有人手机玩 PC 原神，浅浅研究了一下，发现还挺简单的，大家可以逝世。

其实这就相当于云游戏，只不过服务器在本地，几乎没延迟。话不多说，上教程：

准备工作
----

 1. 要有性能足够的电脑，性能差的串流会卡
 2. 路由器性能也要够
 3. 手
 4. 脑子

需要的工具有：

 - PC：sunshine（官网下就好了 [Github][1]）
 - 手机：支持多点触控的修改版 moonlight（[安卓下载链接][2]）

设置原神
----

PC 端原神里其实塞了一个手机版 UI 可以通过命令启动。
打开原神**根目录**，右键 `yuanshen.exe` 创建快捷方式（注意：**不是启动器**）
右键快捷方式，点击**属性**，在目标后面加一个空格，然后复制粘贴下面这串代码

    use_mobile_platform -is_cloud 1 -platform_type CLOUD_THIRD_PARTY_MOBILE -popupwindow -borderless

![pk3N0vn.png](https://s21.ax1x.com/2024/05/29/pk3N0vn.png)

最后**保存**即可。
通过这个快捷方式打开原神，就有手机的按键了。

电脑安装 sunshine
-------------

电脑下载并安装 **sunshine**
启动服务后浏览器访问 [https://127.0.0.1:47990/][3]
然后按提示填写账号密码。
（网页可以添加游戏，手机中可以一键启动，但我搞了，没成功，你们帮我试试）

手机安装 moonlight
--------------

手机下载**修改版 moonlight** 安装
安装后，打开 app，会显示你的电脑，点击后会弹出一个窗口，有一个 4 位数的**配对码**

![pk3NDuq.png](https://s21.ax1x.com/2024/05/29/pk3NDuq.png)

回到刚才的网页，点顶栏的 PIN，输入配对码即可配对成功

![pk3x6eg.md.png](https://s21.ax1x.com/2024/05/30/pk3x6eg.md.png)

然后打开软件设置，取消勾选将触控屏作为触控板使用

![pk3zT3t.png](https://s21.ax1x.com/2024/05/30/pk3zT3t.png)

最后点击你的电脑，有两个选项（如果没添加游戏的话），点 **desktop**，手机就有电脑画面了，然后打开原神，就可以愉快的在手机上享受高画质了！


  [1]: https://github.com/LizardByte/Sunshine
  [2]: https://www.123pan.com/s/x3d2jv-cpV1H.html
  [3]: https://127.0.0.1:47990/