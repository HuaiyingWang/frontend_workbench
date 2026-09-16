const icon = (name, className = "") => `<svg class="${className}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

const projects = [
  { id: "aurora", code: "AU", name: "Aurora 秋季形象網站", client: "Aurora Studio", type: "PHP 官網", status: "製作中", statusClass: "active", revisions: 3, updated: "今天 14:20", tone: "coral" },
  { id: "field", code: "FD", name: "Field Notes 活動頁", client: "島嶼設計節", type: "靜態 HTML", status: "等待資料", statusClass: "waiting", revisions: 1, updated: "昨天 18:42", tone: "blue" },
  { id: "mori", code: "MR", name: "Mori Café 品牌官網", client: "森日咖啡", type: "PHP 官網", status: "修改中", statusClass: "revision", revisions: 5, updated: "09 / 12", tone: "sage" },
  { id: "kinetic", code: "KN", name: "Kinetic 作品集", client: "個人專案", type: "靜態 HTML", status: "製作中", statusClass: "active", revisions: 0, updated: "09 / 10", tone: "blue" },
  { id: "south", code: "ST", name: "South Table 預約頁", client: "南方餐桌", type: "表單頁", status: "待確認", statusClass: "waiting", revisions: 2, updated: "09 / 08", tone: "coral" },
  { id: "archive", code: "24", name: "2024 展覽資料庫", client: "文化基金會", type: "PHP 專案", status: "已交付", statusClass: "done", revisions: 0, updated: "08 / 26", tone: "sage" }
];

const projectConnections = {
  aurora: {
    ftp: "Host: ftp.example.test\nUser: aurora_demo\nPassword: demo-only\nPort: 21\nPath: /public_html/stage",
    database: "Host: db.example.test\nDatabase: aurora_demo\nUser: aurora_db_demo\nPassword: demo-only\nCharset: utf8mb4"
  }
};

const projectContacts = {
  aurora: [
    { id: "contact-1", name: "林怡君", role: "主要窗口", company: "Aurora Studio", phone: "02-2345-6789", email: "yijun@example.test", line: "aurora_yijun", note: "網站內容與視覺確認" },
    { id: "contact-2", name: "陳柏翰", role: "業務", company: "Aurora Studio", phone: "0912-345-678", email: "bohan@example.test", line: "", note: "報價與合約事項" }
  ]
};

const assets = [
  { id: "asset-1", title: "Northline Studio — 品牌形象官網", pageUrl: "https://northline.example.test/", projectId: "aurora", category: "企業官網", preview: "poster", usage: "Hero 編排與大字比例", source: "靈感蒐集", tags: "品牌、編排", note: "參考首頁留白與案例切換節奏。", label: "NORTH" },
  { id: "asset-2", title: "Mellow Objects — 商品敘事", pageUrl: "https://mellow.example.test/", projectId: "mori", category: "電商", preview: "photo", usage: "商品情境與分類導覽", source: "客戶參考", tags: "電商、攝影", note: "保留商品頁段落層級作為提案參考。", label: "" },
  { id: "asset-3", title: "Field Assembly — 活動識別", pageUrl: "https://field.example.test/", projectId: "field", category: "活動頁", preview: "logo", usage: "活動資訊密度", source: "同業案例", tags: "活動、資訊設計", note: "注意手機版時間表的收合方式。", label: "FIELD" },
  { id: "asset-4", title: "Kinetic Type Lab", pageUrl: "https://kinetic.example.test/", projectId: "aurora", category: "互動靈感", preview: "video", usage: "首頁文字動態", source: "動效參考", tags: "GSAP、字體動態", note: "互動只作節奏參考，不直接複製。", label: "" },
  { id: "asset-5", title: "Isle Notes — 展覽專頁", pageUrl: "https://isle.example.test/", projectId: "field", category: "活動頁", preview: "poster", usage: "展覽介紹與分享資訊", source: "靈感蒐集", tags: "文化、活動", note: "參考內容章節與購票入口位置。", label: "ISLE" },
  { id: "asset-6", title: "Sunday Coffee Journal", pageUrl: "https://sunday.example.test/", projectId: "mori", category: "企業官網", preview: "photo", usage: "品牌故事與菜單", source: "客戶參考", tags: "餐飲、Editorial", note: "圖片比例適合 Mori Café 的季節內容。", label: "" },
  { id: "asset-7", title: "Mono Form — Designer Portfolio", pageUrl: "https://monoform.example.test/", projectId: "kinetic", category: "作品集", preview: "logo", usage: "作品索引與案例頁", source: "同業案例", tags: "作品集、極簡", note: "參考鍵盤導覽與案例索引。", label: "MONO" },
  { id: "asset-8", title: "South Table Booking Flow", pageUrl: "https://booking.example.test/", projectId: "south", category: "互動靈感", preview: "video", usage: "訂位流程與回饋狀態", source: "技術研究", tags: "表單、UX", note: "比較分步表單與單頁表單的阻力。", label: "" }
];

const siteCategories = ["企業官網", "活動頁", "電商", "作品集", "互動靈感", "未分類"];
const DEFAULT_PACKAGE_CATEGORIES = ["穩定使用中", "有新版待測", "相容限定", "未分類"];
const DEFAULT_PROMPT_CATEGORIES = ["圖片生成", "圖片編修", "短影片", "程式協助", "文案", "除錯分析", "未分類"];
const packageCategories = [...DEFAULT_PACKAGE_CATEGORIES];
const promptCategories = [...DEFAULT_PROMPT_CATEGORIES];

const tasks = [
  { id: 1, title: "手機版導覽列在 390px 時重疊", projectId: "aurora", project: "Aurora 秋季形象網站", dueDate: "2026-09-14", priority: "high", column: "收件匣", note: "iPhone 13 mini 與 390px 模擬尺寸都會發生。", age: "38 分鐘前", done: false },
  { id: 2, title: "替換首頁 Banner 最終圖片", projectId: "mori", project: "Mori Café 品牌官網", dueDate: "2026-09-14", priority: "high", column: "收件匣", note: "等待客戶提供最後調色版本。", age: "12 分鐘前", done: false },
  { id: 3, title: "確認 Fancybox 與 Bootstrap 5 相容性", projectId: "aurora", project: "Aurora 秋季形象網站", dueDate: "2026-09-15", priority: "medium", column: "待處理", note: "需檢查舊頁面的 data 屬性與關閉事件。", age: "昨天", done: false },
  { id: 4, title: "整理活動頁 OG 圖與分享文案", projectId: "field", project: "Field Notes 活動頁", dueDate: "2026-09-16", priority: "low", column: "待確認", note: "確認 Facebook 與 LINE 分享裁切。", age: "等待回覆", done: false },
  { id: 5, title: "完成表單必填欄位提示", projectId: "south", project: "South Table 預約頁", dueDate: "2026-09-12", priority: "low", column: "待確認", note: "錯誤訊息已補齊並完成檢查。", age: "09 / 12", completedAt: "09 / 12", done: true },
  { id: 6, title: "更新頁尾營業時間", projectId: "mori", project: "Mori Café 品牌官網", dueDate: "2026-09-15", priority: "low", column: "待處理", note: "同步中英文頁面與結構化資料。", age: "昨天", done: false },
  { id: 7, title: "首頁字體載入最佳化", projectId: "aurora", project: "Aurora 秋季形象網站", dueDate: "2026-09-18", priority: "medium", column: "處理中", note: "先保留常用字集並確認 fallback 閃動。", age: "進行 1 小時", done: false },
  { id: 8, title: "整理臨時活動頁連結", projectId: "", project: "先放入收件匣", dueDate: "2026-09-13", priority: "medium", column: "收件匣", note: "尚未決定歸屬專案，先完成並保留這筆處理紀錄。", age: "今天 10:30", completedAt: "今天 10:30", done: true }
];

const packages = [
  { id: "pkg-bootstrap", code: "BS", name: "Bootstrap", note: "版型與元件基礎", version: "5.3.8", latestVersion: "5.3.8", projectIds: ["aurora", "field", "mori", "south"], state: "穩定使用中", sourceUrl: "https://getbootstrap.com/", compatibility: "PHP 專案與靜態頁均可；舊版 data 屬性需轉換。", snippet: "bootstrap.min.css\nbootstrap.bundle.min.js", history: [{ version: "5.3.7", date: "08 / 18", note: "修正表單驗證樣式" }] },
  { id: "pkg-swiper", code: "SW", name: "Swiper", note: "觸控輪播與內容滑動", version: "11.2.10", latestVersion: "12.0.2", projectIds: ["aurora", "field", "mori"], state: "有新版待測", sourceUrl: "https://swiperjs.com/", compatibility: "升級前檢查 modules 引入方式與 loop 行為。", snippet: "new Swiper('.swiper', {\n  loop: true\n});", history: [{ version: "11.1.15", date: "07 / 30", note: "專案共用穩定版" }] },
  { id: "pkg-gsap", code: "GS", name: "GSAP", note: "頁面動態與時間軸", version: "3.13.0", latestVersion: "3.13.0", projectIds: ["aurora", "kinetic"], state: "穩定使用中", sourceUrl: "https://gsap.com/", compatibility: "需提供 prefers-reduced-motion 降級行為。", snippet: "gsap.to('.target', {\n  y: 0, duration: .6\n});", history: [] },
  { id: "pkg-fancybox", code: "FB", name: "Fancybox", note: "圖片與影片燈箱", version: "5.0.36", latestVersion: "5.0.36", projectIds: ["aurora", "field", "mori", "south", "archive"], state: "相容限定", sourceUrl: "https://fancyapps.com/fancybox/", compatibility: "舊站 Fancybox 3 不可直接覆蓋，需同步調整 data-fancybox。", snippet: "Fancybox.bind('[data-fancybox]', {});", history: [{ version: "3.5.7", date: "舊專案", note: "僅保留於歷史站台" }] },
  { id: "pkg-flatpickr", code: "FP", name: "Flatpickr", note: "日期與時間選擇", version: "4.6.13", latestVersion: "4.6.13", projectIds: ["south"], state: "穩定使用中", sourceUrl: "https://flatpickr.js.org/", compatibility: "繁體中文語系需另外載入。", snippet: "flatpickr('.date-field', {\n  locale: 'zh_tw'\n});", history: [] }
];

const prompts = [
  { id: "prompt-product-scene", type: "圖片生成", title: "產品情境主視覺", body: "以 {{product}} 為主體，置於 {{environment}}，維持 {{brand_color}} 的品牌調性，保留可放置標題的留白。", variables: ["product", "environment", "brand_color"], model: "ImageGen", projectIds: ["aurora", "mori"], note: "適合首頁 Hero 與社群分享主圖。", outputUrl: "", updated: "今天", history: [{ version: 1, date: "08 / 28", body: "以 {{product}} 為主體，置於 {{environment}}，維持品牌調性。", note: "初始版本" }] },
  { id: "prompt-cutout", type: "圖片編修", title: "透明背景商品去背", body: "保留原始商品比例與細節，移除背景及反光雜訊，輸出乾淨透明背景 PNG，邊緣不可出現白邊。", variables: ["edge", "shadow"], model: "ImageGen", projectIds: ["mori"], note: "商品圖修整用。", outputUrl: "", updated: "09 / 11", history: [] },
  { id: "prompt-motion", type: "短影片", title: "靜態主視覺微動態", body: "讓畫面中的 {{subject}} 產生自然且微幅的 {{motion}}，鏡頭維持固定，避免形體漂移與新增物件。", variables: ["subject", "motion"], model: "Runway", projectIds: ["aurora", "field"], note: "先生成 5 秒版本確認穩定度。", outputUrl: "https://runwayml.com/", updated: "09 / 10", history: [{ version: 1, date: "08 / 19", body: "讓 {{subject}} 產生自然微動態，鏡頭固定。", note: "補上防漂移限制前" }] },
  { id: "prompt-upgrade", type: "程式協助", title: "舊版套件升級檢查", body: "比較目前使用的 {{library}} 與目標版本 {{version}}，列出 breaking changes、替代 API、影響檔案與逐步修改方式。", variables: ["library", "version"], model: "Codex", projectIds: ["aurora", "archive"], note: "升級前先用這組提示詞整理檢查表。", outputUrl: "", updated: "09 / 09", history: [] },
  { id: "prompt-copy", type: "文案", title: "活動頁短標題組合", body: "依據 {{topic}} 與 {{audience}}，產生簡短、有節奏且不使用浮誇形容詞的主標與副標，各提供五組。", variables: ["topic", "audience"], model: "ChatGPT", projectIds: ["field"], note: "輸出後再人工統一品牌口吻。", outputUrl: "", updated: "09 / 06", history: [] },
  { id: "prompt-debug", type: "除錯分析", title: "前端錯誤最小重現", body: "分析提供的 {{code}} 與 {{symptom}}，先定位可重現條件，再提出影響範圍最小的修正與驗證步驟。", variables: ["symptom", "code"], model: "Codex", projectIds: ["aurora", "south"], note: "避免直接重寫整個模組。", outputUrl: "", updated: "09 / 02", history: [] }
];

const projectNotes = {
  aurora: [
    { id: "note-aurora-nav", title: "手機導覽實作決策", type: "技術決策", body: "手機版導覽維持原生 dialog；視覺檢查完成後，再確認舊版 Safari 的關閉行為與焦點返回。", code: "dialog.showModal();\n// close 後將焦點返回 menu button", sourceUrl: "https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog", pinned: true, updated: "今天 14:20" },
    { id: "note-aurora-hero", title: "主視覺裁切安全區", type: "視覺規格", body: "桌機以中央人物為主；390px 時保留上方標題與右下 CTA 的安全範圍，人物不可超出下緣。", code: "", sourceUrl: "", pinned: false, updated: "09 / 13" },
    { id: "note-aurora-release", title: "上線前環境切換", type: "上線紀錄", body: "正式環境切換前，需再確認表單收件信箱、GA4 ID、canonical 與 staging 的 noindex。", code: "", sourceUrl: "", pinned: false, updated: "09 / 11" }
  ],
  field: [{ id: "note-field-og", title: "分享圖片輸出規格", type: "視覺規格", body: "OG 圖固定輸出 1200 × 630，文字安全區左右各留 80px，另準備 LINE 裁切預覽。", code: "", sourceUrl: "", pinned: true, updated: "昨天" }],
  mori: [], kinetic: [], south: [], archive: []
};

const projectChecklists = {
  aurora: [
    { id: "check-title", title: "所有頁面 title 與 description 已填寫", category: "SEO", note: "同步確認 OG title 與 description。", done: true, updated: "今天" },
    { id: "check-responsive", title: "手機 390px 與平板 768px 版面檢查", category: "響應式", note: "包含橫向溢出、文字斷行與 44px 操作目標。", done: true, updated: "今天" },
    { id: "check-form", title: "表單錯誤與成功狀態", category: "功能", note: "必填、格式錯誤、送出中、成功與失敗訊息。", done: true, updated: "09 / 14" },
    { id: "check-image", title: "圖片格式與檔案大小最佳化", category: "內容", note: "Hero 圖確認 WebP／AVIF 與 fallback。", done: true, updated: "09 / 14" },
    { id: "check-redirect", title: "正式網址與轉址規則", category: "部署", note: "確認 www、HTTPS 與舊網址 301。", done: false, updated: "09 / 13" },
    { id: "check-backup", title: "備份交付檔與套件版本表", category: "部署", note: "壓縮原始檔並輸出套件版本紀錄。", done: false, updated: "09 / 12" }
  ],
  field: [{ id: "check-field-og", title: "OG 圖與分享文字確認", category: "SEO", note: "Facebook 與 LINE 各檢查一次。", done: false, updated: "昨天" }],
  mori: [], kinetic: [], south: [], archive: []
};

const state = { route: "dashboard", filter: "全部", projectTab: "總覽" };
const main = document.querySelector("#mainContent");
const drawer = document.querySelector("#drawer");
const drawerBody = document.querySelector("#drawerBody");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerContext = document.querySelector("#drawerContext");
const scrim = document.querySelector("#scrim");
const toast = document.querySelector("#toast");
let toastTimer;
let drawerReturnFocus = null;
const imageDrafts = new Map();
const fileDrafts = new Map();
const MAX_FORM_IMAGES = 8;
const MAX_FORM_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_FORM_IMAGE_TOTAL_BYTES = 24 * 1024 * 1024;
const MAX_FORM_FILES = 8;
const MAX_FORM_FILE_BYTES = 15 * 1024 * 1024;
const MAX_FORM_FILE_TOTAL_BYTES = 40 * 1024 * 1024;
const WORKBENCH_CACHE_KEY = "studio-ledger-data-v1";
const SYNC_CONFIG_KEY = "studio-ledger-github-config-v1";
const SYNC_TOKEN_KEY = "studio-ledger-github-token-v1";
const MEDIA_DELETE_KEY = "studio-ledger-media-deletes-v1";
const SYNC_PASSPHRASE_KEY = "studio-ledger-passphrase-v1";
let syncPassphrase = "";
let syncBusy = false;
let syncStatus = { tone: "idle", title: "尚未連線", detail: "設定 Private Repository 後即可跨裝置同步。" };
// 最近一次已知的加密連線資訊；尚未用密碼解鎖時上傳沿用這份密文，避免空白資料蓋掉雲端
let connectionsEnvelope = null;
let connectionsUnlocked = false;
let connectionsEdited = false;
let autoPullCheckedAt = 0;
const AUTO_PULL_INTERVAL = 30000; // 切回分頁時最多每 30 秒檢查一次，避免耗用 GitHub API 額度

function readJsonStorage(storage, key, fallback) {
  try { return JSON.parse(storage.getItem(key)) || fallback; } catch { return fallback; }
}

const syncConfig = {
  repo: "",
  branch: "main",
  path: "data/state.json",
  rememberToken: false,
  lastSha: "",
  lastSyncedAt: "",
  emptyRepository: false,
  ...readJsonStorage(localStorage, SYNC_CONFIG_KEY, {})
};
const pendingMediaDeletes = new Set(readJsonStorage(localStorage, MEDIA_DELETE_KEY, []));
syncPassphrase = localStorage.getItem(SYNC_PASSPHRASE_KEY) || ""; // 只有勾選「記住這台裝置」時才會保存

function syncToken() {
  return sessionStorage.getItem(SYNC_TOKEN_KEY) || localStorage.getItem(SYNC_TOKEN_KEY) || "";
}

if (syncConfig.repo && syncToken()) {
  syncStatus = { tone: "ok", title: "GitHub 已設定", detail: syncConfig.lastSyncedAt ? `最近同步：${syncConfig.lastSyncedAt}` : "連線資料已保存在這台裝置。" };
}

function saveSyncConfig() {
  localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(syncConfig));
}

function queueMediaDeletes(media = []) {
  media.filter(item => item.cloudPath).forEach(item => pendingMediaDeletes.add(item.cloudPath));
  localStorage.setItem(MEDIA_DELETE_KEY, JSON.stringify([...pendingMediaDeletes]));
}

function reconcileMediaDeletes() {
  const referenced = new Set([
    ...allImageOwners().flatMap(owner => owner.images.map(image => image.cloudPath).filter(Boolean)),
    ...allFileOwners().flatMap(owner => owner.files.map(file => file.cloudPath).filter(Boolean))
  ]);
  referenced.forEach(path => pendingMediaDeletes.delete(path));
  localStorage.setItem(MEDIA_DELETE_KEY, JSON.stringify([...pendingMediaDeletes]));
}

function todayLabel() {
  return new Intl.DateTimeFormat("zh-TW", { month: "long", day: "numeric", weekday: "long" }).format(new Date());
}

function formatProjectUpdated(value, fallback = "尚無紀錄") {
  const raw = String(value ?? "").trim();
  if (!raw) return fallback;
  if (/^(剛剛|今天|昨天|明天|已匯入|最近更新)/.test(raw)) return raw;

  if (/^\d{10,13}$/.test(raw)) {
    const timestamp = Number(raw) * (raw.length === 10 ? 1000 : 1);
    const date = new Date(timestamp);
    if (!Number.isNaN(date.getTime())) {
      return new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
    }
  }

  const fullDate = raw.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (fullDate) return `${fullDate[1]} / ${fullDate[2].padStart(2, "0")} / ${fullDate[3].padStart(2, "0")}`;

  const shortDate = raw.match(/^(\d{1,2})\s*[/.-]\s*(\d{1,2})$/);
  if (shortDate) return `${shortDate[1].padStart(2, "0")} / ${shortDate[2].padStart(2, "0")}`;
  return raw;
}

/**
 * 交付日期顯示格式：同一年只顯示月日，跨年才補上年份
 * @param {string} value - YYYY-MM-DD，未設定時回傳 fallback
 */
function formatDeliveryDate(value, fallback = "尚未設定") {
  const match = String(value ?? "").trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return fallback;
  const [, year, month, day] = match;
  return Number(year) === new Date().getFullYear() ? `${month} 月 ${day} 日` : `${year} 年 ${month} 月 ${day} 日`;
}

function projectUpdatedTimestamp(project) {
  const raw = String(project?.updated ?? "").trim();
  const now = new Date();
  if (/^剛剛/.test(raw)) return now.getTime();
  if (/^今天/.test(raw)) return now.getTime();
  if (/^昨天/.test(raw)) return now.getTime() - 86400000;
  if (/^\d{10,13}$/.test(raw)) return Number(raw) * (raw.length === 10 ? 1000 : 1);
  const fullDate = raw.match(/^(\d{4})[-/.]\s*(\d{1,2})[-/.]\s*(\d{1,2})/);
  if (fullDate) return new Date(Number(fullDate[1]), Number(fullDate[2]) - 1, Number(fullDate[3])).getTime();
  const shortDate = raw.match(/^(\d{1,2})\s*[/.-]\s*(\d{1,2})$/);
  if (shortDate) {
    let date = new Date(now.getFullYear(), Number(shortDate[1]) - 1, Number(shortDate[2]));
    if (date.getTime() > now.getTime() + 86400000) date = new Date(now.getFullYear() - 1, Number(shortDate[1]) - 1, Number(shortDate[2]));
    return date.getTime();
  }
  return 0;
}

function automaticFocusProject() {
  const unfinished = projects.filter(project => project.statusClass !== "done");
  const candidates = unfinished.length ? unfinished : projects;
  return candidates.map((project, index) => ({ project, index })).sort((a, b) => projectUpdatedTimestamp(b.project) - projectUpdatedTimestamp(a.project) || a.index - b.index)[0]?.project;
}

function currentFocusProject() {
  return projects.find(project => project.isFocus) || automaticFocusProject();
}

const priorityLabels = { high: "高", medium: "一般", low: "低" };
const projectStages = [
  { label: "製作中", className: "active", note: "目前正在設計或開發" },
  { label: "等待資料", className: "waiting", note: "等待客戶提供內容或素材" },
  { label: "修改中", className: "revision", note: "正在處理修改與回饋" },
  { label: "待確認", className: "waiting", note: "已送出，等待客戶確認" },
  { label: "已交付", className: "done", note: "專案已完成並交付" }
];

function formatRevisionDue(date, done = false) {
  if (done) return "已完成";
  if (!date) return "未排期限";
  const today = "2026-09-14";
  if (date === today) return "今天";
  if (date === "2026-09-15") return "明天";
  const [, month, day] = date.split("-");
  return `${month} / ${day}`;
}

function projectTaskCount(projectId) {
  return tasks.filter(task => task.projectId === projectId && !task.done).length;
}

function pageHead(title, description, extra = "") {
  const side = extra ? `<div class="page-side"><span class="prototype-badge">私人工作台</span>${extra}</div>` : `<div class="date-stamp"><span class="prototype-badge">私人工作台</span><span>今天</span><strong>${todayLabel()}</strong></div>`;
  return `<header class="page-head"><div><h1>${title}</h1><p>${description}</p><span class="prototype-badge prototype-inline">私人工作台</span></div>${side}</header>`;
}

function syncStatusMarkup() {
  return `<div class="sync-state sync-state-${syncStatus.tone}" role="status" aria-live="polite"><span class="sync-state-mark">${icon(syncStatus.tone === "ok" ? "check" : syncStatus.tone === "busy" ? "cloud" : syncStatus.tone === "error" ? "close" : "cloud")}</span><span><strong>${escapeHtml(syncStatus.title)}</strong><small>${escapeHtml(syncStatus.detail)}</small></span></div>`;
}

function renderSettings() {
  const connected = Boolean(syncConfig.repo && syncToken());
  const media = imageSyncCounts();
  const documents = fileSyncCounts();
  return `<div class="page settings-page">
    ${pageHead("同步與備份", "用一個只屬於你的 GitHub Private Repository，讓工作台資料安全地跨裝置接續。", `<button class="outline-button" data-export-json>${icon("download")}<span>匯出 JSON 備份</span></button>`)}
    <div class="settings-layout">
      <section class="sync-console">
        <div class="sync-console-head"><div><h2>GitHub 私有同步</h2><p>Token 只留在這台裝置；FTP 與 Database 會先在瀏覽器內加密。</p></div><span class="connection-led ${connected ? "is-on" : ""}">${connected ? "已設定" : "未設定"}</span></div>
        <div id="syncStatusRegion">${syncStatusMarkup()}</div>
        <form class="sync-form" data-sync-config-form>
          <div class="form-grid">
            <div class="form-field"><label for="syncRepo">Private Repository</label><input id="syncRepo" name="repo" required value="${escapeHtml(syncConfig.repo)}" placeholder="帳號/frontend_workbench_data" autocomplete="off" spellcheck="false"><small>格式為 owner/repository；建立新 Repository 時請勾選 Add a README file。</small></div>
            <div class="form-field"><label for="syncBranch">Branch</label><input id="syncBranch" name="branch" required value="${escapeHtml(syncConfig.branch)}" placeholder="main" autocomplete="off" spellcheck="false"><small>測試連線時會自動改成 Repository 的預設分支。</small></div>
          </div>
          <div class="form-field"><label for="syncPath">JSON 儲存路徑</label><input id="syncPath" name="path" required value="${escapeHtml(syncConfig.path)}" placeholder="data/state.json" autocomplete="off" spellcheck="false"></div>
          <div class="form-field"><label for="syncToken">Fine-grained Token</label><div class="secret-input"><input id="syncToken" name="token" type="password" required value="${escapeHtml(syncToken())}" placeholder="github_pat_..." autocomplete="off" spellcheck="false"><button type="button" data-toggle-secret="syncToken" aria-label="顯示或隱藏 Token">顯示</button></div><small>只授權這個 Repository 的 Contents：Read and write。請勿貼到聊天或寫進程式碼。</small></div>
          <label class="sync-choice"><input name="rememberToken" type="checkbox" ${syncConfig.rememberToken ? "checked" : ""}><span><strong>記住這台裝置</strong><small>私人電腦可勾選：這個瀏覽器會記住 Token 與解密密碼，開啟時自動同步。公共或共用裝置請保持關閉，關閉分頁後即失效。</small></span></label>
          <div class="form-field"><label for="syncPassphrase">工作台解密密碼</label><div class="secret-input"><input id="syncPassphrase" name="passphrase" type="password" required value="${escapeHtml(syncPassphrase)}" minlength="10" placeholder="至少 10 個字元" autocomplete="new-password"><button type="button" data-toggle-secret="syncPassphrase" aria-label="顯示或隱藏解密密碼">顯示</button></div><small>不會傳送到 GitHub；只有勾選「記住這台裝置」時才保存在這個瀏覽器。換裝置時需輸入同一組密碼；忘記後無法還原敏感資料。</small></div>
          <div class="sync-form-actions"><button class="primary-button sync-connect" aria-label="${connected ? "重新測試 GitHub 連線" : "儲存並測試 GitHub 連線"}" ${syncBusy ? "disabled" : ""}>${icon("cloud")}<span>${connected ? "重新測試連線" : "儲存並測試連線"}</span></button>${connected ? `<button type="button" class="text-button" data-sync-disconnect>清除此裝置的連線</button>` : ""}</div>
        </form>
        <div class="sync-actions" aria-label="同步操作">
          <button class="sync-action" data-sync-pull ${connected && !syncBusy ? "" : "disabled"}><span>${icon("download")}</span><strong>從 GitHub 下載</strong><small>以雲端資料更新這台裝置</small></button>
          <button class="sync-action is-primary" data-sync-push ${connected && !syncBusy ? "" : "disabled"}><span>${icon("upload")}</span><strong>上傳目前資料</strong><small>加密後寫入 Private Repository</small></button>
        </div>
        <p class="sync-footnote">最後同步：${escapeHtml(syncConfig.lastSyncedAt || "尚未同步")} · ${media.total ? `${media.cloud} 張圖片已在雲端，${media.pending} 張等待上傳` : "沒有待同步圖片"}；${documents.total ? `${documents.cloud} 個文件已在雲端，${documents.pending} 個等待上傳` : "沒有待同步文件"}。</p>
      </section>
      <aside class="backup-panel">
        <div class="sync-security-note">${icon("lock")}<div><h2>資料保護方式</h2><p>Repository 只會看到密文。工作台解鎖後，仍可正常查看與複製 FTP、Database 原始內容。</p></div></div>
        <div class="backup-ledger"><div><span>同步內容</span><strong>專案、修改、網站、套件、提示詞、筆記、圖片與附件</strong></div><div><span>敏感內容</span><strong>瀏覽器 AES-GCM 加密</strong></div><div><span>衝突保護</span><strong>偵測 GitHub 檔案版本</strong></div><div><span>圖片檔案</span><strong>${media.total ? `${media.cloud} / ${media.total} 張已同步` : "WebP 壓縮後獨立保存"}</strong></div><div><span>附件文件</span><strong>${documents.total ? `${documents.cloud} / ${documents.total} 個已同步` : "原始格式獨立保存"}</strong></div></div>
        <div class="portable-backup"><h2>JSON 攜帶式備份</h2><p>可匯入工作台備份、舊版 project-desk，以及收藏收件匣完整備份。私人內容只會進入你的資料庫。</p><div><button class="outline-button" data-export-json>${icon("download")}匯出備份</button><button class="outline-button" data-import-json>${icon("upload")}匯入 JSON</button><input type="file" id="jsonImportInput" accept="application/json,.json" hidden></div></div>
      </aside>
    </div>
  </div>`;
}

function renderDashboard() {
  const openTasks = tasks.filter(task => !task.done).length;
  const manualFocus = projects.find(project => project.isFocus);
  const focusProject = manualFocus || automaticFocusProject();
  const focusTask = tasks.find(task => !task.done && task.projectId === focusProject?.id);
  return `<div class="page">
    ${pageHead("下午好，回到工作現場。", "對準眼前的交付目標！剩下的，時間到了再看。")}
    <section class="focus-strip" aria-label="今日焦點">
      <div class="focus-primary">
        <button class="focus-project-link" ${focusProject ? `data-project="${escapeHtml(focusProject.id)}"` : "data-route=projects"} aria-label="${focusProject ? `繼續 ${escapeHtml(focusProject.name)}` : "查看專案"}">
          <span class="focus-label">目前焦點 <small>${manualFocus ? "手動指定" : "自動 · 最近更新"}</small></span>
          <span class="focus-heading">${escapeHtml(focusTask?.title || focusProject?.name || "建立第一個專案，開始整理工作內容。")}</span>
          <span class="focus-meta"><span class="status-dot"></span><span>${focusProject ? `${escapeHtml(focusProject.status)} · ${escapeHtml(formatProjectUpdated(focusProject.updated, "最近更新"))}` : "目前沒有進行中專案"}</span></span>
        </button>
        <button class="focus-switch" data-action="choose-focus">${icon("edit")}<span>切換焦點</span></button>
      </div>
      <div class="focus-cell"><span>待處理修改</span><strong>${String(openTasks).padStart(2, "0")}</strong><small>${tasks.filter(task => !task.done && task.priority === "high").length} 件高優先</small></div>
      <div class="focus-cell"><span>進行中專案</span><strong>${String(projects.filter(project => project.statusClass !== "done").length).padStart(2, "0")}</strong><small>${projects.filter(project => project.statusClass === "waiting").length} 件等待確認</small></div>
    </section>

    <div class="dashboard-grid">
      <section class="section">
        <div class="section-head"><h2>下一步</h2><button class="text-button" data-route="inbox">查看全部 ${icon("arrow")}</button></div>
        <div class="task-list">${tasks.filter(task => !task.done).map(taskRow).join("")}</div>
      </section>

      <aside class="section">
        <div class="section-head"><h2>最近開啟</h2><span class="meta">依使用時間</span></div>
        <div class="project-stack">${projects.slice(0, 3).map(projectLine).join("")}</div>
        <div class="resource-row">
          <button class="resource-tile" data-route="assets">${icon("image")}<strong>網站收藏</strong><small>${assets.length} 個網站</small></button>
          <button class="resource-tile" data-route="packages">${icon("package")}<strong>套件庫</strong><small>${packages.length} 個套件</small></button>
          <button class="resource-tile" data-route="prompts">${icon("spark")}<strong>提示詞</strong><small>${prompts.reduce((total, prompt) => total + 1 + (prompt.history?.length || 0), 0)} 組版本</small></button>
        </div>
      </aside>
    </div>
  </div>`;
}

function taskRow(task, managed = false) {
  const due = formatRevisionDue(task.dueDate, task.done);
  return `<article class="task-row ${task.done ? "is-done" : ""}" data-task="${task.id}">
    <button class="task-check" aria-label="${task.done ? "標示為未完成" : "標示為完成"}" aria-pressed="${task.done}">${icon("check")}</button>
    <div><span class="task-title">${escapeHtml(task.title)}</span><span class="task-project">${escapeHtml(task.project)}${task.images?.length ? `<span class="task-attachment">${icon("image")}${task.images.length} 張</span>` : ""}</span></div>
    <div class="task-side"><span class="priority ${task.priority}" role="img" aria-label="${priorityLabels[task.priority]}優先級"></span><span class="due ${due === "今天" ? "is-hot" : ""}">${due}</span>${managed ? `<button class="task-inline-action" data-revision-edit="${task.id}">修改</button>` : ""}</div>
  </article>`;
}

function projectLine(project) {
  return `<button class="project-line" data-project="${project.id}">
    <span class="project-thumb ${project.tone}">${project.code}</span>
    <span><span class="project-line-title">${project.name}</span><span class="project-line-meta">${project.status} · ${escapeHtml(formatProjectUpdated(project.updated))}</span></span>
    ${icon("arrow", "arrow")}
  </button>`;
}

function renderProjects() {
  const filtered = state.filter === "全部" ? projects : projects.filter(p => p.status === state.filter);
  return `<div class="page">
    ${pageHead("專案", "從最近的製作狀態切入，保留每個網站的素材、修改與技術脈絡。", `<button class="primary-button" data-action="new-project">${icon("plus")}<span>建立專案</span></button>`)}
    <div class="toolbar">
      <div class="toolbar-group" aria-label="專案篩選">${["全部", "製作中", "等待資料", "修改中", "已交付"].map(label => `<button class="filter-chip ${state.filter === label ? "is-active" : ""}" data-filter="${label}">${label}</button>`).join("")}</div>
      <input class="small-search" id="projectSearch" type="search" placeholder="搜尋專案或客戶" aria-label="搜尋專案或客戶">
    </div>
    <section class="project-table" aria-label="專案列表">
      <div class="table-head"><span>專案</span><span>狀態</span><span>修改</span><span>類型</span><span>最後更新</span><span></span></div>
      <div id="projectRows">${filtered.map(projectTableRow).join("") || emptyState("folder", "沒有符合的專案", "試著改用其他篩選條件。")}</div>
      <div class="empty-state" id="projectSearchEmpty" hidden>${icon("search")}<h2>找不到專案</h2><p>換個專案名稱或客戶關鍵字。</p></div>
    </section>
  </div>`;
}

function projectTableRow(project) {
  return `<button class="project-table-row" data-project="${project.id}" data-search="${project.name} ${project.client}">
    <span class="project-name-cell"><span class="project-mini">${project.code}</span><span><strong>${project.name}</strong><small>${project.client}</small></span></span>
    <span class="table-cell"><span class="status ${project.statusClass}">${project.status}</span></span>
    <span class="table-cell"><strong>${String(projectTaskCount(project.id)).padStart(2, "0")}</strong> 件</span>
    <span class="table-cell">${project.type}</span>
    <span class="table-cell">${escapeHtml(formatProjectUpdated(project.updated))}</span>
    <span class="icon-button" aria-hidden="true">${icon("arrow")}</span>
  </button>`;
}

function renderProjectDetail(project) {
  const tabs = ["總覽", "聯絡窗口", "修改事項", "素材", "套件", "AI 提示詞", "專案筆記", "交付檢查"];
  return `<div class="page">
    <header class="detail-head">
      <div>
        <div class="breadcrumb"><button data-route="projects">專案</button><span>/</span><span>${project.client}</span></div>
        <div class="detail-title"><span class="project-mini">${project.code}</span><h1>${project.name}</h1></div>
      </div>
      <div class="detail-actions"><button class="outline-button" data-copy="${escapeHtml(project.path || `C:/Projects/${project.id}`)}">${icon("copy")}複製專案路徑</button><button class="primary-button" data-action="capture">${icon("plus")}新增修改</button></div>
    </header>
    <nav class="project-tabs" aria-label="專案內容">${tabs.map(tab => `<button class="project-tab ${state.projectTab === tab ? "is-active" : ""}" data-tab="${tab}">${tab}</button>`).join("")}</nav>
    <div id="projectTabContent">${renderProjectTab(project)}</div>
  </div>`;
}

function renderProjectTab(project) {
  if (state.projectTab === "聯絡窗口") return renderContactTab(project);
  if (state.projectTab === "修改事項") return renderRevisionTab(project);
  if (state.projectTab === "專案筆記") return renderNotesTab(project);
  if (state.projectTab === "交付檢查") return renderChecklistTab(project);
  if (state.projectTab === "素材") {
    const projectAssets = assets.filter(asset => asset.projectId === project.id);
    return `<section class="section"><div class="section-head"><div><h2>專案參考網站</h2><span class="meta">${projectAssets.length} 個收藏 · 原型假資料</span></div><button class="primary-button" data-action="upload">${icon("plus")}收藏網站</button></div>${projectAssets.length ? `<div class="asset-grid">${projectAssets.map(assetCard).join("")}</div>` : `<div class="empty-state">${icon("image")}<h2>還沒有參考網站</h2><p>收藏與這個專案相關的官網、活動頁或互動案例。</p><button class="primary-button" data-action="upload">${icon("plus")}收藏第一個網站</button></div>`}</section>`;
  }
  if (state.projectTab === "套件") {
    const projectPackages = packages.filter(pkg => pkg.projectIds.includes(project.id));
    return `<section class="section"><div class="section-head"><h2>此專案使用中的套件</h2><span class="meta">${projectPackages.length} 個套件 · 原型假資料</span></div>${projectPackages.length ? `<div class="package-list">${projectPackages.map(packageRow).join("")}</div>` : `<div class="empty-state">${icon("package")}<h2>尚未登記套件</h2><p>從套件庫編輯關聯專案後，版本資料會顯示在這裡。</p></div>`}</section>`;
  }
  if (state.projectTab === "AI 提示詞") {
    const projectPrompts = prompts.filter(prompt => prompt.projectIds.includes(project.id));
    return `<section class="section"><div class="section-head"><div><h2>這個專案使用過的提示詞</h2><span class="meta">${projectPrompts.length} 組 · 與提示詞庫同步</span></div><button class="primary-button" data-action="new-prompt">${icon("plus")}新增提示詞</button></div>${projectPrompts.length ? `<div class="prompt-grid">${projectPrompts.map(promptCard).join("")}</div>` : `<div class="empty-state">${icon("spark")}<h2>尚未關聯提示詞</h2><p>新增提示詞或從提示詞庫修改專案關聯後，就會顯示在這裡。</p><button class="primary-button" data-action="new-prompt">${icon("plus")}新增第一組提示詞</button></div>`}</section>`;
  }
  return `<div class="detail-grid">
    <div>
      <section class="project-summary">
        <button class="summary-cell project-stage-trigger" data-action="edit-project-stage" aria-label="修改目前階段：${escapeHtml(project.status)}"><span>目前階段</span><strong><span class="status ${project.statusClass}">${escapeHtml(project.status)}</span></strong><small>點擊修改</small></button>
        <div class="summary-cell"><span>待處理修改</span><strong>${projectTaskCount(project.id)} 件</strong></div>
        <button class="summary-cell project-stage-trigger" data-action="edit-project-due" aria-label="修改交付日期：${escapeHtml(formatDeliveryDate(project.deliveryDate))}"><span>下次交付</span><strong>${escapeHtml(formatDeliveryDate(project.deliveryDate))}</strong><small>點擊修改</small></button>
      </section>
      ${renderProjectImages(project)}
      <section class="section" style="margin-top:28px">
        <div class="section-head"><h2>最近修改</h2><button class="text-button" data-action="capture">新增修改 ${icon("plus")}</button></div>
        <div class="task-list">${tasks.filter(t => t.projectId === project.id).slice(0, 3).map(taskRow).join("") || `<div class="empty-state"><h2>目前沒有修改事項</h2><p>新的需求可以先快速投入收件匣，再回來補齊細節。</p></div>`}</div>
      </section>
      ${renderOverviewNote(project)}
    </div>
    <aside>
      ${renderContactSummary(project)}
      <div class="section-head"><div><h2>環境與存取</h2><span class="meta">點擊資訊框即可複製</span></div><button class="text-button" data-action="edit-connection">${projectConnections[project.id] ? "修改資訊" : "新增資訊"} ${icon("arrow")}</button></div>
      ${renderConnectionPanel(project)}
      <section class="project-utility-group">
        <div class="section-head"><div><h2>專案入口</h2><span class="meta">快速開啟與複製</span></div><button class="text-button" data-action="edit-project-entry">${project.domain || project.testUrl || project.adminUrl || project.path ? "修改資訊" : "新增資訊"} ${icon("arrow")}</button></div>
        <div class="project-entry-list">${projectEntryRows(project)}</div>
      </section>
      <section class="project-utility-group project-stack-group">
        <div class="section-head"><h2>技術組合</h2><button class="text-button" data-tab="套件">管理 ${icon("arrow")}</button></div>
        <div class="project-package-stack">${packages.filter(pkg => pkg.projectIds.includes(project.id)).slice(0, 4).map(pkg => `<button class="project-package-row" data-package="${pkg.id}"><span class="package-mark">${escapeHtml(pkg.code)}</span><span class="utility-main"><strong>${escapeHtml(pkg.name)}</strong><small>${escapeHtml(pkg.note)}</small></span><span class="package-utility-version"><strong>v${escapeHtml(pkg.version)}</strong><small class="${pkg.latestVersion !== pkg.version ? "has-update" : ""}">${pkg.latestVersion !== pkg.version ? `新版 ${escapeHtml(pkg.latestVersion)}` : "穩定"}</small></span>${icon("arrow", "utility-arrow")}</button>`).join("") || `<div class="connection-empty"><strong>尚未登記套件</strong><span>從專案套件頁加入使用中的技術組合。</span></div>`}</div>
      </section>
    </aside>
  </div>`;
}

function projectEntryRows(project) {
  const rows = [];
  const entries = [["正式網站", project.domain], ["測試站", project.testUrl], ["後台入口", project.adminUrl]];
  entries.filter(([, value]) => value).forEach(([label, value]) => rows.push(`<button class="project-entry-row" data-open-url="${escapeHtml(value)}"><span class="utility-icon">${icon("link")}</span><span class="utility-main"><strong>${label}</strong><small>${escapeHtml(value)}</small></span><span class="utility-action">開啟${icon("external")}</span></button>`));
  if (project.path) rows.push(`<button class="project-entry-row" data-copy="${escapeHtml(project.path)}"><span class="utility-icon">${icon("folder")}</span><span class="utility-main"><strong>本機資料夾</strong><small>${escapeHtml(project.path)}</small></span><span class="utility-action">複製${icon("copy")}</span></button>`);
  return rows.join("") || `<div class="connection-empty"><strong>尚未加入專案入口</strong><span>正式網址、測試站與本機路徑可在專案資料中補上。</span></div>`;
}

function renderProjectImages(project) {
  const images = project.images || [];
  if (!images.length) return "";
  return `<section class="section project-image-section"><div class="section-head"><div><h2>專案圖片</h2><span class="meta">${images.length} 張 · ${images.filter(image => image.cloudPath).length} 張已同步</span></div></div><div class="project-image-grid">${images.map(image => `<figure>${image.dataUrl ? `<img src="${escapeHtml(image.dataUrl)}" alt="${escapeHtml(image.name)}">` : `<span class="cloud-image-loading">${icon("cloud")}<small>讀取雲端圖片</small></span>`}<figcaption><span>${escapeHtml(image.name)}</span><small>${formatFileSize(image.size)}</small></figcaption></figure>`).join("")}</div></section>`;
}

function renderContactSummary(project) {
  const contacts = projectContacts[project.id] || [];
  const primary = contacts.find(contact => contact.role === "主要窗口") || contacts[0];
  return `<div class="section-head"><h2>業務與窗口</h2><button class="text-button" data-tab="聯絡窗口">管理 ${icon("arrow")}</button></div>
    ${primary ? `<div class="contact-summary"><span class="contact-avatar">${escapeHtml(primary.name.slice(-2))}</span><span><strong>${escapeHtml(primary.name)}</strong><small>${escapeHtml(primary.role)} · ${escapeHtml(primary.company)}</small></span><button class="icon-button" ${primary.email ? `data-copy="${escapeHtml(primary.email)}" aria-label="複製 ${escapeHtml(primary.name)} 的 Email"` : `disabled aria-label="${escapeHtml(primary.name)} 未填 Email"`}>${icon("copy")}</button></div>` : `<div class="connection-empty"><strong>尚未加入聯絡窗口</strong><span>新增業務或專案窗口，聯絡資訊就會出現在總覽。</span><button class="text-button" data-action="add-contact">新增窗口 ${icon("arrow")}</button></div>`}`;
}

function renderContactTab(project) {
  const contacts = projectContacts[project.id] || [];
  return `<section class="section contact-section">
    <div class="section-head"><div><h2>業務與聯絡窗口</h2><span class="meta">${contacts.length} 位 · 原型假資料</span></div><button class="primary-button" data-action="add-contact">${icon("plus")}新增窗口</button></div>
    ${contacts.length ? `<div class="contact-list">${contacts.map(contact => `<article class="contact-row">
      <span class="contact-avatar">${escapeHtml(contact.name.slice(-2))}</span>
      <div class="contact-identity"><strong>${escapeHtml(contact.name)}</strong><span>${escapeHtml(contact.role)} · ${escapeHtml(contact.company)}</span><small>${escapeHtml(contact.note || "尚未加入備註")}</small></div>
      <div class="contact-channel"><button ${contact.phone ? `data-copy="${escapeHtml(contact.phone)}" aria-label="複製 ${escapeHtml(contact.name)} 的電話"` : "disabled"}>${icon("copy")}<span>${escapeHtml(contact.phone || "未填電話")}</span></button><button ${contact.email ? `data-copy="${escapeHtml(contact.email)}" aria-label="複製 ${escapeHtml(contact.name)} 的 Email"` : "disabled"}>${icon("copy")}<span>${escapeHtml(contact.email || "未填 Email")}</span></button></div>
      <div class="contact-actions"><button class="outline-button" data-contact-edit="${contact.id}">修改</button><button class="contact-delete" data-contact-delete="${contact.id}">刪除</button></div>
    </article>`).join("")}</div>` : `<div class="empty-state">${icon("list")}<h2>還沒有聯絡窗口</h2><p>先加入負責業務或日常確認的窗口，之後就能在專案總覽快速聯絡。</p><button class="primary-button" data-action="add-contact">${icon("plus")}新增第一位窗口</button></div>`}
  </section>`;
}

function renderRevisionTab(project) {
  const projectTasks = tasks.filter(task => task.projectId === project.id);
  const openCount = projectTasks.filter(task => !task.done).length;
  const doneCount = projectTasks.length - openCount;
  return `<section class="section revision-section">
    <div class="section-head revision-section-head"><div><h2>修改事項</h2><span class="meta">${openCount} 件待處理 · ${doneCount} 件完成 · 原型假資料</span></div><button class="primary-button" data-action="capture">${icon("plus")}新增修改</button></div>
    ${projectTasks.length ? `<div class="revision-ledger">${projectTasks.map(task => `<article class="revision-row ${task.done ? "is-done" : ""}" data-task="${task.id}">
      <button class="task-check" aria-label="${task.done ? "標示為未完成" : "標示為完成"}" aria-pressed="${task.done}">${icon("check")}</button>
      <button class="revision-main" data-revision-edit="${task.id}"><strong>${escapeHtml(task.title)}</strong><span>${escapeHtml(task.note || "尚未加入處理備註")}${task.images?.length ? `<em class="revision-image-count">${icon("image")}${task.images.length} 張圖片</em>` : ""}</span></button>
      <div class="revision-state"><span class="revision-stage stage-${task.done ? "done" : task.column === "收件匣" ? "inbox" : task.column === "處理中" ? "working" : task.column === "待確認" ? "review" : "todo"}">${task.done ? "完成" : escapeHtml(task.column)}</span><small><span class="priority ${task.priority}" role="img" aria-label="${priorityLabels[task.priority]}優先級"></span>${priorityLabels[task.priority]} · ${formatRevisionDue(task.dueDate, task.done)}</small></div>
      <div class="revision-actions"><button class="outline-button" data-revision-edit="${task.id}">修改</button><button class="revision-delete" data-revision-delete="${task.id}">刪除</button></div>
    </article>`).join("")}</div>` : `<div class="empty-state">${icon("list")}<h2>還沒有修改事項</h2><p>先記下第一筆調整需求，之後可補上期限、優先級與處理階段。</p><button class="primary-button" data-action="capture">${icon("plus")}新增第一筆修改</button></div>`}
  </section>`;
}

function projectNoteList(projectId) {
  return projectNotes[projectId] || (projectNotes[projectId] = []);
}

function noteRow(note) {
  return `<article class="project-note-row" data-note-row data-note-search="${escapeHtml(`${note.title} ${note.type} ${note.body}`)}"><button class="project-note-open" data-note="${note.id}"><span class="note-pin ${note.pinned ? "is-pinned" : ""}">${icon("bolt")}</span><span class="project-note-main"><span><strong>${escapeHtml(note.title)}</strong><span class="note-type">${escapeHtml(note.type)}</span></span><small>${escapeHtml(note.body)}</small></span><span class="project-note-meta">${note.code ? `<span>含程式碼</span>` : ""}<time>${escapeHtml(note.updated)}</time></span></button><div class="project-note-actions"><button data-note-pin="${note.id}" aria-label="${note.pinned ? "取消置頂" : "置頂"} ${escapeHtml(note.title)}">${note.pinned ? "取消置頂" : "置頂"}</button><button data-note-edit="${note.id}">修改</button><button class="note-delete" data-note-delete="${note.id}">刪除</button></div></article>`;
}

function renderNotesTab(project) {
  const notes = [...projectNoteList(project.id)].sort((a, b) => Number(b.pinned) - Number(a.pinned));
  const lastUpdated = notes[0]?.updated || "尚無紀錄";
  return `<section class="section notes-section"><div class="section-head"><div><h2>專案筆記</h2><span class="meta">${notes.length} 筆 · 最近更新 ${escapeHtml(lastUpdated)}</span></div><button class="primary-button" data-action="add-note">${icon("plus")}新增筆記</button></div>${notes.length ? `<div class="note-toolbar"><div class="toolbar-group">${["全部", "技術決策", "視覺規格", "上線紀錄", "一般筆記"].map((type, index) => `<button class="filter-chip ${index === 0 ? "is-active" : ""}" data-note-filter="${type}">${type}</button>`).join("")}</div><input class="small-search" data-note-search-input type="search" placeholder="搜尋筆記內容" aria-label="搜尋專案筆記"></div><div class="project-note-list" data-note-list>${notes.map(noteRow).join("")}<div class="empty-state note-filter-empty" hidden><h2>找不到筆記</h2><p>換個類型或關鍵字。</p></div></div>` : `<div class="empty-state">${icon("list")}<h2>還沒有專案筆記</h2><p>先記下第一個技術決策、視覺規格或上線注意事項。</p><button class="primary-button" data-action="add-note">${icon("plus")}新增第一筆筆記</button></div>`}</section>`;
}

function renderOverviewNote(project) {
  const notes = [...projectNoteList(project.id)].sort((a, b) => Number(b.pinned) - Number(a.pinned));
  const note = notes[0];
  if (!note) return `<div class="note-block note-overview-empty"><h3>工作筆記</h3><p>尚未加入筆記。記下技術決策與交付注意事項，下一次回來更快接續。</p><button class="text-button" data-action="add-note">新增筆記 ${icon("arrow")}</button></div>`;
  return `<button class="note-block note-overview" data-note="${note.id}"><span><span class="note-type">${note.pinned ? "置頂 · " : ""}${escapeHtml(note.type)}</span><time>${escapeHtml(note.updated)}</time></span><h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.body)}</p><span class="text-button">查看完整筆記 ${icon("arrow")}</span></button>`;
}

function projectChecklist(projectId) {
  return projectChecklists[projectId] || (projectChecklists[projectId] = []);
}

function checklistRow(item) {
  return `<article class="delivery-row ${item.done ? "is-done" : ""}" data-check-row data-check-state="${item.done ? "已完成" : "待完成"}" data-check-search="${escapeHtml(`${item.title} ${item.category} ${item.note}`)}"><button class="delivery-check" data-check-toggle="${item.id}" aria-label="${item.done ? "重新開啟" : "標示完成"} ${escapeHtml(item.title)}" aria-pressed="${item.done}">${icon("check")}</button><button class="delivery-main" data-check-edit="${item.id}"><span><span class="delivery-category">${escapeHtml(item.category)}</span><time>${escapeHtml(item.updated)}</time></span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.note || "尚未加入檢查說明")}</small></button><span class="delivery-state">${item.done ? "已完成" : "待完成"}</span><div class="delivery-actions"><button class="outline-button" data-check-edit="${item.id}">修改</button><button class="delivery-delete" data-check-delete="${item.id}">刪除</button></div></article>`;
}

function renderChecklistTab(project) {
  const items = projectChecklist(project.id);
  const doneCount = items.filter(item => item.done).length;
  const remaining = items.length - doneCount;
  const percent = items.length ? Math.round(doneCount / items.length * 100) : 0;
  const ordered = [...items].sort((a, b) => Number(a.done) - Number(b.done));
  return `<section class="section delivery-section"><div class="section-head"><div><h2>交付前檢查</h2><span class="meta">${remaining ? `${remaining} 項尚未完成` : items.length ? "已完成全部檢查" : "尚未建立清單"} · 原型假資料</span></div><button class="primary-button" data-action="add-check">${icon("plus")}新增項目</button></div>${items.length ? `<div class="delivery-progress"><div><span>交付完成度</span><strong>${percent}%</strong></div><div class="delivery-progress-track" role="progressbar" aria-label="交付完成度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="width:${percent}%"></span></div><small>${doneCount} / ${items.length} 已完成</small></div><div class="note-toolbar delivery-toolbar"><div class="toolbar-group">${["全部", "待完成", "已完成"].map((label, index) => `<button class="filter-chip ${index === 0 ? "is-active" : ""}" data-check-filter="${label}">${label}</button>`).join("")}</div><input class="small-search" data-check-search-input type="search" placeholder="搜尋交付項目" aria-label="搜尋交付項目"></div><div class="delivery-list" data-check-list>${ordered.map(checklistRow).join("")}<div class="empty-state delivery-filter-empty" hidden><h2>找不到交付項目</h2><p>換個狀態或關鍵字。</p></div></div>` : `<div class="empty-state">${icon("check")}<h2>還沒有交付清單</h2><p>加入第一個 SEO、響應式、功能或部署檢查，避免交付前遺漏。</p><button class="primary-button" data-action="add-check">${icon("plus")}新增第一個檢查</button></div>`}</section>`;
}

function renderConnectionPanel(project) {
  const connection = projectConnections[project.id];
  if (!connection) return `<div class="connection-empty"><strong>尚未填入連線資訊</strong><span>${connectionsEnvelope && !connectionsUnlocked ? "雲端的連線資訊已加密，請到「同步與備份」輸入解密密碼並下載後顯示。" : "建立或編輯專案後，FTP 與 Database 會顯示在這裡。"}</span><button class="text-button" data-action="edit-connection">加入資訊 ${icon("arrow")}</button></div>`;
  return `<div class="connection-panel">
    <button class="connection-field" data-connection-copy="ftp" aria-label="複製 FTP 連線資訊">
      <span class="connection-field-head"><strong>FTP</strong><span>${icon("copy")}點擊複製</span></span>
      <code>${escapeHtml(connection.ftp || "尚未填入 FTP 資訊")}</code>
    </button>
    <button class="connection-field" data-connection-copy="database" aria-label="複製 Database 連線資訊">
      <span class="connection-field-head"><strong>DATABASE</strong><span>${icon("copy")}點擊複製</span></span>
      <code>${escapeHtml(connection.database || "尚未填入 Database 資訊")}</code>
    </button>
    <p class="security-note">FTP 與 Database 會在瀏覽器內加密後，再隨「上傳目前資料」同步到 Private Repository。</p>
  </div>`;
}

function assetProjectName(asset) {
  return projects.find(project => project.id === asset.projectId)?.name || "未指定專案";
}

function assetTitle(asset) {
  return asset.title || asset.name || "未命名網站";
}

function assetDomain(asset) {
  try { return new URL(asset.pageUrl).hostname.replace(/^www\./, ""); }
  catch { return "尚未保存網址"; }
}

function normalizeHttpUrl(value) {
  if (!value?.trim()) return "";
  try {
    const url = new URL(value.trim());
    return ["http:", "https:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function normalizeAssetImage(value) {
  const source = String(value || "").trim();
  if (/^data:image\/(?:jpeg|png|webp|gif);/i.test(source)) return source;
  return normalizeHttpUrl(source);
}

function resolvePreviewUrl(value, baseUrl) {
  if (!value) return "";
  try {
    const url = new URL(value.trim(), baseUrl);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function extractPreviewFromHtml(html, pageUrl) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const pageTitle = doc.querySelector('meta[property="og:title"]')?.content?.trim() || doc.title.trim();
  const selectors = [
    'meta[property="og:image:secure_url"]',
    'meta[property="og:image"]',
    'meta[name="twitter:image"]',
    'meta[property="twitter:image"]',
    'link[rel="image_src"]'
  ];
  for (const selector of selectors) {
    const node = doc.querySelector(selector);
    const candidate = resolvePreviewUrl(node?.content || node?.href, pageUrl);
    if (candidate) return { imageUrl: candidate, title: pageTitle, source: selector.includes("twitter") ? "Twitter Card" : selector.startsWith("link") ? "頁面代表圖" : "Open Graph" };
  }
  const firstImage = [...doc.images].find(image => {
    const width = Number(image.getAttribute("width") || 0);
    const height = Number(image.getAttribute("height") || 0);
    return !image.hidden && (!width || width >= 240) && (!height || height >= 120);
  });
  const imageUrl = resolvePreviewUrl(firstImage?.getAttribute("src"), pageUrl);
  return imageUrl ? { imageUrl, title: pageTitle, source: "頁面首張圖片" } : null;
}

async function requestLinkPreview(pageUrl) {
  const endpoint = `api/link-preview.php?url=${encodeURIComponent(pageUrl)}`;
  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    const contentType = response.headers.get("content-type") || "";
    if (response.ok && contentType.includes("application/json")) {
      const result = await response.json();
      if (result.ok && result.imageUrl) return result;
      throw new Error(result.message || "這個頁面找不到可用的預覽圖。");
    }
  } catch (error) {
    if (error.message && !/fetch|json/i.test(error.message)) throw error;
  }

  // GitHub Pages cannot run PHP, so its static build falls back to Microlink metadata.
  try {
    const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(pageUrl)}`, { headers: { Accept: "application/json" } });
    const result = await response.json();
    const imageUrl = result?.data?.image?.url || result?.data?.logo?.url;
    if (response.ok && result?.status === "success" && imageUrl) return { ok: true, pageUrl, imageUrl, title: result.data.title || "", source: "Microlink 網站預覽" };
  } catch { /* show the actionable message below */ }
  throw new Error("無法讀取這個網站的標題或預覽圖，請稍後再試或自行填寫標題。");
}

