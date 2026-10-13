// =====================================================
// delta-force-core 主入口
// =====================================================

import { OPERATORS, WEAPONS, EQUIPMENT } from './data.js';
import type {
  Operator,
  OperatorCategory,
  Weapon,
  ArmorItem,
  BackpackItem,
  ChestRigItem,
  Loadout,
  WeaponOptions,
  LoadoutOptions,
} from './types.js';

// 重新导出数据与类型，方便 `import { OPERATORS } from 'delta-force-core'`
export * from './data.js';
export * from './types.js';

// -----------------------------------------------------
// 内部工具
// -----------------------------------------------------

/** 从数组里随机取一个元素 */
function pick<T>(list: readonly T[]): T {
  if (list.length === 0) throw new Error('[delta-force-core] 待抽取的列表为空');
  return list[Math.floor(Math.random() * list.length)];
}

/** 把分类数组里所有条目拉平 */
function flatten<T extends { [k: string]: any }>(
  groups: readonly T[],
  key: string,
): any[] {
  return groups.flatMap((g) => g[key]);
}

/** 通用 allowNormal 过滤（undefined 表示不过滤） */
function matchAllowNormal(
  allowNormal: boolean | undefined,
  value: boolean | undefined,
): boolean {
  if (allowNormal === undefined) return true;
  // 未标注 allowNormal 的默认视为 true（允许普通模式）
  return (value ?? true) === allowNormal;
}

// -----------------------------------------------------
// 1. 随机干员
// -----------------------------------------------------

/**
 * 随机抽取一名干员。
 *
 * @param category 兵种分类（"突击兵" | "支援兵" | "工程兵" | "侦察兵"）。不传则从全部干员中抽取。
 * @throws 当传入的分类不存在或该分类下没有干员时抛错。
 *
 * @example
 *   getRandomOperator();               // 任意干员
 *   getRandomOperator('突击兵');        // 只从突击兵里抽
 */
export function getRandomOperator(category?: string): Operator {
  if (!category) {
    return pick(flatten<OperatorCategory>(OPERATORS, 'operators') as Operator[]);
  }

  const group = OPERATORS.find((g) => g.category === category);
  if (!group) {
    throw new Error(
      `[delta-force-core] 未找到兵种分类 "${category}"，可用分类：${OPERATORS.map((g) => g.category).join(' / ')}`,
    );
  }
  return pick(group.operators);
}

// -----------------------------------------------------
// 2. 随机武器
// -----------------------------------------------------

/**
 * 随机抽取一把武器，支持按武器分类 / 品质 / 普通模式可用性过滤。
 *
 * @example
 *   getRandomWeapon();                                        // 任意武器
 *   getRandomWeapon({ category: '突击步枪' });                 // 只抽突击步枪
 *   getRandomWeapon({ quality: '金色' });                      // 只抽金色
 *   getRandomWeapon({ allowNormal: true });                   // 只抽普通模式可用的
 *   getRandomWeapon({ category: '狙击步枪', quality: '金色' });
 */
export function getRandomWeapon(options: WeaponOptions = {}): Weapon {
  const { category, quality, allowNormal } = options;

  const pool: Weapon[] = [];

  for (const group of WEAPONS) {
    if (category && group.category !== category) continue;

    for (const weapon of group.weapons) {
      if (quality && weapon.quality !== quality) continue;
      if (!matchAllowNormal(allowNormal, weapon.allowNormal)) continue;
      pool.push(weapon);
    }
  }

  if (pool.length === 0) {
    throw new Error(
      `[delta-force-core] 没有符合条件的武器（category=${category ?? '*'}，quality=${quality ?? '*'}，allowNormal=${allowNormal ?? '*'})`,
    );
  }

  return pick(pool);
}

// -----------------------------------------------------
// 3. 随机装备（内部 / 也可单独导出）
// -----------------------------------------------------

function pickFromTiers<T extends { tier: number; allowNormal?: boolean; items: any[] }>(
  tiers: readonly T[],
  allowNormal?: boolean,
  field: string = 'items',
): any {
  // 先按 allowNormal 过滤等级
  const validTiers = tiers.filter((t) => matchAllowNormal(allowNormal, t.allowNormal));
  if (validTiers.length === 0) {
    throw new Error('[delta-force-core] 没有符合条件的装备等级');
  }

  // 再把所有条目拉平抽取
  const pool = validTiers.flatMap((t) => (t as any)[field]);
  return pick(pool);
}

/** 随机防具 */
export function getRandomArmor(allowNormal?: boolean): ArmorItem {
  return pickFromTiers(EQUIPMENT.armors, allowNormal);
}

/** 随机头盔 */
export function getRandomHelmet(allowNormal?: boolean): ArmorItem {
  return pickFromTiers(EQUIPMENT.helmets, allowNormal);
}

/** 随机背包 */
export function getRandomBackpack(): BackpackItem {
  return pickFromTiers(EQUIPMENT.backpacks);
}

/** 随机弹挂 */
export function getRandomChestRig(): ChestRigItem {
  return pickFromTiers(EQUIPMENT.chest_rigs);
}

// -----------------------------------------------------
// 4. 随机完整战术配置
// -----------------------------------------------------

/**
 * 随机生成一套完整的战术配置。
 *
 * @example
 *   const loadout = getRandomLoadout();
 *   const normalLoadout = getRandomLoadout({ allowNormal: true });
 */
export function getRandomLoadout(options: LoadoutOptions = {}): Loadout {
  const { allowNormal } = options;

  return {
    operator: getRandomOperator(),
    weapon: getRandomWeapon({ allowNormal }),
    armor: getRandomArmor(allowNormal),
    helmet: getRandomHelmet(allowNormal),
    backpack: getRandomBackpack(),
    chestRig: getRandomChestRig(),
  };
}