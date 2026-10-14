<div align="center">

<img src="./assets/logo.svg" alt="delta-force-core logo" width="200" />

# delta-force-core

**Core data & random-pick toolkit for Delta Force.**

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
> ## 📢 Project Status
>
> **v0.2.x** — Stable. Covers **operators / weapons / equipment / ammo**.
>
> **Roadmap**: attachment system, ammo variants (T1–T6), image assets, i18n.

---

<a id="toc"></a>
## 📖 Table of Contents

- [✨ Features](#features)
- [🎯 Use Cases](#use-cases)
- [🧠 Design Philosophy](#design)
- [📦 Installation](#install)
- [🚀 Quick Start](#quick-start)
- [🧩 Core Concepts](#concepts)
- [📘 API Reference](#api)
  - [Engine](#api-engine)
  - [Random Picker Functions](#api-random)
  - [Query Functions](#api-query)
  - [List Functions](#api-list)
  - [User Overrides](#api-override)
- [📚 Data Modules](#data)
  - [Operators](#data-operators)
  - [Weapons](#data-weapons)
  - [Equipment](#data-equipment)
  - [Ammo](#data-ammo)
- [📄 index.json](#index-json)
- [🌐 Ecosystem & Integrations](#ecosystem)
- [🤝 Contributing](#contributing)
- [🛠 Development](#dev)
- [📅 Roadmap](#roadmap)
- [❓ FAQ](#faq)
- [📜 License](#license)
- [❤️ Credits](#thanks)

---

<a id="features"></a>
## ✨ Features

<table>
  <tr>
    <td align="center" width="25%">
      <h3>📚 Complete Data</h3>
      <p>Operators / Weapons / Equipment / Ammo<br/>All official fields covered</p>
    </td>
    <td align="center" width="25%">
      <h3>🎲 Random Picker</h3>
      <p>Random operator, weapon, gear<br/>One-click full loadout</p>
    </td>
    <td align="center" width="25%">
      <h3>🔍 Query Tools</h3>
      <p>By id / caliber / alias<br/>Type-safe with IDE hints</p>
    </td>
    <td align="center" width="25%">
      <h3>🎨 User Overrides</h3>
      <p>Quality / alias / tags<br/>Runtime-injected, non-invasive</p>
    </td>
  </tr>
</table>

- ✅ **Native TypeScript** — Full type definitions, IDE IntelliSense
- ✅ **ES Module** — Modern module system, tree-shaking friendly
- ✅ **Zero Dependencies** — Core library has no third-party deps
- ✅ **Forward Compatible** — All optional fields use `?:`, no breaking changes
- ✅ **Node + Browser** — Node.js ≥ 18 and modern browsers

---

<a id="use-cases"></a>
## 🎯 Use Cases

<table>
  <tr>
    <th width="20%">Scenario</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>🎮 <b>Gacha Apps</b></td>
    <td>One-click random loadout, inject your own quality ratings</td>
  </tr>
  <tr>
    <td>📚 <b>Wiki / Data Sites</b></td>
    <td>Consume structured data directly to render lists</td>
  </tr>
  <tr>
    <td>🤖 <b>Discord / QQ Bots</b></td>
    <td><code>getRandomLoadout()</code> works out of the box</td>
  </tr>
  <tr>
    <td>🧪 <b>Game Data Research</b></td>
    <td>Filter by caliber, tier, mode for statistical analysis</td>
  </tr>
  <tr>
    <td>🌐 <b>Static Sites / CDN</b></td>
    <td>Fetch <code>index.json</code> directly, no build needed</td>
  </tr>
</table>

---

<a id="design"></a>
## 🧠 Design Philosophy

### 1. Data and Logic are Separated

**Official data is read-only** and maintained by the library; **user preferences are injected at runtime** without polluting official data.

```
┌──────────────────────────────────────┐
│  Official Data (hardcoded, readonly) │
│  OPERATORS / WEAPONS /               │
│  EQUIPMENT / AMMO                    │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│  User Overrides (optional, runtime)  │
│  qualityOverride / aliasOverride /   │
│  tagOverride                         │
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│  Engine                              │
│  · Random picker  · Query            │
└──────────────────────────────────────┘
```

### 2. Why isn't `quality` part of official data?

Weapon quality in Delta Force (green / blue / purple / gold) is **not officially specified** — it's a **subjective rating** by the player community. Therefore:

- Official `Weapon` type **does NOT contain `quality`**
- Users inject their own ratings via `createEngine({ qualityOverride })`
- The default engine (no overrides) **returns empty when filtering by quality**

This is **by design** — we don't force one person's subjective ratings on everyone.

### 3. Forward Compatible

All optional fields use `?:`. Adding new fields later (e.g., `caliber`, `image`, `slots`) won't break existing users.

---

<a id="install"></a>
## 📦 Installation

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
<summary><b>CDN (browser)</b></summary>

```html
<!-- ES Module -->
<script type="module">
  import { getRandomLoadout } from 'https://esm.sh/delta-force-core';
  console.log(getRandomLoadout());
</script>

<!-- Or fetch raw JSON -->
<script type="module">
  const res = await fetch('https://unpkg.com/delta-force-core/index.json');
  const data = await res.json();
  console.log(data.weapons);
</script>
```

</details>

**Requirements**: Node.js ≥ 18 or any modern browser supporting ES Modules.

---

<a id="quick-start"></a>
## 🚀 Quick Start

### Scenario 1 · Just reading data (Wiki users)

```ts
import { WEAPONS, OPERATORS, EQUIPMENT, AMMO } from 'delta-force-core';

console.log(WEAPONS);            // all weapons
console.log(OPERATORS);          // all operators
console.log(EQUIPMENT.armors);   // all armors
console.log(AMMO);               // all ammo types
```

### Scenario 2 · Random picking (gacha apps)

```ts
import { getRandomWeapon, getRandomLoadout } from 'delta-force-core';

console.log(getRandomWeapon());                          // random weapon
console.log(getRandomLoadout());                         // full random loadout
console.log(getRandomLoadout({ allowNormal: true }));    // normal mode only
```

### Scenario 3 · Bring your own quality ratings

```ts
import { createEngine } from 'delta-force-core';

const engine = createEngine({
  qualityOverride: {
    m4a1: '金色',   // Gold
    akm: '紫色',    // Purple
    k416: '金色',   // Gold
  },
});

console.log(engine.getRandomWeapon({ quality: '金色' }));
console.log(engine.getWeaponQuality('m4a1'));  // '金色'
```

### Scenario 4 · Plain JS / JSON environments

```js
import data from 'delta-force-core/index.json' with { type: 'json' };

console.log(data.weapons);
console.log(data.equipment.helmets);
```

---

<a id="concepts"></a>
## 🧩 Core Concepts

### Engine

`Engine` is the unified entry point for **all random picking and querying capabilities**. It consists of:

> **Official Data (fixed)** + **User Overrides (optional)** = **Engine**

- **Default Engine**: `defaultEngine` — official data + empty overrides, auto-registered on import
- **Custom Engine**: `createEngine(options)` — inject your own overrides

### Overrides

| Override | Purpose | Impact |
|---|---|---|
| `qualityOverride` | Weapon quality rating | Affects `getRandomWeapon({ quality })` |
| `aliasOverride` | Aliases (e.g., `M4` → `m4a1`) | Affects `findWeaponByAlias()` |
| `tagOverride` | Personal tags | Metadata only, no effect on picking |

### Normal Mode (`allowNormal`)

| Value | Behavior |
|---|---|
| `true` | Only items **allowed** in normal mode |
| `false` | Only items **blocked** in normal mode (e.g., AWM / M82) |
| `undefined` | No filter, everything in pool |

---

<a id="api"></a>
## 📘 API Reference

> 💡 **Tip**: All functions exported as `defaultEngine`-bound are equivalent to calling `createEngine()` first. Use `createEngine` for custom behavior.

<a id="api-engine"></a>
### Engine

#### `createEngine(options?: EngineOptions): Engine`

Creates an engine instance.

```ts
import { createEngine } from 'delta-force-core';

const engine = createEngine({
  qualityOverride: { m4a1: '金色' },
  aliasOverride:   { m4a1: ['M4', 'M4卡宾枪'] },
  tagOverride:     { m4a1: ['经典', '入门'] },
});
```

<details>
<summary><b>View EngineOptions type</b></summary>

```ts
interface EngineOptions {
  /** Weapon quality rating: weaponId → '绿色' | '蓝色' | '紫色' | '金色' */
  qualityOverride?: Record<string, WeaponQuality>;
  /** Aliases: entityId → string[] */
  aliasOverride?: Record<string, string[]>;
  /** Personal tags: entityId → string[] */
  tagOverride?: Record<string, string[]>;
}
```

</details>

---

#### `defaultEngine`

Default engine with official data + empty overrides.

```ts
import { defaultEngine } from 'delta-force-core';

defaultEngine.getRandomWeapon();
```

All picker / query functions are also exported as default-engine-bound:

```ts
import { getRandomWeapon } from 'delta-force-core';
// Equivalent to
import { defaultEngine } from 'delta-force-core';
defaultEngine.getRandomWeapon();
```

---

<a id="api-random"></a>
### Random Picker Functions

All pickers use `Math.random()` with uniform distribution. **Empty pool throws.**

#### `getRandomOperator(category?: string): Operator`

Pick a random operator.

| Param | Type | Description |
|---|---|---|
| `category` | `string?` | Role category (`突击兵` / `支援兵` / `工程兵` / `侦察兵`), omit for all |

```ts
getRandomOperator();          // any operator
getRandomOperator('突击兵');   // assault only
```

---

#### `getRandomWeapon(options?: WeaponOptions): Weapon`

Pick a random weapon.

| Option | Type | Description |
|---|---|---|
| `category` | `string?` | Weapon category |
| `quality` | `WeaponQuality?` | Quality (requires `qualityOverride`) |
| `allowNormal` | `boolean?` | Normal-mode filter |

```ts
getRandomWeapon();
getRandomWeapon({ category: '突击步枪' });
getRandomWeapon({ allowNormal: true });
getRandomWeapon({ category: '狙击步枪', allowNormal: false });
engine.getRandomWeapon({ quality: '金色' });
```

---

#### `getRandomAmmo(options?: AmmoOptions): Ammo`

Pick a random ammo type.

| Option | Type | Description |
|---|---|---|
| `caliber` | `string?` | Caliber filter, e.g. `5.56x45mm` |

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

| Option | Type | Description |
|---|---|---|
| `tier` | `number?` | Specific tier (1–6), omit for all |
| `allowNormal` | `boolean?` | Normal-mode filter (armor/helmet) |

```ts
getRandomArmor();
getRandomArmor({ tier: 5 });
getRandomHelmet({ allowNormal: true });
getRandomBackpack({ tier: 6 });
```

---

#### `getRandomLoadout(options?: LoadoutOptions): Loadout`

Generate a full random loadout.

```ts
const loadout = getRandomLoadout({ allowNormal: true });

// Returns:
// {
//   operator: {...},
//   weapon:   {...},
//   armor:    {...},
//   helmet:   {...},
//   backpack: {...},
//   chestRig: {...}
// }
```

---

<a id="api-query"></a>
### Query Functions

| Function | Description |
|---|---|
| `findOperatorById(id)` | Find operator by id |
| `findWeaponById(id)` | Find weapon by id |
| `findAmmoById(id)` | Find ammo by id |
| `findArmorById(id)` | Find armor by id |
| `findHelmetById(id)` | Find helmet by id |
| `findBackpackById(id)` | Find backpack by id |
| `findChestRigById(id)` | Find chest rig by id |
| `findWeaponsByCaliber(caliber)` | Find weapons by caliber |
| `findAmmoByCaliber(caliber)` | Find ammo by caliber |
| `findWeaponByAlias(alias)` | Find weapon by alias (needs aliasOverride) |

```ts
findWeaponById('m4a1');
// { id: 'm4a1', name: 'M4A1突击步枪', allowNormal: true }

findHelmetById('helmet_l4_gt1');
findWeaponsByCaliber('5.56x45mm');
```

---

<a id="api-list"></a>
### List Functions

```ts
listOperatorCategories();
// ['突击兵', '支援兵', '工程兵', '侦察兵']

listWeaponCategories();
// ['突击步枪', '冲锋枪', '精确射手步枪', '狙击步枪', '轻机枪', '霰弹枪', '手枪', '特殊武器']

listAllOperators();  // all operators flattened
listAllWeapons();    // all weapons flattened
```

---

<a id="api-override"></a>
### User Overrides

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
## 📚 Data Modules

<a id="data-operators"></a>
### Operators

**Structure**

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

**Export**

```ts
import { OPERATORS } from 'delta-force-core';
```

**Categories**: 突击兵 / 支援兵 / 工程兵 / 侦察兵 (Assault / Support / Engineer / Recon)

---

<a id="data-weapons"></a>
### Weapons

**Structure**

```ts
interface Weapon {
  id: string;
  name: string;
  caliber?: string;
  baseDamage?: number;
  description?: string;
  image?: string;
  allowNormal?: boolean; // defaults to true
}
```

> ⚠️ **Note**: Official `Weapon` has **no `quality`**. Quality comes from user overrides.

**Export**

```ts
import { WEAPONS } from 'delta-force-core';
```

**Categories & counts**:

| Category | Count |
|---|---|
| Assault Rifles | 24 |
| SMGs | 12 |
| DMRs | 10 |
| Sniper Rifles | 5 |
| LMGs | 4 |
| Shotguns | 5 |
| Pistols | 7 |
| Special | 1 |
| **Total** | **68** |

---

<a id="data-equipment"></a>
### Equipment

**Structure**

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

**Export**

```ts
import { EQUIPMENT } from 'delta-force-core';

EQUIPMENT.armors;      // Armor, tiers 1–6
EQUIPMENT.helmets;     // Helmet, tiers 1–6
EQUIPMENT.backpacks;   // Backpack, tiers 1–6
EQUIPMENT.chest_rigs;  // Chest rig, tiers 1–5
```

---

<a id="data-ammo"></a>
### Ammo

**Structure**

```ts
interface Ammo {
  id: string;
  name: string;
  caliber: string;
  description?: string;
  image?: string;
}
```

> ⚠️ **Current granularity**: only caliber. Variants (e.g., M855 / M995) come later.

**Export**

```ts
import { AMMO } from 'delta-force-core';
```

**19 calibers currently**:

`.357 Magnum`, `.45 ACP`, `.58 AE`, `12 Gauge`, `12.7x55mm`, `5.45x39mm`, `5.56x45mm`, `5.7x28mm`, `5.8x42mm`, `6.8x51mm`, `7.62x39mm`, `7.62x51mm`, `7.62x54mm`, `9x19mm`, `9x39mm`, `4.6x30mm`, `.300 Blackout`, `箭矢`, `45-70 Govt`

---

<a id="index-json"></a>
## 📄 index.json

A full snapshot of the official data is generated at build time:

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

**Use cases**:

- 🐍 Non-JS environments (e.g., Python scripts)
- 🌐 Direct CDN fetch (`https://unpkg.com/delta-force-core/index.json`)
- 📊 Data diffing

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
## 🌐 Ecosystem & Integrations

| Platform | Usage |
|---|---|
| **Node.js** | `npm install delta-force-core` |
| **Browser** | `https://esm.sh/delta-force-core` |
| **Deno** | `import ... from 'npm:delta-force-core'` |
| **Bun** | `bun add delta-force-core` |
| **Python** | Read `index.json` |
| **Discord.js** | See example below |

### Discord.js Example

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
      `🧑 **Operator**: ${l.operator.name}`,
      `🔫 **Weapon**:   ${l.weapon.name}`,
      `🛡 **Armor**:    ${l.armor.name}`,
      `⛑ **Helmet**:   ${l.helmet.name}`,
      `🎒 **Backpack**: ${l.backpack.name}`,
      `🎽 **Chest rig**: ${l.chestRig.name}`,
    ].join('\n'),
  });
});
```

---

<a id="contributing"></a>
## 🤝 Contributing

### Updating Data

**Just edit the corresponding file**:

```
src/data/
├─ operators.ts    ← operators
├─ weapons.ts      ← weapons
├─ equipment.ts    ← equipment (armor / helmet / backpack / chest rig)
└─ ammo.ts         ← ammo
```

### Example: add a weapon

```ts
// src/data/weapons.ts
{
  category: '突击步枪',
  weapons: [
    // ...existing
    { id: 'new_rifle', name: 'New Rifle', allowNormal: true },  // ← add one line
  ],
},
```

### Workflow

```bash
# 1. edit data
vim src/data/weapons.ts

# 2. build + regenerate index.json
npm run build

# 3. commit
git add .
git commit -m "data: add XXX weapon"
git push origin main
```

### Rules

| Rule | Detail |
|---|---|
| `id` must be globally unique | Used for lookup; duplicates cause silent bugs |
| Do NOT add `quality` | Official data has no quality; users override it |
| `allowNormal` defaults to `true` | Only set `false` when needed |
| All optional fields use `?:` | Forward compatibility |
| New categories | Just append `{ category, weapons: [...] }` |

### Commit Convention

Following [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Purpose |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `data:` | Data update |
| `refactor:` | Refactor |
| `docs:` | Docs |
| `chore:` | Chore |
| `test:` | Tests |

Examples:

```
feat: add getRandomAmmo() with caliber filter
data: add 5 assault rifles
fix: correct AKM allowNormal flag
docs: update README installation
```

---

<a id="dev"></a>
## 🛠 Development

### Requirements

- Node.js ≥ 18
- TypeScript ≥ 5.4

### Setup

```bash
git clone https://github.com/Zhoyi011/delta-force-core.git
cd delta-force-core
npm install
```

### Project Structure

```text
delta-force-core/
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ README.md
├─ README.en.md
├─ LICENSE
├─ CONTRIBUTING.md
├─ index.json                    ← build artifact
├─ scripts/
│  └─ emit-json.mjs              ← generate index.json
├─ src/
│  ├─ types.ts                   ← all type definitions
│  ├─ engine.ts                  ← engine (createEngine + all methods)
│  ├─ index.ts                   ← main entry
│  └─ data/
│     ├─ index.ts                ← data barrel export
│     ├─ operators.ts
│     ├─ weapons.ts
│     ├─ equipment.ts
│     └─ ammo.ts
└─ .github/
   └─ workflows/                 ← CI / auto-publish
```

### Commands

```bash
npm run build        # compile + generate index.json
npm run dev          # watch mode
npm run emit-json    # only generate index.json
```

### Publishing to npm

```bash
npm version patch    # or minor / major
npm publish          # auto-runs prepublishOnly → npm run build
```

---

<a id="roadmap"></a>
## 📅 Roadmap

<table>
  <tr>
    <th>Status</th>
    <th>Feature</th>
    <th>Version</th>
  </tr>
  <tr><td>✅ Done</td><td>Operators / Weapons / Equipment / Ammo</td><td>v0.1</td></tr>
  <tr><td>✅ Done</td><td>Engine + user overrides (quality / alias / tag)</td><td>v0.2</td></tr>
  <tr><td>🔄 In progress</td><td>Full README + docs</td><td>v0.2.x</td></tr>
  <tr><td>📋 Planned</td><td>Attachment system (slots / compatibility)</td><td>v0.3</td></tr>
  <tr><td>📋 Planned</td><td>Ammo variants (T1–T6, damage / pen)</td><td>v0.3</td></tr>
  <tr><td>📋 Planned</td><td>Image assets</td><td>v0.4</td></tr>
  <tr><td>💭 Considering</td><td>i18n (English / 日本語)</td><td>v1.0</td></tr>
</table>

---

<a id="faq"></a>
## ❓ FAQ

<details>
<summary><b>Q1: Why is there no <code>quality</code> on official weapons?</b></summary>

Quality is a **subjective rating**, not official data. We put it in the user override layer (`qualityOverride`) so everyone can use their own standards.

```ts
const engine = createEngine({
  qualityOverride: { m4a1: '金色' },
});
```

</details>

<details>
<summary><b>Q2: Default engine vs custom engine?</b></summary>

**Default engine** `defaultEngine` = official data + empty overrides.

**Custom engine** = official data + your overrides. All methods behave identically, except custom engine applies your quality/alias/tag.

</details>

<details>
<summary><b>Q3: Can I use only the data without random picking?</b></summary>

Yes. Import data constants directly:

```ts
import { WEAPONS, OPERATORS, EQUIPMENT, AMMO } from 'delta-force-core';
```

Or use `index.json` (for non-JS environments).

</details>

<details>
<summary><b>Q4: How often is data updated?</b></summary>

Following game updates. We sync new equipment / weapons / operators as soon as possible.

You can also submit a PR to edit data files directly.

</details>

<details>
<summary><b>Q5: TypeScript support?</b></summary>

Written in native TypeScript, full type definitions. IDEs provide IntelliSense and type checking.

</details>

<details>
<summary><b>Q6: CommonJS support?</b></summary>

Main entry is **ES Module**. For CommonJS projects:

```js
// Option 1: dynamic import
const { getRandomLoadout } = await import('delta-force-core');

// Option 2: use JSON directly
const data = require('delta-force-core/index.json');
```

</details>

<details>
<summary><b>Q7: How to deploy my own <code>index.json</code>?</b></summary>

```bash
# fork the repo → edit data → build
npm run build
# output in dist/, index.json at root
```

Or use the one from the npm package:

```
https://unpkg.com/delta-force-core/index.json
```

</details>

<details>
<summary><b>Q8: How to contribute data fixes?</b></summary>

1. Fork the repo
2. Edit `src/data/*.ts`
3. `npm run build` to verify compilation
4. Submit a PR with source (screenshot / official announcement)

See the [Contributing](#contributing) section.

</details>

---

<a id="license"></a>
## 📜 License

Released under the [MIT License](./LICENSE).

---

<a id="thanks"></a>
## ❤️ Credits

- Thanks to all community members who contributed Delta Force data
- Thanks to [Shields.io](https://shields.io/) for badges
- Thanks to [unpkg](https://unpkg.com/) / [esm.sh](https://esm.sh/) for CDN

---

<div align="center">

**If this project helps you, please give it a ⭐ Star!**

[⬆ Back to Top](#delta-force-core)

</div>