function assetPreview(asset, detail = false) {
  const previewUrl = normalizeAssetImage(asset.previewUrl || asset.externalUrl);
  const fallbackLabel = asset.preview === "logo" ? (asset.label || assetDomain(asset).slice(0, 5).toUpperCase()) : "";
  return `<span class="asset-preview ${escapeHtml(asset.preview)} ${previewUrl ? "has-external-image" : ""} ${detail ? "asset-preview-detail" : ""}">${previewUrl ? `<img src="${escapeHtml(previewUrl)}" alt="${escapeHtml(assetTitle(asset))} 網站預覽" loading="lazy">` : escapeHtml(fallbackLabel)}</span>`;
}

function assetCard(asset) {
  const title = assetTitle(asset);
  return `<article class="asset-card" data-category="${escapeHtml(asset.category)}" data-search="${escapeHtml(`${title} ${asset.pageUrl || ""} ${asset.category} ${assetProjectName(asset)} ${asset.usage} ${asset.tags || ""}`)}">
    <button class="asset-open" data-asset-open="${asset.id}" aria-label="查看 ${escapeHtml(title)}">${assetPreview(asset)}<div class="asset-info"><strong>${escapeHtml(title)}</strong><span><em>${escapeHtml(assetDomain(asset))}</em><em>${escapeHtml(asset.category)}</em></span><small>${escapeHtml(asset.usage || "尚未記錄參考重點")}</small></div></button>
    <div class="asset-actions"><button data-copy="${escapeHtml(asset.pageUrl || "")}" aria-label="複製 ${escapeHtml(title)} 網址">${icon("copy")}複製網址</button><button data-open-url="${escapeHtml(asset.pageUrl || "")}">開啟</button><button data-asset-edit="${asset.id}">修改</button><button class="asset-delete" data-asset-delete="${asset.id}">刪除</button></div>
  </article>`;
}

