//控制台输出内容


//欢迎
console.log("%c欢迎光临我的小窝ヾ(•ω•`)o","font-size: 30px; color: blue;");

//运行天数
const targetTime = new Date("2024-06-08T12:00:00Z").getTime();
const currentTime = new Date().getTime();
const time = currentTime - targetTime;
const days = Math.floor(time / (1000 * 60 * 60 * 24));
console.log(`%c本站已经运行了 %c${days} %c天`,"font-size: 15px; color: green;","font-size: 20px; color: black;","font-size: 15px; color: green;");

//版权归属
const year = new Date().getFullYear()
console.log(`©2023-${year} By Weixin Zheng`);

//其他
console.log(``);
console.log(`%cNCC2-036 %c调用前置摄像头拍照成功，识别为【小笨蛋】`, "color:white; background-color:#4fd953", "");
console.log(`%c🤪`, "font-size: 50px");
console.log(``);
console.log(`%cWELCOME %c你好，小笨蛋.`, "color:white; background-color:#4f90d9");
console.warn(`%c⚡ %c你正在访问 Weixin Zheng 的博客.`, "color:white; background-color:#f0ad4e", "");
console.log(``);