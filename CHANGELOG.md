# Changelog

所有本项目的显著变更都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/)，
版本号遵循 [Semantic Versioning](https://semver.org/)。

## [0.5.1](https://github.com/Zhoyi011/delta-force-core/compare/v0.5.0...v0.5.1) (2026-10-16)


### 📊 数据更新

* 测试 Release Please 流程 ([86da42d](https://github.com/Zhoyi011/delta-force-core/commit/86da42d7cda65edc3dbe521a4de774e9f7841fdf))

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
