// =====================================================
// 三角洲行动 —— 消耗品与物品数据
// =====================================================

import type { GameItem } from '../types.js';

export const ITEMS: GameItem[] = [
  // ---------------------------------------------------
  // 药品（五级 / 金色）
  // ---------------------------------------------------
  {
    id: 'item_med_kit_gold',
    name: '战地医疗箱',
    category: '药品',
    tier: 5,
    durability: '800/800',
    useTime: 3.5,
    healRate: 30,
    description: '拥有800耐久度，每秒可以恢复30点生命值，启用时间3.5秒，能消耗25点耐久度治疗一处伤口，还可以消耗25点耐久度获得60秒止痛效果。'
  },

  // ---------------------------------------------------
  // 药品（四级 / 紫色）
  // ---------------------------------------------------
  {
    id: 'item_dek_surgery_kit',
    name: 'DEK野战手术包',
    category: '药品',
    tier: 4,
    uses: '7/7',
    useTime: 5,
    description: '启用后可以修复1个部位上所有异常状态，最多可以使用7次；启用时间5秒。'
  },
  {
    id: 'item_dve_painkiller',
    name: 'DVE止痛片',
    category: '药品',
    tier: 4,
    uses: '5/5',
    useTime: 3,
    description: '获得止痛效果360秒，能缓解疼痛、骨折带来的视觉影响，最多可以使用5次；使用时间3秒。'
  },
  {
    id: 'item_outdoor_med_kit',
    name: '户外医疗箱',
    category: '药品',
    tier: 4,
    durability: '350/350',
    useTime: 4,
    healRate: 20,
    description: '拥有350耐久度；每秒可以恢复20点生命值，启用时间4秒，能消耗25点耐久度治疗一处伤口，还可以消耗25点耐久度获得30秒止痛效果。'
  },

  // ---------------------------------------------------
  // 药品（三级 / 蓝色）
  // ---------------------------------------------------
  {
    id: 'item_field_first_aid',
    name: '野战急救包',
    category: '药品',
    tier: 3,
    durability: '220/220',
    useTime: 6,
    healRate: 20,
    description: '拥有220耐久度；每秒可以恢复20点生命值，启用时间6秒。'
  },

  // ---------------------------------------------------
  // 药品（二级 / 绿色）
  // ---------------------------------------------------
  {
    id: 'item_tactical_surgery',
    name: '战术快拆手术包',
    category: '药品',
    tier: 2,
    uses: '4/4',
    useTime: 7,
    description: '启用后可以修复1个部位上所有异常状态，最多可以使用4次；启用时间7秒。'
  },
  {
    id: 'item_bottled_antibiotics',
    name: '瓶装抗生素',
    category: '药品',
    tier: 2,
    uses: '3/3',
    useTime: 4,
    description: '获得止痛效果240秒，能缓解疼痛、骨折带来的视觉影响，最多可以使用3次；使用时间4秒。'
  },
  {
    id: 'item_strong_syringe',
    name: '强效注射器',
    category: '药品',
    tier: 2,
    durability: '60/60',
    useTime: 3,
    healRate: 12,
    description: '拥有60耐久度；每秒可以恢复12点生命值，启用时间3秒。'
  },
  {
    id: 'item_vehicle_first_aid',
    name: '车载急救包',
    category: '药品',
    tier: 2,
    durability: '90/90',
    useTime: 5,
    healRate: 6,
    description: '拥有90耐久度；每秒可以恢复6点生命值；启用时间5秒。'
  },
  {
    id: 'item_cat_tourniquet',
    name: 'CAT止血带',
    category: '药品',
    tier: 2,
    uses: '4/4',
    useTime: 2.5,
    description: '启用后可以治疗1个伤口，最多可以使用4次；启用时间2.5秒。'
  },
  {
    id: 'item_simple_surgery',
    name: '简易手术包',
    category: '药品',
    tier: 2,
    uses: '2/2',
    useTime: 10,
    description: '启用后可以修复1个部位上所有异常状态，最多可以使用2次；启用时间10秒。'
  },
  {
    id: 'item_slow_release_painkiller',
    name: '缓释止痛片',
    category: '药品',
    tier: 2,
    uses: '1/1',
    useTime: 4,
    description: '获得止痛效果200秒，能缓解疼痛、骨折带来的视觉影响，最多可以使用1次；使用时间4秒。'
  },
  {
    id: 'item_simple_syringe',
    name: '简易注射器',
    category: '药品',
    tier: 2,
    durability: '30/30',
    useTime: 3.5,
    healRate: 5,
    description: '具有30耐久度，每秒可以回复5点生命值，启用时间3.5秒。'
  },
  {
    id: 'item_elastic_bandage',
    name: '弹力绷带',
    category: '药品',
    tier: 2,
    uses: '2/2',
    useTime: 3,
    description: '启用后可以治疗1处伤口，最多可以使用2次；启用时间3秒。'
  },

  // ---------------------------------------------------
  // 维修套件（护甲）
  // ---------------------------------------------------
  {
    id: 'item_repair_armor_t6',
    name: '高级护甲维修组合',
    category: '维修套件',
    tier: 6,
    basePrice: 487190,
    size: '2x2', // 维修套件通常是 2x2
    durability: '200/200', // 维修点数
    useTime: 4.5,
    description: '针对6级装备的局内维修工具，能快速修复护甲耐久度。每块插板消耗工具包50点耐久度；启用时间4.5秒。'
  },
  {
    id: 'item_repair_armor_t5',
    name: '精密护甲维修包',
    category: '维修套件',
    tier: 5,
    basePrice: 238050,
    size: '2x2',
    durability: '120/120',
    useTime: 4.5,
    description: '针对5级装备的局内维修工具，能快速修复护甲耐久度。每块插板消耗工具包40点耐久度；启用时间4.5秒。'
  },
  {
    id: 'item_repair_armor_t4',
    name: '标准护甲维修包',
    category: '维修套件',
    tier: 4,
    basePrice: 46615,
    size: '2x2',
    durability: '75/75',
    useTime: 4.5,
    description: '针对4级装备的局内维修工具，能快速修复护甲耐久度。每块插板消耗工具包40点耐久度。'
  },
  {
    id: 'item_repair_armor_t3',
    name: '自制护甲维修包',
    category: '维修套件',
    tier: 3,
    basePrice: 22180,
    size: '2x2',
    durability: '50/50',
    useTime: 4.5,
    description: '针对3级装备的局内维修工具，能快速修复护甲耐久度。每块插板消耗工具包25点耐久度。'
  },

  // ---------------------------------------------------
  // 维修套件（头盔）
  // ---------------------------------------------------
  {
    id: 'item_repair_helmet_t6',
    name: '高级头盔维修组合',
    category: '维修套件',
    tier: 6,
    basePrice: 376400,
    size: '1x1', // 头盔维修包体积可能比护甲小
    durability: '100/100',
    useTime: 4.5,
    description: '针对6级装备的局内维修工具，能快速修复头盔耐久度。每块插板消耗工具包25点耐久度；启用时间4.5秒。'
  },
  {
    id: 'item_repair_helmet_t5',
    name: '精密头盔维修包',
    category: '维修套件',
    tier: 5,
    basePrice: 171055,
    size: '1x1',
    durability: '75/75',
    useTime: 4.5,
    description: '针对5级装备的局内维修工具，能快速修复头盔耐久度。每块插板消耗工具包25点耐久度；启用时间4.5秒。'
  },
  {
    id: 'item_repair_helmet_t4',
    name: '标准头盔维修包',
    category: '维修套件',
    tier: 4,
    basePrice: 59245,
    size: '1x1',
    durability: '50/50',
    useTime: 4.5,
    description: '针对4级装备的局内维修工具，能快速修复头盔耐久度。每块插板消耗工具包25点耐久度。'
  },
  {
    id: 'item_repair_helmet_t3',
    name: '自制头盔维修包',
    category: '维修套件',
    tier: 3,
    basePrice: 17584,
    size: '1x1',
    durability: '30/30',
    useTime: 4.5,
    description: '针对3级装备的局内维修工具，能快速修复头盔耐久度。每块插板消耗工具包15点耐久度。'
  },
  // ---------------------------------------------------
  // 针剂（四级 / 紫色）
  // ---------------------------------------------------
  {
    id: 'item_stim_stamina_purple',
    name: '体能针',
    category: '针剂',
    tier: 4,
    basePrice: 81715,
    size: '1x1',
    useTime: 3,
    description: '提升体力上限，提升体力恢复速度，持续300秒。'
  },
  {
    id: 'item_stim_perception_purple',
    name: '感知强化剂',
    category: '针剂',
    tier: 4,
    basePrice: 57000,
    size: '1x1',
    useTime: 3,
    description: '提升10%拾音范围，持续300秒。'
  },
  {
    id: 'item_stim_weight_purple',
    name: 'M2肌肉注射剂',
    category: '针剂',
    tier: 4,
    basePrice: 48125,
    size: '1x1',
    useTime: 3,
    description: '提升负重能力，持续300秒。'
  },

  // ---------------------------------------------------
  // 针剂（三级 / 蓝色）
  // ---------------------------------------------------
  {
    id: 'item_stim_stamina_blue',
    name: '体能活化针',
    category: '针剂',
    tier: 3,
    basePrice: 32720,
    size: '1x1',
    useTime: 3,
    description: '提升体力上限，提升体力恢复速度，持续180秒。'
  },
  {
    id: 'item_stim_combat_blue',
    name: 'OE2战斗兴奋剂',
    category: '针剂',
    tier: 3,
    basePrice: 29723,
    size: '1x1',
    useTime: 3,
    description: '在紧急情况下用于恢复体力的注射剂，能在短时间内恢复大量体力，单次使用。'
  },
  {
    id: 'item_stim_perception_blue',
    name: '感知活化针',
    category: '针剂',
    tier: 3,
    basePrice: 22500,
    size: '1x1',
    useTime: 3,
    description: '提升10%拾音范围，持续180秒。'
  },
  {
    id: 'item_stim_weight_blue',
    name: 'M1肌肉强化针',
    category: '针剂',
    tier: 3,
    basePrice: 15750,
    size: '1x1',
    useTime: 3,
    description: '提升负重能力，持续180秒。'
  },
  {
    id: 'item_stim_adrenaline_blue',
    name: '去甲肾上腺素',
    category: '针剂',
    tier: 3,
    basePrice: 13200,
    size: '1x1',
    useTime: 3,
    description: '可有效增加肌肉耐力的注射剂，能提升体力上限，持续120秒。'
  },
];