<div align="center">

<img src="./assets/logo.svg" alt="delta-force-core logo" width="200" />

# delta-force-core

**三角洲行动核心数据与抽签工具库**

[![npm version](https://img.shields.io/npm/v/delta-force-core?color=blue&logo=npm&logoColor=white)](https://www.npmjs.com/package/delta-force-core)
[![npm downloads](https://img.shields.io/npm/dm/delta-force-core?color=brightgreen)](https://www.npmjs.com/package/delta-force-core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A518-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![GitHub Stars](https://img.shields.io/github/stars/Zhoyi011/delta-force-core?style=social)](https://github.com/Zhoyi011/delta-force-core/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

[简体中文](./README.md) · [English](./README.en.md)

</div>

---

<a id="status"></a>
> ## 📢 项目状态
>
> **v0.6.x** — 稳定版本，覆盖 **干员 / 武器 / 装备 / 子弹 / 配件** 五大模块。
>
> **新增**：564 个配件数据、武器伤害数据、全库模糊搜索、MCP Server。
>
> **路线图**：配件与武器的兼容关系、子弹细分（1~6 弹）、多语言支持。

---

<a id="ai-agents"></a>
## 🤖 For AI Agents

- **Wiki（AI 使用指南）**：https://github.com/Zhoyi011/delta-force-core/wiki
- **`llms.txt`（AI 索引）**：[llms.txt](./llms.txt)
- **`llms-full.txt`（AI 全文）**：[llms-full.txt](./llms-full.txt)
- **Raw JSON 数据**：https://unpkg.com/delta-force-core/index.json
- **MCP Server**：`npx -y -p delta-force-core delta-force-mcp`
- **npm 页面**：https://www.npmjs.com/package/delta-force-core

---

<a id="toc"></a>
## 📖 目录

- [✨ 特性](#features)
- [🎯 使用场景](#use-cases)
- [🧠 设计理念](#design)
- [📦 安装](#install)
- [🤖 MCP Server](#mcp)
- [🚀 快速开始](#quick-start)
- [🧩 核心概念](#concepts)
- [📘 API 参考](#api)
  - [引擎（Engine）](#api-engine)
  - [抽签函数](#api-random)
  - [查询与搜索函数](#api-query)
  - [列表函数](#api-list)
  - [用户覆盖层](#api-override)
- [📚 数据模块](#data)
  - [干员（Operators）](#data-operators)
  - [武器（Weapons）](#data-weapons)
  - [配件（Attachments）](#data-attachments)
  - [装备（Equipment）](#data-equipment)
  - [子弹（Ammo）](#data-ammo)
- [📄 index.json](#index-json)
- [🌐 生态与集成](#ecosystem)
- [🤝 贡献指南](#contributing)
- [🛠 开发](#dev)
- [📅 路线图](#roadmap)
- [❓ FAQ](#faq)
- [📜 License](#license)
- [❤️ 致谢](#thanks)

---

<a id="features"></a>
## ✨ 特性

<table>
  <tr>
    <td align="center" width="25%">
      <h3>📚 完整数据</h3>
      <p>干员 / 武器 / 装备 / 子弹<br/>564 个配件官方字段全覆盖</p>
    </td>
    <td align="center" width="25%">
      <h3>🎲 抽签工具</h3>
      <p>随机抽干员、武器、装备<br/>一键生成完整配装</p>
    </td>
    <td align="center" width="25%">
      <h3>🔍 搜索与查询</h3>
      <p>按 id / 口径 / 关键字搜索<br/>类型安全，IDE 智能提示</p>
    </td>
    <td align="center" width="25%">
      <h3>🎨 用户覆盖层</h3>
      <p>品质 / 别名 / 标签<br/>运行时注入，不污染官方数据</p>
    </td>
  </tr>
</table>

- ✅ **TypeScript 原生** —— 完整类型定义，IDE 智能提示
- ✅ **ES Module** —— 现代模块规范，Tree-shaking 友好
- ✅ **零运行时依赖** —— 核心库不依赖任何第三方包
- ✅ **向前兼容** —— 所有可选字段 `?:`，新版本不破坏老用户
- ✅ **MCP Server** —— 支持 Claude Desktop / Cursor / Cline 直接调用

---

<a id="use-cases"></a>
## 🎯 使用场景

<table>
  <tr>
    <th width="20%">场景</th>
    <th>示例</th>
  </tr>
  <tr>
    <td>🎮 <b>抽卡应用</b></td>
    <td>一键生成随机配装，可注入自定义品质评估</td>
  </tr>
  <tr>
    <td>📚 <b>Wiki / 资料站</b></td>
    <td>直接消费结构化数据，渲染装备/武器/配件列表</td>
  </tr>
  <tr>
    <td>🤖 <b>Discord / QQ 机器人</b></td>
    <td><code>getRandomLoadout()</code> 开箱即用</td>
  </tr>
  <tr>
    <td>🧪 <b>游戏数据研究</b></td>
    <td>按口径、等级、伤害、模式自由筛选，做统计分析</td>
  </tr>
  <tr>
    <td>🌐 <b>静态网站 / CDN</b></td>
    <td>通过 <code>index.json</code> 直接 fetch，无需构建</td>
  </tr>
  <tr>
    <td>🧠 <b>AI 助手</b></td>
    <td>通过 MCP Server，让 Claude / Cursor 直接调用</td>
  </tr>
</table>

---

<a id="design"></a>
## 🧠 设计理念

### 1. 数据与逻辑分离

**官方数据是只读的**，由库维护者持续更新；**用户偏好是运行时注入的**，不污染官方数据。

### 2. 为什么 quality 不在官方数据里？

三角洲行动里的武器品质（绿色 / 蓝色 / 紫色 / 金色）**不是官方明示的数据**，而是玩家根据实战强度的**主观评估**。因此：

- 官方 `Weapon` 类型**不含 `quality` 字段**
- 用户通过 `createEngine({ qualityOverride })` 注入自己的评估
- 默认引擎（无覆盖）**按品质抽签会返回空**

这是**刻意的设计**，避免把某一个人的主观判断强加给所有用户。

### 3. 向前兼容

所有可选字段一律 `?:`。以后加新字段（如 `caliber`、`image`、`slots`）不影响老用户。

---

<a id="install"></a>
## 📦 安装

<details open>
<summary><b>作为 JS 库（npm / yarn / pnpm / bun）</b></summary>

```bash
# npm
npm install delta-force-core

# yarn
yarn add delta-force-core

# pnpm
pnpm add delta-force-core

# bun
bun add delta-force-core
```

</details>

<details>
<summary><b>作为 MCP Server（给 AI 客户端）</b></summary>

**方式 1：npx（推荐，不安装）**

在 Claude Desktop / Cursor / Cline 配置里加：

```json
{
  "mcpServers": {
    "delta-force": {
      "command": "npx",
      "args": ["-y", "-p", "delta-force-core", "delta-force-mcp"]
    }
  }
}
```

**方式 2：全局安装**

```bash
npm install -g delta-force-core
```

</details>

<details>
<summary><b>CDN（浏览器直接使用）</b></summary>

```html
<!-- ES Module -->
<script type="module">
  import { getRandomLoadout } from 'https://esm.sh/delta-force-core';
  console.log(getRandomLoadout());
</script>

<!-- 或直接拿 JSON 数据 -->
<script type="module">
  const res = await fetch('https://unpkg.com/delta-force-core/index.json');
  const data = await res.json();
  console.log(data.weapons);
</script>
```

</details>

**环境要求**：Node.js ≥ 18 或任何支持 ES Module 的现代浏览器。

---

<a id="mcp"></a>
## 🤖 MCP Server

`delta-force-core` 内置 MCP Server，可以让 AI 客户端（Claude Desktop / Cursor / Cline）**直接调用**你的工具。

### 配置

```json
{
  "mcpServers": {
    "delta-force": {
      "command": "npx",
      "args": ["-y", "-p", "delta-force-core", "delta-force-mcp"]
    }
  }
}
```

### 可用工具（Tools）

| 工具 | 说明 |
|---|---|
| `get_random_loadout` | 随机完整配装 |
| `get_random_weapon` | 随机武器 |
| `get_random_operator` | 随机干员 |
| `get_random_ammo` | 随机子弹 |
| `search_weapons` | 搜索武器（匹配 id/名称/口径） |
| `search_operators` | 搜索干员（匹配 id/名称/特性） |
| `find_weapon` | 按 id 查武器 |
| `find_weapons_by_caliber` | 按口径查武器 |
| `list_weapons` | 列出武器（可按分类） |
| `list_categories` | 列出所有分类 |

### 用户示例

用户在 Claude Desktop 说：
> "帮我找一下 5.56 口径的突击步枪"

AI 会**自动调用** `search_weapons`，返回**真实数据**。

---

<a id="quick-start"></a>
## 🚀 快速开始

### 场景 1 · 查数据 / 搜索

```ts
import { WEAPONS, ATTACHMENTS, searchWeapons } from 'delta-force-core';

console.log(WEAPONS);            // 全部武器
console.log(ATTACHMENTS);        // 564 个配件

const results = searchWeapons('m4'); // 搜索名称带 "m4" 的武器
console.log(results); 
```

### 场景 2 · 抽签（抽卡应用）

```ts
import { getRandomWeapon, getRandomLoadout } from 'delta-force-core';

console.log(getRandomWeapon());                          // 随机一把武器
console.log(getRandomLoadout({ allowNormal: true }));    // 随机一套普通模式配装
```

### 场景 3 · 高级筛选武器

```ts
import { searchWeaponsAdvanced } from 'delta-force-core';

// 找 5.56 口径，且伤害大于等于 30，且普通模式可用的武器
const guns = searchWeaponsAdvanced({
  caliber: '5.56x45mm',
  minDamage: 30,
  allowNormal: true
});
console.log(guns);
```

### 场景 4 · 自定义品质评估

```ts
import { createEngine } from 'delta-force-core';

const engine = createEngine({
  qualityOverride: {
    m4a1: '金色',
    akm: '紫色',
  },
});

console.log(engine.getRandomWeapon({ quality: '金色' }));
console.log(engine.getWeaponQuality('m4a1'));  // '金色'
```

---

<a id="api"></a>
## 📘 API 参考

> 💡 **提示**：所有以 `defaultEngine` 形式导出的函数，等价于先 `createEngine()` 再调用。想自定义行为用 `createEngine`。

<a id="api-engine"></a>
### 引擎（Engine）

#### `createEngine(options?: EngineOptions): Engine`

创建一个引擎实例。

```ts
import { createEngine } from 'delta-force-core';

const engine = createEngine({
  qualityOverride: { m4a1: '金色' },
  aliasOverride:   { m4a1: ['M4', 'M4卡宾枪'] },
  tagOverride:     { m4a1: ['经典', '入门'] },
});
```

---

<a id="api-random"></a>
### 抽签函数

所有抽签函数使用 `Math.random()`，均匀分布。**空池会抛错。**

#### `getRandomOperator(category?: string): Operator`

随机抽取一名干员。

```ts
getRandomOperator();          // 任意干员
getRandomOperator('突击兵');   // 只从突击兵里抽
```

#### `getRandomWeapon(options?: WeaponOptions): Weapon`

随机抽取一把武器。

```ts
getRandomWeapon();
getRandomWeapon({ category: '突击步枪' });
getRandomWeapon({ allowNormal: true });
```

#### `getRandomLoadout(options?: LoadoutOptions): Loadout`

随机生成一套完整配装。

```ts
const loadout = getRandomLoadout({ allowNormal: true });
// 返回：{ operator, weapon, armor, helmet, backpack, chestRig }
```

---

<a id="api-query"></a>
### 查询与搜索函数

| 函数 | 说明 |
|---|---|
| `searchWeapons(keyword)` | 模糊搜索武器（匹配 id/名称/口径） |
| `searchWeaponsAdvanced(options)` | 高级筛选武器（口径/分类/伤害区间/普通模式） |
| `searchOperators(keyword)` | 模糊搜索干员 |
| `searchOperatorsAdvanced(options)` | 高级筛选干员 |
| `findOperatorById(id)` | 按 id 查干员 |
| `findWeaponById(id)` | 按 id 查武器 |
| `findWeaponsByCaliber(caliber)` | 按口径查武器 |

```ts
findWeaponById('m4a1');
// { id: 'm4a1', name: 'M4A1突击步枪', caliber: '5.56x45mm', baseDamage: 31, allowNormal: true }
```

---

<a id="data"></a>
## 📚 数据模块

<a id="data-weapons"></a>
### 武器（Weapons）

**新增属性**：包含 `baseDamage`（裸枪伤害）、`armorDamage`（护甲伤害）、`pelletCount`（霰弹枪弹丸数）。

```ts
interface Weapon {
  id: string;
  name: string;
  caliber?: string;
  baseDamage?: number;   
  armorDamage?: number;  
  pelletCount?: number;  
  image?: string;
  allowNormal?: boolean;
}
```

**合计 68 把武器。**

---

<a id="data-attachments"></a>
### 配件（Attachments）

**全库包含 564 个配件**，涵盖 9 大分类。

```ts
type AttachmentSlot = '弹匣' | '瞄准镜' | '护木' | '枪管' | '枪口' | '枪托' | '前握把' | '后握把' | '功能配件';

interface Attachment {
  id: string;
  name: string;
  slot: AttachmentSlot;
  tier?: number; // 2(绿) / 3(蓝) / 4(紫)
}
```

```ts
import { ATTACHMENTS } from 'delta-force-core';

// 找所有紫色品质的枪管
const barrels = ATTACHMENTS.filter(a => a.slot === '枪管' && a.tier === 4);
```

---

<a id="index-json"></a>
## 📄 index.json

库在每次构建时生成一份 `index.json`，包含**当前官方数据的完整快照**（体积约 323 KB）：

```js
// ESM
import data from 'delta-force-core/index.json' with { type: 'json' };
console.log(data.attachments);

// HTTP
const res = await fetch('https://unpkg.com/delta-force-core/index.json');
const data = await res.json();
```

---

<a id="ecosystem"></a>
## 🌐 生态与集成

| 平台 | 用法 |
|---|---|
| **Node.js** | `npm install delta-force-core` |
| **浏览器** | `https://esm.sh/delta-force-core` |
| **Claude Desktop / Cursor** | MCP Server |

### Discord.js 示例

```ts
import { Client, GatewayIntentBits, Events } from 'discord.js';
import { getRandomLoadout } from 'delta-force-core';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName !== 'random-loadout') return;

  const l = getRandomLoadout({ allowNormal: true });
  await interaction.reply({
    content: [
      `🧑 **干员**：${l.operator.name}`,
      `🔫 **武器**：${l.weapon.name}`,
      `🛡 **护甲**：${l.armor.name}`,
      `⛑ **头盔**：${l.helmet.name}`,
      `🎒 **背包**：${l.backpack.name}`,
      `🎽 **胸挂**：${l.chestRig.name}`,
    ].join('\n'),
  });
});
```

---

<a id="contributing"></a>
## 🤝 贡献指南

### 更新数据

**只需要修改对应的数据文件**：

```text
src/data/
├─ operators.ts    ← 干员
├─ weapons.ts      ← 武器
├─ attachments.ts  ← 配件
├─ equipment.ts    ← 装备
└─ ammo.ts         ← 子弹
```

### 流程

```bash
# 1. 改数据文件
vim src/data/weapons.ts

# 2. 编译 + 重新生成 index.json
npm run build

# 3. 提交（请使用规范的 commit 前缀）
git add .
git commit -m "data: 新增 XXX 武器"
git push origin main
```

### 提交规范

采用 [Conventional Commits](https://www.conventionalcommits.org/)：

| 前缀 | 用途 |
|---|---|
| `feat:` | 新功能 |
| `fix:` | Bug 修复 |
| `data:` | 数据更新 |
| `docs:` | 文档 |
| `chore:` | 杂项 |

---

<a id="roadmap"></a>
## 📅 路线图

<table>
  <tr>
    <th>状态</th>
    <th>功能</th>
    <th>版本</th>
  </tr>
  <tr><td>✅ 已完成</td><td>干员 / 武器 / 装备 / 子弹</td><td>v0.1</td></tr>
  <tr><td>✅ 已完成</td><td>引擎 + 用户覆盖层（quality / alias / tag）</td><td>v0.2</td></tr>
  <tr><td>✅ 已完成</td><td>完整 README + Wiki + AI 文档</td><td>v0.3</td></tr>
  <tr><td>✅ 已完成</td><td>MCP Server（AI 客户端集成）</td><td>v0.4</td></tr>
  <tr><td>✅ 已完成</td><td>武器伤害数据 + 搜索函数</td><td>v0.5</td></tr>
  <tr><td>✅ 已完成</td><td><strong>564 个配件数据全量录入</strong></td><td>v0.6</td></tr>
  <tr><td>📋 计划中</td><td>配件与武器的兼容关系（Slots）</td><td>v0.7</td></tr>
  <tr><td>📋 计划中</td><td>子弹细分（1~6 弹，穿透数据）</td><td>v0.8</td></tr>
</table>

---

<a id="license"></a>
## 📜 License

本项目基于 [MIT License](./LICENSE) 发布。

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐ Star 支持一下！**

[⬆ 回到顶部](#delta-force-core)

</div>
```
