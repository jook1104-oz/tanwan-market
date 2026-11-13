// 網址沒有 #段落 時，進入頁面一律從最上面開始（不讓瀏覽器回到上次位置）
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
function toTopIfNoHash() { if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
window.addEventListener('pageshow', toTopIfNoHash);