function renderAssets() {
  return `<div class="page asset-page library-page">${pageHead("網站素材庫", "收藏值得參考的網站，保留預覽、分類、網址與可套用的設計想法。", `<div class="page-action-group"><button class="outline-button" data-action="manage-categories">管理分類</button><button class="primary-button" data-action="upload" aria-label="收藏網站">${icon("plus")}<span>收藏網站</span></button></div>`)}
    <div class="toolbar asset-toolbar library-toolbar"><div class="toolbar-group">${["全部", ...siteCategories].map((x, i) => `<button class="filter-chip ${i === 0 ? "is-active" : ""}" data-library-filter="${escapeHtml(x)}">${escapeHtml(x)}</button>`).join("")}</div><input class="small-search" data-library-search type="search" placeholder="搜尋標題、網域、標籤或用途" aria-label="搜尋網站收藏"></div>
    <section class="asset-grid" data-filter-list>${assets.map(assetCard).join("")}<div class="empty-state in-grid" data-filter-empty hidden><h2>找不到網站</h2><p>換個分類或關鍵字，或收藏新的參考網站。</p></div></section>
  </div>`;
}

function renderPackages() {
  return `<div class="page library-page">${pageHead("套件庫", "記住哪些版本真正可靠、在哪些專案使用，以及升級前必須檢查什麼。", `<div class="page-action-group"><button class="outline-button" data-action="manage-package-categories">管理分類</button><button class="primary-button" data-action="new-package">${icon("plus")}<span>登記套件</span></button></div>`)}
    <div class="toolbar library-toolbar"><div class="toolbar-group">${["全部", ...packageCategories].map((x,i)=>`<button class="filter-chip ${i===0?"is-active":""}" data-library-filter="${escapeHtml(x)}">${escapeHtml(x)}</button>`).join("")}</div><input class="small-search" data-library-search type="search" placeholder="搜尋套件" aria-label="搜尋套件"></div>
    <section class="package-list" data-filter-list>${packages.map(packageRow).join("")}<div class="empty-state" data-filter-empty hidden><h2>找不到套件</h2><p>換個關鍵字或狀態篩選。</p></div></section>
  </div>`;
}

function packageStateClass(stateValue) {
  return stateValue === "穩定使用中" ? "good" : "warn";
}

function packageProjectLabel(pkg) {
  const media = mediaCountLabel(pkg);
  return `${pkg.projectIds.length} 個專案${media ? ` · ${media}` : ""}`;
}

function mediaCountLabel(record) {
  return [record.images?.length ? `${record.images.length} 圖` : "", record.files?.length ? `${record.files.length} 文件` : ""].filter(Boolean).join(" · ");
}

function packageRow(pkg) {
  const hasUpdate = pkg.latestVersion && pkg.latestVersion !== pkg.version;
  return `<article class="package-row" data-category="${escapeHtml(pkg.state)}" data-search="${escapeHtml(`${pkg.name} ${pkg.note} ${pkg.version} ${pkg.latestVersion} ${pkg.compatibility}`)}">
    <button class="package-open" data-package="${pkg.id}" aria-label="查看 ${escapeHtml(pkg.name)}"><span class="data-icon">${escapeHtml(pkg.code)}</span><span class="data-main"><strong>${escapeHtml(pkg.name)}</strong><small>${escapeHtml(pkg.note)}</small></span><span class="package-version"><strong>v${escapeHtml(pkg.version)}</strong>${hasUpdate ? `<small>新版 ${escapeHtml(pkg.latestVersion)}</small>` : `<small>目前最新</small>`}</span><span class="data-meta">${packageProjectLabel(pkg)}</span><span class="state-tag ${packageStateClass(pkg.state)}">${escapeHtml(pkg.state)}</span></button>
    <div class="package-actions"><button data-package-edit="${pkg.id}">修改</button><button class="package-delete" data-package-delete="${pkg.id}">刪除</button></div>
  </article>`;
}

function promptCard(prompt) {
  const version = (prompt.history?.length || 0) + 1;
  const media = mediaCountLabel(prompt);
  const search = `${prompt.title} ${prompt.type} ${prompt.model} ${prompt.body} ${prompt.note} ${prompt.variables.join(" ")}`;
  return `<article class="prompt-card" data-category="${escapeHtml(prompt.type)}" data-search="${escapeHtml(search)}"><button class="prompt-open" data-prompt="${prompt.id}" aria-label="查看 ${escapeHtml(prompt.title)}"><span class="prompt-card-head"><span class="prompt-type">${escapeHtml(prompt.type)}</span><span>v${version} · ${escapeHtml(prompt.updated)}${media ? ` · ${escapeHtml(media)}` : ""}</span></span><span class="prompt-title">${escapeHtml(prompt.title)}</span><span class="prompt-copy">${escapeHtml(prompt.body)}</span><span class="prompt-card-foot"><span class="variables">${prompt.variables.slice(0, 3).map(v => `<span>{{${escapeHtml(v)}}}</span>`).join("")}</span><span>${escapeHtml(prompt.model)}</span></span></button><div class="prompt-actions"><button data-copy-prompt="${prompt.id}">${icon("copy")}複製</button><button data-prompt-edit="${prompt.id}">修改</button><button class="prompt-delete" data-prompt-delete="${prompt.id}">刪除</button></div></article>`;
}

function renderPrompts() {
  const types = ["全部", ...promptCategories];
  return `<div class="page library-page">${pageHead("提示詞庫", "把有效提示詞當成設計資產：快速複製、關聯專案，修改時保留可回查的舊版本。", `<div class="page-action-group"><button class="outline-button" data-action="manage-prompt-categories">管理分類</button><button class="primary-button" data-action="new-prompt">${icon("plus")}<span>新增提示詞</span></button></div>`)}
    <div class="toolbar library-toolbar"><div class="toolbar-group">${types.map((type, index) => `<button class="filter-chip ${index === 0 ? "is-active" : ""}" data-library-filter="${escapeHtml(type)}">${escapeHtml(type)}</button>`).join("")}</div><input class="small-search" data-library-search type="search" placeholder="搜尋提示詞" aria-label="搜尋提示詞"></div>
    <section class="prompt-grid" data-filter-list>${prompts.map(promptCard).join("")}<div class="empty-state in-grid" data-filter-empty ${prompts.length ? "hidden" : ""}><h2>${prompts.length ? "找不到提示詞" : "還沒有提示詞"}</h2><p>${prompts.length ? "換個關鍵字或類型。" : "新增第一組可重複使用的提示詞。"}</p></div></section>
  </div>`;
}

function renderInbox() {
  const columns = ["收件匣", "待處理", "處理中", "待確認"];
  const completedTasks = tasks.filter(task => task.done);
  return `<div class="page">${pageHead("修改收件匣", "先快速捕捉需求，再放進正確的專案與處理階段。", `<button class="primary-button" data-action="capture">${icon("plus")}<span>記一筆修改</span></button>`)}
    <section class="inbox-board">${columns.map(column => { const items = tasks.filter(task => !task.done && task.column === column); return `<div class="inbox-column"><div class="column-head"><h2>${column}</h2><span>${String(items.length).padStart(2, "0")}</span></div>${items.map(task => `<button class="revision-card" data-revision-edit="${task.id}"><strong>${escapeHtml(task.title)}</strong><span class="revision-project">${escapeHtml(task.project)}${task.images?.length ? `<span class="revision-card-images">${icon("image")}${task.images.length}</span>` : ""}</span><span class="revision-foot"><span><span class="priority ${task.priority}" role="img" aria-label="${priorityLabels[task.priority]}優先級"></span>${priorityLabels[task.priority]}</span><span>${escapeHtml(task.age || formatRevisionDue(task.dueDate))}</span></span></button>`).join("") || `<div class="empty-state" style="padding:35px 10px;background:transparent;border:0"><p>此階段目前沒有項目</p></div>`}</div>`; }).join("")}</section>
    <section class="completed-revisions" aria-labelledby="completedRevisionTitle">
      <div class="completed-revisions-head"><div><span class="eyebrow">處理歷程</span><h2 id="completedRevisionTitle">已完成紀錄</h2><p>未指定專案的修改也會保留在這裡，不會因完成而消失。</p></div><strong>${String(completedTasks.length).padStart(2, "0")}</strong></div>
      ${completedTasks.length ? `<div class="completed-revisions-toolbar"><div class="toolbar-group" aria-label="已完成紀錄篩選">${["全部", "未指定專案", "已歸屬專案"].map((label, index) => `<button class="filter-chip ${index === 0 ? "is-active" : ""}" data-completed-filter="${label}">${label}</button>`).join("")}</div><input class="small-search" data-completed-search type="search" placeholder="搜尋完成內容或專案" aria-label="搜尋已完成修改"></div>
      <div class="completed-revision-list" data-completed-list>${completedTasks.map(completedRevisionRow).join("")}<div class="empty-state completed-filter-empty" hidden><h2>找不到完成紀錄</h2><p>換個分類或搜尋關鍵字。</p></div></div>` : `<div class="completed-revisions-empty">${icon("check")}<div><strong>完成的修改會保留在這裡</strong><span>包含「先放入收件匣」而未指定專案的項目。</span></div></div>`}
    </section>
  </div>`;
}

function completedRevisionRow(task) {
  const projectLabel = task.projectId ? task.project : "先放入收件匣";
  const assignment = task.projectId ? "已歸屬專案" : "未指定專案";
  return `<article class="completed-revision-row" data-completed-row data-assignment="${assignment}" data-completed-search="${escapeHtml(`${task.title} ${projectLabel} ${task.note || ""}`)}">
    <span class="completed-revision-check" aria-hidden="true">${icon("check")}</span>
    <button class="completed-revision-main" data-revision-edit="${task.id}"><strong>${escapeHtml(task.title)}</strong><span>${escapeHtml(task.note || "尚未加入處理備註")}${task.images?.length ? `<em class="revision-image-count">${icon("image")}${task.images.length} 張圖片</em>` : ""}</span></button>
    <div class="completed-revision-context"><span>${escapeHtml(projectLabel)}</span><small>${escapeHtml(task.completedAt || task.age || "已完成")} · 原階段 ${escapeHtml(task.column)}</small></div>
    <div class="completed-revision-actions"><button class="outline-button" data-revision-reopen="${task.id}">重新開啟</button><button class="outline-button" data-revision-edit="${task.id}">修改</button><button class="revision-delete" data-revision-delete="${task.id}">刪除</button></div>
  </article>`;
}

function emptyState(iconName, title, copy) {
  return `<div class="empty-state">${icon(iconName)}<h2>${title}</h2><p>${copy}</p></div>`;
}

function plainDataSnapshot() {
  return {
    schemaVersion: 1,
    updatedAt: new Date().toISOString(),
    projects: structuredClone(projects),
    tasks: structuredClone(tasks),
    assets: structuredClone(assets),
    packages: structuredClone(packages),
    prompts: structuredClone(prompts),
    siteCategories: structuredClone(siteCategories),
    packageCategories: structuredClone(packageCategories),
    promptCategories: structuredClone(promptCategories),
    projectContacts: structuredClone(projectContacts),
    projectNotes: structuredClone(projectNotes),
    projectChecklists: structuredClone(projectChecklists),
    projectConnections: structuredClone(projectConnections)
  };
}

function legacyId(prefix, value) {
  return `${prefix}-${String(value || crypto.randomUUID()).replace(/[^A-Za-z0-9_-]/g, "-")}`;
}

function legacyRevisionTitle(content, index) {
  const firstLine = String(content || "").split(/\r?\n/).map(line => line.trim()).find(Boolean) || `舊工具修改 ${index + 1}`;
  return firstLine.length > 80 ? `${firstLine.slice(0, 77)}…` : firstLine;
}

function legacyDataRecord(item, prefix) {
  if (!item?.data) return null;
  return { id: legacyId(prefix, item.id), name: item.name || `${prefix}-${item.id}`, type: item.type || "application/octet-stream", size: Math.max(0, Math.floor((String(item.data).split(",")[1]?.length || 0) * 0.75)), dataUrl: item.data };
}

function convertProjectDeskSnapshot(legacy) {
  if (legacy?.app !== "project-desk" || Number(legacy.version) !== 3) throw new Error("這不是可辨識的 project-desk v3 JSON。");
  const base = plainDataSnapshot();
  const contactsById = new Map((legacy.contacts || []).map(contact => [String(contact.id), contact]));
  const imagesById = new Map((legacy.images || []).map(image => [String(image.id), image]));
  const filesById = new Map((legacy.files || []).map(file => [String(file.id), file]));
  const projectIdMap = new Map();
  const statusMap = { doing: ["製作中", "active"], maint: ["修改中", "revision"], live: ["已交付", "done"] };
  const tones = ["coral", "blue", "sage"];
  const importedProjects = (legacy.projects || []).map((project, index) => {
    const id = legacyId("imported-project", project.id);
    projectIdMap.set(String(project.id), id);
    const [status, statusClass] = statusMap[project.status] || [project.status || "待確認", "waiting"];
    const code = String(project.name || project.client || "P").replace(/[^A-Za-z0-9\u4e00-\u9fff]/g, "").slice(0, 2).toUpperCase() || String(index + 1).padStart(2, "0");
    const linkedImages = (project.images || []).map(imageId => legacyDataRecord(imagesById.get(String(imageId)), "project-image")).filter(Boolean);
    return { id, code, name: project.name || `未命名專案 ${index + 1}`, client: project.client || "未填客戶", type: Array.isArray(project.tags) && project.tags.length ? project.tags.join("、") : "舊工具匯入", status, statusClass, updated: formatProjectUpdated(project.updatedAt || project.createdAt || "已匯入"), tone: tones[index % tones.length], domain: project.domain || "", testUrl: project.testUrl || "", adminUrl: project.adminUrl || "", host: project.host || "", launchDate: project.launchDate || "", expiryDate: project.expiryDate || "", tags: project.tags || [], note: project.note || "", images: linkedImages };
  });
  const importedContacts = {};
  const importedConnections = {};
  const importedNotes = {};
  const importedChecklists = {};
  (legacy.projects || []).forEach(project => {
    const id = projectIdMap.get(String(project.id));
    const contact = contactsById.get(String(project.contactId));
    importedContacts[id] = contact ? [{ id: legacyId("contact", contact.id), name: contact.name || "未命名窗口", role: contact.title || "主要窗口", company: contact.org || project.client || "", phone: contact.phone || "", email: contact.email || "", line: "", note: contact.note || "" }] : [];
    const ftpLines = [project.ftpHost && `Host: ${project.ftpHost}`, project.ftpUser && `User: ${project.ftpUser}`, project.ftpNote].filter(Boolean);
    if (ftpLines.length) importedConnections[id] = { ftp: ftpLines.join("\n"), database: "" };
    importedNotes[id] = project.note ? [{ id: legacyId("project-note", project.id), title: "舊工具專案備註", type: "一般筆記", body: project.note, code: "", sourceUrl: "", pinned: true, updated: String(project.updatedAt || "已匯入").slice(0, 10) }] : [];
    importedChecklists[id] = [];
  });
  const importedTasks = (legacy.reqs || []).map((req, index) => {
    const projectId = projectIdMap.get(String(req.projectId)) || "";
    const project = importedProjects.find(item => item.id === projectId);
    const taskImages = (req.images || []).map(imageId => legacyDataRecord(imagesById.get(String(imageId)), "revision-image")).filter(Boolean);
    const attachments = (req.files || []).map(fileId => legacyDataRecord(filesById.get(String(fileId)), "attachment")).filter(Boolean);
    return { id: 7000000000000 + index, title: legacyRevisionTitle(req.content, index), projectId, project: project?.name || "先放入收件匣", dueDate: req.date || "", priority: "medium", column: "收件匣", note: [req.sourceName && `來源：${req.sourceName}`, req.content].filter(Boolean).join("\n"), age: String(req.updatedAt || req.createdAt || "已匯入").slice(0, 10), completedAt: req.done ? String(req.updatedAt || req.date || "已完成").slice(0, 10) : "", done: Boolean(req.done), images: taskImages, attachments };
  });
  return { ...base, updatedAt: new Date().toISOString(), projects: importedProjects, tasks: importedTasks, projectContacts: importedContacts, projectNotes: importedNotes, projectChecklists: importedChecklists, projectConnections: importedConnections };
}

const collectorCategoryLabels = {
  course: "AI 課程", prompt: "提示詞", tool: "工具實測", note: "觀念筆記", inbox: "待整理",
  xmtiexsc9jn1: "日常生活", xmtif0wdxkge: "MiniMax H3", xmtjhw29ybmg: "LINE AI",
  xmtji3gxei8t: "Gemini 系列", xmtjktwd7t6b: "Claude 系列", xmtmdf0xmv1e: "ChatGPT 系列"
};

function collectorLinks(item) {
  return (item.links || []).map(link => typeof link === "string" ? link : link?.url).filter(Boolean);
}

function collectorImageList(item) {
  const images = [...(item.covers || []), ...(item.images || [])].map(normalizeAssetImage).filter(Boolean);
  return [...new Set(images)].filter(image => !image.startsWith("data:image/svg+xml"));
}

function mergeCollectorSnapshot(snapshot) {
  if (Number(snapshot?.version) !== 2 || !Array.isArray(snapshot.items)) throw new Error("這不是可辨識的收藏收件匣備份。");
  const before = assets.length;
  const existingIds = new Set(assets.map(asset => asset.id));
  const usedCategories = new Set();
  snapshot.items.forEach((item, index) => {
    const category = collectorCategoryLabels[item.category] || "未分類";
    usedCategories.add(category);
    const id = legacyId("collector", item.id || index);
    if (existingIds.has(id)) return;
    const links = collectorLinks(item);
    const pageUrl = normalizeHttpUrl(links[0] || item.url) || normalizeHttpUrl(item.url) || "";
    const referenceImages = collectorImageList(item);
    const relatedLinks = links.filter(link => normalizeHttpUrl(link) && normalizeHttpUrl(link) !== pageUrl);
    const noteParts = [item.body, item.note && `收藏原因：${item.note}`, item.author && `作者／來源：${item.author}`, relatedLinks.length && `相關連結：\n${relatedLinks.join("\n")}`].filter(Boolean);
    assets.push({
      id, title: item.title || `收藏資料 ${index + 1}`, pageUrl, projectId: "", category,
      preview: referenceImages[0] ? "photo" : "logo", previewUrl: referenceImages[0] || "", previewSource: "收藏收件匣備份",
      usage: item.note || (item.stub ? "待補齊內容" : "收藏內容待整理"), source: "收藏收件匣",
      tags: Array.isArray(item.tags) ? item.tags.join("、") : String(item.tags || ""), note: noteParts.join("\n\n"),
      label: "", collectorImages: referenceImages, collectorSource: item.source || {}, collectorCapturedAt: item.capturedAt || ""
    });
    existingIds.add(id);
  });
  usedCategories.forEach(category => { if (!siteCategories.includes(category)) siteCategories.splice(Math.max(0, siteCategories.length - 1), 0, category); });
  return { added: assets.length - before, total: snapshot.items.length, categories: usedCategories.size };
}

function cloudImageRecord(image) {
  const record = { id: image.id, name: image.name, type: image.type, size: image.size };
  if (image.width) record.width = image.width;
  if (image.height) record.height = image.height;
  if (image.cloudPath) record.cloudPath = image.cloudPath;
  return record;
}

function cloudFileRecord(file) {
  const record = { id: file.id, name: file.name, type: file.type || "application/octet-stream", size: file.size };
  if (file.cloudPath) record.cloudPath = file.cloudPath;
  return record;
}

function withoutDeviceImages(snapshot) {
  const copy = structuredClone(snapshot);
  copy.projects.forEach(project => { if (project.images) project.images = project.images.map(cloudImageRecord); });
  copy.tasks.forEach(task => { if (task.images) task.images = task.images.map(cloudImageRecord); });
  copy.packages.forEach(pkg => {
    if (pkg.images) pkg.images = pkg.images.map(cloudImageRecord);
    if (pkg.files) pkg.files = pkg.files.map(cloudFileRecord);
  });
  copy.prompts.forEach(prompt => {
    if (prompt.images) prompt.images = prompt.images.map(cloudImageRecord);
    if (prompt.files) prompt.files = prompt.files.map(cloudFileRecord);
  });
  return copy;
}

function allImageOwners() {
  return [
    ...projects.map(project => ({ kind: "projects", ownerId: project.id, images: project.images || [] })),
    ...tasks.map(task => ({ kind: "revisions", ownerId: String(task.id), images: task.images || [] })),
    ...packages.map(pkg => ({ kind: "packages", ownerId: pkg.id, images: pkg.images || [] })),
    ...prompts.map(prompt => ({ kind: "prompts", ownerId: prompt.id, images: prompt.images || [] }))
  ];
}

function allFileOwners() {
  return [
    ...packages.map(pkg => ({ kind: "packages", ownerId: pkg.id, files: pkg.files || [] })),
    ...prompts.map(prompt => ({ kind: "prompts", ownerId: prompt.id, files: prompt.files || [] }))
  ];
}

function imageSyncCounts() {
  const images = allImageOwners().flatMap(owner => owner.images);
  return { total: images.length, cloud: images.filter(image => image.cloudPath).length, pending: images.filter(image => image.dataUrl && !image.cloudPath).length };
}

function fileSyncCounts() {
  const files = allFileOwners().flatMap(owner => owner.files);
  return { total: files.length, cloud: files.filter(file => file.cloudPath).length, pending: files.filter(file => file.dataUrl && !file.cloudPath).length };
}

