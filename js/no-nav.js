function hideNavigation() {
  if (window.innerWidth <= 575) {
    document.querySelector("nav").style.position = "absolute";
  } else {
    document.querySelector("nav").style.position = "fixed";
  }
}

// 初始化时执行一次
$(document).ready(function () {
  hideNavigation();
});

// 监听窗口大小变化事件
window.addEventListener("resize", function () {
  hideNavigation();
});