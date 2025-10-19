// ...existing code...
// for文
(function(){
  // ページ上にログ表示領域を作る（DOMContentLoaded を待つ）
  function ensureLogArea(){
    if (document.getElementById('page-log')) return document.getElementById('page-log');
    const pre = document.createElement('pre');
    pre.id = 'page-log';
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.background = '#111';
    pre.style.color = '#0f0';
    pre.style.padding = '12px';
    pre.style.borderRadius = '6px';
    pre.style.fontFamily = 'monospace';
    pre.style.margin = '16px';
    document.body.appendChild(pre);
    return pre;
  }

  function setupConsoleCapture(){
    const out = ensureLogArea();
    const orig = console.log.bind(console);
    console.log = function(...args){
      orig(...args);
      const line = args.map(a => {
        try { return (typeof a === 'object') ? JSON.stringify(a) : String(a); }
        catch(e){ return String(a); }
      }).join(' ');
      out.textContent += line + '\n';
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupConsoleCapture);
  } else {
    setupConsoleCapture();
  }

  // 実際の処理（修正）
  let hoge = "";
  for (let i = 10; i < 20; i++) {
    hoge += i + " "; // 10 11 12 ... 19 を連結
  }

  console.log(hoge);
})();
// ...existing code...