function mergeImages(remoteImages = [], localImages = []) {
  const localById = new Map(localImages.map(image => [image.id, image]));
  const merged = remoteImages.map(image => ({ ...image, ...(localById.get(image.id)?.dataUrl ? { dataUrl: localById.get(image.id).dataUrl } : {}) }));
  localImages.filter(image => !image.cloudPath && !remoteImages.some(remote => remote.id === image.id)).forEach(image => merged.push(image));
  return merged;
}

function mergeFiles(remoteFiles = [], localFiles = []) {
  const localById = new Map(localFiles.map(file => [file.id, file]));
  const merged = remoteFiles.map(file => ({ ...file, ...(localById.get(file.id)?.dataUrl ? { dataUrl: localById.get(file.id).dataUrl } : {}) }));
  localFiles.filter(file => !file.cloudPath && !remoteFiles.some(remote => remote.id === file.id)).forEach(file => merged.push(file));
  return merged;
}

function replaceArray(target, value) {
  if (!Array.isArray(value)) return;
  target.splice(0, target.length, ...value);
}

function replaceRecord(target, value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return;
  Object.keys(target).forEach(key => delete target[key]);
  Object.assign(target, value);
}

function applyDataSnapshot(snapshot, preserveImages = true) {
  if (!snapshot || snapshot.schemaVersion !== 1 || !Array.isArray(snapshot.projects) || !Array.isArray(snapshot.tasks)) throw new Error("這不是可辨識的工作台 JSON 格式。");
  const projectImages = new Map(projects.map(item => [item.id, item.images]));
  const taskImages = new Map(tasks.map(item => [String(item.id), item.images]));
  const packageMedia = new Map(packages.map(item => [item.id, { images: item.images, files: item.files }]));
  const promptMedia = new Map(prompts.map(item => [item.id, { images: item.images, files: item.files }]));
  const nextProjects = structuredClone(snapshot.projects);
  const nextTasks = structuredClone(snapshot.tasks);
  const nextPackages = structuredClone(snapshot.packages || []);
  const nextPrompts = structuredClone(snapshot.prompts || []);
  nextProjects.forEach(item => { item.updated = formatProjectUpdated(item.updated); });
  if (preserveImages) {
    nextProjects.forEach(item => { item.images = mergeImages(item.images || [], projectImages.get(item.id) || []); });
    nextTasks.forEach(item => { item.images = mergeImages(item.images || [], taskImages.get(String(item.id)) || []); });
    nextPackages.forEach(item => {
      item.images = mergeImages(item.images || [], packageMedia.get(item.id)?.images || []);
      item.files = mergeFiles(item.files || [], packageMedia.get(item.id)?.files || []);
    });
    nextPrompts.forEach(item => {
      item.images = mergeImages(item.images || [], promptMedia.get(item.id)?.images || []);
      item.files = mergeFiles(item.files || [], promptMedia.get(item.id)?.files || []);
    });
  }
  replaceArray(projects, nextProjects);
  replaceArray(tasks, nextTasks);
  replaceArray(assets, structuredClone(snapshot.assets || []));
  replaceArray(packages, nextPackages);
  replaceArray(prompts, nextPrompts);
  replaceArray(siteCategories, structuredClone(snapshot.siteCategories || ["未分類"]));
  replaceArray(packageCategories, [...new Set([...(snapshot.packageCategories || DEFAULT_PACKAGE_CATEGORIES), ...nextPackages.map(pkg => pkg.state).filter(Boolean), "未分類"])]);
  replaceArray(promptCategories, [...new Set([...(snapshot.promptCategories || DEFAULT_PROMPT_CATEGORIES), ...nextPrompts.map(prompt => prompt.type).filter(Boolean), "未分類"])]);
  replaceRecord(projectContacts, structuredClone(snapshot.projectContacts || {}));
  replaceRecord(projectNotes, structuredClone(snapshot.projectNotes || {}));
  replaceRecord(projectChecklists, structuredClone(snapshot.projectChecklists || {}));
  replaceRecord(projectConnections, structuredClone(snapshot.projectConnections || {}));
}

// 本機暫存改用 IndexedDB：github.io 同帳號的所有 Pages 共用一個 origin，localStorage 約 5MB 會不夠用
const cacheDb = new Promise((resolve, reject) => {
  const request = indexedDB.open("studio-ledger", 1);
  request.onupgradeneeded = () => request.result.createObjectStore("cache");
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

async function cacheRequest(mode, action) {
  const store = (await cacheDb).transaction("cache", mode).objectStore("cache");
  return new Promise((resolve, reject) => {
    const request = action(store);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function persistLocalData() {
  try {
    const cached = withoutDeviceImages(plainDataSnapshot());
    delete cached.projectConnections;
    cached.sensitiveConnections = connectionsEnvelope;
    // 同步版本與資料寫在同一筆，避免其他分頁覆蓋資料後版本號對不上
    cached.syncedSha = syncConfig.lastSha;
    cached.syncedHash = syncConfig.syncedHash || "";
    cached.remoteHash = syncConfig.remoteHash || "";
    cacheRequest("readwrite", store => store.put(cached, WORKBENCH_CACHE_KEY)).catch(() => { /* local cache is best effort */ });
  } catch { /* local cache is best effort */ }
}

async function restoreLocalData() {
  let cached = null;
  try { cached = await cacheRequest("readonly", store => store.get(WORKBENCH_CACHE_KEY)); } catch { /* IndexedDB 不可用時改讀舊版暫存 */ }
  cached = cached || readJsonStorage(localStorage, WORKBENCH_CACHE_KEY, null);
  localStorage.removeItem(WORKBENCH_CACHE_KEY); // 舊版暫存已搬到 IndexedDB，釋放同網域共用的 localStorage 空間
  if (!cached) return;
  try { applyDataSnapshot(cached, false); } catch { cacheRequest("readwrite", store => store.delete(WORKBENCH_CACHE_KEY)).catch(() => {}); return; }
  connectionsEnvelope = cached.sensitiveConnections || null;
  if ("syncedSha" in cached) Object.assign(syncConfig, { lastSha: cached.syncedSha, syncedHash: cached.syncedHash, remoteHash: cached.remoteHash });
}

// 資料指紋（FNV-1a）：排除時間戳與加密區塊，只比對實際內容是否相同
function fingerprintOf(snapshot) {
  const data = { ...snapshot };
  ["updatedAt", "projectConnections", "sensitiveConnections", "mediaPolicy"].forEach(key => delete data[key]);
  const text = JSON.stringify(data);
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
  return (hash >>> 0).toString(36);
}

// 本機資料指紋：與最後同步時比對，判斷是否有尚未上傳的修改
function dataFingerprint() {
  return fingerprintOf(withoutDeviceImages(plainDataSnapshot()));
}

function hasUnsyncedChanges() {
  if (!syncConfig.lastSha && !syncConfig.syncedHash) return false; // 這個瀏覽器從未同步，以雲端為準
  return connectionsEdited || dataFingerprint() !== syncConfig.syncedHash;
}

/**
 * 記錄同步完成時的資料指紋
 * @param {Object} remoteSnapshot - 實際寫入或讀自 GitHub 的原始 JSON，供下次上傳判斷雲端是否被其他裝置改過
 */
function markSynced(remoteSnapshot) {
  syncConfig.syncedHash = dataFingerprint();
  syncConfig.remoteHash = fingerprintOf(remoteSnapshot);
  connectionsEdited = false;
}

function bytesToBase64(bytes) {
  let binary = "";
  for (let index = 0; index < bytes.length; index += 0x8000) binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(value.replace(/\s/g, ""));
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function encryptionKey(passphrase, salt, usage) {
  const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(passphrase), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: 250000, hash: "SHA-256" }, material, { name: "AES-GCM", length: 256 }, false, usage);
}

async function encryptConnections(value, passphrase) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await encryptionKey(passphrase, salt, ["encrypt"]);
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(JSON.stringify(value)));
  return { algorithm: "AES-GCM", kdf: "PBKDF2-SHA256", iterations: 250000, salt: bytesToBase64(salt), iv: bytesToBase64(iv), ciphertext: bytesToBase64(new Uint8Array(encrypted)) };
}

async function decryptConnections(envelope, passphrase) {
  try {
    const salt = base64ToBytes(envelope.salt);
    const iv = base64ToBytes(envelope.iv);
    const key = await encryptionKey(passphrase, salt, ["decrypt"]);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, base64ToBytes(envelope.ciphertext));
    return JSON.parse(new TextDecoder().decode(decrypted));
  } catch { throw new Error("解密失敗。請確認這台裝置輸入的是同一組工作台解密密碼。"); }
}

async function portableSnapshot() {
  const snapshot = withoutDeviceImages(plainDataSnapshot());
  const connections = snapshot.projectConnections;
  delete snapshot.projectConnections;
  snapshot.mediaPolicy = "github-files-v1";
  const locked = connectionsEnvelope && !connectionsUnlocked;
  if (locked && !syncPassphrase && !connectionsEdited) {
    snapshot.sensitiveConnections = connectionsEnvelope;
    return snapshot;
  }
  if (!syncPassphrase || syncPassphrase.length < 10) throw new Error("請先在同步設定輸入至少 10 個字元的工作台解密密碼。");
  if (locked) {
    // 先解開雲端密文再合併本機修改，避免上傳時遺失其他專案的連線資訊
    replaceRecord(projectConnections, { ...(await decryptConnections(connectionsEnvelope, syncPassphrase)), ...connections });
    connectionsUnlocked = true;
  }
  snapshot.sensitiveConnections = await encryptConnections(structuredClone(projectConnections), syncPassphrase);
  connectionsEnvelope = snapshot.sensitiveConnections;
  return snapshot;
}

async function openPortableSnapshot(snapshot, allowLocked = false) {
  if (!snapshot?.sensitiveConnections) throw new Error("備份缺少加密的敏感資料區塊。");
  if (!syncPassphrase && !allowLocked) throw new Error("請先輸入建立這份備份時使用的工作台解密密碼。");
  const opened = structuredClone(snapshot);
  if (syncPassphrase) opened.projectConnections = await decryptConnections(opened.sensitiveConnections, syncPassphrase);
  delete opened.sensitiveConnections;
  applyDataSnapshot(opened, true);
  connectionsEnvelope = snapshot.sensitiveConnections;
  connectionsUnlocked = Boolean(syncPassphrase);
  connectionsEdited = false;
}

function githubHeaders(token) {
  return { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "X-GitHub-Api-Version": "2022-11-28" };
}

function githubPathUrl(repo, path, branch) {
  const safePath = path.split("/").filter(Boolean).map(encodeURIComponent).join("/");
  return `https://api.github.com/repos/${repo}/contents/${safePath}?ref=${encodeURIComponent(branch)}`;
}

async function githubJson(url, options = {}) {
  const { allowMissing = false, ...fetchOptions } = options;
  // no-store：GitHub API 回應預設可被瀏覽器快取 60 秒，會讀到舊版本
  const response = await fetch(url, { cache: "no-store", ...fetchOptions });
  if (response.status === 404 && allowMissing) return null;
  let data = null;
  try { data = await response.json(); } catch { /* handled below */ }
  if (!response.ok) {
    if (response.status === 401) throw new Error("Token 無效或已失效，請重新建立 Token。");
    if (response.status === 403) throw new Error("Token 沒有這個 Repository 的 Contents 讀寫權限。");
    if (response.status === 404) throw new Error("找不到目標分支，或 Repository 尚未初始化。請重新測試連線，工作台會自動偵測預設分支。");
    if (response.status === 422 && /ref|branch|commit/i.test(data?.message || "")) throw new Error(`GitHub 找不到分支「${syncConfig.branch}」。請重新測試連線後再上傳。`);
    throw new Error(data?.message || `GitHub 回應錯誤（${response.status}）`);
  }
  return data;
}

async function readGithubState(token, allowMissing = false) {
  return githubJson(githubPathUrl(syncConfig.repo, syncConfig.path, syncConfig.branch), { headers: githubHeaders(token), allowMissing });
}

async function readGithubStateText(remote, token) {
  if (!remote || Array.isArray(remote) || remote.type !== "file") {
    throw new Error("資料路徑沒有指向 JSON 檔案，請確認兩台裝置的「JSON 儲存路徑」完全相同。");
  }
  if (remote?.content && remote.encoding === "base64") {
    return new TextDecoder().decode(base64ToBytes(remote.content));
  }
  if (remote.git_url || remote.sha) {
    const blobUrl = remote.git_url || `https://api.github.com/repos/${syncConfig.repo}/git/blobs/${remote.sha}`;
    const blob = await githubJson(blobUrl, { headers: githubHeaders(token) });
    if (blob?.content && blob.encoding === "base64") {
      return new TextDecoder().decode(base64ToBytes(blob.content));
    }
  }
  const response = await fetch(githubPathUrl(syncConfig.repo, syncConfig.path, syncConfig.branch), {
    cache: "no-store",
    headers: { ...githubHeaders(token), Accept: "application/vnd.github.raw+json" }
  });
  if (!response.ok) throw new Error(`GitHub 無法讀取工作台資料（${response.status}）。`);
  return response.text();
}

async function readGithubFile(path, token, allowMissing = false) {
  return githubJson(githubPathUrl(syncConfig.repo, path, syncConfig.branch), { headers: githubHeaders(token), allowMissing });
}

async function readGithubBinaryDataUrl(path, token, type = "application/octet-stream") {
  const response = await fetch(githubPathUrl(syncConfig.repo, path, syncConfig.branch), { cache: "no-store", headers: { ...githubHeaders(token), Accept: "application/vnd.github.raw+json" } });
  if (!response.ok) throw new Error(`GitHub 無法讀取附件（${response.status}）。`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  return `data:${type};base64,${bytesToBase64(bytes)}`;
}

async function putGithubFile(path, content, token, sha = "", message = "Update Studio Ledger media") {
  const body = { message, content };
  if (!syncConfig.emptyRepository) body.branch = syncConfig.branch;
  if (sha) body.sha = sha;
  return githubJson(githubPathUrl(syncConfig.repo, path, syncConfig.branch).split("?ref=")[0], { method: "PUT", headers: { ...githubHeaders(token), "Content-Type": "application/json" }, body: JSON.stringify(body) });
}

async function deleteGithubFile(path, token, sha) {
  const body = { message: `Remove Studio Ledger image: ${path}`, sha, branch: syncConfig.branch };
  return githubJson(githubPathUrl(syncConfig.repo, path, syncConfig.branch).split("?ref=")[0], { method: "DELETE", headers: { ...githubHeaders(token), "Content-Type": "application/json" }, body: JSON.stringify(body) });
}

function imageExtension(image) {
  return image.type === "image/gif" ? "gif" : "webp";
}

async function uploadPendingImages(token) {
  const pending = allImageOwners().flatMap(owner => owner.images.filter(image => image.dataUrl && !image.cloudPath).map(image => ({ ...owner, image })));
  for (let index = 0; index < pending.length; index += 1) {
    const { kind, ownerId, image } = pending[index];
    setSyncStatus("busy", `正在上傳圖片 ${index + 1} / ${pending.length}`, image.name || "工作台圖片");
    if (image.type !== "image/gif" && (image.type !== "image/webp" || image.size > 950 * 1024)) {
      const source = await fetch(image.dataUrl).then(response => response.blob());
      const compressed = await readImageFile(new File([source], image.name || "image.png", { type: source.type || image.type }));
      Object.assign(image, compressed, { id: image.id, originalName: image.originalName || image.name });
    }
    if (image.size > 1024 * 1024) throw new Error(`圖片「${image.name}」超過雲端預覽限制，請壓縮後重新加入。`);
    const path = `media/${kind}/${encodeURIComponent(ownerId)}/${encodeURIComponent(image.id)}.${imageExtension(image)}`;
    const existing = await readGithubFile(path, token, true);
    const content = image.dataUrl.split(",")[1];
    if (!content) throw new Error(`圖片「${image.name}」缺少可上傳內容，請重新加入。`);
    await putGithubFile(path, content, token, existing?.sha || "", `Upload Studio Ledger image: ${image.name || image.id}`);
    image.cloudPath = path;
  }
  return pending.length;
}

function fileExtension(file) {
  const match = String(file.name || "").toLowerCase().match(/\.([a-z0-9]{1,12})$/);
  return match ? match[1] : "bin";
}

async function uploadPendingFiles(token) {
  const pending = allFileOwners().flatMap(owner => owner.files.filter(file => file.dataUrl && !file.cloudPath).map(file => ({ ...owner, file })));
  for (let index = 0; index < pending.length; index += 1) {
    const { kind, ownerId, file } = pending[index];
    setSyncStatus("busy", `正在上傳文件 ${index + 1} / ${pending.length}`, file.name || "工作台附件");
    const path = `media/${kind}/${encodeURIComponent(ownerId)}/files/${encodeURIComponent(file.id)}.${fileExtension(file)}`;
    const existing = await readGithubFile(path, token, true);
    const content = file.dataUrl.split(",")[1];
    if (!content) throw new Error(`文件「${file.name}」缺少可上傳內容，請重新加入。`);
    await putGithubFile(path, content, token, existing?.sha || "", `Upload Studio Ledger document: ${file.name || file.id}`);
    file.cloudPath = path;
  }
  return pending.length;
}

async function removeQueuedImages(token) {
  const paths = [...pendingMediaDeletes];
  for (let index = 0; index < paths.length; index += 1) {
    const path = paths[index];
    setSyncStatus("busy", `正在整理雲端圖片 ${index + 1} / ${paths.length}`, "移除已從工作台刪除的檔案…");
    const remote = await readGithubFile(path, token, true);
    if (remote?.sha) await deleteGithubFile(path, token, remote.sha);
    pendingMediaDeletes.delete(path);
    localStorage.setItem(MEDIA_DELETE_KEY, JSON.stringify([...pendingMediaDeletes]));
  }
  return paths.length;
}

async function hydrateCloudImages(token) {
  const missing = allImageOwners().flatMap(owner => owner.images.filter(image => image.cloudPath && !image.dataUrl));
  for (let index = 0; index < missing.length; index += 1) {
    const image = missing[index];
    setSyncStatus("busy", `正在讀取圖片 ${index + 1} / ${missing.length}`, image.name || "工作台圖片");
    const remote = await readGithubFile(image.cloudPath, token);
    if (!remote.content) throw new Error(`GitHub 無法直接讀取圖片「${image.name}」，請確認檔案大小。`);
    image.dataUrl = `data:${image.type || "image/webp"};base64,${remote.content.replace(/\s/g, "")}`;
  }
  return missing.length;
}

async function hydrateCloudFiles(token) {
  const missing = allFileOwners().flatMap(owner => owner.files.filter(file => file.cloudPath && !file.dataUrl));
  for (let index = 0; index < missing.length; index += 1) {
    const file = missing[index];
    setSyncStatus("busy", `正在讀取文件 ${index + 1} / ${missing.length}`, file.name || "工作台附件");
    file.dataUrl = await readGithubBinaryDataUrl(file.cloudPath, token, file.type || "application/octet-stream");
  }
  return missing.length;
}

function setSyncStatus(tone, title, detail) {
  syncStatus = { tone, title, detail };
  const region = document.querySelector("#syncStatusRegion");
  if (region) region.innerHTML = syncStatusMarkup();
  updateNavigation();
}

function setSyncBusy(value) {
  syncBusy = value;
  if (state.route === "settings") render();
}

async function testGithubConnection(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(values.repo.trim())) throw new Error("Repository 格式應為「帳號/repository」。");
  syncPassphrase = values.passphrase;
  setSyncStatus("busy", "正在確認連線", "檢查 Repository 與 Token 權限…");
  const repository = await githubJson(`https://api.github.com/repos/${values.repo.trim()}`, { headers: githubHeaders(values.token.trim()) });
  const detectedBranch = repository.default_branch || values.branch.trim() || "main";
  Object.assign(syncConfig, { repo: values.repo.trim(), branch: detectedBranch, path: values.path.trim().replace(/^\/+/, ""), rememberToken: values.rememberToken === "on", emptyRepository: Number(repository.size) === 0 });
  localStorage.removeItem(SYNC_TOKEN_KEY);
  sessionStorage.removeItem(SYNC_TOKEN_KEY);
  (syncConfig.rememberToken ? localStorage : sessionStorage).setItem(SYNC_TOKEN_KEY, values.token.trim());
  localStorage.removeItem(SYNC_PASSPHRASE_KEY);
  if (syncConfig.rememberToken) localStorage.setItem(SYNC_PASSPHRASE_KEY, values.passphrase);
  saveSyncConfig();
  const remote = syncConfig.emptyRepository ? null : await readGithubState(values.token.trim(), true);
  const branchNote = detectedBranch !== values.branch.trim() ? `已自動切換到預設分支 ${detectedBranch}。` : `目前分支為 ${detectedBranch}。`;
  setSyncStatus("ok", "GitHub 連線成功", remote ? `已找到雲端資料；${branchNote}第一次使用這台裝置時請先下載。` : `${branchNote}${syncConfig.emptyRepository ? "這是空的 Repository，首次上傳將建立分支與資料檔。" : "目前尚未建立資料檔，可上傳目前資料。"}` );
}

async function pullFromGithub(allowLocked = false) {
  const token = syncToken();
  const remote = await readGithubState(token);
  const decoded = await readGithubStateText(remote, token);
  if (!decoded.trim()) throw new Error("雲端資料檔是空的，請回到原裝置重新「上傳目前資料」。");
  let snapshot;
  try { snapshot = JSON.parse(decoded); }
  catch { throw new Error("雲端資料不是完整的 JSON，請回到原裝置重新上傳後再下載。"); }
  await openPortableSnapshot(snapshot, allowLocked);
  reconcileMediaDeletes();
  const downloadedImages = await hydrateCloudImages(syncToken());
  const downloadedFiles = await hydrateCloudFiles(syncToken());
  markSynced(snapshot);
  syncConfig.lastSha = remote.sha;
  syncConfig.lastSyncedAt = new Intl.DateTimeFormat("zh-TW", { dateStyle: "medium", timeStyle: "short" }).format(new Date());
  saveSyncConfig();
  persistLocalData();
  setSyncStatus("ok", "下載完成", `這台裝置已套用 GitHub 最新資料${downloadedImages ? `，並讀取 ${downloadedImages} 張圖片` : ""}${downloadedFiles ? `、${downloadedFiles} 個文件` : ""}。`);
}

async function pushToGithub() {
  const token = syncToken();
  const remote = syncConfig.emptyRepository ? null : await readGithubState(token, true);
  const remoteChanged = remote && (!syncConfig.lastSha || remote.sha !== syncConfig.lastSha);
  if (remoteChanged || (remote && !connectionsUnlocked && !connectionsEnvelope)) {
    let remoteSnapshot = null;
    try { remoteSnapshot = JSON.parse(await readGithubStateText(remote, token)); } catch { /* 無法解析時視為內容不同 */ }
    const remoteHash = fingerprintOf(remoteSnapshot);
    // 雲端內容與上次同步或本機相同（例如其他裝置只是重新加密上傳）時不算衝突
    if (remoteChanged && remoteHash !== syncConfig.remoteHash && remoteHash !== dataFingerprint()) {
      throw new Error("GitHub 上有其他裝置修改過的資料。請先「匯出 JSON 備份」保存這個分頁的修改，再下載確認；直接下載會覆蓋尚未上傳的內容。");
    }
    // 採用雲端最新的加密連線資訊，上傳時再與本機修改合併，避免清空其他專案的連線資訊
    if (remoteSnapshot?.sensitiveConnections) {
      connectionsEnvelope = remoteSnapshot.sensitiveConnections;
      connectionsUnlocked = false;
    }
  }
  const uploadedImages = await uploadPendingImages(token);
  const uploadedFiles = await uploadPendingFiles(token);
  const deletedImages = await removeQueuedImages(token);
  const snapshot = await portableSnapshot();
  const content = bytesToBase64(new TextEncoder().encode(JSON.stringify(snapshot, null, 2)));
  const result = await putGithubFile(syncConfig.path, content, token, remote?.sha || "", `Sync Studio Ledger ${new Date().toISOString()}`);
  markSynced(snapshot);
  syncConfig.lastSha = result.content.sha;
  syncConfig.emptyRepository = false;
  syncConfig.lastSyncedAt = new Intl.DateTimeFormat("zh-TW", { dateStyle: "medium", timeStyle: "short" }).format(new Date());
  saveSyncConfig();
  persistLocalData();
  setSyncStatus("ok", "上傳完成", `目前資料已加密並寫入 Private Repository${uploadedImages ? `，新增 ${uploadedImages} 張圖片` : ""}${uploadedFiles ? `、${uploadedFiles} 個文件` : ""}${deletedImages ? `，清理 ${deletedImages} 個舊媒體` : ""}。`);
}

/**
 * 開啟頁面或切回分頁時檢查 GitHub 是否有新版本；本機沒有未上傳的修改才自動套用
 * @param {boolean} force - 略過間隔與輸入中的檢查（例如剛完成連線測試）
 */
async function autoPullFromGithub(force = false) {
  const token = syncToken();
  if (!syncConfig.repo || !token || syncBusy) return;
  if (!force) {
    const typing = document.activeElement?.matches("input, textarea, select") || drawer.classList.contains("is-open");
    if (typing || Date.now() - autoPullCheckedAt < AUTO_PULL_INTERVAL) return;
  }
  autoPullCheckedAt = Date.now();
  syncBusy = true;
  try {
    const remote = await readGithubState(token, true);
    if (!remote || remote.sha === syncConfig.lastSha) return;
    if (hasUnsyncedChanges()) {
      setSyncStatus("error", "雲端有較新的版本", "這個分頁有尚未上傳的修改，為避免覆蓋沒有自動下載。請先按「上傳目前資料」；若沒有要保留的修改，再手動下載。");
      showToast("GitHub 有較新的資料，請到同步設定確認");
      return;
    }
    await pullFromGithub(true);
    render();
    showToast(connectionsUnlocked ? "已載入 GitHub 最新資料" : "已載入 GitHub 最新資料；連線資訊需輸入解密密碼後顯示");
  } catch (error) {
    setSyncStatus("error", "自動同步未完成", error.message);
  } finally {
    syncBusy = false;
  }
}

// 已記住解密密碼時，開啟頁面直接解開暫存中的連線資訊，不必重新下載
async function unlockCachedConnections() {
  if (!connectionsEnvelope || connectionsUnlocked || !syncPassphrase) return;
  try {
    replaceRecord(projectConnections, { ...(await decryptConnections(connectionsEnvelope, syncPassphrase)), ...projectConnections });
    connectionsUnlocked = true;
  } catch { /* 密碼不符時維持鎖定，手動下載時會顯示錯誤 */ }
}

async function exportPortableJson() {
  const snapshot = await portableSnapshot();
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `studio-ledger-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function render() {
  if (state.route.startsWith("project:")) {
    const project = projects.find(p => p.id === state.route.split(":")[1]) || projects[0];
    main.innerHTML = renderProjectDetail(project);
  } else {
    const view = { dashboard: renderDashboard, projects: renderProjects, assets: renderAssets, packages: renderPackages, prompts: renderPrompts, inbox: renderInbox, settings: renderSettings }[state.route] || renderDashboard;
    main.innerHTML = view();
  }
  updateNavigation();
  persistLocalData();
  main.focus({ preventScroll: true });
}

function updateNavigation() {
  const route = state.route.startsWith("project:") ? "projects" : state.route;
  document.querySelectorAll("[data-route]").forEach(item => item.classList.toggle("is-active", item.dataset.route === route));
  const inboxCount = document.querySelector("#inboxCount");
  if (inboxCount) inboxCount.textContent = String(tasks.filter(task => !task.done).length).padStart(2, "0");
  const websiteCount = document.querySelector("#websiteCount");
  if (websiteCount) websiteCount.textContent = `${assets.length} / 50`;
  const projectCount = document.querySelector("#projectCount");
  if (projectCount) projectCount.textContent = String(projects.length).padStart(2, "0");
  const profileSyncState = document.querySelector("#profileSyncState");
  if (profileSyncState) profileSyncState.textContent = syncConfig.repo && syncToken() ? "GitHub 已設定" : "尚未連線";
}

function navigate(route) {
  state.route = route;
  state.projectTab = "總覽";
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
  closeMobileMenu();
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

async function copyText(value, successMessage = "已複製") {
  if (!value?.trim()) { showToast("目前沒有可複製的內容"); return; }
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = value;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  showToast(successMessage);
}

function openDrawer(type, payload = {}) {
  drawerReturnFocus = document.activeElement;
  const content = drawerContent(type, payload);
  drawerContext.textContent = content.context;
  drawerTitle.textContent = content.title;
  drawerBody.innerHTML = content.body;
  drawer.removeAttribute("inert");
  scrim.hidden = false;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  (drawerBody.querySelector("input, textarea, button") || document.querySelector("#drawerClose"))?.focus();
}

function closeDrawer() {
  drawer.setAttribute("inert", "");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  setTimeout(() => { scrim.hidden = true; drawerReturnFocus?.focus?.(); }, 220);
}

function formatFileSize(bytes = 0) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function imagePreviewItems(images = []) {
  return images.map(image => `<figure class="image-upload-item">${image.dataUrl ? `<img src="${escapeHtml(image.dataUrl)}" alt="${escapeHtml(image.name)} 預覽">` : `<span class="cloud-image-loading">${icon("cloud")}<small>等待讀取</small></span>`}<figcaption><span>${escapeHtml(image.name)}</span><small>${formatFileSize(image.size)}${image.cloudPath ? " · 已同步" : " · 待同步"}</small></figcaption><button type="button" data-image-remove="${escapeHtml(image.id)}" aria-label="移除 ${escapeHtml(image.name)}">${icon("close")}</button></figure>`).join("");
}

function imageUploadField(key, images = [], label = "參考圖片") {
  imageDrafts.set(key, images.map(image => ({ ...image })));
  return `<section class="image-upload-field" data-image-uploader data-upload-key="${escapeHtml(key)}">
    <div class="image-upload-head"><div><strong>${label}</strong><span>截圖、客戶提供圖片或視覺參考</span></div><span data-image-count>${images.length} / ${MAX_FORM_IMAGES}</span></div>
    <div class="image-drop-zone" data-image-drop>
      <span class="image-drop-icon">${icon("image")}</span><div><strong>拖放圖片到這裡</strong><span>JPG、PNG、WebP 會自動壓縮；GIF 保留原檔</span></div>
      <div class="image-upload-actions"><button type="button" class="outline-button" data-image-select>上傳圖片</button><button type="button" class="outline-button" data-image-paste>貼上圖片</button></div>
      <input data-image-file type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple hidden>
    </div>
    <div class="image-upload-status" data-image-status aria-live="polite">也可以在表單開啟時直接按 Ctrl+V 貼上剪貼簿圖片。</div>
    <div class="image-upload-preview" data-image-preview ${images.length ? "" : "hidden"}>${imagePreviewItems(images)}</div>
  </section>`;
}

function renderImageUploader(key, message = "") {
  const uploader = drawerBody.querySelector(`[data-image-uploader][data-upload-key="${CSS.escape(key)}"]`);
  if (!uploader) return;
  const images = imageDrafts.get(key) || [];
  const preview = uploader.querySelector("[data-image-preview]");
  preview.innerHTML = imagePreviewItems(images);
  preview.hidden = images.length === 0;
  uploader.querySelector("[data-image-count]").textContent = `${images.length} / ${MAX_FORM_IMAGES}`;
  if (message) uploader.querySelector("[data-image-status]").textContent = message;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("圖片讀取失敗"));
    reader.readAsDataURL(blob);
  });
}

function canvasBlob(canvas, quality) {
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("瀏覽器無法壓縮這張圖片。")), "image/webp", quality));
}

async function decodeImage(file) {
  if (typeof createImageBitmap === "function") return createImageBitmap(file);
  const url = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    return { width: image.naturalWidth, height: image.naturalHeight, source: image, close: () => URL.revokeObjectURL(url) };
  } catch (error) {
    URL.revokeObjectURL(url);
    throw error;
  }
}

async function readImageFile(file) {
  const id = `image-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  if (file.type === "image/gif") {
    if (file.size > 950 * 1024) throw new Error("GIF 超過 950 KB；為保留動畫，請先在外部壓縮後再加入。");
    return { id, name: file.name || `貼上圖片-${Date.now()}.gif`, type: file.type, size: file.size, dataUrl: await blobToDataUrl(file) };
  }
  const bitmap = await decodeImage(file);
  let scale = Math.min(1, 1800 / Math.max(bitmap.width, bitmap.height));
  let blob;
  let width;
  let height;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    width = Math.max(1, Math.round(bitmap.width * scale));
    height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d", { alpha: true }).drawImage(bitmap.source || bitmap, 0, 0, width, height);
    blob = await canvasBlob(canvas, Math.max(.54, .84 - attempt * .08));
    if (blob.size <= 950 * 1024) break;
    scale *= .78;
  }
  bitmap.close?.();
  if (!blob || blob.size > 1024 * 1024) throw new Error(`圖片「${file.name}」壓縮後仍超過 1 MB，請縮小尺寸後再加入。`);
  const baseName = (file.name || `貼上圖片-${Date.now()}`).replace(/\.[^.]+$/, "");
  return { id, name: `${baseName}.webp`, originalName: file.name, type: "image/webp", size: blob.size, width, height, dataUrl: await blobToDataUrl(blob) };
}

