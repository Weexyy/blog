---
title: 小米澎湃OS绕社区五级解bl锁
description: 升级小米澎湃OS后解锁需要社区达到5级，然后答题申请，麻烦不说，还很难达到要求。我整合了其他大佬做的绕解锁工具写了一个脚本，可绕过社区5级。
pubDate: 2024-06-30
categories: [经验,分享]
---

升级小米澎湃OS后解锁需要社区达到5级，然后答题申请，麻烦不说，还很难达到要求。我整合了其他大佬做的绕解锁工具写了一个脚本，可绕过社区5级。

目前仅k70和小米14两个系列不能解，其他都能通过该方法解锁

------

我的Turbo3已经解了

![pkc0gsS.png](https://cdn.zhengweixin.top/img/blog/xiaomi-community-level-5-unlock/1.png)

------

## 使用方法

- 手机插卡，登陆小米账号，开启开发者人员选项，打开usb调试。
- 桌面长按设置，点感叹号进入设置应用信息，清除全部数据，清除后不要在打开了
- 通过adb安装设置应用， 手机有adb授权弹窗，记得确认允许！
- 完成以上操作后，请确保wifi关闭，sim卡数据打开，确保adb的设置已安装。
- 执行后手机会自动进入设备解锁状态，然后绑定账号和设备。
- 点绑定设备，会提示“验证失败.请重试”，这是正常的提示 。
- 启动解锁工具，点解锁提示168小时等待，就成功了。
- 如果提示让绑定账号那就没成功，卸载adb安装的设置重新来。

我是尝试了2次才成功的，卸载adb安装的设置，再清除原设置数据，重新adb安装设置重新来。不行多试几次。

![pkgcAET.png](https://cdn.zhengweixin.top/img/blog/xiaomi-community-level-5-unlock/2.png)

## 下载链接



[https://www.123pan.com/s/x3d2jv-lqj1H.html](https://www.123pan.com/s/x3d2jv-lqj1H.html)
