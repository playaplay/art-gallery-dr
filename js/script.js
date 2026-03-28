// script.js

function copyWeChat(id) {
  const el = document.createElement('input');
  el.value = id;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert(
    document.documentElement.lang === 'jp'
      ? 'IDをコピーしました'
      : '微信号已复制',
  );
}