async function addImagesToDraft(key, files) {
  const existing = imageDrafts.get(key) || [];
  const candidates = [...files].filter(file => file.type.startsWith("image/"));
  if (!candidates.length) { renderImageUploader(key, "沒有讀到圖片，請選擇 JPG、PNG、WebP 或 GIF。"); return; }
  const valid = [];
  let remainingBytes = MAX_FORM_IMAGE_TOTAL_BYTES - existing.reduce((total, image) => total + image.size, 0);
  for (const file of candidates) {
    if (valid.length >= Math.max(0, MAX_FORM_IMAGES - existing.length)) break;
    if (file.size <= MAX_FORM_IMAGE_BYTES && file.size <= remainingBytes) { valid.push(file); remainingBytes -= file.size; }
  }
  if (!valid.length) { renderImageUploader(key, existing.length >= MAX_FORM_IMAGES ? "每筆資料最多可加入 8 張圖片。" : "圖片超過單張 8 MB 或合計 24 MB，請先壓縮後再加入。"); return; }
  const settled = await Promise.allSettled(valid.map(readImageFile));
  const added = settled.filter(result => result.status === "fulfilled").map(result => result.value);
  const failed = settled.find(result => result.status === "rejected");
  if (!added.length) { renderImageUploader(key, failed?.reason?.message || "圖片壓縮失敗，請換一張圖片再試。"); return; }
  imageDrafts.set(key, [...existing, ...added]);
  const skipped = candidates.length - added.length;
  renderImageUploader(key, skipped ? `已壓縮並加入 ${added.length} 張；另有 ${skipped} 張未通過限制。` : `已壓縮並加入 ${added.length} 張圖片，會在下次 GitHub 上傳時同步。`);
}

async function pasteImagesFromClipboard(key) {
  if (!navigator.clipboard?.read) { renderImageUploader(key, "瀏覽器不支援按鈕讀取，請直接按 Ctrl+V 貼上圖片。"); return; }
  try {
    const items = await navigator.clipboard.read();
    const files = [];
    for (const item of items) {
      const type = item.types.find(value => value.startsWith("image/"));
      if (type) files.push(new File([await item.getType(type)], `貼上圖片-${Date.now()}.${type.split("/")[1] || "png"}`, { type }));
    }
    await addImagesToDraft(key, files);
  } catch {
    renderImageUploader(key, "無法讀取剪貼簿，請允許權限或直接按 Ctrl+V。");
  }
}

function filePreviewItems(files = [], removable = true) {
  return files.map(file => `<div class="file-upload-item"><button type="button" class="file-download" data-download-file="${escapeHtml(file.id)}"><span class="file-mark">${icon("download")}</span><span><strong>${escapeHtml(file.name)}</strong><small>${escapeHtml(file.type || "未知格式")} · ${formatFileSize(file.size)}${file.cloudPath ? " · 已同步" : " · 待同步"}</small></span></button>${removable ? `<button type="button" class="file-remove" data-file-remove="${escapeHtml(file.id)}" aria-label="移除 ${escapeHtml(file.name)}">${icon("close")}</button>` : ""}</div>`).join("");
}

function fileUploadField(key, files = [], label = "相關文件") {
  fileDrafts.set(key, files.map(file => ({ ...file })));
  return `<section class="file-upload-field" data-file-uploader data-upload-key="${escapeHtml(key)}">
    <div class="image-upload-head"><div><strong>${label}</strong><span>規格、簡報、壓縮檔、程式碼或其他附件</span></div><span data-file-count>${files.length} / ${MAX_FORM_FILES}</span></div>
    <div class="file-drop-zone" data-file-drop tabindex="0">
      <span class="file-drop-icon">${icon("upload")}</span><div><strong>拖放文件到這裡</strong><span>接受任何檔案格式，單檔上限 15 MB</span></div>
      <button type="button" class="outline-button" data-file-select>選擇文件</button>
      <input data-file-input type="file" multiple hidden>
    </div>
    <div class="image-upload-status" data-file-status aria-live="polite">文件會在下次上傳目前資料時同步到 Private Repository。</div>
    <div class="file-upload-list" data-file-preview ${files.length ? "" : "hidden"}>${filePreviewItems(files)}</div>
  </section>`;
}

function renderFileUploader(key, message = "") {
  const uploader = drawerBody.querySelector(`[data-file-uploader][data-upload-key="${CSS.escape(key)}"]`);
  if (!uploader) return;
  const files = fileDrafts.get(key) || [];
  const preview = uploader.querySelector("[data-file-preview]");
  preview.innerHTML = filePreviewItems(files);
  preview.hidden = files.length === 0;
  uploader.querySelector("[data-file-count]").textContent = `${files.length} / ${MAX_FORM_FILES}`;
  if (message) uploader.querySelector("[data-file-status]").textContent = message;
}

