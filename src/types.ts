// =====================================================
// delta-force-core 类型定义
// =====================================================

/** 品质 —— 官方数据不提供，由用户层评估 */
export type WeaponQuality = '红色' | '金色' | '紫色' | '蓝色' | '绿色' | '灰色';

// ---------- 干员 ----------
export interface Operator {
  id: string;
  name: string;
  features?: string;
  description?: string;
  image?: string;
}
export interface OperatorCategory {
  category: string;
  operators: Operator[];
}

// ---------- 武器 ----------
// ⚠️ 官方 Weapon 里没有 quality —— 品质是用户层的事
export interface Weapon {
  id: string;
  name: string;
  caliber?: string;
  
  // === 伤害数据 ===
  /** 裸枪伤害（霰弹枪为单颗弹丸伤害） */
  baseDamage?: number;
  /** 护甲伤害（霰弹枪为单颗弹丸护甲伤害） */
  armorDamage?: number;
  /** 弹丸数（仅霰弹枪；普通枪缺省视为 1） */
  pelletCount?: number;

  // === 核心实战数据（逐步补全） ===
  /** 优势射程 (米) */
  effectiveRange?: number;
  /** 后座力控制 (0-100) */
  control?: number;
  /** 操控速度 (0-100) */
  handling?: number;
  /** 举枪稳定性 (0-100) */
  aimStability?: number;
  /** 腰际射击精度 (0-100) */
  hipFireAccuracy?: number;
  /** 射速 (RPM) */
  fireRate?: number;
  /** 基础弹匣容量 */
  magazineCapacity?: number;
  /** 开火模式，如 ['全自动', '单发'] */
  fireModes?: string[];
  /** 枪口初速 (米/秒) */
  muzzleVelocity?: number;
  /** 枪声传播距离 (米) */
  soundRadius?: number;

  // === 槽位（为未来的配件兼容性预留） ===
  /** 这把枪出厂自带的基础槽位 */
  baseSlots?: AttachmentSlot[];

  description?: string;
  image?: string;
  /** 是否允许在普通模式使用（缺省视为 true） */
  allowNormal?: boolean;
}
export interface WeaponCategory {
  category: string;
  weapons: Weapon[];
}

// ---------- 子弹 ----------
export interface Ammo {
  id: string;
  name: string;
  /** 口径，如 '5.56x45mm' */
  caliber: string;
  description?: string;
  image?: string;
}

// ---------- 配件 ----------
export type AttachmentSlot =
  | '弹匣'
  | '瞄准镜'
  | '护木'
  | '枪管'
  | '枪口'
  | '枪托'
  | '前握把'
  | '后握把'
  | '功能配件';

export interface Attachment {
  id: string;
  name: string;
  slot: AttachmentSlot;
  /** 品质等级：1~6（配件目前是 2~4 级） */
  tier?: number;

  // === 属性加成（逐步补全） ===
  /** 后座力控制 +X */
  addedControl?: number;
  /** 操控速度 +X */
  addedHandling?: number;
  /** 举枪稳定性 +X */
  addedAimStability?: number;
  /** 腰际射击精度 +X */
  addedHipFireAccuracy?: number;
  /** 射速 +X */
  addedFireRate?: number;
  /** 枪口初速 +X */
  addedMuzzleVelocity?: number;
  /** 优势射程 +X */
  addedEffectiveRange?: number;
  /** 弹匣容量 +X */
  addedMagazineCapacity?: number;
  /** 换弹时间变化（单位：秒） */
  addedReloadTime?: number;

  /** 特殊机制描述（例如火控系统、夜视仪等） */
  description?: string; 

  // 🆕 专门用于存“高/中/低”或者其他文字效果（如枪声抑制、倍率、火光等）
  specialEffects?: string[]; 

  // === 兼容性影响（为未来的互斥/解锁预留） ===
  /** 装上后新增的槽位 */
  unlocksSlots?: AttachmentSlot[];
  /** 装上后锁死的槽位 */
  blocksSlots?: AttachmentSlot[];
  /** 装上后不能同时装的其它配件 id */
  incompatibleWith?: string[];
}

// ---------- 装备（护甲/头盔/背包/胸挂通用）----------
export interface EquipmentItem {
  id: string;
  name: string;
  features?: string;
  comment?: string;
  description?: string;
  image?: string;
}
export interface EquipmentTier {
  tier: number;
  allowNormal?: boolean;
  items: EquipmentItem[];
}
export interface Equipment {
  armors: EquipmentTier[];
  helmets: EquipmentTier[];
  backpacks: EquipmentTier[];
  chest_rigs: EquipmentTier[];
}

// ---------- 消耗品 / 物品 ----------
export type ItemCategory =
  | '药品'
  | '维修套件'
  | '针剂'
  | '高价值'
  | '钥匙'
  | '工艺收藏'
  | '电子产品'
  | '医疗用品'
  | '家居物品'
  | '工具材料'
  | '资料情报'
  | '能源燃料';

