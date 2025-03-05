document.addEventListener('DOMContentLoaded',  function() {
  function showRuntime() {
    const birthTime = new Date('2025-03-04'); // 替换为你网站的创建日期
    const now = new Date();
    const diff = now - birthTime;
    const days = Math.floor(diff  / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff  % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff  % (1000 * 60)) / 1000);
    
    document.getElementById('sitetime').innerHTML  = `本站已运行 ${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
  }

  setInterval(showRuntime, 1000);
});