async function addFilesToDraft(key, incomingFiles) {
  const existing = fileDrafts.get(key) || [];
  const candidates = [...incomingFiles].filter(file => file && file.name);
  const available = Math.max(0, MAX_FORM_FILES - existing.length);
  let remainingBytes = MAX_FORM_FILE_TOTAL_BYTES - existing.reduce((total, file) => total + file.size, 0);
  const valid = [];
  for (const file of candidates.slice(0, available)) {
    if (file.size <= MAX_FORM_FILE_BYTES && file.size <= remainingBytes) {
      valid.push(file);
      remainingBytes -= file.size;
    }
  }
  if (!valid.length) {
    renderFileUploader(key, existing.length >= MAX_FORM_FILES ? "每筆資料最多可加入 8 個文件。" : "文件超過單檔 15 MB 或合計 40 MB，請縮小後再加入。");
    return;
  }
  const added = await Promise.all(valid.map(async file => ({ id: `file-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name: file.name, type: file.type || "application/octet-stream", size: file.size, dataUrl: await blobToDataUrl(file) })));
  fileDrafts.set(key, [...existing, ...added]);
  const skipped = candidates.length - added.length;
  renderFileUploader(key, skipped ? `已加入 ${added.length} 個文件；另有 ${skipped} 個未通過限制。` : `已加入 ${added.length} 個文件，會在下次 GitHub 上傳時同步。`);
}

function detailMedia(images = [], files = [], label = "相關素材") {
  if (!images.length && !files.length) return "";
  return `<section class="detail-media"><div class="form-section-head"><strong>${label}</strong><span>${images.length} 張圖片 · ${files.length} 個文件</span></div>${images.length ? `<div class="detail-media-images">${images.map(image => image.dataUrl ? `<img src="${escapeHtml(image.dataUrl)}" alt="${escapeHtml(image.name)}">` : `<span class="cloud-image-loading">${icon("cloud")}<small>等待讀取</small></span>`).join("")}</div>` : ""}${files.length ? `<div class="file-upload-list">${filePreviewItems(files, false)}</div>` : ""}</section>`;
}

function connectionFormFields(values = {}) {
  return `<div class="form-section">
    <div class="form-section-head"><strong>環境與存取</strong><span>可稍後補填</span></div>
    <div class="form-field">
      <div class="form-label-row"><label for="projectFtp">FTP 連線資訊</label><button type="button" class="field-copy-button" data-copy-source="projectFtp" aria-label="複製 FTP 連線資訊">${icon("copy")}複製</button></div>
      <textarea id="projectFtp" name="ftp" rows="5" spellcheck="false" placeholder="Host:&#10;User:&#10;Password:&#10;Port:&#10;Path:">${escapeHtml(values.ftp || "")}</textarea>
    </div>
    <div class="form-field">
      <div class="form-label-row"><label for="projectDatabase">Database 連線資訊</label><button type="button" class="field-copy-button" data-copy-source="projectDatabase" aria-label="複製 Database 連線資訊">${icon("copy")}複製</button></div>
      <textarea id="projectDatabase" name="database" rows="5" spellcheck="false" placeholder="Host:&#10;Database:&#10;User:&#10;Password:&#10;Charset: utf8mb4">${escapeHtml(values.database || "")}</textarea>
    </div>
    <p class="security-note">正式版應加密保存密碼，列表與預覽畫面預設遮蔽敏感內容。</p>
  </div>`;
}

function projectEntryForm(project) {
  return `<form class="form-stack" data-project-entry-form>
    <div class="form-field"><label for="projectDomain">正式網站</label><input id="projectDomain" name="domain" type="url" value="${escapeHtml(project.domain || "")}" placeholder="https://www.example.com/" inputmode="url" spellcheck="false"><small>已上線網站的公開網址。</small></div>
    <div class="form-field"><label for="projectTestUrl">測試站</label><input id="projectTestUrl" name="testUrl" type="url" value="${escapeHtml(project.testUrl || "")}" placeholder="https://stage.example.com/" inputmode="url" spellcheck="false"><small>客戶確認或內部測試使用的網址。</small></div>
    <div class="form-field"><label for="projectAdminUrl">後台入口</label><input id="projectAdminUrl" name="adminUrl" type="url" value="${escapeHtml(project.adminUrl || "")}" placeholder="https://www.example.com/admin/" inputmode="url" spellcheck="false"><small>只保存後台網址；帳號密碼請放在「環境與存取」。</small></div>
    <div class="form-field"><label for="projectLocalPath">本機資料夾</label><input id="projectLocalPath" name="path" value="${escapeHtml(project.path || "")}" placeholder="C:/Projects/example" spellcheck="false"><small>點擊專案入口時可以快速複製路徑。</small></div>
    <button class="primary-button drawer-submit" type="submit">儲存專案入口</button>
  </form>`;
}

function currentProject() {
  return projects.find(project => state.route === `project:${project.id}`) || projects[0];
}

function projectCreateForm() {
  return `<form class="form-stack" data-project-create-form><div class="form-field"><label for="projectName">專案名稱</label><input id="projectName" name="name" required placeholder="例如：品牌秋季形象網站"></div><div class="form-field"><label for="clientName">客戶／用途</label><input id="clientName" name="client" placeholder="客戶名稱或個人專案"></div><div class="form-field"><label>選擇起始模板</label><div class="template-options"><button type="button" class="template-option is-selected" data-template="PHP 官網"><strong>PHP 官網</strong><small>共用版型、表單與資源目錄</small></button><button type="button" class="template-option" data-template="靜態 HTML"><strong>靜態 HTML</strong><small>精簡頁面與資源結構</small></button><button type="button" class="template-option" data-template="活動頁"><strong>活動頁</strong><small>分享資訊與倒數模組</small></button><button type="button" class="template-option" data-template="空白專案"><strong>空白專案</strong><small>只建立必要目錄</small></button></div></div><div class="form-field"><label for="projectPath">預計本機路徑</label><input id="projectPath" name="path" value="C:/Projects/" spellcheck="false"><small>原型階段不會真的建立資料夾。</small></div><div class="form-field"><label for="projectNewDueDate">交付日期</label><input id="projectNewDueDate" name="deliveryDate" type="date"><small>可留空白，之後在專案總覽修改。</small></div>${imageUploadField("project-new", [], "專案圖片")}${connectionFormFields()}<button class="primary-button drawer-submit" type="submit">建立原型專案</button></form>`;
}

function projectStageForm(project) {
  return `<form class="form-stack" data-project-stage-form>
    <div class="project-stage-summary"><span>正在修改</span><strong>${escapeHtml(project.name)}</strong><small>變更後會同步更新首頁與專案列表。</small></div>
    <fieldset class="project-stage-options"><legend>選擇目前階段</legend>${projectStages.map(stage => `<label class="project-stage-option"><input type="radio" name="stage" value="${escapeHtml(stage.label)}" ${project.status === stage.label ? "checked" : ""}><span class="status ${stage.className}">${escapeHtml(stage.label)}</span><small>${escapeHtml(stage.note)}</small></label>`).join("")}</fieldset>
    <button class="primary-button drawer-submit" type="submit">儲存專案階段</button>
  </form>`;
}

function projectDueForm(project) {
  return `<form class="form-stack" data-project-due-form>
    <div class="project-stage-summary"><span>正在修改</span><strong>${escapeHtml(project.name)}</strong><small>交付日期會顯示在專案總覽。</small></div>
    <div class="form-field"><label for="projectDueDate">交付日期</label><input id="projectDueDate" name="deliveryDate" type="date" value="${escapeHtml(project.deliveryDate || "")}"><small>留空白代表尚未排定交付日。</small></div>
    <button class="primary-button drawer-submit" type="submit">儲存交付日期</button>
  </form>`;
}

function contactForm(contact = {}) {
  return `<form class="form-stack" data-contact-form data-contact-id="${escapeHtml(contact.id || "")}">
    <div class="form-field"><label for="contactName">姓名</label><input id="contactName" name="name" required value="${escapeHtml(contact.name || "")}" placeholder="例如：林怡君"></div>
    <div class="form-field"><label for="contactRole">角色</label><select id="contactRole" name="role"><option ${contact.role === "主要窗口" ? "selected" : ""}>主要窗口</option><option ${contact.role === "業務" ? "selected" : ""}>業務</option><option ${contact.role === "技術窗口" ? "selected" : ""}>技術窗口</option><option ${contact.role === "其他" ? "selected" : ""}>其他</option></select></div>
    <div class="form-field"><label for="contactCompany">公司／單位</label><input id="contactCompany" name="company" value="${escapeHtml(contact.company || currentProject().client)}" placeholder="公司或合作單位"></div>
    <div class="form-field"><label for="contactPhone">電話</label><input id="contactPhone" name="phone" type="tel" value="${escapeHtml(contact.phone || "")}" placeholder="02-0000-0000"></div>
    <div class="form-field"><label for="contactEmail">Email</label><input id="contactEmail" name="email" type="email" value="${escapeHtml(contact.email || "")}" placeholder="name@example.com"></div>
    <div class="form-field"><label for="contactLine">LINE／其他聯絡方式</label><input id="contactLine" name="line" value="${escapeHtml(contact.line || "")}" placeholder="LINE ID 或其他資訊"></div>
    <div class="form-field"><label for="contactNote">負責事項</label><textarea id="contactNote" name="note" placeholder="例如：網站內容與視覺確認">${escapeHtml(contact.note || "")}</textarea></div>
    <button class="primary-button drawer-submit" type="submit">${contact.id ? "儲存修改" : "新增聯絡窗口"}</button>
  </form>`;
}

function revisionForm(task = {}) {
  const defaultProjectId = task.projectId || (state.route.startsWith("project:") ? currentProject().id : "");
  const selectedColumn = task.column || "收件匣";
  const selectedPriority = task.priority || "medium";
  const uploadKey = `revision-${task.id || "new"}`;
  return `<form class="form-stack" data-revision-form data-revision-id="${escapeHtml(task.id || "")}">
    <div class="form-field"><label for="revisionText">修改內容</label><textarea id="revisionText" name="title" required placeholder="先寫下要改什麼，稍後再補齊細節。">${escapeHtml(task.title || "")}</textarea></div>
    <div class="form-field"><label for="revisionProject">所屬專案</label><select id="revisionProject" name="projectId"><option value="">先放入收件匣</option>${projects.map(project => `<option value="${project.id}" ${defaultProjectId === project.id ? "selected" : ""}>${escapeHtml(project.name)}</option>`).join("")}</select></div>
    <div class="form-grid"><div class="form-field"><label for="revisionColumn">處理階段</label><select id="revisionColumn" name="column">${["收件匣", "待處理", "處理中", "待確認"].map(column => `<option ${selectedColumn === column ? "selected" : ""}>${column}</option>`).join("")}</select></div><div class="form-field"><label for="revisionPriority">優先級</label><select id="revisionPriority" name="priority"><option value="high" ${selectedPriority === "high" ? "selected" : ""}>高</option><option value="medium" ${selectedPriority === "medium" ? "selected" : ""}>一般</option><option value="low" ${selectedPriority === "low" ? "selected" : ""}>低</option></select></div></div>
    <div class="form-field"><label for="revisionDue">預計完成日</label><input id="revisionDue" name="dueDate" type="date" value="${escapeHtml(task.dueDate || "")}"></div>
    <div class="form-field"><label for="revisionNote">處理備註</label><textarea id="revisionNote" name="note" placeholder="記錄畫面位置、重現方式或等待確認的內容。">${escapeHtml(task.note || "")}</textarea></div>
    ${imageUploadField(uploadKey, task.images || [], "需求圖片")}
    ${task.attachments?.length ? `<div class="legacy-attachments"><div class="form-section-head"><strong>客戶附件</strong><span>${task.attachments.length} 個舊資料附件</span></div>${task.attachments.map(file => `<button type="button" class="attachment-download" data-download-attachment="${escapeHtml(file.id)}"><span>${icon("download")}<strong>${escapeHtml(file.name)}</strong></span><small>${formatFileSize(file.size)}</small></button>`).join("")}</div>` : ""}
    ${task.id ? `<label class="form-check"><input name="done" type="checkbox" ${task.done ? "checked" : ""}><span>${icon("check")}此修改已完成</span></label>` : ""}
    <button class="primary-button drawer-submit" type="submit">${task.id ? "儲存修改事項" : "加入修改收件匣"}</button>
  </form>`;
}

function assetForm(asset = {}) {
  const defaultProjectId = asset.projectId || (state.route.startsWith("project:") ? currentProject().id : "");
  const selectedCategory = asset.category || "企業官網";
  const selectedSource = asset.source || "靈感蒐集";
  return `<form class="form-stack" data-asset-form data-asset-id="${escapeHtml(asset.id || "")}">
    <div class="website-capture-intro">${icon("link")}<div><strong>貼上網站網址</strong><span>抓取完成後會自動帶入網站標題與分享預覽圖。</span></div></div>
    <div class="form-field asset-url-field"><label for="assetPageUrl">網站網址</label><div class="asset-url-input"><input id="assetPageUrl" name="pageUrl" type="url" required value="${escapeHtml(asset.pageUrl || "")}" placeholder="https://example.com" inputmode="url" spellcheck="false"><button type="button" class="outline-button" data-asset-preview-url>${asset.pageUrl ? "重新抓取" : "抓取網站資料"}</button></div><small>依序讀取網站標題、og:image、Twitter Card 與頁面代表圖。</small><input name="previewUrl" id="assetPreviewUrl" type="hidden" value="${escapeHtml(asset.previewUrl || asset.externalUrl || "")}"><input name="previewSource" id="assetPreviewSource" type="hidden" value="${escapeHtml(asset.previewSource || "")}"></div>
    <div class="asset-url-preview ${asset.previewUrl || asset.externalUrl ? "has-image" : ""}" id="assetUrlPreview" aria-live="polite"><img ${asset.previewUrl || asset.externalUrl ? `src="${escapeHtml(asset.previewUrl || asset.externalUrl)}"` : ""} alt="網頁擷取預覽" ${asset.previewUrl || asset.externalUrl ? "" : "hidden"}><span id="assetUrlStatus">${asset.previewUrl || asset.externalUrl ? `已保存${asset.previewSource ? ` · ${escapeHtml(asset.previewSource)}` : ""}` : "貼上網頁網址後抓取預覽"}</span></div>
    <div class="form-field"><label for="assetName">網站標題</label><input id="assetName" name="title" required value="${escapeHtml(assetTitle(asset) === "未命名網站" ? "" : assetTitle(asset))}" placeholder="抓取後自動帶入，也可以自行修改"></div>
    <div class="form-grid"><div class="form-field"><label for="assetCategory">網站分類</label><select id="assetCategory" name="category">${siteCategories.map(category => `<option ${selectedCategory === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}</select></div><div class="form-field"><label for="assetSource">收藏來源</label><select id="assetSource" name="source">${["靈感蒐集", "客戶參考", "同業案例", "技術研究", "動效參考"].map(source => `<option ${selectedSource === source ? "selected" : ""}>${source}</option>`).join("")}</select></div></div>
    <div class="form-field"><label for="assetProject">關聯專案</label><select id="assetProject" name="projectId"><option value="">未指定專案</option>${projects.map(project => `<option value="${project.id}" ${defaultProjectId === project.id ? "selected" : ""}>${escapeHtml(project.name)}</option>`).join("")}</select></div>
    <div class="form-grid"><div class="form-field"><label for="assetUsage">參考重點</label><input id="assetUsage" name="usage" value="${escapeHtml(asset.usage || "")}" placeholder="例如：首頁編排、選單動效"></div><div class="form-field"><label for="assetTags">標籤</label><input id="assetTags" name="tags" value="${escapeHtml(asset.tags || "")}" placeholder="品牌、電商、GSAP"></div></div>
    <div class="form-field"><label for="assetNote">收藏備註</label><textarea id="assetNote" name="note" placeholder="記下值得參考的區塊、互動方式或套用想法。">${escapeHtml(asset.note || "")}</textarea></div>
    <button class="primary-button drawer-submit" type="submit">${asset.id ? "儲存網站資料" : "加入網站素材庫"}</button>
  </form>`;
}

function categoryManager() {
  return `<div class="category-manager">
    <form class="category-create" data-category-form>
      <div class="form-field"><label for="categoryName">新增分類</label><div class="category-create-row"><input id="categoryName" name="categoryName" required maxlength="18" placeholder="例如：餐飲網站"><button class="primary-button" type="submit">新增</button></div><small class="category-form-error" aria-live="polite"></small></div>
    </form>
    <div class="category-list" data-category-kind="site" aria-label="網站分類列表">${siteCategories.map(category => {
      const count = assets.filter(asset => asset.category === category).length;
      const locked = category === "未分類";
      return `<div class="category-row" data-category-row="${escapeHtml(category)}" data-category-name="${escapeHtml(category)}" ${locked ? `data-category-locked="true"` : ""}>${categoryDragHandle(category, locked)}<span><strong>${escapeHtml(category)}</strong><small>${count} 個網站${locked ? " · 系統分類" : ""}</small></span><div><button class="outline-button" data-category-edit="${escapeHtml(category)}" ${locked ? "disabled" : ""}>修改</button><button class="category-delete" data-category-delete="${escapeHtml(category)}" ${locked ? "disabled" : ""}>刪除</button></div></div>`;
    }).join("")}</div>
    <p class="category-footnote">刪除使用中的分類時，原有網站會移到「未分類」。</p>
  </div>`;
}

function categoryEditForm(category) {
  const count = assets.filter(asset => asset.category === category).length;
  return `<form class="form-stack" data-category-form data-old-category="${escapeHtml(category)}"><div class="category-edit-summary"><strong>${escapeHtml(category)}</strong><span>${count} 個網站會同步更新分類名稱</span></div><div class="form-field"><label for="categoryName">分類名稱</label><input id="categoryName" name="categoryName" required maxlength="18" value="${escapeHtml(category)}"><small class="category-form-error" aria-live="polite"></small></div><button class="primary-button drawer-submit" type="submit">儲存分類名稱</button><button class="outline-button drawer-wide-action" type="button" data-action="manage-categories">返回分類列表</button></form>`;
}

function libraryCategoryConfig(kind) {
  return kind === "package"
    ? { categories: packageCategories, records: packages, field: "state", title: "套件分類", unit: "個套件", placeholder: "例如：動畫與互動", manageAction: "manage-package-categories" }
    : { categories: promptCategories, records: prompts, field: "type", title: "提示詞分類", unit: "組提示詞", placeholder: "例如：網站企劃", manageAction: "manage-prompt-categories" };
}

function libraryCategoryManager(kind) {
  const config = libraryCategoryConfig(kind);
  return `<div class="category-manager">
    <form class="category-create" data-library-category-form data-category-kind="${kind}">
      <div class="form-field"><label for="libraryCategoryName">新增分類</label><div class="category-create-row"><input id="libraryCategoryName" name="categoryName" required maxlength="18" placeholder="${config.placeholder}"><button class="primary-button" type="submit">新增</button></div><small class="category-form-error" aria-live="polite"></small></div>
    </form>
    <div class="category-list" data-category-kind="${kind}" aria-label="${config.title}列表">${config.categories.map(category => {
      const count = config.records.filter(record => record[config.field] === category).length;
      const locked = category === "未分類";
      return `<div class="category-row" data-category-name="${escapeHtml(category)}" ${locked ? `data-category-locked="true"` : ""}>${categoryDragHandle(category, locked)}<span><strong>${escapeHtml(category)}</strong><small>${count} ${config.unit}${locked ? " · 系統分類" : ""}</small></span><div><button class="outline-button" data-library-category-edit="${escapeHtml(category)}" data-category-kind="${kind}" ${locked ? "disabled" : ""}>修改</button><button class="category-delete" data-library-category-delete="${escapeHtml(category)}" data-category-kind="${kind}" ${locked ? "disabled" : ""}>刪除</button></div></div>`;
    }).join("")}</div>
    <p class="category-footnote">刪除使用中的分類時，原有資料會移到「未分類」。</p>
  </div>`;
}

function libraryCategoryEditForm(kind, category) {
  const config = libraryCategoryConfig(kind);
  const count = config.records.filter(record => record[config.field] === category).length;
  return `<form class="form-stack" data-library-category-form data-category-kind="${kind}" data-old-category="${escapeHtml(category)}"><div class="category-edit-summary"><strong>${escapeHtml(category)}</strong><span>${count} ${config.unit}會同步更新分類名稱</span></div><div class="form-field"><label for="libraryCategoryName">分類名稱</label><input id="libraryCategoryName" name="categoryName" required maxlength="18" value="${escapeHtml(category)}"><small class="category-form-error" aria-live="polite"></small></div><button class="primary-button drawer-submit" type="submit">儲存分類名稱</button><button class="outline-button drawer-wide-action" type="button" data-action="${config.manageAction}">返回分類列表</button></form>`;
}

// ========================================
// 分類排序：拖曳與鍵盤共用同一套搬移流程
// ========================================

function categoryDragHandle(category, locked) {
  return locked
    ? `<button type="button" class="category-drag" disabled aria-label="「${escapeHtml(category)}」固定排在最後">${icon("grip")}</button>`
    : `<button type="button" class="category-drag" data-category-drag aria-label="調整「${escapeHtml(category)}」的順序，可拖曳或按上下方向鍵">${icon("grip")}</button>`;
}

function categoryListFor(kind) {
  return kind === "site" ? siteCategories : libraryCategoryConfig(kind).categories;
}

function categoryManagerMarkup(kind) {
  return kind === "site" ? categoryManager() : libraryCategoryManager(kind);
}

/**
 * 以目前的 DOM 排列更新分類陣列，再重建抽屜內容
 * @param {HTMLElement} listEl - .category-list 容器
 * @param {string} focusCategory - 重建後要重新聚焦的分類（鍵盤操作用）
 */
function commitCategoryOrder(listEl, focusCategory = "") {
  const kind = listEl.dataset.categoryKind;
  const list = categoryListFor(kind);
  const names = [...listEl.querySelectorAll("[data-category-name]")].map(row => row.dataset.categoryName);
  if (names.length !== list.length) return;
  list.splice(0, list.length, ...names);
  render();
  drawerBody.innerHTML = categoryManagerMarkup(kind);
  if (focusCategory) drawerBody.querySelector(`[data-category-name="${CSS.escape(focusCategory)}"] [data-category-drag]`)?.focus();
}

function focusProjectForm() {
  const manual = projects.find(project => project.isFocus);
  const automatic = automaticFocusProject();
  const orderedProjects = [...projects].sort((a, b) => Number(a.statusClass === "done") - Number(b.statusClass === "done") || projectUpdatedTimestamp(b) - projectUpdatedTimestamp(a));
  return `<form class="form-stack" data-focus-project-form>
    <div class="focus-choice-note"><span>${icon("bolt")}</span><div><strong>${manual ? `目前手動指定：${escapeHtml(manual.name)}` : "目前使用自動焦點"}</strong><small>手動指定會保留到你下次更改；自動模式會選擇最近有動作、尚未交付的專案。</small></div></div>
    <div class="form-field"><label for="focusProjectId">焦點專案</label><select id="focusProjectId" name="projectId"><option value="" ${manual ? "" : "selected"}>自動選擇${automatic ? `（目前：${escapeHtml(automatic.name)}）` : ""}</option>${orderedProjects.map(project => `<option value="${escapeHtml(project.id)}" ${manual?.id === project.id ? "selected" : ""}>${escapeHtml(project.name)} · ${escapeHtml(project.status)} · ${escapeHtml(formatProjectUpdated(project.updated))}</option>`).join("")}</select><small>已交付專案也可手動指定，但自動模式會優先略過。</small></div>
    <button class="primary-button drawer-submit" type="submit">儲存目前焦點</button>
  </form>`;
}

function packageForm(pkg = {}) {
  const selectedProjects = pkg.projectIds || (state.route.startsWith("project:") ? [currentProject().id] : []);
  const selectedState = pkg.state || "穩定使用中";
  const uploadKey = `package-${pkg.id || "new"}`;
  return `<form class="form-stack" data-package-form data-package-id="${escapeHtml(pkg.id || "")}">
    <div class="form-grid"><div class="form-field"><label for="packageName">套件名稱</label><input id="packageName" name="name" required value="${escapeHtml(pkg.name || "")}" placeholder="例如：Swiper"></div><div class="form-field"><label for="packageCode">縮寫</label><input id="packageCode" name="code" maxlength="4" value="${escapeHtml(pkg.code || "")}" placeholder="SW"></div></div>
    <div class="form-field"><label for="packageNote">主要用途</label><input id="packageNote" name="note" required value="${escapeHtml(pkg.note || "")}" placeholder="例如：觸控輪播與內容滑動"></div>
    <div class="form-grid"><div class="form-field"><label for="packageVersion">目前使用版本</label><input id="packageVersion" name="version" required value="${escapeHtml(pkg.version || "")}" placeholder="11.2.10" spellcheck="false"></div><div class="form-field"><label for="packageLatest">可用最新版本</label><input id="packageLatest" name="latestVersion" value="${escapeHtml(pkg.latestVersion || pkg.version || "")}" placeholder="12.0.2" spellcheck="false"></div></div>
    <div class="form-field"><label for="packageState">套件分類</label><select id="packageState" name="state">${packageCategories.map(item => `<option ${selectedState === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></div>
    <div class="form-field"><label for="packageSource">官方文件／來源網址</label><input id="packageSource" name="sourceUrl" type="url" value="${escapeHtml(pkg.sourceUrl || "")}" placeholder="https://example.com/docs" inputmode="url" spellcheck="false"></div>
    <fieldset class="package-project-field"><legend>使用中的專案</legend><div>${projects.map(project => `<label><input type="checkbox" name="projectIds" value="${project.id}" ${selectedProjects.includes(project.id) ? "checked" : ""}><span>${escapeHtml(project.name)}</span></label>`).join("")}</div></fieldset>
    <div class="form-field"><label for="packageCompatibility">相容性與升級注意</label><textarea id="packageCompatibility" name="compatibility" placeholder="記錄瀏覽器限制、breaking changes 或搭配套件。">${escapeHtml(pkg.compatibility || "")}</textarea></div>
    <div class="form-field"><label for="packageSnippet">安裝／初始化片段</label><textarea id="packageSnippet" class="code-input" name="snippet" spellcheck="false" placeholder="貼上常用的引入或初始化程式碼。">${escapeHtml(pkg.snippet || "")}</textarea></div>
    ${imageUploadField(uploadKey, pkg.images || [], "套件圖片")}
    ${fileUploadField(uploadKey, pkg.files || [], "套件文件")}
    <button class="primary-button drawer-submit" type="submit">${pkg.id ? "儲存套件資料" : "加入套件庫"}</button>
  </form>`;
}

function packageDetail(pkg) {
  const sourceUrl = normalizeHttpUrl(pkg.sourceUrl);
  const history = pkg.history || [];
  return `<div class="package-detail"><div class="package-detail-head"><span class="data-icon">${escapeHtml(pkg.code)}</span><div><strong>${escapeHtml(pkg.name)}</strong><span>${escapeHtml(pkg.note)}</span></div><span class="state-tag ${packageStateClass(pkg.state)}">${escapeHtml(pkg.state)}</span></div>
    <div class="package-current-version"><span>目前使用版本</span><strong>v${escapeHtml(pkg.version)}</strong><small>${pkg.latestVersion && pkg.latestVersion !== pkg.version ? `可測試 v${escapeHtml(pkg.latestVersion)}` : "目前為登記的最新版本"}</small></div>
    ${pkg.snippet ? `<div class="detail-code">${escapeHtml(pkg.snippet)}</div>` : ""}
    <dl class="package-detail-list"><div><dt>使用專案</dt><dd>${escapeHtml(pkg.projectIds.map(id => projects.find(project => project.id === id)?.name).filter(Boolean).join("、") || "尚未關聯")}</dd></div><div><dt>相容性</dt><dd>${escapeHtml(pkg.compatibility || "尚未記錄")}</dd></div>${sourceUrl ? `<div><dt>官方來源</dt><dd><button class="asset-url-copy" data-copy="${escapeHtml(sourceUrl)}">${icon("copy")}複製網址</button></dd></div>` : ""}</dl>
    ${detailMedia(pkg.images || [], pkg.files || [], "套件素材與文件")}
    <div class="package-history"><div><strong>版本歷程</strong><small>${history.length} 筆</small></div>${history.length ? history.map(item => `<div class="package-history-row"><strong>v${escapeHtml(item.version)}</strong><span>${escapeHtml(item.note || "版本更新")}</span><small>${escapeHtml(item.date)}</small></div>`).join("") : `<p>目前還沒有舊版紀錄。</p>`}</div>
    ${sourceUrl ? `<button class="outline-button drawer-wide-action" data-open-url="${escapeHtml(sourceUrl)}">${icon("external")}開啟官方文件</button>` : ""}<button class="primary-button drawer-submit" data-package-edit="${pkg.id}">${icon("edit")}修改套件資料</button></div>`;
}

function promptForm(prompt = {}) {
  const selectedProjects = prompt.projectIds || (state.route.startsWith("project:") ? [currentProject().id] : []);
  const selectedType = prompt.type || "圖片生成";
  const uploadKey = `prompt-${prompt.id || "new"}`;
  return `<form class="form-stack" data-prompt-form data-prompt-id="${escapeHtml(prompt.id || "")}">
    <div class="form-grid"><div class="form-field"><label for="promptTitle">提示詞名稱</label><input id="promptTitle" name="title" required value="${escapeHtml(prompt.title || "")}" placeholder="例如：產品情境主視覺"></div><div class="form-field"><label for="promptType">用途分類</label><select id="promptType" name="type">${promptCategories.map(type => `<option ${selectedType === type ? "selected" : ""}>${escapeHtml(type)}</option>`).join("")}</select></div></div>
    <div class="form-field"><label for="promptModel">使用模型／工具</label><input id="promptModel" name="model" required value="${escapeHtml(prompt.model || "")}" placeholder="例如：ImageGen、Runway、Codex"></div>
    <div class="form-field"><label for="promptBody">提示詞全文</label><textarea id="promptBody" class="prompt-body-input" name="body" required spellcheck="false" placeholder="貼上完整提示詞；可用 {{variable}} 標記替換內容。">${escapeHtml(prompt.body || "")}</textarea><small>修改全文時會自動保留上一版，不會覆蓋唯一紀錄。</small></div>
    <div class="form-field"><label for="promptVariables">可替換變數</label><input id="promptVariables" name="variables" value="${escapeHtml((prompt.variables || []).join(", "))}" placeholder="product, environment, brand_color"><small>用半形逗號分隔；卡片會顯示為 {{variable}}。</small></div>
    <fieldset class="package-project-field"><legend>關聯專案</legend><div>${projects.map(project => `<label><input type="checkbox" name="projectIds" value="${project.id}" ${selectedProjects.includes(project.id) ? "checked" : ""}><span>${escapeHtml(project.name)}</span></label>`).join("")}</div></fieldset>
    <div class="form-field"><label for="promptNote">使用筆記</label><textarea id="promptNote" name="note" placeholder="記下適用情境、容易失敗的條件或輸出規格。">${escapeHtml(prompt.note || "")}</textarea></div>
    <div class="form-field"><label for="promptOutput">成果或工具網址</label><input id="promptOutput" name="outputUrl" type="url" value="${escapeHtml(prompt.outputUrl || "")}" placeholder="https://..." inputmode="url" spellcheck="false"><small>可放生成成果、對話或模型工具網址。</small></div>
    ${imageUploadField(uploadKey, prompt.images || [], "提示詞圖片")}
    ${fileUploadField(uploadKey, prompt.files || [], "提示詞文件")}
    <button class="primary-button drawer-submit" type="submit">${prompt.id ? "儲存提示詞版本" : "加入提示詞庫"}</button>
  </form>`;
}

function promptDetail(prompt) {
  const version = (prompt.history?.length || 0) + 1;
  const outputUrl = normalizeHttpUrl(prompt.outputUrl);
  const history = prompt.history || [];
  const projectNames = prompt.projectIds.map(id => projects.find(project => project.id === id)?.name).filter(Boolean);
  return `<div class="prompt-detail"><div class="prompt-detail-head"><span class="prompt-type">${escapeHtml(prompt.type)}</span><span>v${version} · ${escapeHtml(prompt.updated)}</span></div><div class="prompt-detail-model"><span>使用模型／工具</span><strong>${escapeHtml(prompt.model)}</strong></div><div class="prompt-detail-body"><div><strong>提示詞全文</strong><button class="field-copy-button" data-copy-prompt="${prompt.id}">${icon("copy")}複製全文</button></div><pre>${escapeHtml(prompt.body)}</pre></div><div class="variables prompt-detail-variables">${prompt.variables.map(variable => `<span>{{${escapeHtml(variable)}}}</span>`).join("") || `<small>沒有設定變數</small>`}</div><dl class="package-detail-list"><div><dt>關聯專案</dt><dd>${escapeHtml(projectNames.join("、") || "尚未關聯")}</dd></div><div><dt>使用筆記</dt><dd>${escapeHtml(prompt.note || "尚未記錄")}</dd></div>${outputUrl ? `<div><dt>成果連結</dt><dd><button class="asset-url-copy" data-copy="${escapeHtml(outputUrl)}">${icon("copy")}複製網址</button></dd></div>` : ""}</dl>${detailMedia(prompt.images || [], prompt.files || [], "提示詞素材與文件")}<div class="prompt-history"><div><strong>版本紀錄</strong><small>${history.length} 個舊版本</small></div>${history.length ? history.map(item => `<details class="prompt-history-row"><summary><strong>v${escapeHtml(item.version)}</strong><span>${escapeHtml(item.note || "提示詞內容更新")}</span><small>${escapeHtml(item.date)}</small></summary><pre>${escapeHtml(item.body)}</pre><button class="outline-button" data-copy="${escapeHtml(item.body)}">${icon("copy")}複製這一版</button></details>`).join("") : `<p>目前還沒有舊版本；第一次修改全文後會自動建立。</p>`}</div>${outputUrl ? `<button class="outline-button drawer-wide-action" data-open-url="${escapeHtml(outputUrl)}">${icon("external")}開啟成果或工具</button>` : ""}<button class="primary-button drawer-submit" data-prompt-edit="${prompt.id}">${icon("edit")}修改提示詞</button></div>`;
}

function noteForm(note = {}) {
  const selectedType = note.type || "一般筆記";
  return `<form class="form-stack" data-note-form data-note-id="${escapeHtml(note.id || "")}"><div class="form-grid"><div class="form-field"><label for="noteTitle">筆記標題</label><input id="noteTitle" name="title" required value="${escapeHtml(note.title || "")}" placeholder="例如：手機導覽實作決策"></div><div class="form-field"><label for="noteType">筆記類型</label><select id="noteType" name="type">${["技術決策", "視覺規格", "上線紀錄", "一般筆記"].map(type => `<option ${type === selectedType ? "selected" : ""}>${type}</option>`).join("")}</select></div></div><div class="form-field"><label for="noteBody">筆記內容</label><textarea id="noteBody" class="note-body-input" name="body" required placeholder="記下決定、原因、限制與下一步。">${escapeHtml(note.body || "")}</textarea></div><div class="form-field"><label for="noteCode">相關程式碼</label><textarea id="noteCode" class="code-input" name="code" spellcheck="false" placeholder="選填：貼上設定、指令或程式碼片段。">${escapeHtml(note.code || "")}</textarea></div><div class="form-field"><label for="noteSource">參考網址</label><input id="noteSource" name="sourceUrl" type="url" value="${escapeHtml(note.sourceUrl || "")}" placeholder="https://..." inputmode="url" spellcheck="false"></div><label class="form-check"><input type="checkbox" name="pinned" ${note.pinned ? "checked" : ""}><span>${icon("bolt")}置頂在專案總覽</span></label><button class="primary-button drawer-submit" type="submit">${note.id ? "儲存筆記" : "加入專案筆記"}</button></form>`;
}

function noteDetail(note) {
  const sourceUrl = normalizeHttpUrl(note.sourceUrl);
  return `<div class="note-detail"><div class="note-detail-head"><span class="note-type">${escapeHtml(note.type)}</span><span>${note.pinned ? "已置頂 · " : ""}${escapeHtml(note.updated)}</span></div><div class="note-detail-body">${escapeHtml(note.body).replace(/\n/g, "<br>")}</div>${note.code ? `<div class="note-code"><div><strong>相關程式碼</strong><button class="field-copy-button" data-copy="${escapeHtml(note.code)}">${icon("copy")}複製</button></div><pre>${escapeHtml(note.code)}</pre></div>` : ""}${sourceUrl ? `<button class="outline-button drawer-wide-action" data-open-url="${escapeHtml(sourceUrl)}">${icon("external")}開啟參考網址</button>` : ""}<button class="primary-button drawer-submit" data-note-edit="${note.id}">${icon("edit")}修改筆記</button></div>`;
}

function checklistForm(item = {}) {
  const selectedCategory = item.category || "功能";
  return `<form class="form-stack" data-check-form data-check-id="${escapeHtml(item.id || "")}"><div class="form-field"><label for="checkTitle">檢查項目</label><input id="checkTitle" name="title" required value="${escapeHtml(item.title || "")}" placeholder="例如：表單錯誤與成功狀態"></div><div class="form-field"><label for="checkCategory">檢查分類</label><select id="checkCategory" name="category">${["內容", "響應式", "功能", "SEO", "部署"].map(category => `<option ${category === selectedCategory ? "selected" : ""}>${category}</option>`).join("")}</select></div><div class="form-field"><label for="checkNote">完成標準／備註</label><textarea id="checkNote" name="note" placeholder="寫清楚要檢查哪些尺寸、狀態或環境。">${escapeHtml(item.note || "")}</textarea></div>${item.id ? `<label class="form-check"><input type="checkbox" name="done" ${item.done ? "checked" : ""}><span>${icon("check")}這個項目已完成</span></label>` : ""}<button class="primary-button drawer-submit" type="submit">${item.id ? "儲存檢查項目" : "加入交付清單"}</button></form>`;
}

function assetDetail(asset) {
  const pageUrl = normalizeHttpUrl(asset.pageUrl);
  return `<div class="asset-detail">${assetPreview(asset, true)}<div class="asset-detail-name"><strong>${escapeHtml(assetTitle(asset))}</strong>${pageUrl ? `<button class="field-copy-button" data-copy="${escapeHtml(pageUrl)}">${icon("copy")}複製網址</button>` : ""}</div><dl>${pageUrl ? `<div><dt>網站網址</dt><dd><button class="asset-url-copy" data-copy="${escapeHtml(pageUrl)}">${icon("copy")}${escapeHtml(assetDomain(asset))}</button></dd></div>` : ""}<div><dt>網站分類</dt><dd>${escapeHtml(asset.category)}</dd></div><div><dt>收藏來源</dt><dd>${escapeHtml(asset.source)}</dd></div><div><dt>關聯專案</dt><dd>${escapeHtml(assetProjectName(asset))}</dd></div><div><dt>參考重點</dt><dd>${escapeHtml(asset.usage || "尚未記錄")}</dd></div><div><dt>標籤</dt><dd>${escapeHtml(asset.tags || "尚未加入")}</dd></div><div><dt>預覽來源</dt><dd>${escapeHtml(asset.previewSource || "示意預覽")}</dd></div></dl><div class="asset-detail-note"><strong>收藏備註</strong><p>${escapeHtml(asset.note || "尚未加入備註。")}</p></div>${pageUrl ? `<button class="outline-button drawer-wide-action" data-open-url="${escapeHtml(pageUrl)}">${icon("external")}開啟網站</button>` : ""}<button class="primary-button drawer-submit" data-asset-edit="${asset.id}">${icon("edit")}修改網站資料</button></div>`;
}

function drawerContent(type, payload) {
  if (type === "capture") return {
    context: state.route.startsWith("project:") ? currentProject().name : "修改收件匣",
    title: "記一筆修改",
    body: revisionForm()
  };
  if (type === "edit-revision") {
    const task = tasks.find(item => item.id === Number(payload.revisionId)) || {};
    return { context: task.project || "修改收件匣", title: "修改事項", body: revisionForm(task) };
  }
  if (type === "upload") return { context: state.route.startsWith("project:") ? currentProject().name : "網站素材庫", title: "收藏網站", body: assetForm() };
  if (type === "manage-categories") return { context: "網站素材庫", title: "管理分類", body: categoryManager() };
  if (type === "edit-category") return { context: "管理分類", title: "修改分類", body: categoryEditForm(payload.category || "") };
  if (type === "manage-package-categories") return { context: "套件庫", title: "管理分類", body: libraryCategoryManager("package") };
  if (type === "edit-package-category") return { context: "套件庫 · 管理分類", title: "修改分類", body: libraryCategoryEditForm("package", payload.category || "") };
  if (type === "manage-prompt-categories") return { context: "提示詞庫", title: "管理分類", body: libraryCategoryManager("prompt") };
  if (type === "edit-prompt-category") return { context: "提示詞庫 · 管理分類", title: "修改分類", body: libraryCategoryEditForm("prompt", payload.category || "") };
  if (type === "new-package") return { context: state.route.startsWith("project:") ? currentProject().name : "套件庫", title: "登記套件", body: packageForm() };
  if (type === "edit-package") {
    const pkg = packages.find(item => item.id === payload.packageId) || {};
    return { context: "套件庫", title: "修改套件", body: packageForm(pkg) };
  }
  if (type === "new-prompt") return { context: state.route.startsWith("project:") ? currentProject().name : "提示詞庫", title: "新增提示詞", body: promptForm() };
  if (type === "edit-prompt") {
    const prompt = prompts.find(item => item.id === payload.promptId) || {};
    return { context: "提示詞庫 · 保留舊版本", title: "修改提示詞", body: promptForm(prompt) };
  }
  if (type === "add-note") return { context: currentProject().name, title: "新增專案筆記", body: noteForm() };
  if (type === "edit-note") {
    const note = projectNoteList(currentProject().id).find(item => item.id === payload.noteId) || {};
    return { context: currentProject().name, title: "修改專案筆記", body: noteForm(note) };
  }
  if (type === "note") {
    const note = projectNoteList(currentProject().id).find(item => item.id === payload.noteId);
    if (note) return { context: `${note.type} · ${note.updated}`, title: note.title, body: noteDetail(note) };
  }
  if (type === "add-check") return { context: currentProject().name, title: "新增交付檢查", body: checklistForm() };
  if (type === "edit-check") {
    const item = projectChecklist(currentProject().id).find(check => check.id === payload.checkId) || {};
    return { context: `${currentProject().name} · 交付清單`, title: "修改檢查項目", body: checklistForm(item) };
  }
  if (type === "edit-asset") {
    const asset = assets.find(item => item.id === payload.assetId) || {};
    return { context: assetProjectName(asset), title: "修改網站收藏", body: assetForm(asset) };
  }
  if (type === "asset") {
    const asset = assets.find(item => item.id === payload.assetId);
    if (asset) return { context: `${asset.category} · ${assetDomain(asset)}`, title: "網站收藏", body: assetDetail(asset) };
  }
  if (type === "new-project") return {
    context: "快速建立",
    title: "建立新專案",
    body: projectCreateForm()
  };
  if (type === "choose-focus") return { context: "首頁 · 工作排序", title: "切換目前焦點", body: focusProjectForm() };
  if (type === "edit-project-stage") return {
    context: currentProject().name,
    title: "修改目前階段",
    body: projectStageForm(currentProject())
  };
  if (type === "edit-project-due") return {
    context: currentProject().name,
    title: "修改交付日期",
    body: projectDueForm(currentProject())
  };
  if (type === "edit-connection") return {
    context: "專案設定",
    title: "FTP 與 Database",
    body: `<form class="form-stack" data-project-connection-form>${connectionFormFields(projectConnections[currentProject().id] || {})}<button class="primary-button drawer-submit" type="submit">儲存連線資訊</button></form>`
  };
  if (type === "edit-project-entry") return { context: currentProject().name, title: "管理專案入口", body: projectEntryForm(currentProject()) };
  if (type === "add-contact") return { context: currentProject().name, title: "新增聯絡窗口", body: contactForm() };
  if (type === "edit-contact") {
    const contact = (projectContacts[currentProject().id] || []).find(item => item.id === payload.contactId) || {};
    return { context: currentProject().name, title: "修改聯絡窗口", body: contactForm(contact) };
  }
  if (type === "package") {
    const pkg = packages.find(item => item.id === payload.packageId);
    if (pkg) return { context: `${packageProjectLabel(pkg)} · 原型假資料`, title: pkg.name, body: packageDetail(pkg) };
  }
  if (type === "prompt") { const prompt = prompts.find(item => item.id === payload.promptId); if (prompt) return { context: `${prompt.type} · 原型假資料`, title: prompt.title, body: promptDetail(prompt) }; }
  return { context: "新增資料", title: "建立項目", body: `<form class="form-stack" data-demo-form="項目"><div class="form-field"><label>名稱</label><input required placeholder="輸入名稱"></div><div class="form-field"><label>備註</label><textarea placeholder="補充來源、用途或使用方式"></textarea></div><button class="primary-button drawer-submit">儲存示範資料</button></form>` };
}

const commandDialog = document.querySelector("#commandDialog");
const commandInput = document.querySelector("#commandInput");
const commandResults = document.querySelector("#commandResults");

const commands = [
  { icon: "plus", title: "建立新專案", meta: "動作", action: "new-project" },
  { icon: "inbox", title: "記一筆修改", meta: "動作", action: "capture" },
  { icon: "image", title: "收藏網站", meta: "動作", action: "upload" },
  ...projects.map(p => ({ icon: "folder", title: p.name, meta: p.client, route: `project:${p.id}` })),
  ...packages.map(p => ({ icon: "package", title: p.name, meta: `v${p.version}`, route: "packages" })),
  ...prompts.map(p => ({ icon: "spark", title: p.title, meta: p.type, promptId: p.id }))
];

function renderCommands(query = "") {
  const normalized = query.trim().toLowerCase();
  const result = commands.filter(item => `${item.title} ${item.meta}`.toLowerCase().includes(normalized)).slice(0, 9);
  commandResults.innerHTML = result.length ? `<p class="command-group-label">${normalized ? "搜尋結果" : "快速前往"}</p>${result.map((item, index) => `<button type="button" class="command-result ${index === 0 ? "is-selected" : ""}" data-command="${commands.indexOf(item)}"><span class="data-icon">${icon(item.icon)}</span><span><strong>${item.title}</strong><small>${item.meta}</small></span><span>${item.action ? "動作" : "開啟"}</span></button>`).join("")}` : emptyState("search", "找不到結果", "換個關鍵字，或直接建立新的項目。") ;
}

function openCommand() {
  renderCommands();
  commandDialog.showModal();
  setTimeout(() => commandInput.focus(), 30);
}

function executeCommand(index) {
  const item = commands[index];
  if (!item) return;
  commandDialog.close();
  commandInput.value = "";
  if (item.action) openDrawer(item.action);
  else if (item.route) navigate(item.route);
  else if (item.promptId) openDrawer("prompt", { promptId: item.promptId });
}

document.addEventListener("click", async event => {
  const fileDownload = event.target.closest("[data-download-file]");
  if (fileDownload) {
    const file = [...allFileOwners().flatMap(owner => owner.files), ...[...fileDrafts.values()].flat()].find(item => item.id === fileDownload.dataset.downloadFile);
    if (!file) return;
    try {
      if (!file.dataUrl && file.cloudPath && syncToken()) file.dataUrl = await readGithubBinaryDataUrl(file.cloudPath, syncToken(), file.type);
      if (!file.dataUrl) throw new Error("這個文件尚未同步，請先儲存並上傳目前資料。");
      const link = document.createElement("a");
      link.href = file.dataUrl;
      link.download = file.name || "document";
      link.click();
    } catch (error) { showToast(error.message); }
    return;
  }
  const attachmentButton = event.target.closest("[data-download-attachment]");
  if (attachmentButton) {
    const attachmentId = attachmentButton.dataset.downloadAttachment;
    const attachment = tasks.flatMap(task => task.attachments || []).find(file => file.id === attachmentId);
    if (!attachment?.dataUrl) { showToast("這個附件目前沒有可下載的本機內容"); return; }
    const link = document.createElement("a");
    link.href = attachment.dataUrl;
    link.download = attachment.name || "attachment";
    link.click();
    return;
  }
  const secretToggle = event.target.closest("[data-toggle-secret]");
  if (secretToggle) {
    const field = document.querySelector(`#${secretToggle.dataset.toggleSecret}`);
    if (!field) return;
    field.type = field.type === "password" ? "text" : "password";
    secretToggle.textContent = field.type === "password" ? "顯示" : "隱藏";
    return;
  }
  if (event.target.closest("[data-export-json]")) {
    syncPassphrase = document.querySelector("#syncPassphrase")?.value || syncPassphrase;
    try { await exportPortableJson(); showToast("已下載加密 JSON 備份"); }
    catch (error) { setSyncStatus("error", "無法匯出備份", error.message); showToast(error.message); }
    return;
  }
  if (event.target.closest("[data-import-json]")) { document.querySelector("#jsonImportInput")?.click(); return; }
  if (event.target.closest("[data-sync-disconnect]")) {
    localStorage.removeItem(SYNC_TOKEN_KEY);
    sessionStorage.removeItem(SYNC_TOKEN_KEY);
    localStorage.removeItem(SYNC_PASSPHRASE_KEY);
    syncPassphrase = "";
    syncConfig.rememberToken = false;
    syncConfig.lastSha = "";
    saveSyncConfig();
    setSyncStatus("idle", "已清除此裝置的連線", "Repository 名稱仍保留；Token 與解密密碼已從這個瀏覽器移除。");
    render();
    showToast("已清除 Token 與解密密碼");
    return;
  }
  if (event.target.closest("[data-sync-pull]")) {
    if (syncBusy) return;
    if (hasUnsyncedChanges() && !window.confirm("這個分頁有尚未上傳的修改，下載會以 GitHub 資料覆蓋且無法復原。\n\n建議先按「上傳目前資料」。確定仍要下載嗎？")) return;
    syncPassphrase = document.querySelector("#syncPassphrase")?.value || syncPassphrase;
    setSyncBusy(true);
    try { setSyncStatus("busy", "正在下載", "讀取並解密 GitHub 上的工作台資料…"); await pullFromGithub(); showToast("已套用 GitHub 資料"); }
    catch (error) { setSyncStatus("error", "下載未完成", error.message); showToast(error.message); }
    finally { setSyncBusy(false); }
    return;
  }
  if (event.target.closest("[data-sync-push]")) {
    if (syncBusy) return;
    syncPassphrase = document.querySelector("#syncPassphrase")?.value || syncPassphrase;
    setSyncBusy(true);
    try { setSyncStatus("busy", "正在加密並上傳", "確認雲端版本後寫入目前資料…"); await pushToGithub(); showToast("已同步至 GitHub"); }
    catch (error) { setSyncStatus("error", "上傳未完成", error.message); showToast(error.message); }
    finally { setSyncBusy(false); }
    return;
  }
  const imageSelect = event.target.closest("[data-image-select]");
  if (imageSelect) { imageSelect.closest("[data-image-uploader]")?.querySelector("[data-image-file]")?.click(); return; }
  const imagePaste = event.target.closest("[data-image-paste]");
  if (imagePaste) { await pasteImagesFromClipboard(imagePaste.closest("[data-image-uploader]").dataset.uploadKey); return; }
  const imageRemove = event.target.closest("[data-image-remove]");
  if (imageRemove) {
    const uploader = imageRemove.closest("[data-image-uploader]");
    const key = uploader.dataset.uploadKey;
    imageDrafts.set(key, (imageDrafts.get(key) || []).filter(image => image.id !== imageRemove.dataset.imageRemove));
    renderImageUploader(key, "已移除圖片；儲存後才會更新這筆資料。");
    return;
  }
  const fileSelect = event.target.closest("[data-file-select]");
  if (fileSelect) { fileSelect.closest("[data-file-uploader]")?.querySelector("[data-file-input]")?.click(); return; }
  const fileRemove = event.target.closest("[data-file-remove]");
  if (fileRemove) {
    const uploader = fileRemove.closest("[data-file-uploader]");
    const key = uploader.dataset.uploadKey;
    fileDrafts.set(key, (fileDrafts.get(key) || []).filter(file => file.id !== fileRemove.dataset.fileRemove));
    renderFileUploader(key, "已移除文件；儲存後才會更新這筆資料。");
    return;
  }
  const imageDrop = event.target.closest("[data-image-drop]");
  if (imageDrop && !event.target.closest("button")) { imageDrop.querySelector("[data-image-file]")?.click(); return; }
  const fileDrop = event.target.closest("[data-file-drop]");
  if (fileDrop && !event.target.closest("button")) { fileDrop.querySelector("[data-file-input]")?.click(); return; }
  const route = event.target.closest("[data-route]")?.dataset.route;
  if (route) { navigate(route); return; }
  const project = event.target.closest("[data-project]")?.dataset.project;
  if (project) { navigate(`project:${project}`); return; }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action) { openDrawer(action); return; }
  const filter = event.target.closest("[data-filter]")?.dataset.filter;
  if (filter) { state.filter = filter; renderProjectsIntoPage(); return; }
  const libraryFilter = event.target.closest("[data-library-filter]");
  if (libraryFilter) {
    libraryFilter.parentElement.querySelectorAll("[data-library-filter]").forEach(item => item.classList.toggle("is-active", item === libraryFilter));
    applyLibraryFilter();
    return;
  }
  const tab = event.target.closest("[data-tab]")?.dataset.tab;
  if (tab) { state.projectTab = tab; const p = projects.find(project => state.route.endsWith(project.id)) || projects[0]; document.querySelectorAll("[data-tab]").forEach(button => button.classList.toggle("is-active", button.dataset.tab === tab)); document.querySelector("#projectTabContent").innerHTML = renderProjectTab(p); return; }
  const noteFilter = event.target.closest("[data-note-filter]");
  if (noteFilter) {
    noteFilter.parentElement.querySelectorAll("[data-note-filter]").forEach(item => item.classList.toggle("is-active", item === noteFilter));
    applyNoteFilter();
    return;
  }
  const checkFilter = event.target.closest("[data-check-filter]");
  if (checkFilter) {
    checkFilter.parentElement.querySelectorAll("[data-check-filter]").forEach(item => item.classList.toggle("is-active", item === checkFilter));
    applyChecklistFilter();
    return;
  }
  const completedFilter = event.target.closest("[data-completed-filter]");
  if (completedFilter) {
    completedFilter.parentElement.querySelectorAll("[data-completed-filter]").forEach(item => item.classList.toggle("is-active", item === completedFilter));
    applyCompletedRevisionFilter();
    return;
  }
  const checkToggleId = event.target.closest("[data-check-toggle]")?.dataset.checkToggle;
  if (checkToggleId) {
    const item = projectChecklist(currentProject().id).find(check => check.id === checkToggleId);
    if (!item) return;
    item.done = !item.done;
    item.updated = "剛剛";
    document.querySelector("#projectTabContent").innerHTML = renderChecklistTab(currentProject());
    showToast(item.done ? "已完成交付檢查" : "已重新開啟交付檢查");
    return;
  }
  const checkEditId = event.target.closest("[data-check-edit]")?.dataset.checkEdit;
  if (checkEditId) { openDrawer("edit-check", { checkId: checkEditId }); return; }
  const checkDeleteButton = event.target.closest("[data-check-delete]");
  if (checkDeleteButton) {
    if (checkDeleteButton.dataset.armed === "true") {
      const items = projectChecklist(currentProject().id);
      const index = items.findIndex(item => item.id === checkDeleteButton.dataset.checkDelete);
      if (index >= 0) items.splice(index, 1);
      document.querySelector("#projectTabContent").innerHTML = renderChecklistTab(currentProject());
      showToast("已從原型移除交付檢查");
    } else {
      checkDeleteButton.dataset.armed = "true";
      checkDeleteButton.classList.add("is-armed");
      checkDeleteButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!checkDeleteButton.isConnected) return;
        checkDeleteButton.dataset.armed = "false";
        checkDeleteButton.classList.remove("is-armed");
        checkDeleteButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const noteId = event.target.closest("[data-note]")?.dataset.note;
  if (noteId) { openDrawer("note", { noteId }); return; }
  const noteEditId = event.target.closest("[data-note-edit]")?.dataset.noteEdit;
  if (noteEditId) { openDrawer("edit-note", { noteId: noteEditId }); return; }
  const notePinId = event.target.closest("[data-note-pin]")?.dataset.notePin;
  if (notePinId) {
    const note = projectNoteList(currentProject().id).find(item => item.id === notePinId);
    if (!note) return;
    note.pinned = !note.pinned;
    note.updated = "剛剛";
    document.querySelector("#projectTabContent").innerHTML = renderNotesTab(currentProject());
    showToast(note.pinned ? "已置頂專案筆記" : "已取消置頂");
    return;
  }
  const noteDeleteButton = event.target.closest("[data-note-delete]");
  if (noteDeleteButton) {
    if (noteDeleteButton.dataset.armed === "true") {
      const notes = projectNoteList(currentProject().id);
      const index = notes.findIndex(note => note.id === noteDeleteButton.dataset.noteDelete);
      if (index >= 0) notes.splice(index, 1);
      document.querySelector("#projectTabContent").innerHTML = renderNotesTab(currentProject());
      showToast("已從原型移除專案筆記");
    } else {
      noteDeleteButton.dataset.armed = "true";
      noteDeleteButton.classList.add("is-armed");
      noteDeleteButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!noteDeleteButton.isConnected) return;
        noteDeleteButton.dataset.armed = "false";
        noteDeleteButton.classList.remove("is-armed");
        noteDeleteButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const categoryEdit = event.target.closest("[data-category-edit]")?.dataset.categoryEdit;
  if (categoryEdit) { openDrawer("edit-category", { category: categoryEdit }); return; }
  const categoryDeleteButton = event.target.closest("[data-category-delete]");
  if (categoryDeleteButton) {
    const category = categoryDeleteButton.dataset.categoryDelete;
    if (categoryDeleteButton.dataset.armed === "true") {
      assets.forEach(asset => { if (asset.category === category) asset.category = "未分類"; });
      const index = siteCategories.indexOf(category);
      if (index >= 0) siteCategories.splice(index, 1);
      render();
      drawerBody.innerHTML = categoryManager();
      showToast(`已刪除「${category}」，原有網站已移到未分類`);
    } else {
      categoryDeleteButton.dataset.armed = "true";
      categoryDeleteButton.classList.add("is-armed");
      categoryDeleteButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!categoryDeleteButton.isConnected) return;
        categoryDeleteButton.dataset.armed = "false";
        categoryDeleteButton.classList.remove("is-armed");
        categoryDeleteButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const libraryCategoryEditButton = event.target.closest("[data-library-category-edit]");
  if (libraryCategoryEditButton) {
    const kind = libraryCategoryEditButton.dataset.categoryKind;
    openDrawer(kind === "package" ? "edit-package-category" : "edit-prompt-category", { category: libraryCategoryEditButton.dataset.libraryCategoryEdit });
    return;
  }
  const libraryCategoryDeleteButton = event.target.closest("[data-library-category-delete]");
  if (libraryCategoryDeleteButton) {
    const kind = libraryCategoryDeleteButton.dataset.categoryKind;
    const category = libraryCategoryDeleteButton.dataset.libraryCategoryDelete;
    const config = libraryCategoryConfig(kind);
    if (libraryCategoryDeleteButton.dataset.armed === "true") {
      config.records.forEach(record => { if (record[config.field] === category) record[config.field] = "未分類"; });
      const index = config.categories.indexOf(category);
      if (index >= 0) config.categories.splice(index, 1);
      render();
      drawerContext.textContent = kind === "package" ? "套件庫" : "提示詞庫";
      drawerTitle.textContent = "管理分類";
      drawerBody.innerHTML = libraryCategoryManager(kind);
      showToast(`已刪除「${category}」，原有資料已移到未分類`);
    } else {
      libraryCategoryDeleteButton.dataset.armed = "true";
      libraryCategoryDeleteButton.classList.add("is-armed");
      libraryCategoryDeleteButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!libraryCategoryDeleteButton.isConnected) return;
        libraryCategoryDeleteButton.dataset.armed = "false";
        libraryCategoryDeleteButton.classList.remove("is-armed");
        libraryCategoryDeleteButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const taskId = event.target.closest("[data-task]")?.dataset.task;
  if (taskId && event.target.closest(".task-check")) { const task = tasks.find(t => t.id === Number(taskId)); if (!task) return; task.done = !task.done; task.age = "剛剛"; task.completedAt = task.done ? "剛剛" : ""; const project = projects.find(item => item.id === task.projectId); if (project) project.updated = "剛剛"; render(); showToast(task.done ? "已完成修改事項，可至已完成紀錄查看" : "已恢復為待處理"); return; }
  const reopenRevisionId = event.target.closest("[data-revision-reopen]")?.dataset.revisionReopen;
  if (reopenRevisionId) {
    const task = tasks.find(item => item.id === Number(reopenRevisionId));
    if (!task) return;
    task.done = false;
    task.completedAt = "";
    task.age = "剛剛重新開啟";
    const project = projects.find(item => item.id === task.projectId);
    if (project) project.updated = "剛剛";
    render();
    showToast(`已重新開啟並放回${task.column}`);
    return;
  }
  const previewUrlButton = event.target.closest("[data-asset-preview-url]");
  if (previewUrlButton) {
    const field = document.querySelector("#assetPageUrl");
    const preview = document.querySelector("#assetUrlPreview");
    const image = preview?.querySelector("img");
    const status = document.querySelector("#assetUrlStatus");
    const storedPreview = document.querySelector("#assetPreviewUrl");
    const storedSource = document.querySelector("#assetPreviewSource");
    const normalizedUrl = normalizeHttpUrl(field?.value);
    preview?.classList.remove("is-error", "is-loading", "has-image");
    if (!normalizedUrl) {
      preview?.classList.add("is-error");
      if (status) status.textContent = "請輸入有效的 http／https 網頁網址。";
      field?.focus();
      return;
    }
    preview?.classList.add("is-loading");
    previewUrlButton.disabled = true;
    previewUrlButton.textContent = "解析中…";
    if (status) status.textContent = "正在讀取網頁的分享資訊…";
    if (image) image.hidden = true;
    try {
      const result = await requestLinkPreview(normalizedUrl);
      if (!image) throw new Error("預覽容器不存在。");
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(new Error("已找到圖片網址，但網站禁止外部顯示。"));
        image.src = result.imageUrl;
      });
      image.hidden = false;
      preview.classList.remove("is-loading", "is-error");
      preview.classList.add("has-image");
      status.textContent = `抓取成功 · ${result.source || "網頁預覽"}`;
      if (storedPreview) storedPreview.value = result.imageUrl;
      if (storedSource) storedSource.value = result.source || "網頁預覽";
      const nameInput = document.querySelector("#assetName");
      if (nameInput && !nameInput.value.trim()) {
        nameInput.value = (result.title || new URL(normalizedUrl).hostname).trim();
      }
      previewUrlButton.textContent = "重新抓取";
    } catch (error) {
      preview.classList.remove("is-loading", "has-image");
      preview.classList.add("is-error");
      if (image) image.hidden = true;
      if (storedPreview) storedPreview.value = "";
      if (storedSource) storedSource.value = "";
      status.textContent = error.message === "Failed to fetch" ? "瀏覽器無法跨網域讀取；請用 PHP 環境啟動後再試。" : error.message;
      previewUrlButton.textContent = "再次嘗試";
    } finally {
      previewUrlButton.disabled = false;
    }
    return;
  }
  const assetOpenId = event.target.closest("[data-asset-open]")?.dataset.assetOpen;
  if (assetOpenId) { openDrawer("asset", { assetId: assetOpenId }); return; }
  const openUrl = normalizeHttpUrl(event.target.closest("[data-open-url]")?.dataset.openUrl);
  if (openUrl) { window.open(openUrl, "_blank", "noopener,noreferrer"); return; }
  const assetEditId = event.target.closest("[data-asset-edit]")?.dataset.assetEdit;
  if (assetEditId) { openDrawer("edit-asset", { assetId: assetEditId }); return; }
  const deleteAssetButton = event.target.closest("[data-asset-delete]");
  if (deleteAssetButton) {
    if (deleteAssetButton.dataset.armed === "true") {
      const index = assets.findIndex(asset => asset.id === deleteAssetButton.dataset.assetDelete);
      if (index >= 0) assets.splice(index, 1);
      render();
      showToast("已從原型移除網站收藏");
    } else {
      deleteAssetButton.dataset.armed = "true";
      deleteAssetButton.classList.add("is-armed");
      deleteAssetButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!deleteAssetButton.isConnected) return;
        deleteAssetButton.dataset.armed = "false";
        deleteAssetButton.classList.remove("is-armed");
        deleteAssetButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const packageId = event.target.closest("[data-package]")?.dataset.package;
  if (packageId) { openDrawer("package", { packageId }); return; }
  const packageEditId = event.target.closest("[data-package-edit]")?.dataset.packageEdit;
  if (packageEditId) { openDrawer("edit-package", { packageId: packageEditId }); return; }
  const packageDeleteButton = event.target.closest("[data-package-delete]");
  if (packageDeleteButton) {
    if (packageDeleteButton.dataset.armed === "true") {
      const index = packages.findIndex(pkg => pkg.id === packageDeleteButton.dataset.packageDelete);
      if (index >= 0) {
        queueMediaDeletes([...(packages[index].images || []), ...(packages[index].files || [])]);
        packages.splice(index, 1);
      }
      render();
      showToast("已從原型移除套件");
    } else {
      packageDeleteButton.dataset.armed = "true";
      packageDeleteButton.classList.add("is-armed");
      packageDeleteButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!packageDeleteButton.isConnected) return;
        packageDeleteButton.dataset.armed = "false";
        packageDeleteButton.classList.remove("is-armed");
        packageDeleteButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const promptId = event.target.closest("[data-prompt]")?.dataset.prompt;
  if (promptId) { openDrawer("prompt", { promptId }); return; }
  const promptEditId = event.target.closest("[data-prompt-edit]")?.dataset.promptEdit;
  if (promptEditId) { openDrawer("edit-prompt", { promptId: promptEditId }); return; }
  const promptDeleteButton = event.target.closest("[data-prompt-delete]");
  if (promptDeleteButton) {
    if (promptDeleteButton.dataset.armed === "true") {
      const index = prompts.findIndex(prompt => prompt.id === promptDeleteButton.dataset.promptDelete);
      if (index >= 0) {
        queueMediaDeletes([...(prompts[index].images || []), ...(prompts[index].files || [])]);
        prompts.splice(index, 1);
      }
      render();
      showToast("已從原型移除提示詞");
    } else {
      promptDeleteButton.dataset.armed = "true";
      promptDeleteButton.classList.add("is-armed");
      promptDeleteButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!promptDeleteButton.isConnected) return;
        promptDeleteButton.dataset.armed = "false";
        promptDeleteButton.classList.remove("is-armed");
        promptDeleteButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const editRevisionId = event.target.closest("[data-revision-edit]")?.dataset.revisionEdit;
  if (editRevisionId) { openDrawer("edit-revision", { revisionId: editRevisionId }); return; }
  const deleteRevisionButton = event.target.closest("[data-revision-delete]");
  if (deleteRevisionButton) {
    if (deleteRevisionButton.dataset.armed === "true") {
      const index = tasks.findIndex(task => task.id === Number(deleteRevisionButton.dataset.revisionDelete));
      if (index >= 0) {
        queueMediaDeletes(tasks[index].images || []);
        tasks.splice(index, 1);
      }
      render();
      showToast("已從原型移除修改事項");
    } else {
      deleteRevisionButton.dataset.armed = "true";
      deleteRevisionButton.classList.add("is-armed");
      deleteRevisionButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!deleteRevisionButton.isConnected) return;
        deleteRevisionButton.dataset.armed = "false";
        deleteRevisionButton.classList.remove("is-armed");
        deleteRevisionButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const editContactId = event.target.closest("[data-contact-edit]")?.dataset.contactEdit;
  if (editContactId) { openDrawer("edit-contact", { contactId: editContactId }); return; }
  const deleteContactButton = event.target.closest("[data-contact-delete]");
  if (deleteContactButton) {
    if (deleteContactButton.dataset.armed === "true") {
      const project = currentProject();
      projectContacts[project.id] = (projectContacts[project.id] || []).filter(contact => contact.id !== deleteContactButton.dataset.contactDelete);
      document.querySelector("#projectTabContent").innerHTML = renderContactTab(project);
      showToast("已從原型移除聯絡窗口");
    } else {
      deleteContactButton.dataset.armed = "true";
      deleteContactButton.classList.add("is-armed");
      deleteContactButton.textContent = "再次點擊刪除";
      setTimeout(() => {
        if (!deleteContactButton.isConnected) return;
        deleteContactButton.dataset.armed = "false";
        deleteContactButton.classList.remove("is-armed");
        deleteContactButton.textContent = "刪除";
      }, 3500);
    }
    return;
  }
  const connectionKey = event.target.closest("[data-connection-copy]")?.dataset.connectionCopy;
  if (connectionKey) { const projectId = state.route.split(":")[1]; copyText(projectConnections[projectId]?.[connectionKey], `已複製 ${connectionKey === "ftp" ? "FTP" : "Database"} 連線資訊`); return; }
  const copySourceId = event.target.closest("[data-copy-source]")?.dataset.copySource;
  if (copySourceId) { copyText(document.querySelector(`#${copySourceId}`)?.value, "已複製欄位內容"); return; }
  const promptCopyId = event.target.closest("[data-copy-prompt]")?.dataset.copyPrompt;
  if (promptCopyId) { const prompt = prompts.find(item => item.id === promptCopyId); if (prompt) copyText(prompt.body, "已複製提示詞全文"); return; }
  const copyValue = event.target.closest("[data-copy]")?.dataset.copy;
  if (copyValue) { copyText(copyValue, `已複製：${copyValue}`); return; }
  const message = event.target.closest("[data-toast]")?.dataset.toast;
  if (message) showToast(message);
});

function renderProjectsIntoPage() {
  main.innerHTML = renderProjects();
  updateNavigation();
}

document.addEventListener("input", event => {
  if (event.target.id === "projectSearch") {
    const q = event.target.value.trim().toLowerCase();
    let visibleCount = 0;
    document.querySelectorAll(".project-table-row").forEach(row => { const visible = row.dataset.search.toLowerCase().includes(q); row.hidden = !visible; if (visible) visibleCount += 1; });
    const empty = document.querySelector("#projectSearchEmpty");
    if (empty) empty.hidden = visibleCount > 0;
  }
  if (event.target.matches("[data-library-search]")) applyLibraryFilter();
  if (event.target.matches("[data-note-search-input]")) applyNoteFilter();
  if (event.target.matches("[data-check-search-input]")) applyChecklistFilter();
  if (event.target.matches("[data-completed-search]")) applyCompletedRevisionFilter();
});

document.addEventListener("change", async event => {
  if (event.target.id === "jsonImportInput") {
    const file = event.target.files?.[0];
    if (!file) return;
    syncPassphrase = document.querySelector("#syncPassphrase")?.value || syncPassphrase;
    try {
      const source = JSON.parse(await file.text());
      let collectorResult = null;
      if (source?.app === "project-desk") {
        applyDataSnapshot(convertProjectDeskSnapshot(source), false);
      } else if (Number(source?.version) === 2 && Array.isArray(source?.items)) {
        collectorResult = mergeCollectorSnapshot(source);
      } else {
        await openPortableSnapshot(source);
        if (syncToken()) {
          await hydrateCloudImages(syncToken());
          await hydrateCloudFiles(syncToken());
        }
      }
      persistLocalData();
      render();
      const legacy = source?.app === "project-desk";
      setSyncStatus("ok", collectorResult ? "收藏資料匯入完成" : legacy ? "舊版資料匯入完成" : "備份匯入完成", collectorResult ? `新增 ${collectorResult.added} 筆收藏、保留 ${collectorResult.categories} 組分類；確認後可上傳 GitHub。` : legacy ? `已匯入 ${projects.length} 個專案與 ${tasks.length} 筆修改；輸入解密密碼後即可上傳 GitHub。` : "已在這台裝置套用 JSON 資料；確認後可再上傳 GitHub。");
      showToast(collectorResult ? `已新增 ${collectorResult.added} 筆素材收藏` : legacy ? "project-desk 資料轉換完成" : "已匯入加密 JSON 備份");
    } catch (error) { setSyncStatus("error", "匯入未完成", error.message); showToast(error.message); }
    event.target.value = "";
    return;
  }
  if (event.target.matches("[data-image-file]")) {
    const key = event.target.closest("[data-image-uploader]").dataset.uploadKey;
    await addImagesToDraft(key, event.target.files || []);
    event.target.value = "";
    return;
  }
  if (event.target.matches("[data-file-input]")) {
    const key = event.target.closest("[data-file-uploader]").dataset.uploadKey;
    await addFilesToDraft(key, event.target.files || []);
    event.target.value = "";
    return;
  }
  if (event.target.id !== "assetFile") return;
  const file = event.target.files?.[0];
  if (!file) return;
  const nameInput = document.querySelector("#assetName");
  const stateLabel = document.querySelector("#assetFileState");
  if (nameInput && !nameInput.value.trim()) nameInput.value = file.name;
  if (stateLabel) stateLabel.textContent = `${file.name} · ${(file.size / 1024 / 1024).toFixed(2)} MB（僅供本次預覽）`;
});

document.addEventListener("paste", async event => {
  const uploader = drawerBody.querySelector("[data-image-uploader]");
  if (!uploader || !drawer.classList.contains("is-open")) return;
  const files = [...(event.clipboardData?.files || [])].filter(file => file.type.startsWith("image/"));
  if (!files.length) return;
  event.preventDefault();
  await addImagesToDraft(uploader.dataset.uploadKey, files);
});

document.addEventListener("dragover", event => {
  const zone = event.target.closest("[data-image-drop], [data-file-drop]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.add("is-dragging");
});

document.addEventListener("dragleave", event => {
  const zone = event.target.closest("[data-image-drop], [data-file-drop]");
  if (zone && !zone.contains(event.relatedTarget)) zone.classList.remove("is-dragging");
});

document.addEventListener("drop", async event => {
  const zone = event.target.closest("[data-image-drop], [data-file-drop]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.remove("is-dragging");
  if (zone.matches("[data-file-drop]")) await addFilesToDraft(zone.closest("[data-file-uploader]").dataset.uploadKey, event.dataTransfer?.files || []);
  else await addImagesToDraft(zone.closest("[data-image-uploader]").dataset.uploadKey, event.dataTransfer?.files || []);
});

document.addEventListener("error", event => {
  if (!event.target.matches?.(".asset-preview img")) return;
  event.target.hidden = true;
  event.target.closest(".asset-preview")?.classList.add("is-broken");
}, true);

function applyLibraryFilter() {
  const list = document.querySelector("[data-filter-list]");
  if (!list) return;
  const category = document.querySelector("[data-library-filter].is-active")?.dataset.libraryFilter || "全部";
  const query = document.querySelector("[data-library-search]")?.value.trim().toLowerCase() || "";
  const items = [...list.querySelectorAll("[data-category]")];
  let visibleCount = 0;
  items.forEach(item => {
    const categoryMatch = category === "全部" || item.dataset.category === category;
    const searchText = (item.dataset.search || item.textContent).toLowerCase();
    const visible = categoryMatch && searchText.includes(query);
    item.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  const empty = list.querySelector("[data-filter-empty]");
  if (empty) empty.hidden = visibleCount > 0;
}

function applyNoteFilter() {
  const list = document.querySelector("[data-note-list]");
  if (!list) return;
  const type = document.querySelector("[data-note-filter].is-active")?.dataset.noteFilter || "全部";
  const query = document.querySelector("[data-note-search-input]")?.value.trim().toLowerCase() || "";
  let visibleCount = 0;
  list.querySelectorAll("[data-note-row]").forEach(row => {
    const typeMatch = type === "全部" || row.querySelector(".note-type")?.textContent === type;
    const searchMatch = row.dataset.noteSearch.toLowerCase().includes(query);
    row.hidden = !(typeMatch && searchMatch);
    if (!row.hidden) visibleCount += 1;
  });
  const empty = list.querySelector(".note-filter-empty");
  if (empty) empty.hidden = visibleCount > 0;
}

function applyChecklistFilter() {
  const list = document.querySelector("[data-check-list]");
  if (!list) return;
  const stateFilter = document.querySelector("[data-check-filter].is-active")?.dataset.checkFilter || "全部";
  const query = document.querySelector("[data-check-search-input]")?.value.trim().toLowerCase() || "";
  let visibleCount = 0;
  list.querySelectorAll("[data-check-row]").forEach(row => {
    const stateMatch = stateFilter === "全部" || row.dataset.checkState === stateFilter;
    const searchMatch = row.dataset.checkSearch.toLowerCase().includes(query);
    row.hidden = !(stateMatch && searchMatch);
    if (!row.hidden) visibleCount += 1;
  });
  const empty = list.querySelector(".delivery-filter-empty");
  if (empty) empty.hidden = visibleCount > 0;
}

function applyCompletedRevisionFilter() {
  const list = document.querySelector("[data-completed-list]");
  if (!list) return;
  const assignment = document.querySelector("[data-completed-filter].is-active")?.dataset.completedFilter || "全部";
  const query = document.querySelector("[data-completed-search]")?.value.trim().toLowerCase() || "";
  let visibleCount = 0;
  list.querySelectorAll("[data-completed-row]").forEach(row => {
    const assignmentMatch = assignment === "全部" || row.dataset.assignment === assignment;
    const searchMatch = row.dataset.completedSearch.toLowerCase().includes(query);
    row.hidden = !(assignmentMatch && searchMatch);
    if (!row.hidden) visibleCount += 1;
  });
  const empty = list.querySelector(".completed-filter-empty");
  if (empty) empty.hidden = visibleCount > 0;
}

document.addEventListener("submit", async event => {
  const syncForm = event.target.closest("[data-sync-config-form]");
  if (syncForm) {
    event.preventDefault();
    setSyncBusy(true);
    let connected = false;
    try { await testGithubConnection(syncForm); connected = true; showToast("GitHub 連線成功"); }
    catch (error) { setSyncStatus("error", "連線失敗", error.message); showToast(error.message); }
    finally { setSyncBusy(false); }
    if (connected) await autoPullFromGithub(true);
    return;
  }
  const checkEditor = event.target.closest("[data-check-form]");
  if (checkEditor) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(checkEditor).entries());
    const items = projectChecklist(currentProject().id);
    const existing = items.find(item => item.id === checkEditor.dataset.checkId);
    const record = { title: values.title.trim(), category: values.category, note: values.note.trim(), done: existing ? values.done === "on" : false, updated: "剛剛" };
    if (existing) Object.assign(existing, record);
    else items.unshift({ id: `check-${Date.now()}`, ...record });
    state.projectTab = "交付檢查";
    closeDrawer();
    render();
    showToast(existing ? "已更新交付檢查" : "已加入交付清單（原型尚未保存）");
    return;
  }
  const noteEditor = event.target.closest("[data-note-form]");
  if (noteEditor) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(noteEditor).entries());
    const sourceUrl = normalizeHttpUrl(values.sourceUrl);
    if (sourceUrl === null) {
      const field = noteEditor.querySelector('[name="sourceUrl"]');
      field.setCustomValidity("請輸入有效的 http／https 網址。");
      field.reportValidity();
      field.addEventListener("input", () => field.setCustomValidity(""), { once: true });
      return;
    }
    const notes = projectNoteList(currentProject().id);
    const existing = notes.find(note => note.id === noteEditor.dataset.noteId);
    const record = { title: values.title.trim(), type: values.type, body: values.body.trim(), code: values.code.trim(), sourceUrl, pinned: values.pinned === "on", updated: "剛剛" };
    if (existing) Object.assign(existing, record);
    else notes.unshift({ id: `note-${Date.now()}`, ...record });
    state.projectTab = "專案筆記";
    closeDrawer();
    render();
    showToast(existing ? "已更新專案筆記" : "已加入專案筆記（原型尚未保存）");
    return;
  }
  const promptEditor = event.target.closest("[data-prompt-form]");
  if (promptEditor) {
    event.preventDefault();
    const formData = new FormData(promptEditor);
    const values = Object.fromEntries(formData.entries());
    const outputUrl = normalizeHttpUrl(values.outputUrl);
    if (outputUrl === null) {
      const field = promptEditor.querySelector('[name="outputUrl"]');
      field.setCustomValidity("請輸入有效的 http／https 網址。");
      field.reportValidity();
      field.addEventListener("input", () => field.setCustomValidity(""), { once: true });
      return;
    }
    const existing = prompts.find(prompt => prompt.id === promptEditor.dataset.promptId);
    const uploadKey = promptEditor.querySelector("[data-image-uploader]")?.dataset.uploadKey;
    const images = (imageDrafts.get(uploadKey) || []).map(image => ({ ...image }));
    const files = (fileDrafts.get(uploadKey) || []).map(file => ({ ...file }));
    const history = existing?.history ? [...existing.history] : [];
    const body = values.body.trim();
    const bodyChanged = Boolean(existing && existing.body !== body);
    if (bodyChanged) {
      history.unshift({ version: history.length + 1, date: existing.updated || "先前版本", body: existing.body, note: "修改提示詞全文前" });
    }
    const variables = values.variables.split(",").map(variable => variable.trim().replace(/^\{\{|\}\}$/g, "")).filter(Boolean);
    const record = { title: values.title.trim(), type: values.type, model: values.model.trim(), body, variables: [...new Set(variables)], projectIds: formData.getAll("projectIds"), note: values.note.trim(), outputUrl, updated: "今天", history, images, files };
    if (existing) {
      const retainedMedia = new Set([...images, ...files].map(item => item.id));
      queueMediaDeletes([...(existing.images || []), ...(existing.files || [])].filter(item => !retainedMedia.has(item.id)));
      Object.assign(existing, record);
    }
    else prompts.unshift({ id: `prompt-${Date.now()}`, ...record });
    if (state.route.startsWith("project:")) state.projectTab = "AI 提示詞";
    imageDrafts.delete(uploadKey);
    fileDrafts.delete(uploadKey);
    closeDrawer();
    render();
    showToast(existing ? (bodyChanged ? "已更新並保留上一版提示詞" : "已更新提示詞資料") : "已加入提示詞庫（原型尚未保存）");
    return;
  }
  const packageEditor = event.target.closest("[data-package-form]");
  if (packageEditor) {
    event.preventDefault();
    const formData = new FormData(packageEditor);
    const values = Object.fromEntries(formData.entries());
    const sourceUrl = normalizeHttpUrl(values.sourceUrl);
    if (sourceUrl === null) {
      const field = packageEditor.querySelector('[name="sourceUrl"]');
      field.setCustomValidity("請輸入有效的 http／https 網址。");
      field.reportValidity();
      field.addEventListener("input", () => field.setCustomValidity(""), { once: true });
      return;
    }
    const existing = packages.find(pkg => pkg.id === packageEditor.dataset.packageId);
    const uploadKey = packageEditor.querySelector("[data-image-uploader]")?.dataset.uploadKey;
    const images = (imageDrafts.get(uploadKey) || []).map(image => ({ ...image }));
    const files = (fileDrafts.get(uploadKey) || []).map(file => ({ ...file }));
    const history = existing?.history ? [...existing.history] : [];
    if (existing && existing.version !== values.version.trim()) {
      history.unshift({ version: existing.version, date: "今天", note: `更新至 ${values.version.trim()}` });
    }
    const name = values.name.trim();
    const record = {
      name,
      code: (values.code.trim() || name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2) || "PK").toUpperCase(),
      note: values.note.trim(),
      version: values.version.trim(),
      latestVersion: values.latestVersion.trim() || values.version.trim(),
      state: values.state,
      sourceUrl,
      projectIds: formData.getAll("projectIds"),
      compatibility: values.compatibility.trim(),
      snippet: values.snippet.trim(),
      history,
      images,
      files
    };
    if (existing) {
      const retainedMedia = new Set([...images, ...files].map(item => item.id));
      queueMediaDeletes([...(existing.images || []), ...(existing.files || [])].filter(item => !retainedMedia.has(item.id)));
      Object.assign(existing, record);
    }
    else packages.unshift({ id: `pkg-${Date.now()}`, ...record });
    imageDrafts.delete(uploadKey);
    fileDrafts.delete(uploadKey);
    closeDrawer();
    render();
    showToast(existing ? "已更新套件與版本紀錄" : "已加入套件庫（原型尚未保存）");
    return;
  }
  const categoryEditor = event.target.closest("[data-category-form]");
  if (categoryEditor) {
    event.preventDefault();
    const oldCategory = categoryEditor.dataset.oldCategory || "";
    const field = categoryEditor.querySelector('[name="categoryName"]');
    const error = categoryEditor.querySelector(".category-form-error");
    const name = field.value.trim().replace(/\s+/g, " ");
    const duplicate = siteCategories.some(category => category !== oldCategory && category.toLowerCase() === name.toLowerCase());
    if (!name || duplicate) {
      error.textContent = duplicate ? "已有相同名稱的分類，請換一個名稱。" : "請輸入分類名稱。";
      field.focus();
      return;
    }
    if (oldCategory) {
      const index = siteCategories.indexOf(oldCategory);
      if (index >= 0) siteCategories[index] = name;
      assets.forEach(asset => { if (asset.category === oldCategory) asset.category = name; });
    } else {
      siteCategories.splice(Math.max(0, siteCategories.length - 1), 0, name);
    }
    render();
    drawerContext.textContent = "網站素材庫";
    drawerTitle.textContent = "管理分類";
    drawerBody.innerHTML = categoryManager();
    showToast(oldCategory ? `已將分類改名為「${name}」` : `已新增分類「${name}」`);
    return;
  }
  const libraryCategoryEditor = event.target.closest("[data-library-category-form]");
  if (libraryCategoryEditor) {
    event.preventDefault();
    const kind = libraryCategoryEditor.dataset.categoryKind;
    const config = libraryCategoryConfig(kind);
    const oldCategory = libraryCategoryEditor.dataset.oldCategory || "";
    const field = libraryCategoryEditor.querySelector('[name="categoryName"]');
    const error = libraryCategoryEditor.querySelector(".category-form-error");
    const name = field.value.trim().replace(/\s+/g, " ");
    const duplicate = config.categories.some(category => category !== oldCategory && category.toLowerCase() === name.toLowerCase());
    if (!name || duplicate || name === "未分類") {
      error.textContent = duplicate || name === "未分類" ? "已有相同名稱的分類，請換一個名稱。" : "請輸入分類名稱。";
      field.focus();
      return;
    }
    if (oldCategory) {
      const index = config.categories.indexOf(oldCategory);
      if (index >= 0) config.categories[index] = name;
      config.records.forEach(record => { if (record[config.field] === oldCategory) record[config.field] = name; });
    } else {
      config.categories.splice(Math.max(0, config.categories.length - 1), 0, name);
    }
    render();
    drawerContext.textContent = kind === "package" ? "套件庫" : "提示詞庫";
    drawerTitle.textContent = "管理分類";
    drawerBody.innerHTML = libraryCategoryManager(kind);
    showToast(oldCategory ? `已將分類改名為「${name}」` : `已新增分類「${name}」`);
    return;
  }
  const assetEditor = event.target.closest("[data-asset-form]");
  if (assetEditor) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(assetEditor).entries());
    const pageUrl = normalizeHttpUrl(values.pageUrl);
    const previewUrl = normalizeHttpUrl(values.previewUrl);
    if (pageUrl === null || previewUrl === null) {
      const preview = document.querySelector("#assetUrlPreview");
      preview?.classList.add("is-error");
      document.querySelector("#assetUrlStatus").textContent = "網址格式不正確，請使用 http／https。";
      document.querySelector("#assetPageUrl")?.focus();
      return;
    }
    if (pageUrl && !previewUrl) {
      const preview = document.querySelector("#assetUrlPreview");
      preview?.classList.add("is-error");
      document.querySelector("#assetUrlStatus").textContent = "請先抓取並確認這個網頁的預覽圖。";
      document.querySelector("[data-asset-preview-url]")?.focus();
      return;
    }
    const existingId = assetEditor.dataset.assetId;
    const existing = assets.find(asset => asset.id === existingId);
    const preview = existing?.preview || (values.category === "互動靈感" ? "video" : values.category === "作品集" ? "logo" : values.category === "活動頁" ? "poster" : "photo");
    const record = {
      title: values.title.trim(),
      projectId: values.projectId,
      category: values.category,
      source: values.source,
      usage: values.usage.trim(),
      tags: values.tags.trim(),
      note: values.note.trim(),
      pageUrl,
      previewUrl,
      previewSource: values.previewSource,
      preview,
      label: preview === "logo" ? values.title.split(/[\s—-]/)[0].slice(0, 5).toUpperCase() : ""
    };
    if (existing) Object.assign(existing, record);
    else assets.unshift({ id: `asset-${Date.now()}`, ...record });
    if (state.route.startsWith("project:")) state.projectTab = "素材";
    closeDrawer();
    render();
    showToast(existing ? "已更新網站收藏" : "已加入網站素材庫（原型尚未保存）");
    return;
  }
  const projectCreator = event.target.closest("[data-project-create-form]");
  if (projectCreator) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(projectCreator).entries());
    const name = values.name.trim();
    const id = `project-${Date.now()}`;
    const template = projectCreator.querySelector(".template-option.is-selected")?.dataset.template || "空白專案";
    const images = (imageDrafts.get("project-new") || []).map(image => ({ ...image }));
    projects.unshift({ id, code: name.replace(/\s/g, "").slice(0, 2).toUpperCase() || "PR", name, client: values.client.trim() || "個人專案", type: template, status: "製作中", statusClass: "active", revisions: 0, updated: "剛剛", path: values.path.trim(), deliveryDate: String(values.deliveryDate || "").trim(), images, tone: ["coral", "blue", "sage"][projects.length % 3] });
    if (values.ftp.trim() || values.database.trim()) projectConnections[id] = { ftp: values.ftp.trim(), database: values.database.trim() };
    projectContacts[id] = [];
    projectNotes[id] = [];
    projectChecklists[id] = [];
    imageDrafts.delete("project-new");
    state.route = `project:${id}`;
    state.projectTab = "總覽";
    closeDrawer();
    render();
    showToast(`已建立原型專案${images.length ? `，並加入 ${images.length} 張圖片` : ""}`);
    return;
  }
  const focusProjectEditor = event.target.closest("[data-focus-project-form]");
  if (focusProjectEditor) {
    event.preventDefault();
    const selectedId = new FormData(focusProjectEditor).get("projectId");
    projects.forEach(project => { delete project.isFocus; });
    const selected = projects.find(project => project.id === selectedId);
    if (selected) selected.isFocus = true;
    closeDrawer();
    render();
    showToast(selected ? `目前焦點已切換為「${selected.name}」` : "已改為自動選擇目前焦點");
    return;
  }
  const projectStageEditor = event.target.closest("[data-project-stage-form]");
  if (projectStageEditor) {
    event.preventDefault();
    const project = currentProject();
    const selected = projectStages.find(stage => stage.label === new FormData(projectStageEditor).get("stage"));
    if (!project || !selected) return;
    project.status = selected.label;
    project.statusClass = selected.className;
    project.updated = "剛剛";
    closeDrawer();
    render();
    showToast(`專案階段已改為「${selected.label}」`);
    return;
  }
  const projectDueEditor = event.target.closest("[data-project-due-form]");
  if (projectDueEditor) {
    event.preventDefault();
    const project = currentProject();
    if (!project) return;
    project.deliveryDate = String(new FormData(projectDueEditor).get("deliveryDate") || "").trim();
    project.updated = "剛剛";
    closeDrawer();
    render();
    showToast(project.deliveryDate ? `交付日期已設為 ${formatDeliveryDate(project.deliveryDate)}` : "已清除交付日期");
    return;
  }
  const revisionEditor = event.target.closest("[data-revision-form]");
  if (revisionEditor) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(revisionEditor).entries());
    const selectedProject = projects.find(project => project.id === values.projectId);
    const existingId = Number(revisionEditor.dataset.revisionId);
    const uploadKey = revisionEditor.querySelector("[data-image-uploader]")?.dataset.uploadKey;
    const images = (imageDrafts.get(uploadKey) || []).map(image => ({ ...image }));
    const record = {
      title: values.title.trim(),
      projectId: values.projectId,
      project: selectedProject?.name || "先放入收件匣",
      column: values.column,
      priority: values.priority,
      dueDate: values.dueDate,
      note: values.note.trim(),
      age: "剛剛",
      done: revisionEditor.elements.done?.checked || false,
      completedAt: revisionEditor.elements.done?.checked ? "剛剛" : "",
      images,
      attachments: existingId ? (tasks.find(task => task.id === existingId)?.attachments || []) : []
    };
    if (existingId) {
      const index = tasks.findIndex(task => task.id === existingId);
      if (index >= 0) {
        const retainedIds = new Set(images.map(image => image.id));
        queueMediaDeletes((tasks[index].images || []).filter(image => !retainedIds.has(image.id)));
        tasks[index] = { ...tasks[index], ...record };
      }
    } else {
      tasks.unshift({ id: Date.now(), ...record });
    }
    if (selectedProject) selectedProject.updated = "剛剛";
    if (state.route.startsWith("project:")) state.projectTab = "修改事項";
    imageDrafts.delete(uploadKey);
    closeDrawer();
    render();
    showToast(existingId ? "已更新修改事項" : "已加入修改收件匣");
    return;
  }
  const contactEditor = event.target.closest("[data-contact-form]");
  if (contactEditor) {
    event.preventDefault();
    const project = currentProject();
    const values = Object.fromEntries(new FormData(contactEditor).entries());
    const contacts = projectContacts[project.id] || (projectContacts[project.id] = []);
    const existingId = contactEditor.dataset.contactId;
    if (existingId) {
      const index = contacts.findIndex(contact => contact.id === existingId);
      if (index >= 0) contacts[index] = { ...contacts[index], ...values };
    } else {
      contacts.push({ id: `contact-${Date.now()}`, ...values });
    }
    state.projectTab = "聯絡窗口";
    closeDrawer();
    render();
    showToast(existingId ? "已更新聯絡窗口" : "已新增聯絡窗口");
    return;
  }
  const connectionEditor = event.target.closest("[data-project-connection-form]");
  if (connectionEditor) {
    event.preventDefault();
    const project = currentProject();
    const values = Object.fromEntries(new FormData(connectionEditor).entries());
    const ftp = values.ftp.trim();
    const database = values.database.trim();
    if (ftp || database) projectConnections[project.id] = { ftp, database };
    else delete projectConnections[project.id];
    connectionsEdited = true;
    project.updated = "剛剛";
    closeDrawer();
    render();
    showToast(ftp || database ? "已儲存 FTP 與 Database 連線資訊" : "已清除連線資訊");
    return;
  }
  const projectEntryEditor = event.target.closest("[data-project-entry-form]");
  if (projectEntryEditor) {
    event.preventDefault();
    const project = currentProject();
    const values = Object.fromEntries(new FormData(projectEntryEditor).entries());
    project.domain = values.domain.trim();
    project.testUrl = values.testUrl.trim();
    project.adminUrl = values.adminUrl.trim();
    project.path = values.path.trim();
    project.updated = "剛剛";
    closeDrawer();
    render();
    showToast("已更新專案入口");
    return;
  }
  const form = event.target.closest("[data-demo-form]");
  if (!form) return;
  event.preventDefault();
  closeDrawer();
  showToast(`${form.dataset.demoForm}已加入原型（尚未寫入資料庫）`);
});

document.addEventListener("click", event => {
  const option = event.target.closest(".template-option");
  if (!option) return;
  option.parentElement.querySelectorAll(".template-option").forEach(item => item.classList.remove("is-selected"));
  option.classList.add("is-selected");
});

document.querySelector("#commandTrigger").addEventListener("click", openCommand);
commandInput.addEventListener("input", () => renderCommands(commandInput.value));
commandResults.addEventListener("click", event => { const button = event.target.closest("[data-command]"); if (button) executeCommand(Number(button.dataset.command)); });
commandInput.addEventListener("keydown", event => {
  const results = [...commandResults.querySelectorAll(".command-result")];
  if (!results.length) return;
  let current = results.findIndex(item => item.classList.contains("is-selected"));
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    results[current]?.classList.remove("is-selected");
    current = event.key === "ArrowDown" ? (current + 1) % results.length : (current - 1 + results.length) % results.length;
    results[current].classList.add("is-selected");
    results[current].scrollIntoView({ block: "nearest" });
  }
  if (event.key === "Enter") { event.preventDefault(); results[current]?.click(); }
});

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openCommand(); }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "n") { event.preventDefault(); openDrawer("new-project"); }
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "m") { event.preventDefault(); openDrawer("capture"); }
  if (event.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  if (event.key === "Tab" && drawer.classList.contains("is-open")) {
    const focusable = [...drawer.querySelectorAll("button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]")].filter(item => item.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

document.querySelector("#drawerClose").addEventListener("click", closeDrawer);
scrim.addEventListener("click", () => { closeDrawer(); closeMobileMenu(); });

const sidebar = document.querySelector("#sidebar");
const mobileMenu = document.querySelector("#mobileMenu");
mobileMenu.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");
  mobileMenu.setAttribute("aria-expanded", String(isOpen));
  scrim.hidden = !isOpen;
});

function closeMobileMenu() {
  sidebar.classList.remove("is-open");
  mobileMenu.setAttribute("aria-expanded", "false");
  if (!drawer.classList.contains("is-open")) scrim.hidden = true;
}

// ── 分類拖曳排序（滑鼠與觸控共用 Pointer Events）──
let categoryDrag = null;

document.addEventListener("pointerdown", event => {
  const handle = event.target.closest("[data-category-drag]");
  if (!handle) return;
  const row = handle.closest(".category-row");
  const listEl = row?.parentElement;
  if (!listEl) return;
  categoryDrag = { row, listEl, order: [...listEl.querySelectorAll("[data-category-name]")].map(item => item.dataset.categoryName) };
  row.classList.add("is-dragging");
  handle.setPointerCapture(event.pointerId);
  event.preventDefault(); // 避免拖曳時選取文字
});

document.addEventListener("pointermove", event => {
  if (!categoryDrag) return;
  const over = [...categoryDrag.listEl.querySelectorAll(".category-row")].find(row => {
    if (row === categoryDrag.row || row.dataset.categoryLocked === "true") return false;
    const bounds = row.getBoundingClientRect();
    return event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  });
  if (!over) return;
  const movingDown = Boolean(over.compareDocumentPosition(categoryDrag.row) & Node.DOCUMENT_POSITION_PRECEDING);
  categoryDrag.listEl.insertBefore(categoryDrag.row, movingDown ? over.nextSibling : over);
});

function endCategoryDrag() {
  if (!categoryDrag) return;
  const { row, listEl, order } = categoryDrag;
  categoryDrag = null;
  row.classList.remove("is-dragging");
  const moved = [...listEl.querySelectorAll("[data-category-name]")].some((item, index) => item.dataset.categoryName !== order[index]);
  if (!moved) return;
  commitCategoryOrder(listEl);
  showToast("已更新分類順序");
}

document.addEventListener("pointerup", endCategoryDrag);
document.addEventListener("pointercancel", endCategoryDrag);

// 鍵盤操作：聚焦握把後用上下方向鍵移動
document.addEventListener("keydown", event => {
  if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
  const handle = event.target.closest?.("[data-category-drag]");
  if (!handle) return;
  event.preventDefault();
  const row = handle.closest(".category-row");
  const listEl = row.parentElement;
  const sibling = event.key === "ArrowUp" ? row.previousElementSibling : row.nextElementSibling;
  if (!sibling || !sibling.classList.contains("category-row") || sibling.dataset.categoryLocked === "true") return;
  listEl.insertBefore(...(event.key === "ArrowUp" ? [row, sibling] : [sibling, row]));
  commitCategoryOrder(listEl, row.dataset.categoryName);
});

restoreLocalData().then(async () => {
  await unlockCachedConnections();
  render();
  await autoPullFromGithub(true);
  if (!syncConfig.repo || !syncToken() || !(imageSyncCounts().cloud || fileSyncCounts().cloud)) return;
  Promise.all([hydrateCloudImages(syncToken()), hydrateCloudFiles(syncToken())]).then(([imageCount, fileCount]) => {
    if (imageCount || fileCount) {
      persistLocalData();
      setSyncStatus("ok", "雲端媒體已就緒", `已安全讀取 ${imageCount} 張圖片、${fileCount} 個文件。`);
      render();
    }
  }).catch(error => setSyncStatus("error", "雲端媒體讀取未完成", error.message));
});

// 切回這個分頁 / 捷徑視窗時，重新檢查 GitHub 是否有其他裝置上傳的新版本
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") autoPullFromGithub();
});
