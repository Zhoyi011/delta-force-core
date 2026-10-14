// =====================================================
// delta-force-core 引擎
//
// 官方数据 + 用户覆盖层 → 统一的抽签 / 查询接口
// =====================================================

import { OPERATORS } from './data/operators.js';
import { WEAPONS }   from './data/weapons.js';
import { EQUIPMENT } from './data/equipment.js';
import { AMMO }      from './data/ammo.js';

import type {
  Engine,
  EngineOptions,
  Operator,
  OperatorCategory,
  Weapon,
  WeaponCategory,
  WeaponOptions,
  WeaponQuality,
  Ammo,
  AmmoOptions,
  Equipment,
  EquipmentItem,
  EquipmentTier,
  TierOptions,
  Loadout,
  LoadoutOptions,
} from './types.js';

// -----------------------------------------------------
// 内部工具
// -----------------------------------------------------

function pick<T>(list: readonly T[]): T {
  if (list.length === 0) throw new Error('[delta-force-core] 待抽取的列表为空');
  return list[Math.floor(Math.random() * list.length)];
}

/** undefined 视为 true（缺省允许普通模式） */
function matchAllowNormal(filter: boolean | undefined, value: boolean | undefined): boolean {
  if (filter === undefined) return true;
  return (value ?? true) === filter;
}

function pickFromTiers(tiers: readonly EquipmentTier[], options: TierOptions = {}): EquipmentItem {
  const { tier, allowNormal } = options;
  const valid = tiers.filter(
    (t) => (tier === undefined || t.tier === tier) && matchAllowNormal(allowNormal, t.allowNormal),
  );
  if (valid.length === 0) {
    throw new Error(
      `[delta-force-core] 没有符合条件的装备等级（tier=${tier ?? '*'}，allowNormal=${allowNormal ?? '*'}）`,
    );
  }
  return pick(valid.flatMap((t) => t.items));
}

function findInTiers(tiers: readonly EquipmentTier[], id: string): EquipmentItem | undefined {
  for (const t of tiers) {
    const hit = t.items.find((i) => i.id === id);
    if (hit) return hit;
  }
  return undefined;
}

// -----------------------------------------------------
// createEngine
// -----------------------------------------------------

export function createEngine(options: EngineOptions = {}): Engine {
  const { qualityOverride = {}, aliasOverride = {}, tagOverride = {} } = options;

  // ---------- 数据视图 ----------
  const getOperators = () => OPERATORS;
  const getWeapons   = () => WEAPONS;
  const getAmmo      = () => AMMO;
  const getEquipment = () => EQUIPMENT;

  const listAllOperators = (): Operator[] =>
    OPERATORS.flatMap((g) => g.operators);
  const listAllWeapons = (): Weapon[] =>
    WEAPONS.flatMap((g) => g.weapons);

  // ---------- 抽签 ----------

  function getRandomOperator(category?: string): Operator {
    if (!category) return pick(listAllOperators());
    const group = OPERATORS.find((g) => g.category === category);
    if (!group) {
      throw new Error(
        `[delta-force-core] 未找到兵种分类 "${category}"，可用：${OPERATORS.map((g) => g.category).join(' / ')}`,
      );
    }
    return pick(group.operators);
  }

  function getRandomWeapon(opt: WeaponOptions = {}): Weapon {
    const { category, quality, allowNormal } = opt;
    const pool: Weapon[] = [];

    for (const group of WEAPONS) {
      if (category && group.category !== category) continue;
      for (const w of group.weapons) {
        if (!matchAllowNormal(allowNormal, w.allowNormal)) continue;
        if (quality && qualityOverride[w.id] !== quality) continue;
        pool.push(w);
      }
    }

    if (pool.length === 0) {
      throw new Error(
        `[delta-force-core] 没有符合条件的武器（category=${category ?? '*'}，quality=${quality ?? '*'}，allowNormal=${allowNormal ?? '*'})`,
      );
    }
    return pick(pool);
  }

  function getRandomAmmo(opt: AmmoOptions = {}): Ammo {
    const { caliber } = opt;
    const pool = caliber ? AMMO.filter((a) => a.caliber === caliber) : AMMO.slice();
    return pick(pool);
  }

  const getRandomArmor    = (o?: TierOptions) => pickFromTiers(EQUIPMENT.armors, o);
  const getRandomHelmet   = (o?: TierOptions) => pickFromTiers(EQUIPMENT.helmets, o);
  const getRandomBackpack = (o?: TierOptions) => pickFromTiers(EQUIPMENT.backpacks, o);
  const getRandomChestRig = (o?: TierOptions) => pickFromTiers(EQUIPMENT.chest_rigs, o);

  function getRandomLoadout(o: LoadoutOptions = {}): Loadout {
    const { allowNormal } = o;
    return {
      operator: getRandomOperator(),
      weapon:   getRandomWeapon({ allowNormal }),
      armor:    getRandomArmor({ allowNormal }),
      helmet:   getRandomHelmet({ allowNormal }),
      backpack: getRandomBackpack(),
      chestRig: getRandomChestRig(),
    };
  }

  // ---------- 查询 ----------

  const findOperatorById = (id: string) =>
    listAllOperators().find((o) => o.id === id);
  const findWeaponById = (id: string) =>
    listAllWeapons().find((w) => w.id === id);
  const findAmmoById = (id: string) =>
    AMMO.find((a) => a.id === id);

  const findArmorById    = (id: string) => findInTiers(EQUIPMENT.armors, id);
  const findHelmetById   = (id: string) => findInTiers(EQUIPMENT.helmets, id);
  const findBackpackById = (id: string) => findInTiers(EQUIPMENT.backpacks, id);
  const findChestRigById = (id: string) => findInTiers(EQUIPMENT.chest_rigs, id);

  const findWeaponsByCaliber = (caliber: string) =>
    listAllWeapons().filter((w) => w.caliber === caliber);
  const findAmmoByCaliber = (caliber: string) =>
    AMMO.filter((a) => a.caliber === caliber);

  function findWeaponByAlias(alias: string): Weapon | undefined {
    const hit = Object.entries(aliasOverride).find(([, list]) => list.includes(alias));
    if (!hit) return undefined;
    return findWeaponById(hit[0]);
  }

  // ---------- 用户层 ----------

  const getWeaponQuality = (id: string): WeaponQuality | undefined => qualityOverride[id];
  const getAliases = (id: string) => aliasOverride[id] ?? [];
  const getTags    = (id: string) => tagOverride[id] ?? [];

  const listOperatorCategories = () => OPERATORS.map((g) => g.category);
  const listWeaponCategories   = () => WEAPONS.map((g) => g.category);

  return {
    // 数据视图
    getOperators, getWeapons, getAmmo, getEquipment,

    // 抽签
    getRandomOperator, getRandomWeapon, getRandomAmmo,
    getRandomArmor, getRandomHelmet, getRandomBackpack, getRandomChestRig,
    getRandomLoadout,

    // 查询
    findOperatorById, findWeaponById, findAmmoById,
    findArmorById, findHelmetById, findBackpackById, findChestRigById,
    findWeaponsByCaliber, findAmmoByCaliber, findWeaponByAlias,

    // 用户层
    getWeaponQuality, getAliases, getTags,

    // 列表
    listOperatorCategories, listWeaponCategories,
    listAllOperators, listAllWeapons,
  };
}