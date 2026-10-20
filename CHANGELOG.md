# Changelog

所有本项目的显著变更都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/)，
版本号遵循 [Semantic Versioning](https://semver.org/)。

## [0.7.2](https://github.com/Zhoyi011/delta-force-core/compare/v0.7.1...v0.7.2) (2026-10-20)


### 📊 数据更新

* 手动录入 41 个枪口配件，包含所有数值与特殊机制 ([8da574d](https://github.com/Zhoyi011/delta-force-core/commit/8da574d3715e223f2fe5248dae4ce7f5b591c1cc))
* 手动录入全部前握把和后握把数据，包含数值与特效 ([0c9000b](https://github.com/Zhoyi011/delta-force-core/commit/0c9000bb3422dfc7ef03dbe0fc4d65c239b7ccd1))

## [0.7.1](https://github.com/Zhoyi011/delta-force-core/compare/v0.7.0...v0.7.1) (2026-10-20)


### 📊 数据更新

* 补全 47 个瞄准镜的特殊战术描述，配合 AI 查询 ([754779f](https://github.com/Zhoyi011/delta-force-core/commit/754779f36cc0e5343d9ca6aabaae20d7b58e9ad7))

## [0.7.0](https://github.com/Zhoyi011/delta-force-core/compare/v0.6.0...v0.7.0) (2026-10-19)


### ✨ 新功能

* 武器数据拆分模块化，并新增 MDR 详细裸枪属性 ([3e00d3a](https://github.com/Zhoyi011/delta-force-core/commit/3e00d3a4bec15710eec953051adc40fe4c06b8b8))


### 📊 数据更新

* 补全全部 24 把突击步枪的完整裸枪底层数值 ([65fb9de](https://github.com/Zhoyi011/delta-force-core/commit/65fb9dea2b69dff7ddbf20e00599247a2d4b338c))
* 补全全部武器的完整底层属性 ([da37444](https://github.com/Zhoyi011/delta-force-core/commit/da374447d5925e4291ae6e3cd9580e603afb856f))

## [0.6.0](https://github.com/Zhoyi011/delta-force-core/compare/v0.5.1...v0.6.0) (2026-10-18)


### ✨ 新功能

* 新增 154 个配件（弹匣/瞄准镜/护木） + MCP 搜索 + 图片 ([8bb9299](https://github.com/Zhoyi011/delta-force-core/commit/8bb92994f15e085f143795b1ec27d5edffbc5c48))


### 📊 数据更新

* 补全剩余配件（枪口/枪托/握把/功能），总计 564 个配件 ([7186f70](https://github.com/Zhoyi011/delta-force-core/commit/7186f706ed09ba49f58601fc25bb0ba28521d430))

## [0.5.1](https://github.com/Zhoyi011/delta-force-core/compare/v0.5.0...v0.5.1) (2026-10-16)




## [0.5.0](https://github.com/Zhoyi011/delta-force-core/compare/v0.4.0...v0.5.0) (2026-10-16)

### ✨ 新功能

* 新增 `Weapon.baseDamage`（裸枪伤害）
* 新增 `Weapon.armorDamage`（护甲伤害）
* 新增 `Weapon.pelletCount`（弹丸数，仅霰弹枪）
* 新增 `searchWeapons(keyword)` — 武器模糊搜索
* 新增 `searchWeaponsAdvanced(options)` — 武器高级筛选
* 新增 `searchOperators(keyword)` — 干员模糊搜索
* 新增 `searchOperatorsAdvanced(options)` — 干员高级筛选

## [0.4.0](https://github.com/Zhoyi011/delta-force-core/compare/v0.3.0...v0.4.0) (2026-10-14)

### ✨ 新功能

* 集成 MCP Server（`npx delta-force-mcp`）
* 新增 Wiki（人机双友好文档）
* 新增 `llms.txt` / `llms-full.txt`
* 新增中英双语 README

### 🔧 杂项

* 发布改用 OIDC Trusted Publisher + Provenance

## [0.3.0](https://github.com/Zhoyi011/delta-force-core/compare/v0.2.0...v0.3.0) (2026-10-14)

### ✨ 新功能

* 引擎 `createEngine({ qualityOverride, aliasOverride, tagOverride })`
* 用户覆盖层

### ♻️ 重构

* 数据拆分：`src/data/{operators,weapons,equipment,ammo}.ts`
* 移除官方 `Weapon.quality`（改由用户注入）

## [0.2.0](https://github.com/Zhoyi011/delta-force-core/compare/v0.1.0...v0.2.0) (2026-10-13)

### ✨ 新功能

* 子弹表 `AMMO`（19 种口径）
* 装备修正：头盔 / 胸挂 / 背包完整替换

## [0.1.0](https://github.com/Zhoyi011/delta-force-core/releases/tag/v0.1.0) (2026-10-13)

### ✨ 新功能

* 初始版本
* 干员 / 武器 / 装备 / 子弹数据
* 抽签函数（`getRandomWeapon` / `getRandomLoadout` 等）
* 查询函数（`findWeaponById` 等）
