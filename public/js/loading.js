document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById("loading");
    if (loading) {
      setTimeout(() => {
        loading.classList.add('hidden');
      }, 500); // 0.5秒后触发隐藏动画
    }
  });
  