const defaultTitle = document.title;
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
