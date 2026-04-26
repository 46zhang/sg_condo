# 🏙 SGCondo · 新加坡 Condo 筛选器

> **语言：** [English](./README.md) · [简体中文](./README.zh-CN.md)

帮你高效找到合适新加坡 Condo 的工具。按你关心的条件筛选——预算、通勤、学区、楼龄——并按你选定的目标（自住、学区、投资、抄底、新房）从 6 个维度评分。

专为 **PR / 外国人买家视角**设计（含 ABSD / BSD / CPF 计算）。中英双语界面。

[**🔗 在线试用 →**](https://46zhang.github.io/sg_condo/)

![SGCondo 截图](docs/sg_condo_screenshot)

---

## ✨ 核心功能

### 🎯 目标驱动的 6 维评分
选定你的目标——权重会自动调整：

| 维度 | 含义 |
|---|---|
| 💰 **房价** | PSF 与同区域中位（CCR / RCR / OCR）对比 |
| 📈 **历史趋势** | 12 月 PSF 走势（下跌 = "抄底"机会） |
| 🚇 **地铁** | 步行到最近站点的分钟数 |
| 🏢 **通勤** | 预估通勤至工作地点的分钟数 |
| 🏗 **楼龄** | 指数衰减 × 地契系数（FH/LH 交叉模型） |
| 🎓 **学区** | 距 Top 30 小学的距离（1km MOE 优先原则） |

### 🏛 地契交叉模型
新加坡 Freehold（永久地契，FH）vs 99 年 Leasehold（LH）并不是简单的"FH 永远胜出"。我们的评分还原了真实市场行为：

| 楼龄 | LH 评分 | FH 评分 | 胜者 |
|---|---|---|---|
| 0–10 年 | 92–98 | 78–85 (-15%) | **🏆 LH**（FH 入场溢价拖累） |
| 15 年 | 81 | 73 (-10%) | LH |
| 20 年 | 67 | 67 | **黄金交叉点** |
| 22+ 年 | 45 | 60 | **🏆 FH**（LH 地契开始倒计时） |
| 35 年 | 21 | 47 | **🏆 FH**（En-bloc 潜力显现） |

### 🗺 三大视图
- **🔍 搜索 & 筛选** — 按总分排序的卡片列表，含关键信息 pill、MRT/学区详情、近期成交、外部房源链接（PropertyGuru / 99.co / SquareFoot / Reddit / 小红书 / YouTube / Google）。
- **🗺 地图视图** — 深色 Leaflet 地图，按评分颜色标记，可框选区域筛选，点击标记自动飞到该楼盘并弹出详情。右侧"视图内 Top 楼盘"列表按总分排序，跟随地图移动实时更新。
- **🧮 贷款计算器** — 新加坡 2026 税率规则：BSD 阶梯计算、按身份（公民 / PR / 外国人）× 第几套（1 / 2 / 3+）的 ABSD、CPF-OA 使用、月供、总利息。

### 📊 其他特性
- **🌐 中英双语** — 自动检测浏览器语言，点 `EN/中文` 切换，偏好持久化保存
- **⚡ 自动筛选** — 任何条件变化立即重新筛选（250ms 防抖），无需手动点"应用"
- **⭐ 收藏 & 横向对比** — 星标最多 4 个楼盘，并排对比，每行最优值绿色加粗高亮
- **🔍 评分拆解弹窗** — 点击任一评分圆环，查看每个维度的解释、公式和加权总分计算
- **🎚 可调权重滑块** — 宽屏右侧栏：6 个滑块 + 6 个预设（均衡 / 性价比 / 通勤 / 学区 / 新房 / 抄底）
- **📄 分页** — 每页 20/50/100 条，可跳转到指定页，智能省略号（`1 ... 4 5 6 ... 12`）
- **📱 移动端友好** — 响应式 3 → 2 → 1 列布局

---

## 🚀 如何使用

### 只想试用？
👉 [**打开在线 demo**](https://46zhang.github.io/sg_condo/) —— 一切都在浏览器中运行，无需安装。

### 想本地运行？

```bash
git clone https://github.com/46zhang/sg_condo.git
cd REPO_NAME
# 直接在浏览器打开
open sg_condo_pr_standalone.html
```

HTML 文件完全自包含，数据已嵌入其中，无需后端。

### 使用建议

- **先选目标** — 顶部选 `🎓 学区` 或 `📉 抄底`，权重会自动调整
- **设定预算和工作地点** — 这两个筛选条件主导大部分排序
- **微调权重** — 宽屏右侧栏让你细调每个维度的重要性
- **星标心仪楼盘** — 每张卡片右上角的星标按钮，最多 4 个可横向对比
- **点击评分圆环** — 弹出详细拆解，告诉你这个分数是怎么算出来的

---

## 🌐 部署到自己的服务器

整个应用就是**一个单文件 HTML**，数据已嵌入其中——没有后端、没有数据库、没有构建步骤。任选一种部署方式即可。

### 方式 A · GitHub Pages（免费，推荐）

```bash
# 1. Fork 或 clone 本仓库
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME

# 2. 推到你自己的 GitHub 仓库（免费版 Pages 要求 public）
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 3. 启用 Pages
#    GitHub 仓库 → Settings → Pages
#    Source: Deploy from a branch
#    Branch: main / (root)
#    Save → 等约 30 秒
```

你的网站会在以下地址上线：
```
https://YOUR_USERNAME.github.io/YOUR_REPO/index.html
```

之后更新内容只需 `git push`，Pages 会自动重新构建。

### 方式 B · Netlify / Vercel / Cloudflare Pages

这些平台开箱即用（拖拽 HTML 文件上传，或连接仓库即可）。不需要构建命令，发布目录设为 `/`（项目根目录）。

### 方式 C · 本地文件或任意静态服务器

因为是自包含的单文件 HTML，你可以：
- 直接**双击** `index.html` 在浏览器本地打开
- 上传到任何 Web 服务器（nginx、Apache、S3 + CloudFront 等）
- 用邮件或 U 盘分享

### 想要更新数据？

HTML 内嵌的是 URA 成交数据快照。要用最新数据重新生成，需要免费的 [URA API key](https://www.ura.gov.sg/maps/api/) 和 Node.js 18+。详细数据获取流程见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

### 安全提醒

推到 public 仓库前，请务必确认密钥没被提交：

```bash
# .env 不应该被追踪
git ls-files .env

# 搜索硬编码密钥（应该只返回 process.env.* 引用）
grep -rn "URA_API\|access_key\|apikey" fetch-*.js
```

强烈建议启用 **GitHub Secret Scanning**（Settings → Code security），多一层安全保障。

---

## ⚠️ 免责声明

本工具是**独立的个人项目**，与 URA、MOE、IRAS 或任何房产中介机构无关。

- 交易数据来自 URA 公开 API，定期刷新（非实时）
- ABSD / BSD 税率基于 2026 简化版本，请始终以 [IRAS 官方](https://www.iras.gov.sg/) 数据为准
- 6 维评分系统反映作者主观看法，请通过权重滑块校准到你自己的偏好
- "Top 30 小学"是热门 MOE 小学的整理列表，不是官方排名
- 租金回报使用的是毛利数据（实际净回报通常是毛利的 60–75%）
- 本工具**不能替代**持牌房产中介、贷款经纪或专业理财顾问的建议

仅供个人参考，不构成任何房产投资建议。所有计算结果请以 IRAS / URA 官方数据为准。

---

## 🤝 参与贡献

欢迎任何形式的贡献！Bug 报告、功能建议、学校名单更新、评分模型调优——都很有价值。

📖 提交 PR 前请先阅读 **[贡献指南](./CONTRIBUTING.md)**。

快速链接：
- 🐛 [报告 Bug](../../issues/new?template=bug_report.md)
- 💡 [提交功能建议](../../issues/new?template=feature_request.md)
- 💬 [提问 / 讨论](../../discussions)

---

## 📜 许可证

MIT — 欢迎 fork、修改、再分发。署名感谢但不强制。

URA 交易数据受 URA [API 使用条款](https://www.ura.gov.sg/maps/api/) 约束。

---

## 🙏 致谢

- **数据**: URA REALIS API（成交、租金、MRT）
- **地图**: [Leaflet](https://leafletjs.com/) + [CARTO 深色底图](https://carto.com/attributions)
- **字体**: [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **协作**: ☕ + 与 [Claude](https://claude.ai) 结对编程

---

<sub>为新加坡购房者用心打造。</sub>
