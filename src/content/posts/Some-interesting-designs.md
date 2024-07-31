---
title: 博客一些有趣的设计
description: 分享一些我博客上的代码，欢迎采纳~
pubDate: 2024-08-02
categories: [分享]
---

我的博客基于 **[typography](https://github.com/moeyua/astro-theme-typography)** 主题，重写了所有的css（**全部删掉**重新写）和部分组件（footer、header、comment等），其余组件也都有不同程度的修改。

其中也有一些比较有意思的功能或样式，这篇文章分享一些。

------

## 动态标题

当用户离开网站时，更改网页标题和图标，回到页面时复原。

只需在页面head中引用这个script，即可实现此功能。

请自行将 `/favicon.ico` 和 `/hidden-favicon.ico` 替换为自己的。

```javascript
const defaultTitle = document.title;
//替换为自己的图标
const defaultIcon = '/favicon.ico';
const hiddenIcon = '/hidden-favicon.ico';

function changeFavicon(src) {
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = src;
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = src;
    document.head.appendChild(newLink);
  }
}

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    document.title = '(っ °Д °;)っ 访问的页面不存在了';
    changeFavicon(hiddenIcon);
  } else {
    document.title = '(●\'◡\'●)噫？又好啦 ~';
    changeFavicon(defaultIcon);
    setTimeout(() => {
      document.title = defaultTitle;
    }, 2000); // 2秒后恢复原来的标题
  }
});

```

------

## 彩色文字

通过引用下面的script，并给元素加上 `class="color-text"` 就可以让文字拥有各种颜色，具体效果请查看 **[About](/about)** 页面。

```javascript
function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColors(): void {
    const elements = document.querySelectorAll('.color-text');
    elements.forEach(element => {
        const htmlElement = element as HTMLElement;
        const randomColor = getRandomColor();
        htmlElement.style.color = randomColor;
    });
}

document.addEventListener('DOMContentLoaded', setRandomColors);

```

这样存在一个问题，有些颜色不方便阅读，同时存在一些重复的颜色，所以我还进行了一些修改：

```html
<script>
  const usedColors = new Set<string>();

  function getRandomColor(): string {
      const letters = '0123456789ABCDEF';
      let color;
      do {
          color = '#';
          for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
          }
      } while (usedColors.has(color) || isColorTooBright(color)); // 检查颜色是否已被使用或颜色亮度过高
      usedColors.add(color); // 将新颜色添加到集合中
      return color;
  }

  function isColorTooBright(color: string): boolean {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      const brightness = Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
      return brightness > 200; // 亮度阈值，根据需要调整
  }

  function setRandomColors(): void {
      const elements = document.querySelectorAll('.color-text');
      elements.forEach(element => {
          const htmlElement = element as HTMLElement;
          const randomColor = getRandomColor();
          htmlElement.style.color = randomColor;
      });
  }

  document.addEventListener('DOMContentLoaded', setRandomColors);
</script>
```

各位按需修改。

------

## 网站运行时间

这个也没什么奇特的地方，但我嫌 `xx天xx小时xx分钟xx秒` 太长了，直接展示天又感觉不精确，所以通过计算，转化为天并保留5位小数以精确到秒。

```javascript
const startDate = new Date('6/08/2024 12:00:00'); // 站点启动时间

function updateRuntime() {
  const now = new Date();
  const difference = Number(now) - Number(startDate);
  
  const days = difference / (1000 * 60 * 60 * 24); // 计算运行的天数
  const runtimeText = `${days.toFixed(5)}`; // 保留5位小数，精确到秒

  const runtimeElement = document.getElementById('runtime');
  if (runtimeElement) { 
    runtimeElement.textContent = runtimeText;
  }
}

setInterval(updateRuntime, 1000);
updateRuntime();
```

## 加载动画

我这个比较简洁，代码放这了，需要的自行修改：

```html
<div id="loader" class="loader">
    <div class="loader-circle"></div>
</div>

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease; /* 添加过渡效果 */
}

/* Circle styles */
.loader-circle {
  width: 50px;
  height: 50px;
  border: 5px solid #00ffaa;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Spin animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader.hidden {
  opacity: 0;
  visibility: hidden;
}

</style>

<script>
    // 页面加载完毕后隐藏加载动画
    window.onload = function() {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.add('hidden'); // 添加hidden类来触发过渡效果
      }
    };
</script>

```

