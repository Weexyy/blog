const startDate = new Date('6/08/2024 12:00:00'); // 站点启动时间

function updateRuntime() {
  const now = new Date();
  const difference = Number(now) - Number(startDate); // 确保类型为 number
  
  const days = difference / (1000 * 60 * 60 * 24); // 计算运行的天数
  const runtimeText = `本站已运行 ${days.toFixed(5)} 天`; // 保留5位小数，以秒级精度

  const runtimeElement = document.getElementById('runtime');
  if (runtimeElement) { // 检查 runtimeElement 是否为 null
    runtimeElement.textContent = runtimeText;
  }
}

setInterval(updateRuntime, 1000);
updateRuntime(); // 初始化调用以立即显示时间