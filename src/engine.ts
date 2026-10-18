// =====================================================
// delta-force-core 引擎
//
// 官方数据 + 用户覆盖层 → 统一的抽签 / 查询接口
// =====================================================

import { OPERATORS } from './data/operators.js';
import { WEAPONS }   from './data/weapons/index.js';   // 👈 修改了路径
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
  WeaponSearchOptions,
  OperatorSearchOptions,
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

/** 判断字符串是否包含关键字（不区分大小写） */
function containsIgnoreCase(haystack: string | undefined, needle: string): boolean {
  if (!haystack) return false;
  return haystack.toLowerCase().includes(needle.toLowerCase());
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

  // ---------- 搜索 ----------

  /** 关键字搜索武器：匹配 id / name / caliber（不区分大小写） */
  function searchWeapons(keyword: string): Weapon[] {
    const kw = keyword.trim();
    if (!kw) return [];
    return listAllWeapons().filter(
      (w) =>
        containsIgnoreCase(w.id, kw) ||
        containsIgnoreCase(w.name, kw) ||
        containsIgnoreCase(w.caliber, kw),
    );
  }

  /** 高级筛选武器：多条件 AND */
  function searchWeaponsAdvanced(opt: WeaponSearchOptions): Weapon[] {
    const { keyword, category, caliber, allowNormal, minDamage, maxDamage } = opt;
    const kw = keyword?.trim();

    return listAllWeapons().filter((w) => {
      // category 筛选：需要在 WEAPONS 分组里匹配
      if (category) {
        const group = WEAPONS.find((g) => g.category === category);
        if (!group || !group.weapons.some((x) => x.id === w.id)) return false;
      }
      if (caliber && w.caliber !== caliber) return false;
      if (!matchAllowNormal(allowNormal, w.allowNormal)) return false;
      if (minDamage !== undefined && (w.baseDamage ?? 0) < minDamage) return false;
      if (maxDamage !== undefined && (w.baseDamage ?? Infinity) > maxDamage) return false;
      if (kw) {
        const hit =
          containsIgnoreCase(w.id, kw) ||
          containsIgnoreCase(w.name, kw) ||
          containsIgnoreCase(w.caliber, kw);
        if (!hit) return false;
      }
      return true;
    });
  }

  /** 关键字搜索干员：匹配 id / name / features（不区分大小写） */
  function searchOperators(keyword: string): Operator[] {
    const kw = keyword.trim();
    if (!kw) return [];
    return listAllOperators().filter(
      (o) =>
        containsIgnoreCase(o.id, kw) ||
        containsIgnoreCase(o.name, kw) ||
        containsIgnoreCase(o.features, kw),
    );
  }

  /** 高级筛选干员：多条件 AND */
  function searchOperatorsAdvanced(opt: OperatorSearchOptions): Operator[] {
    const { keyword, category } = opt;
    const kw = keyword?.trim();

    let pool = listAllOperators();
    if (category) {
      const group = OPERATORS.find((g) => g.category === category);
      if (!group) return [];
      pool = group.operators;
    }
    if (kw) {
      pool = pool.filter(
        (o) =>
          containsIgnoreCase(o.id, kw) ||
          containsIgnoreCase(o.name, kw) ||
          containsIgnoreCase(o.features, kw),
      );
    }
    return pool;
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

    // 搜索
    searchWeapons, searchWeaponsAdvanced,
    searchOperators, searchOperatorsAdvanced,

    // 用户层
    getWeaponQuality, getAliases, getTags,

    // 列表
    listOperatorCategories, listWeaponCategories,
    listAllOperators, listAllWeapons,
  };
}