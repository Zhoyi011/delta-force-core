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
> **v0.7.x** — 稳定版本，覆盖 **干员 / 武器 / 装备 / 子弹 / 配件 / 局内物品（药品、钥匙、收集品等）** 六大模块。
>
> **新增**：物品模块（药品/钥匙/高价值收藏品等）、564 个配件数据、武器高级筛选与伤害数据、全库模糊搜索、MCP Server。
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
  - [物品（Items）](#data-items)
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
      <p>干员 / 武器 / 装备 / 子弹 / 物品<br/>564 个配件官方字段全覆盖</p>
    </td>
    <td align="center" width="25%">
      <h3>🎲 抽签工具</h3>
      <p>随机抽干员、武器、装备<br/>一键生成完整配装</p>
    </td>
    <td align="center" width="25%">
      <h3>🔍 搜索与查询</h3>
      <p>按 id / 口径 / 关键字 / 属性高级筛选<br/>类型安全，IDE 智能提示</p>
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
    <td>直接消费结构化数据，渲染装备/武器/配件/局内物品列表</td>
  </tr>
  <tr>
    <td>🤖 <b>Discord / QQ 机器人</b></td>
    <td><code>getRandomLoadout()</code> 开箱即用，支持查物品与配装</td>
  </tr>
  <tr>
    <td>🧪 <b>游戏数据研究</b></td>
    <td>按口径、等级、伤害、价格、模式自由筛选，做统计分析</td>
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

### 2. 为什么 quality 不在官方武器数据里？

三角洲行动里的武器品质（绿色 / 蓝色 / 紫色 / 金色）**不是官方明示的数据**，而是玩家根据实战强度的**主观评估**。因此：

- 官方 `Weapon` 类型**不含 `quality` 字段**
- 用户通过 `createEngine({ qualityOverride })` 注入自己的评估
- 默认引擎（无覆盖）**按品质抽签会返回空**

这是**刻意的设计**，避免把某一个人的主观判断强加给所有用户。物品（`GameItem`）若官方原生具备品质等级（如 2 级绿 / 3 级蓝 / 4 级紫 / 5 级金），则在 `GameItem` 中原生支持。

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
import { WEAPONS, ATTACHMENTS, ITEMS, searchWeapons, findItemById } from 'delta-force-core';

console.log(WEAPONS);            // 全部武器
console.log(ATTACHMENTS);        // 564 个配件
console.log(ITEMS);              // 全部局内物品（药品、钥匙、收藏品等）

const results = searchWeapons('m4'); // 搜索名称带 "m4" 的武器
console.log(results); 

const medkit = findItemById('field_first_aid_kit'); // 查局内药品物品
console.log(medkit);
```

### 场景 2 · 抽签（抽卡应用）

```ts
import { getRandomWeapon, getRandomLoadout } from 'delta-force-core';

console.log(getRandomWeapon());                          // 随机一把武器
console.log(getRandomLoadout({ allowNormal: true }));    // 随机一套普通模式配装
```

### 场景 3 · 高级筛选武器与干员

```ts
import { searchWeaponsAdvanced, searchOperatorsAdvanced } from 'delta-force-core';

// 找 5.56 口径，且伤害大于等于 30，且普通模式可用的武器
const guns = searchWeaponsAdvanced({
  caliber: '5.56x45mm',
  minDamage: 30,
  allowNormal: true
});
console.log(guns);

// 筛选特定分类干员
const assaults = searchOperatorsAdvanced({
  category: '突击兵',
  keyword: '狼'
});
console.log(assaults);
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

console.log(engine