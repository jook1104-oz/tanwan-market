# tanwan-market

攤玩市集 形象網站（單頁）。純靜態 HTML／CSS，不需要任何建置工具，直接用瀏覽器打開 `index.html` 就能看到完整網站。

上線網址：https://tanwanmarket.com/

## 網站結構

```
tanwan-market/
├── index.html          # 首頁（文字、日期、費用、連結都在這裡）
├── cup/
│   ├── index.html      # 西門盃 第一屆公開循環賽頁面（tanwanmarket.com/cup/）
│   └── cup.css         # 西門盃頁面專用樣式（另外共用 styles.css）
├── sitemap.xml         # 給搜尋引擎的網址清單（首頁、/cup/）
├── CNAME               # 自訂網域設定，不要刪
├── styles.css          # 樣式（品牌色、版面、手機／桌機排版）
├── assets/             # 圖片素材（全部 PNG）
│   ├── logo-black.png / logo-white.png / logo-orange.png   # 字標
│   ├── cat-brand.png   # 攤玩貓（主視覺）
│   ├── cat-launch.png  # 攤玩貓發射陀螺（報名區）
│   ├── vendor-*.png    # 攤商插畫（市集介紹）
│   ├── scene-*.png     # 活動插畫
│   ├── banner.png      # 橫幅（報名區；無日期）
│   ├── line-qr.png     # LINE 加好友直式海報（網頁上不使用，保留給 LINE@ 與印刷用）
│   ├── line-qr-code.svg # 頁尾 LINE 卡片的 QR code（內容：https://lin.ee/N8RTbE3）
│   ├── og-image.png    # 分享到 LINE / FB 時顯示的圖（1200×630，無日期）
│   ├── favicon.png     # 瀏覽器分頁小圖示
│   └── cup/            # 西門盃素材（攤玩貓 cat-*.webp、字卡 ximen-cup-* / beyblade-title-* / spin-ximen-*、分享圖 og-cup.png）
└── docs/screenshots/   # 手機與桌機預覽截圖
```

首頁由上到下：主視覺 → 西門盃橫幅（連到 /cup/）→ 市集介紹 → 時間與地點 → 招募類型與審核標準 → 攤位費用與規則 → 常見問題 → 報名區塊 → 頁尾（聯絡我們）。

## 西門盃頁面（/cup/）

- 內容都在 `cup/index.html`，依序是：賽事名稱 → 時間與地點 → 參賽資格・名額・報名費 → 參賽規則與自備器材 → 報名方式與獎品 → 每月賽事（旋轉吧！西門 系列）→ 常見問題 → 主辦與協辦 → 頁尾。比賽頁不放攤位費和攤商規則。
- **報名開放時**：在 `cup/index.html` 搜尋 `✏️ 報名按鈕`，把兩個 `<button … disabled>報名即將開放</button>`（主視覺、報名方式）換成售票平台連結，註解裡有範例。組別、賽制、獎品公布後，也一併更新「參賽資格」「參賽規則」「獎品」和常見問題。
- 首頁的西門盃橫幅在 `index.html` 搜尋 `西門盃橫幅`；導覽列的「G3 公開賽」也連到 `/cup/`。
- 麗嬰國際、Funbox Toys 一律只用文字，不放 Logo 或產品圖片。

## 如何更新日期和費用

所有要改的地方都在 `index.html`，並以 `✏️` 註解標示。在 GitHub 網頁上打開 `index.html` → 按鉛筆圖示編輯 → 用 Ctrl+F（Mac 為 ⌘+F）搜尋 `✏️` 就能逐一找到：

| 要改什麼 | 位置（搜尋關鍵字） |
| --- | --- |
| 分享標題、搜尋結果說明裡的日期 | 檔案最上方 `<title>`、`description`、`og:description`、`twitter:description` |
| 主視覺上的日期／時間／地點小標籤 | `✏️ 日期地點（主視覺）` |
| 時間與地點區塊（日期、報名截止、營業時間、地址、停車） | `✏️ 日期、營業時間、地點` |
| 報名區的「報名截止」標籤 | `✏️ 報名截止日` |
| 攤位費用、設備、加租、用電、自備、報到撤場 | `✏️ 攤位費用` |

**目前價格**：價格卡標題是「12 月攤位費用」，列出單日每攤每日 NT$1,200、包月每攤每日 NT$1,000（包月需勾選當月全部營業日）。

**報名按鈕**：頁首、主視覺、報名區各有一個「12 月報名」按鈕，都連到同一份報名表。之後換月份時，搜尋 `月報名` 一起改文字，搜尋 `forms.gle` 換表單網址。

> `banner.png` 和 `og-image.png` 圖上都沒有日期，改日期時不用換圖。

> 💡 LINE／FB 會快取分享預覽。改了分享文字或圖片後，可用 [Facebook 分享偵錯工具](https://developers.facebook.com/tools/debug/) 重新抓取。

## 如何更換素材

1. 準備新圖片，**檔名和原本一樣**（例如新的攤玩貓還是叫 `cat-brand.png`）。
2. 在 GitHub 打開 `assets/` 資料夾 → 右上角「Add file」→「Upload files」→ 拖曳上傳覆蓋 → Commit。
3. 若新圖的長寬比例和舊圖不同，請到 `index.html` 找到對應的 `<img>`，把 `width`、`height` 改成新圖的像素尺寸（避免載入時版面跳動）。
4. 上傳前請先壓縮（例如 [TinyPNG](https://tinypng.com/)），手機載入會快很多。目前 `assets/` 的圖都已用 pngquant 壓縮過（尺寸不變）。

報名表連結 `https://forms.gle/8Fhi1L7nHp1qh5zT6` 出現在 3 個「12 月報名」按鈕上（頁首、主視覺、報名區），換表單時在 `index.html` 搜尋 `forms.gle` 全部替換。

## 如何開啟 GitHub Pages

> 請在 PR 審核、合併到 `main` 之後再進行。

1. 到 repo 的 **Settings** → 左側 **Pages**。
2. **Source** 選「Deploy from a branch」。
3. **Branch** 選 `main`，資料夾選 `/ (root)`，按 **Save**。
4. 等 1～3 分鐘，頁面上方會出現網址 https://tanwanmarket.com/ 。

> 已設定自訂網域 `tanwanmarket.com`（Settings → Pages → Custom domain）。repo 根目錄的 `CNAME` 檔是 GitHub 用來綁定網域的，**不要刪除或修改**。

之後每次合併到 `main`，網站會自動更新（約 1～3 分鐘）。

## 本機預覽

直接雙擊 `index.html` 用瀏覽器打開即可。所有路徑都是相對路徑。

要連 `/cup/` 一起預覽，建議在 repo 根目錄執行 `python3 -m http.server 8000`，再用瀏覽器開 http://localhost:8000/ 和 http://localhost:8000/cup/ 。
