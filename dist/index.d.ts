import type { Operator, Weapon, ArmorItem, BackpackItem, ChestRigItem, Loadout, WeaponOptions, LoadoutOptions } from './types.js';
export * from './data.js';
export * from './types.js';
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
export declare function getRandomOperator(category?: string): Operator;
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
export declare function getRandomWeapon(options?: WeaponOptions): Weapon;
/** 随机防具 */
export declare function getRandomArmor(allowNormal?: boolean): ArmorItem;
/** 随机头盔 */
export declare function getRandomHelmet(allowNormal?: boolean): ArmorItem;
/** 随机背包 */
export declare function getRandomBackpack(): BackpackItem;
/** 随机弹挂 */
export declare function getRandomChestRig(): ChestRigItem;
/**
 * 随机生成一套完整的战术配置。
 *
 * @example
 *   const loadout = getRandomLoadout();
 *   const normalLoadout = getRandomLoadout({ allowNormal: true });
 */
export declare function getRandomLoadout(options?: LoadoutOptions): Loadout;
//# sourceMappingURL=index.d.ts.map