export interface GameItem {
  id: string;
  name: string;
  category: ItemCategory;
  /** 品质颜色 */
  quality?: WeaponQuality;
  /** 品质等级：1~6 (如药品的 2级绿/3级蓝/4级紫/5级金) */
  tier?: number;
  /** 参考基础价格（哈夫币） */
  basePrice?: number;
  /** 参考基础价值（哈夫币） */
  baseValue?: number;
  /** 占格大小 (如 '1x2') */
  size?: string;
  /** 启用时间 (秒) */
  useTime?: number;
  /** 可用次数 (如 '7/7') */
  uses?: string;
  /** 耐久度 (如 '800/800') */
  durability?: string;
  /** 回复生命值 (每秒) */
  healRate?: number;
  /** 物品功能描述 */
  description?: string;
  image?: string;
  
  // 🆕 房卡/钥匙专属字段
  /** 所属地图（如 '长弓溪谷'） */
  map?: string;
  /** 房间名或钥匙具体位置（如 '技术室'） */
  room?: string;
}

// ---------- 完整配装 ----------
export interface Loadout {
  operator: Operator;
  weapon: Weapon;
  armor: EquipmentItem;
  helmet: EquipmentItem;
  backpack: EquipmentItem;
  chestRig: EquipmentItem;
}

// ---------- 引擎选项 ----------
/** 用户偏好覆盖层（全部可选） */
export interface EngineOptions {
  /** 用户对武器品质的评估：weaponId → 品质 */
  qualityOverride?: Record<string, WeaponQuality>;
  /** 别名：entityId → 别名数组（可用于查询） */
  aliasOverride?: Record<string, string[]>;
  /** 个人标签：entityId → 标签数组（纯元数据，不影响抽签） */
  tagOverride?: Record<string, string[]>;
}

// ---------- 抽签 / 查询选项 ----------
export interface WeaponOptions {
  category?: string;
  /** 需要引擎启用了 qualityOverride 才有意义 */
  quality?: WeaponQuality;
  allowNormal?: boolean;
}

/** 武器高级搜索选项（全部可选，多个条件为 AND） */
export interface WeaponSearchOptions {
  /** 关键字：匹配 id / name / caliber（不区分大小写） */
  keyword?: string;
  /** 武器大类，如 "突击步枪" */
  category?: string;
  /** 口径，如 "5.56x45mm" */
  caliber?: string;
  /** 普通模式筛选 */
  allowNormal?: boolean;
  /** 最小裸枪伤害（含） */
  minDamage?: number;
  /** 最大裸枪伤害（含） */
  maxDamage?: number;
}

/** 干员搜索选项 */
export interface OperatorSearchOptions {
  /** 关键字：匹配 id / name / features（不区分大小写） */
  keyword?: string;
  /** 兵种分类，如 "突击兵" */
  category?: string;
}

export interface TierOptions {
  tier?: number;
  allowNormal?: boolean;
}

export interface AmmoOptions {
  caliber?: string;
}

export interface LoadoutOptions {
  allowNormal?: boolean;
}

// ---------- 引擎接口 ----------
export interface Engine {
  // 数据视图（只读）
  getOperators(): readonly OperatorCategory[];
  getWeapons(): readonly WeaponCategory[];
  getAmmo(): readonly Ammo[];
  getEquipment(): Equipment;
  getItems(): readonly GameItem[]; // 🆕 获取所有物品

  // 抽签
  getRandomOperator(category?: string): Operator;
  getRandomWeapon(options?: WeaponOptions): Weapon;
  getRandomAmmo(options?: AmmoOptions): Ammo;
  getRandomArmor(options?: TierOptions): EquipmentItem;
  getRandomHelmet(options?: TierOptions): EquipmentItem;
  getRandomBackpack(options?: TierOptions): EquipmentItem;
  getRandomChestRig(options?: TierOptions): EquipmentItem;
  getRandomLoadout(options?: LoadoutOptions): Loadout;

  // 查询
  findOperatorById(id: string): Operator | undefined;
  findWeaponById(id: string): Weapon | undefined;
  findAmmoById(id: string): Ammo | undefined;
  findArmorById(id: string): EquipmentItem | undefined;
  findHelmetById(id: string): EquipmentItem | undefined;
  findBackpackById(id: string): EquipmentItem | undefined;
  findChestRigById(id: string): EquipmentItem | undefined;
  findItemById(id: string): GameItem | undefined; // 🆕 按 id 查物品
  findWeaponsByCaliber(caliber: string): Weapon[];
  findAmmoByCaliber(caliber: string): Ammo[];
  findWeaponByAlias(alias: string): Weapon | undefined;

  // 搜索
  /** 关键字搜索武器（匹配 id / name / caliber，不区分大小写） */
  searchWeapons(keyword: string): Weapon[];
  /** 高级筛选武器（多条件 AND） */
  searchWeaponsAdvanced(options: WeaponSearchOptions): Weapon[];
  /** 关键字搜索干员（匹配 id / name / features，不区分大小写） */
  searchOperators(keyword: string): Operator[];
  /** 高级筛选干员（多条件 AND） */
  searchOperatorsAdvanced(options: OperatorSearchOptions): Operator[];

  // 用户层
  getWeaponQuality(weaponId: string): WeaponQuality | undefined;
  getAliases(id: string): readonly string[];
  getTags(id: string): readonly string[];

  // 列表
  listOperatorCategories(): string[];
  listWeaponCategories(): string[];
  listAllOperators(): Operator[];
  listAllWeapons(): Weapon[];
}
