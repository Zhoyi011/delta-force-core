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
  }
];