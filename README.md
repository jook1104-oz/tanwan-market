# tanwan-market

攤玩市集 形象網站（單頁）。純靜態 HTML／CSS，不需要任何建置工具，直接用瀏覽器打開 `index.html` 就能看到完整網站。

上線網址（開啟 GitHub Pages 後）：https://jook1104-oz.github.io/tanwan-market/

## 網站結構

```
tanwan-market/
├── index.html          # 網站全部內容（文字、日期、費用、連結都在這裡）
├── styles.css          # 樣式（品牌色、版面、手機／桌機排版）
├── assets/             # 圖片素材（全部 PNG）
│   ├── logo-black.png / logo-white.png / logo-orange.png   # 字標
│   ├── cat-brand.png   # 攤玩貓（主視覺）
│   ├── cat-launch.png  # 攤玩貓發射陀螺（報名區）
│   ├── vendor-*.png    # 攤商插畫（市集介紹）
│   ├── scene-*.png     # 活動插畫
│   ├── banner.png      # 橫幅（報名區；無日期）
│   ├── line-qr.png     # LINE 加好友海報（頁尾）
│   ├── og-image.png    # 分享到 LINE / FB 時顯示的圖（1200×630，無日期）
│   └── favicon.png     # 瀏覽器分頁小圖示
└── docs/screenshots/   # 手機與桌機預覽截圖
```

頁面由上到下：主視覺 → 市集介紹 → 時間與地點 → 招募類型與審核標準 → 攤位費用與規則 → 常見問題 → 報名區塊 → 頁尾（聯絡我們）。

## 如何更新日期和費用

所有要改的地方都在 `index.html`，並以 `✏️` 註解標示。在 GitHub 網頁上打開 `index.html` → 按鉛筆圖示編輯 → 用 Ctrl+F（Mac 為 ⌘+F）搜尋 `✏️` 就能逐一找到：

| 要改什麼 | 位置（搜尋關鍵字） |
| --- | --- |
| 分享標題、搜尋結果說明裡的日期 | 檔案最上方 `<title>`、`description`、`og:description`、`twitter:description` |
| 主視覺上的日期／時間／地點小標籤 | `✏️ 日期地點（主視覺）` |
| 時間與地點區塊（日期、營業時間、地址、停車） | `✏️ 日期、營業時間、地點` |
| 攤位費用、設備、加租、用電、自備、報到撤場 | `✏️ 攤位費用` |

**目前價格**：價格卡上方是 `11 月試營運優惠`（每攤每日 NT$1,000），下方「12 月起新價格」列出單日 NT$1,200、包月每攤每日 NT$1,000（`price-next` 區塊）。11 月檔期結束後，可以把上方貼紙和 `NT$1,000` 改成 12 月的價格，再刪掉 `<div class="price-next">…</div>` 整塊。

> `banner.png` 和 `og-image.png` 圖上都沒有日期，改日期時不用換圖。

> 💡 LINE／FB 會快取分享預覽。改了分享文字或圖片後，可用 [Facebook 分享偵錯工具](https://developers.facebook.com/tools/debug/) 重新抓取。

## 如何更換素材

1. 準備新圖片，**檔名和原本一樣**（例如新的攤玩貓還是叫 `cat-brand.png`）。
2. 在 GitHub 打開 `assets/` 資料夾 → 右上角「Add file」→「Upload files」→ 拖曳上傳覆蓋 → Commit。
3. 若新圖的長寬比例和舊圖不同，請到 `index.html` 找到對應的 `<img>`，把 `width`、`height` 改成新圖的像素尺寸（避免載入時版面跳動）。
4. 上傳前請先壓縮（例如 [TinyPNG](https://tinypng.com/)），手機載入會快很多。目前 `assets/` 的圖都已用 pngquant 壓縮過（尺寸不變）。

報名表連結 `https://forms.gle/8Fhi1L7nHp1qh5zT6` 出現在 3 個「立即報名」按鈕上（頁首、主視覺、報名區），換表單時在 `index.html` 搜尋 `forms.gle` 全部替換。

## 如何開啟 GitHub Pages

> 請在 PR 審核、合併到 `main` 之後再進行。

1. 到 repo 的 **Settings** → 左側 **Pages**。
2. **Source** 選「Deploy from a branch」。
3. **Branch** 選 `main`，資料夾選 `/ (root)`，按 **Save**。
4. 等 1～3 分鐘，頁面上方會出現網址 https://jook1104-oz.github.io/tanwan-market/ 。

之後每次合併到 `main`，網站會自動更新（約 1～3 分鐘）。

## 本機預覽

直接雙擊 `index.html` 用瀏覽器打開即可。所有路徑都是相對路徑，放在 `/tanwan-market/` 子路徑底下也能正常運作。
