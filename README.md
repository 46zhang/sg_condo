# 🏙 SGCondo — Singapore Condo Finder

> **Read this in:** [English](./README.md) · [简体中文](./README.zh-CN.md)

A friendly tool to help you find the right Singapore condo. Filter by what matters to you — budget, commute, school zone, age — and see projects scored across 6 dimensions tailored to your goal: living in, school zone, investment, value buy, or new launch.

Built with **PR / foreigner buyer perspective** in mind (ABSD, BSD, CPF rules). Bilingual UI (English / 简体中文).

[**🔗 Try it live →**](https://46zhang.github.io/sg_condo/)

![SGCondo screenshot](docs/sg_condo_screenshot)

---

## ✨ Features

### 🎯 Goal-driven 6-dimension scoring
Pick your goal — the weights auto-adjust for your priority:

| Dimension | What it measures |
|---|---|
| 💰 **Price** | PSF vs district median (CCR / RCR / OCR) |
| 📈 **History** | 12-month PSF momentum (downtrend = "value buy" opportunity) |
| 🚇 **MRT** | Walk minutes to nearest station |
| 🏢 **Commute** | Estimated commute minutes to your workplace |
| 🏗 **Age** | Exponential decay × tenure factor (FH/LH crossover model) |
| 🎓 **School** | Distance to Top-30 primary schools (1km MOE priority rule) |

### 🏛 Tenure crossover model
Singapore's Freehold (FH) vs 99-year Leasehold (LH) is more nuanced than "FH always wins." The scoring reflects real market behavior:

| Age | LH score | FH score | Winner |
|---|---|---|---|
| 0–10 yrs | 92–98 | 78–85 (-15%) | **🏆 LH** (FH entry premium drag) |
| 15 yrs | 81 | 73 (-10%) | LH |
| 20 yrs | 67 | 67 | **Crossover** |
| 22+ yrs | 45 | 60 | **🏆 FH** (LH lease decay starts) |
| 35 yrs | 21 | 47 | **🏆 FH** (En-bloc potential) |

### 🗺 Three integrated views
- **🔍 Search & Filter** — Score-ranked card list with key info pills, MRT/school details, recent transactions, and external listing links (PropertyGuru, 99.co, SquareFoot, Reddit, 小红书, YouTube, Google).
- **🗺 Map View** — Dark Leaflet map with score-colored markers, draw rectangle to filter by area, click markers to fly + open popup. Side list shows "Top within view" sorted by score, updates as you pan.
- **🧮 Loan Calculator** — Singapore 2026 tax rules: BSD tiered, ABSD by buyer identity (Citizen / PR / Foreigner) × property number (1st / 2nd / 3rd+), CPF-OA usage, monthly payment, total interest.

### 📊 Other features
- **🌐 Bilingual EN / 中文** — Auto-detects browser language, click `EN/中文` to toggle, preference saved
- **⚡ Auto-filter** — Any change instantly re-filters (250 ms debounce); no "Apply" button needed
- **⭐ Watchlist & compare** — Star up to 4 projects, view side-by-side comparison with green-bold "best in row" highlighting
- **🔍 Score breakdown modal** — Click any score ring to see per-dimension explanation, formula, and weighted total calculation
- **🎚 Adjustable weight sliders** — On wide screens, a right rail with 6 sliders + 6 presets (Balanced / Value / Commute / School / New Launch / Value Buy)
- **📄 Pagination** — 20 / 50 / 100 per page, jump-to-page input, smart ellipsis (`1 ... 4 5 6 ... 12`)
- **📱 Mobile-friendly** — Responsive 3 → 2 → 1 column layout

---

## 🚀 How to use

### Just want to try it?
👉 [**Open the live demo**](https://github.com/46zhang/sg_condo/blob/main/index.html) — everything runs in your browser, nothing to install.

### Want to run it locally?

```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
open sg_condo_pr_standalone.html
```

The HTML file is fully self-contained — data is embedded inside, no server needed.

### Workflow tips

- **Start with a goal** — Pick `🎓 School Zone` or `📉 Value Buy` from the top bar; weights auto-adjust
- **Set your budget & workplace** — These two filters drive most rankings
- **Tweak the weights** — On a wide screen, the right rail lets you fine-tune per-dimension importance
- **Star promising projects** — Star button on each card; up to 4 can be compared side-by-side
- **Click the score ring** — Reveals a detailed breakdown explaining how the score was calculated

---

## ⚠️ Disclaimers

This is an **independent personal tool**, not affiliated with URA, MOE, IRAS, or any property agency.

- Transaction data is from URA's public API, refreshed periodically (not real-time)
- ABSD / BSD rates are based on 2026 simplified tiers — always verify with [IRAS](https://www.iras.gov.sg/) for actual rates
- The 6-dimension scoring is opinionated — calibrate to your own preferences via the weight sliders
- "Top-30 primary schools" is a curated list, not an official ranking
- Rental yield uses gross figures (actual net returns are typically 60–75% of gross)
- This tool **does not** replace professional advice from a licensed property agent, mortgage broker, or financial planner

---

## 🤝 Contributing

We welcome contributions! Bug reports, feature ideas, school list updates, scoring tweaks — all valued.

📖 **Read the [Contributing Guide](./CONTRIBUTING.md)** before opening a PR.

Quick links:
- 🐛 [Report a bug](../../issues/new?template=bug_report.md)
- 💡 [Request a feature](../../issues/new?template=feature_request.md)
- 💬 [Ask a question / start a discussion](../../discussions)

---

## 📜 License

MIT — feel free to fork, modify, redistribute. Attribution appreciated but not required.

URA transaction data is subject to URA's [API terms of use](https://www.ura.gov.sg/maps/api/).

---

## 🙏 Credits

- **Data**: URA REALIS API (transactions, rentals, MRT)
- **Map**: [Leaflet](https://leafletjs.com/) + [CARTO dark basemap](https://carto.com/attributions)
- **Fonts**: [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Built with**: ☕ + AI pair programming with [Claude](https://claude.ai)

---

<sub>Made with care for Singapore property hunters.</sub>
