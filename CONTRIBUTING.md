# Contributing to SGCondo · 贡献指南

> **Read this in:** [English](#english) · [简体中文](#简体中文)

---

## English

Thanks for your interest in improving SGCondo! This is an open community project — every contribution helps make it more useful for Singapore property buyers.

### 🌱 Ways to contribute

You don't need to write code to help. All these are valuable:

| Type | Examples |
|---|---|
| 🐛 **Bug reports** | UI glitches, calculation errors, broken filters, mobile issues |
| 💡 **Feature ideas** | New filters, sorting options, scoring tweaks, UI improvements |
| 📚 **Data updates** | School list updates, MRT corrections, district boundary fixes |
| 🌐 **Translations** | Improve EN/中文 wording, fix typos, add new strings |
| 📖 **Documentation** | Clarify README, add usage tips, write tutorials |
| 🎨 **Design feedback** | Color contrast, accessibility, mobile UX |
| 🧪 **Testing** | Try edge cases, report what doesn't work on your device |

### 🐛 Reporting a bug

Before opening an issue:

1. **Search [existing issues](../../issues)** to avoid duplicates
2. **Try the latest version** at the GitHub Pages URL — your local copy might be outdated
3. **Reproduce in 2 different browsers** if possible (Chrome + Safari is a good combo)

When opening an issue, include:

- **What you did** (e.g. "Set budget to 1.5M, picked 'New Launch' goal, sorted by PSF")
- **What you expected** (e.g. "Cards should sort by PSF ascending")
- **What actually happened** (e.g. "Sort doesn't change anything")
- **Browser + OS** (e.g. "Chrome 132 / macOS 14.5" or "Safari iOS 17.4")
- **Screenshot** if it's a visual issue

We have an [issue template](../../issues/new?template=bug_report.md) to make this easier.

### 💡 Requesting a feature

Open a [feature request issue](../../issues/new?template=feature_request.md) and describe:

- **The problem you're trying to solve** (more useful than the proposed solution)
- **Who else might benefit** (e.g. "PR buyers comparing EC vs private")
- **A rough sketch** if it's UI-related (text description is fine, screenshots / mockups even better)

We may discuss alternatives before implementing — be open to that.

### 🔧 Code contributions

#### Setup
```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
```

The main file you edit is `sg_condo_pr_standalone_template.html`. After your change:

```bash
node bundle-standalone.js   # Inlines the data → sg_condo_pr_standalone.html
```

Then open `sg_condo_pr_standalone.html` in your browser to test.

#### PR guidelines

- **One concern per PR** — Don't bundle a bug fix with a UI redesign and a new feature. Smaller PRs ship faster.
- **Test before opening** — At minimum: filter, sort, switch tabs, open the calculator, try EN/中文 toggle.
- **Match existing style** — The codebase uses vanilla JS, design tokens (CSS vars), and bilingual i18n via `data-i18n` attributes + `t('key')` JS helper. Don't introduce build tools or frameworks.
- **Add i18n keys for any new UI text** — Both `en` and `zh` dictionaries in `TRANSLATIONS`. If you only speak one language, add a placeholder like `'TODO: 中文翻译'` and we'll fill it in.
- **Update the README** if you add a user-facing feature.
- **Keep PR description focused** — What changed, why, and how to verify.

#### What's likely to be merged

- 🟢 Bug fixes
- 🟢 New filter options users have asked for in issues
- 🟢 Better mobile responsiveness
- 🟢 Improved scoring logic with reasoning + before/after comparison
- 🟢 New language translations
- 🟢 Performance improvements (especially mobile init time)

#### What's likely to be rejected

- 🔴 Adding heavy dependencies (React, Vue, build steps) — the "single file" nature is intentional
- 🔴 Significant scope creep (e.g. adding a backend, user accounts) — keep it offline-first
- 🔴 Visual changes that hurt readability or accessibility
- 🔴 PRs without testing notes
- 🔴 Massive PRs touching everything — break them up

### 📋 Code of Conduct

Be kind. Singapore property is a personal, often emotional topic — assume good faith from others, even when disagreeing about scoring weights or design choices.

We follow the [Contributor Covenant](https://www.contributor-covenant.org/). Harassment, discrimination, or personal attacks won't be tolerated.

### 📬 Getting help

- 💬 [Discussions](../../discussions) — General questions, share your search experience
- 🐛 [Issues](../../issues) — Bug reports & feature requests

---

## 简体中文

感谢你愿意为 SGCondo 出力！这是一个开源社区项目——每一份贡献都能让它对新加坡购房者更有用。

### 🌱 贡献方式

不会写代码也能贡献，下面这些都很有价值：

| 类型 | 例子 |
|---|---|
| 🐛 **Bug 反馈** | 界面问题、计算错误、筛选失效、移动端问题 |
| 💡 **功能建议** | 新筛选条件、排序选项、评分调整、界面改进 |
| 📚 **数据更新** | 学校名单更新、MRT 数据修正、区域边界修正 |
| 🌐 **翻译** | 优化中英文措辞、修正错别字、新增翻译 |
| 📖 **文档** | 完善 README、添加使用技巧、写教程 |
| 🎨 **设计反馈** | 颜色对比、无障碍、移动端 UX |
| 🧪 **测试** | 尝试边界情况、反馈在你设备上的问题 |

### 🐛 报告 Bug

提 issue 前：

1. **搜索 [已有 issues](../../issues)** 避免重复
2. **试一下 GitHub Pages 上的最新版** —— 你本地的版本可能已经过时
3. **如果可以，在 2 个不同浏览器复现**（Chrome + Safari 是不错的组合）

提 issue 时请包含：

- **你做了什么**（如"预算设 150 万，目标选'新房'，按 PSF 排序"）
- **你期待发生什么**（如"卡片应该按 PSF 升序排列"）
- **实际发生了什么**（如"排序无变化"）
- **浏览器 + 系统**（如"Chrome 132 / macOS 14.5"或"Safari iOS 17.4"）
- **截图** —— 如果是视觉问题

我们提供了 [issue 模板](../../issues/new?template=bug_report.md)，方便填写。

### 💡 提功能建议

打开 [功能建议 issue](../../issues/new?template=feature_request.md)，描述：

- **你想解决什么问题**（比提出的方案更重要）
- **还有哪些人会受益**（如"对比 EC 和私宅的 PR 买家"）
- **如果是界面相关，给个粗略草图**（文字描述也行，截图 / Mockup 更佳）

我们可能会讨论替代方案再实现——请保持开放心态。

### 🔧 代码贡献

#### 环境搭建
```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
```

主要编辑的文件是 `sg_condo_pr_standalone_template.html`。改完后：

```bash
node bundle-standalone.js   # 把数据嵌入进去 → sg_condo_pr_standalone.html
```

然后在浏览器打开 `sg_condo_pr_standalone.html` 测试。

#### PR 规范

- **一个 PR 只做一件事** —— 别把 bug 修复、UI 改造、新功能塞一起。小 PR 合并得更快。
- **提交前自测** —— 至少：筛选、排序、切换标签页、打开计算器、切换中英文。
- **保持代码风格一致** —— 代码库用的是原生 JS、CSS 变量（设计 tokens）、双语 i18n（`data-i18n` 属性 + JS 的 `t('key')`）。不要引入构建工具或框架。
- **新 UI 文字必须加 i18n key** —— `TRANSLATIONS` 里 `en` 和 `zh` 都要有。如果你只懂一种语言，先放占位符 `'TODO: 待补'`，我们会补上。
- **新增用户可见功能时同步更新 README**
- **PR 描述聚焦** —— 改了什么，为什么，怎么验证。

#### 容易被合并的

- 🟢 Bug 修复
- 🟢 issues 里有人提过的新筛选选项
- 🟢 改进移动端体验
- 🟢 评分逻辑改进（要附上推理 + 改前/改后对比）
- 🟢 新增语言翻译
- 🟢 性能优化（尤其是移动端首次加载时间）

#### 容易被拒绝的

- 🔴 引入重型依赖（React、Vue、构建步骤）—— "单文件"是有意为之
- 🔴 重大功能蔓延（如加后端、用户账号）—— 保持 offline-first
- 🔴 损害可读性或无障碍性的视觉改动
- 🔴 没有测试说明的 PR
- 🔴 改动巨大、牵涉一切的 PR —— 拆开

### 📋 行为准则

请友善。新加坡房产是非常个人化、有时甚至情绪化的话题——即使在评分权重或设计决策上有分歧，也要假定对方是出于善意。

我们遵循 [贡献者公约](https://www.contributor-covenant.org/zh-cn/version/2/1/code_of_conduct/)。不容忍骚扰、歧视或人身攻击。

### 📬 寻求帮助

- 💬 [讨论区](../../discussions) —— 一般问题、分享你的找房体验
- 🐛 [Issues](../../issues) —— Bug 报告 & 功能建议
