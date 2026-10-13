// =====================================================
// delta-force-core 类型定义
// =====================================================

/** 干员 */
export interface Operator {
  id: string;
  name: string;
  features: string;
}

/** 干员分类（如：突击兵 / 支援兵 / 工程兵 / 侦察兵） */
export interface OperatorCategory {
  category: string;
  operators: Operator[];
}

/** 武器 */
export interface Weapon {
  id: string;
  name: string;
  /** 品质：绿色 / 蓝色 / 紫色 / 金色 */
  quality: string;
  /** 是否允许在普通模式使用 */
  allowNormal: boolean;
}

/** 武器分类（如：突击步枪 / 冲锋枪 / ...） */
export interface WeaponCategory {
  category: string;
  weapons: Weapon[];
}

/** 防具 / 头盔条目 */
export interface ArmorItem {
  id: string;
  name: string;
  features?: string;
  comment?: string;
}

/** 防具 / 头盔 等级分组 */
export interface ArmorTier {
  tier: number;
  /** 是否允许在普通模式使用（缺省视为允许） */
  allowNormal?: boolean;
  items: ArmorItem[];
}

/** 背包条目 */
export interface BackpackItem {
  id: string;
  name: string;
  comment?: string;
}

/** 背包等级分组 */
export interface BackpackTier {
  tier: number;
  items: BackpackItem[];
}

/** 弹挂条目 */
export interface ChestRigItem {
  id: string;
  name: string;
  comment?: string;
}

/** 弹挂等级分组 */
export interface ChestRigTier {
  tier: number;
  items: ChestRigItem[];
}

/** 装备总览 */
export interface Equipment {
  armors: ArmorTier[];
  helmets: ArmorTier[];
  backpacks: BackpackTier[];
  chest_rigs: ChestRigTier[];
}

/** 一套完整战术配置 */
export interface Loadout {
  operator: Operator;
  weapon: Weapon;
  armor: ArmorItem;
  helmet: ArmorItem;
  backpack: BackpackItem;
  chestRig: ChestRigItem;
}

/** getRandomWeapon 过滤选项 */
export interface WeaponOptions {
  /** 武器大类，如 "突击步枪" */
  category?: string;
  /** 品质，如 "金色" / "紫色" / "蓝色" / "绿色" */
  quality?: string;
  /** true 只返回普通模式可用；false 只返回普通模式不可用；undefined 全部返回 */
  allowNormal?: boolean;
}

/** getRandomLoadout 选项 */
export interface LoadoutOptions {
  /** 是否只使用普通模式可用的装备（武器 / 护甲 / 头盔） */
  allowNormal?: boolean;
}