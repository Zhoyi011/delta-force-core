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
> **v0.2.x** — 稳定版本，覆盖 **干员 / 武器 / 装备 / 子弹** 四大模块。
>
> **路线图**：配件系统、子弹细分（1~6 弹）、图片资源、多语言支持。

---

<a id="toc"></a>
## 📖 目录

- [✨ 特性](#features)
- [🎯 使用场景](#use-cases)
- [🧠 设计理念](#design)
- [📦 安装](#install)
- [🚀 快速开始](#quick-start)
- [🧩 核心概念](#concepts)
- [📘 API 参考](#api)
  - [引擎（Engine）](#api-engine)
  - [抽签函数](#api-random)
  - [查询函数](#api-query)
  - [列表函数](#api-list)
  - [用户覆盖层](#api-override)
- [📚 数据模块](#data)
  - [干员（Operators）](#data-operators)
  - [武器（Weapons）](#data-weapons)
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
      <p>干员 / 武器 / 装备 / 子弹<br/>四大模块官方字段全覆盖</p>
    </td>
    <td align="center" width="25%">
      <h3>🎲 抽签工具</h3>
      <p>随机抽干员、武器、装备<br/>一键生成完整配装</p>
    </td>
    <td align="center" width="25%">
      <h3>🔍 查询工具</h3>
      <p>按 id / 口径 / 别名查询<br/>类型安全，IDE 智能提示</p>
    </td>
    <td align="center" width="25%">
      <h3>🎨 用户覆盖层</h3>
      <p>品质 / 别名 / 标签<br/>运行时注入，不污染官方数据</p>
    </td>
  </tr>
</table>

- ✅ **TypeScript 原生** —— 完整类型定义，IDE 智能提示
- ✅ **ES Module** —— 现代模块规范，Tree-shaking 友好
- ✅ **零依赖** —— 核心库不依赖任何第三方包
- ✅ **向前兼容** —— 所有可选字段 `?:`，新版本不破坏老用户
- ✅ **Node + 浏览器** —— 同时支持 Node.js ≥ 18 和现代浏览器

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
    <td>直接消费结构化数据，渲染装备/武器列表</td>
  </tr>
  <tr>
    <td>🤖 <b>Discord / QQ 机器人</b></td>
    <td><code>getRandomLoadout()</code> 开箱即用</td>
  </tr>
  <tr>
    <td>🧪 <b>游戏数据研究</b></td>
    <td>按口径、等级、模式自由筛选，做统计分析</td>
  </tr>
  <tr>
    <td>🌐 <b>静态网站 / CDN</b></td>
    <td>通过 <code>index.json</code> 直接 fetch，无需构建</td>
  </tr>
</table>

---

<a id="design"></a>
## 🧠 设计理念

### 1. 数据与逻辑分离

**官方数据是只读的**，由库维护者持续更新；**用户偏好是运行时注入的**，不污染官方数据。

```
┌──────────────────────────────────────┐
│  官方数据（硬编码、只读）              │
│  OPERATORS / WEAPONS /               │
│  EQUIPMENT / AMMO                    │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│  用户覆盖层（可选、运行时）            │
│  qualityOverride / aliasOverride /   │
│  tagOverride                         │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│  引擎（Engine）                       │
│  · 抽签  · 查询                        │
└──────────────────────────────────────┘
```

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
<summary><b>npm / yarn / pnpm / bun</b></summary>

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

<a id="quick-start"></a>
## 🚀 快速开始

### 场景 1 · 我只是想查数据（Wiki 用户）

```ts
import { WEAPONS, OPERATORS, EQUIPMENT, AMMO } from 'delta-force-core';

console.log(WEAPONS);            // 全部武器
console.log(OPERATORS);          // 全部干员
console.log(EQUIPMENT.armors);   // 全部护甲
console.log(AMMO);               // 全部子弹
```

### 场景 2 · 我想抽签（抽卡应用）

```ts
import { getRandomWeapon, getRandomLoadout } from 'delta-force-core';

console.log(getRandomWeapon());                          // 随机一把武器
console.log(getRandomLoadout());                         // 随机一套完整配装
console.log(getRandomLoadout({ allowNormal: true }));    // 只用普通模式
```

### 场景 3 · 我有自己的品质评估

```ts
import { createEngine } from 'delta-force-core';

const engine = createEngine({
  qualityOverride: {
    m4a1: '金色',
    akm: '紫色',
    k416: '金色',
  },
});

console.log(engine.getRandomWeapon({ quality: '金色' }));
console.log(engine.getWeaponQuality('m4a1'));  // '金色'
```

### 场景 4 · 我在纯 JS / JSON 环境

```js
import data from 'delta-force-core/index.json' with { type: 'json' };

console.log(data.weapons);
console.log(data.equipment.helmets);
```

---

<a id="concepts"></a>
## 🧩 核心概念

### 引擎（Engine）

`Engine` 是访问**所有抽签和查询能力**的统一入口。它由三层组成：

> **官方数据（固定）** + **用户覆盖层（可选）** = **引擎**

- **默认引擎**：`defaultEngine`，官方数据 + 空覆盖层，自动在入口注册
- **自定义引擎**：通过 `createEngine(options)` 创建，注入你的覆盖层

### 覆盖层（Override）

| 覆盖类型 | 用途 | 影响 |
|---|---|---|
| `qualityOverride` | 武器品质评估 | 影响 `getRandomWeapon({ quality })` |
| `aliasOverride` | 别名（如 `M4` → `m4a1`） | 影响 `findWeaponByAlias()` |
| `tagOverride` | 个人标签 | 纯元数据，不影响抽签 |

### 普通模式（allowNormal）

| 值 | 行为 |
|---|---|
| `true` | 只在**普通模式可用**的物品中抽 |
| `false` | 只在**禁止普通模式**的物品中抽（如 AWM / M82） |
| `undefined` | 不筛选，全部进池 |

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

<details>
<summary><b>查看 EngineOptions 类型</b></summary>

```ts
interface EngineOptions {
  /** 武器品质评估：weaponId → '绿色' | '蓝色' | '紫色' | '金色' */
  qualityOverride?: Record<string, WeaponQuality>;
  /** 别名：entityId → string[] */
  aliasOverride?: Record<string, string[]>;
  /** 个人标签：entityId → string[] */
  tagOverride?: Record<string, string[]>;
}
```

</details>

---

#### `defaultEngine`

默认引擎，已自动注册官方数据 + 空覆盖层。

```ts
import { defaultEngine } from 'delta-force-core';

defaultEngine.getRandomWeapon();
```

所有抽签/查询函数都以默认引擎的形式直接导出：

```ts
import { getRandomWeapon } from 'delta-force-core';
// 等价于
import { defaultEngine } from 'delta-force-core';
defaultEngine.getRandomWeapon();
```

---

<a id="api-random"></a>
### 抽签函数

所有抽签函数使用 `Math.random()`，均匀分布。**空池会抛错。**

#### `getRandomOperator(category?: string): Operator`

随机抽取一名干员。

| 参数 | 类型 | 说明 |
|---|---|---|
| `category` | `string?` | 兵种分类（`突击兵` / `支援兵` / `工程兵` / `侦察兵`），不传则从全部干员中抽 |

```ts
getRandomOperator();          // 任意干员
getRandomOperator('突击兵');   // 只从突击兵里抽
```

---

#### `getRandomWeapon(options?: WeaponOptions): Weapon`

随机抽取一把武器。

| 选项 | 类型 | 说明 |
|---|---|---|
| `category` | `string?` | 武器大类 |
| `quality` | `WeaponQuality?` | 品质，**需要引擎有 qualityOverride 才有意义** |
| `allowNormal` | `boolean?` | 普通模式筛选 |

```ts
getRandomWeapon();
getRandomWeapon({ category: '突击步枪' });
getRandomWeapon({ allowNormal: true });
getRandomWeapon({ category: '狙击步枪', allowNormal: false });
engine.getRandomWeapon({ quality: '金色' });
```

---

#### `getRandomAmmo(options?: AmmoOptions): Ammo`

随机抽取一种子弹。

| 选项 | 类型 | 说明 |
|---|---|---|
| `caliber` | `string?` | 口径筛选，如 `5.56x45mm` |

```ts
getRandomAmmo();
getRandomAmmo({ caliber: '5.56x45mm' });
```

---

#### `getRandomArmor` / `getRandomHelmet` / `getRandomBackpack` / `getRandomChestRig`

```ts
getRandomArmor(options?: TierOptions): EquipmentItem
getRandomHelmet(options?: TierOptions): EquipmentItem
getRandomBackpack(options?: TierOptions): EquipmentItem
getRandomChestRig(options?: TierOptions): EquipmentItem
```

| 选项 | 类型 | 说明 |
|---|---|---|
| `tier` | `number?` | 指定等级（1~6），不传则全等级 |
| `allowNormal` | `boolean?` | 普通模式筛选（护甲/头盔支持） |

```ts
getRandomArmor();
getRandomArmor({ tier: 5 });
getRandomHelmet({ allowNormal: true });
getRandomBackpack({ tier: 6 });
```

---

#### `getRandomLoadout(options?: LoadoutOptions): Loadout`

随机生成一套完整配装。

```ts
const loadout = getRandomLoadout({ allowNormal: true });

// 返回：
// {
//   operator: {...},   // 干员
//   weapon:   {...},   // 武器
//   armor:    {...},   // 护甲
//   helmet:   {...},   // 头盔
//   backpack: {...},   // 背包
//   chestRig: {...}    // 胸挂
// }
```

---

<a id="api-query"></a>
### 查询函数

| 函数 | 说明 |
|---|---|
| `findOperatorById(id)` | 按 id 查干员 |
| `findWeaponById(id)` | 按 id 查武器 |
| `findAmmoById(id)` | 按 id 查子弹 |
| `findArmorById(id)` | 按 id 查护甲 |
| `findHelmetById(id)` | 按 id 查头盔 |
| `findBackpackById(id)` | 按 id 查背包 |
| `findChestRigById(id)` | 按 id 查胸挂 |
| `findWeaponsByCaliber(caliber)` | 按口径查武器 |
| `findAmmoByCaliber(caliber)` | 按口径查子弹 |
| `findWeaponByAlias(alias)` | 按别名查武器（需 aliasOverride） |

```ts
findWeaponById('m4a1');
// { id: 'm4a1', name: 'M4A1突击步枪', allowNormal: true }

findHelmetById('helmet_l4_gt1');
findWeaponsByCaliber('5.56x45mm');
```

---

<a id="api-list"></a>
### 列表函数

```ts
listOperatorCategories();
// ['突击兵', '支援兵', '工程兵', '侦察兵']

listWeaponCategories();
// ['突击步枪', '冲锋枪', '精确射手步枪', '狙击步枪', '轻机枪', '霰弹枪', '手枪', '特殊武器']

listAllOperators();  // 全部干员，拉平成一维数组
listAllWeapons();    // 全部武器，拉平成一维数组
```

---

<a id="api-override"></a>
### 用户覆盖层

```ts
const engine = createEngine({
  qualityOverride: { m4a1: '金色' },
  aliasOverride:   { m4a1: ['M4', 'M4卡宾枪'] },
  tagOverride:     { m4a1: ['经典', '入门'] },
});

engine.getWeaponQuality('m4a1'); // '金色'
engine.getAliases('m4a1');       // ['M4', 'M4卡宾枪']
engine.getTags('m4a1');          // ['经典', '入门']
```

---

<a id="data"></a>
## 📚 数据模块

<a id="data-operators"></a>
### 干员（Operators）

**结构**

```ts
interface Operator {
  id: string;
  name: string;
  features?: string;
  description?: string;
  image?: string;
}

interface OperatorCategory {
  category: string;
  operators: Operator[];
}
```

**导出**

```ts
import { OPERATORS } from 'delta-force-core';
```

**分类**：突击兵 / 支援兵 / 工程兵 / 侦察兵

**当前条目**：

| 分类 | 干员 |
|---|---|
| 突击兵 | 红狼 / 威龙 / 疾风 / 无名 |
| 支援兵 | 蜂医 / 蛊 / 蝶 / 旅人 |
| 工程兵 | 牧羊人 / 乌鲁鲁 / 深蓝 / 液氮 / 比特 |
| 侦察兵 | 露娜 / 骇爪 / 回响 / 银翼 |

---

<a id="data-weapons"></a>
### 武器（Weapons）

**结构**

```ts
interface Weapon {
  id: string;
  name: string;
  caliber?: string;      // 口径
  baseDamage?: number;   // 裸枪基础伤害
  description?: string;
  image?: string;
  allowNormal?: boolean; // 缺省视为 true
}
```

> ⚠️ **注意**：官方 `Weapon` **不含 `quality`**。品质由用户注入。

**导出**

```ts
import { WEAPONS } from 'delta-force-core';
```

**分类与数量**：

| 分类 | 数量 |
|---|---|
| 突击步枪 | 24 |
| 冲锋枪 | 12 |
| 精确射手步枪 | 10 |
| 狙击步枪 | 5 |
| 轻机枪 | 4 |
| 霰弹枪 | 5 |
| 手枪 | 7 |
| 特殊武器 | 1 |
| **合计** | **68** |

---

<a id="data-equipment"></a>
### 装备（Equipment）

**结构**

```ts
interface EquipmentItem {
  id: string;
  name: string;
  features?: string;
  comment?: string;
  description?: string;
  image?: string;
}

interface EquipmentTier {
  tier: number;
  allowNormal?: boolean;
  items: EquipmentItem[];
}

interface Equipment {
  armors: EquipmentTier[];
  helmets: EquipmentTier[];
  backpacks: EquipmentTier[];
  chest_rigs: EquipmentTier[];
}
```

**导出**

```ts
import { EQUIPMENT } from 'delta-force-core';

EQUIPMENT.armors;      // 护甲，1~6 级
EQUIPMENT.helmets;     // 头盔，1~6 级
EQUIPMENT.backpacks;   // 背包，1~6 级
EQUIPMENT.chest_rigs;  // 胸挂，1~5 级
```

---

<a id="data-ammo"></a>
### 子弹（Ammo）

**结构**

```ts
interface Ammo {
  id: string;
  name: string;
  caliber: string;
  description?: string;
  image?: string;
}
```

> ⚠️ **当前粒度**：只到"口径"，同口径的 1~6 弹（如 M855 / M995）后续再加。

**导出**

```ts
import { AMMO } from 'delta-force-core';
```

**当前口径**（19 种）：

| 手枪 / 霰弹 | 中间威力 | 全威力 | 其它 |
|---|---|---|---|
| `.357 Magnum` | `5.45x39mm` | `7.62x51mm` | `4.6x30mm` |
| `.45 ACP` | `5.56x45mm` | `7.62x54mm` | `.300 Blackout` |
| `.58 AE` | `5.7x28mm` | `12.7x55mm` | `箭矢` |
| `12 Gauge` | `5.8x42mm` | | `45-70 Govt` |
| `9x19mm` | `6.8x51mm` | | |
| `9x39mm` | `7.62x39mm` | | |

---

<a id="index-json"></a>
## 📄 index.json

库在每次构建时生成一份 `index.json`，包含**当前官方数据的完整快照**：

```json
{
  "$schema": "https://raw.githubusercontent.com/delta-force-core/schema/main/v1.json",
  "version": "0.2.0",
  "generatedAt": "2026-10-14T00:34:01.102Z",
  "operators": [...],
  "weapons": [...],
  "equipment": {...},
  "ammo": [...]
}
```

**用途**：

- 🐍 非 JS 环境（如 Python 脚本）直接消费
- 🌐 CDN 直接 fetch（`https://unpkg.com/delta-force-core/index.json`）
- 📊 数据 diff 检查

```js
// ESM
import data from 'delta-force-core/index.json' with { type: 'json' };

// CommonJS
const data = require('delta-force-core/index.json');

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
| **Deno** | `import ... from 'npm:delta-force-core'` |
| **Bun** | `bun add delta-force-core` |
| **Python** | 读 `index.json` |
| **Discord.js** | 见下方示例 |

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

### 更新干员 / 武器 / 装备 / 子弹

**只需要修改对应的数据文件**：

```
src/data/
├─ operators.ts    ← 干员
├─ weapons.ts      ← 武器
├─ equipment.ts    ← 装备（护甲/头盔/背包/胸挂）
└─ ammo.ts         ← 子弹
```

### 例子：新增一把武器

```ts
// src/data/weapons.ts
{
  category: '突击步枪',
  weapons: [
    // ...已有的
    { id: 'new_rifle', name: '新突击步枪', allowNormal: true },  // ← 加一行
  ],
},
```

### 例子：新增一件头盔

```ts
// src/data/equipment.ts → EQUIPMENT.helmets
{
  tier: 4,
  allowNormal: true,
  items: [
    // ...已有的
    { id: 'helmet_l4_new', name: '新头盔', features: '属性描述' },  // ← 加一行
  ],
},
```

### 流程

```bash
# 1. 改数据文件
vim src/data/weapons.ts

# 2. 编译 + 重新生成 index.json
npm run build

# 3. 提交
git add .
git commit -m "data: 新增 XXX 武器"
git push origin main
```

### 注意事项

| 项 | 说明 |
|---|---|
| `id` 必须全局唯一 | 用于查询和去重，重复会静默出 bug |
| `quality` 不要加 | 官方数据不含品质，由用户层覆盖 |
| `allowNormal` 缺省 = true | 只在需要禁止时写 `false` |
| 可选字段全部用 `?:` | 保证向前兼容 |
| 新增分类 | 直接在数组里追加 `{ category, weapons: [...] }` 块 |

### 提交规范

采用 [Conventional Commits](https://www.conventionalcommits.org/)：

| 前缀 | 用途 |
|---|---|
| `feat:` | 新功能 |
| `fix:` | Bug 修复 |
| `data:` | 数据更新 |
| `refactor:` | 重构 |
| `docs:` | 文档 |
| `chore:` | 杂项 |
| `test:` | 测试 |

例子：

```
feat: 新增 getRandomAmmo() 支持按口径抽签
data: 新增 5 把突击步枪
fix: 修正 AKM 的 allowNormal 字段
docs: 更新 README 安装说明
```

---

<a id="dev"></a>
## 🛠 开发

### 环境要求

- Node.js ≥ 18
- TypeScript ≥ 5.4

### 安装

```bash
git clone https://github.com/Zhoyi011/delta-force-core.git
cd delta-force-core
npm install
```

### 目录结构

```text
delta-force-core/
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ README.md
├─ README.en.md
├─ LICENSE
├─ CONTRIBUTING.md
├─ index.json                    ← 构建产物
├─ scripts/
│  └─ emit-json.mjs              ← 生成 index.json
├─ src/
│  ├─ types.ts                   ← 所有类型定义
│  ├─ engine.ts                  ← 引擎（createEngine + 全部方法）
│  ├─ index.ts                   ← 主入口
│  └─ data/
│     ├─ index.ts                ← 数据统一导出
│     ├─ operators.ts            ← 干员数据
│     ├─ weapons.ts              ← 武器数据
│     ├─ equipment.ts            ← 装备数据
│     └─ ammo.ts                 ← 子弹数据
└─ .github/
   └─ workflows/                 ← CI / 自动发布
```

### 常用命令

```bash
npm run build        # 编译 + 生成 index.json
npm run dev          # 开发模式（watch）
npm run emit-json    # 只生成 index.json
```

### 发布到 npm

```bash
# 1. 更新版本号
npm version patch    # 或 minor / major

# 2. 发布（会自动跑 prepublishOnly → npm run build）
npm publish
```

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
  <tr><td>🔄 进行中</td><td>完整 README + 文档</td><td>v0.2.x</td></tr>
  <tr><td>📋 计划中</td><td>配件系统（槽位 / 兼容关系）</td><td>v0.3</td></tr>
  <tr><td>📋 计划中</td><td>子弹细分（1~6 弹，伤害 / 穿透）</td><td>v0.3</td></tr>
  <tr><td>📋 计划中</td><td>图片资源（干员 / 武器 / 装备）</td><td>v0.4</td></tr>
  <tr><td>💭 考虑中</td><td>多语言（English / 日本語）</td><td>v1.0</td></tr>
</table>

---

<a id="faq"></a>
## ❓ FAQ

<details>
<summary><b>Q1: 为什么官方武器里没有 <code>quality</code> 字段？</b></summary>

品质是玩家**主观评估**，不是官方数据。我们把品质放到用户层 `qualityOverride` 里，让每个使用者用自己的标准。

如果你的项目需要品质，用 `createEngine` 注入：

```ts
const engine = createEngine({
  qualityOverride: { m4a1: '金色' },
});
```

</details>

<details>
<summary><b>Q2: 默认引擎和自定义引擎有什么区别？</b></summary>

**默认引擎** `defaultEngine` = 官方数据 + 空覆盖层。

**自定义引擎** = 官方数据 + 你的覆盖层。所有查询和抽签方法行为一致，只是自定义引擎会应用你的 quality/alias/tag。

</details>

<details>
<summary><b>Q3: 我能不能只拿数据，不用抽签功能？</b></summary>

可以。直接 import 数据常量：

```ts
import { WEAPONS, OPERATORS, EQUIPMENT, AMMO } from 'delta-force-core';
```

或者用 `index.json`（适合非 JS 环境）。

</details>

<details>
<summary><b>Q4: 数据多久更新一次？</b></summary>

跟随游戏版本更新。新装备 / 武器 / 干员上线后，我们会尽快同步。

你也可以提 PR 直接改数据文件。

</details>

<details>
<summary><b>Q5: 支持 TypeScript 吗？</b></summary>

原生 TypeScript 编写，完整类型定义。IDE 会有智能提示和类型检查。

</details>

<details>
<summary><b>Q6: 支持 CommonJS 吗？</b></summary>

主入口是 **ES Module**。如果是 CommonJS 项目：

```js
// 方式 1：动态 import
const { getRandomLoadout } = await import('delta-force-core');

// 方式 2：直接用 JSON
const data = require('delta-force-core/index.json');
```

</details>

<details>
<summary><b>Q7: 怎么自己部署一份 <code>index.json</code>？</b></summary>

```bash
# fork 仓库 → 改数据 → 构建
npm run build
# dist/ 里就是最新数据，index.json 在根目录
```

也可以直接用 npm 包自带的：

```
https://unpkg.com/delta-force-core/index.json
```

</details>

<details>
<summary><b>Q8: 怎么贡献数据修正？</b></summary>

1. Fork 仓库
2. 改 `src/data/*.ts`
3. `npm run build` 确认编译通过
4. 提交 PR，附上数据来源（截图 / 官方公告）

详见 [贡献指南](#contributing)。

</details>

---

<a id="license"></a>
## 📜 License

本项目基于 [MIT License](./LICENSE) 发布。

---

<a id="thanks"></a>
## ❤️ 致谢

- 感谢所有为三角洲行动数据整理做出贡献的玩家社区
- 感谢 [Shields.io](https://shields.io/) 提供徽章服务
- 感谢 [unpkg](https://unpkg.com/) / [esm.sh](https://esm.sh/) 提供 CDN

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐ Star 支持一下！**

[⬆ 回到顶部](#delta-force-core)

</div>
