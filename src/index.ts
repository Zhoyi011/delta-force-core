// =====================================================
// delta-force-core 主入口
//
// 默认引擎 = 官方数据 + 空覆盖层
// 懒人一行可用：import { getRandomWeapon } from 'delta-force-core'
// 高级用法：  import { createEngine }   from 'delta-force-core'
// =====================================================

import { createEngine } from './engine.js';
import type { Engine } from './types.js';

// ---------- 类型 ----------
export * from './types.js';

// ---------- 官方数据（只读） ----------
export { OPERATORS } from './data/operators.js';
export { WEAPONS }   from './data/weapons.js';
export { EQUIPMENT } from './data/equipment.js';
export { AMMO }      from './data/ammo.js';

// ---------- 引擎工厂 ----------
export { createEngine } from './engine.js';

// -----------------------------------------------------
// 默认引擎：官方数据 + 空覆盖层
// -----------------------------------------------------
export const defaultEngine: Engine = createEngine();

export const {
  // 数据视图
  getOperators,
  getWeapons,
  getAmmo,
  getEquipment,

  // 抽签
  getRandomOperator,
  getRandomWeapon,
  getRandomAmmo,
  getRandomArmor,
  getRandomHelmet,
  getRandomBackpack,
  getRandomChestRig,
  getRandomLoadout,

  // 查询
  findOperatorById,
  findWeaponById,
  findAmmoById,
  findArmorById,
  findHelmetById,
  findBackpackById,
  findChestRigById,
  findWeaponsByCaliber,
  findAmmoByCaliber,
  findWeaponByAlias,

  // 用户层
  getWeaponQuality,
  getAliases,
  getTags,

  // 列表
  listOperatorCategories,
  listWeaponCategories,
  listAllOperators,
  listAllWeapons,
} = defaultEngine;