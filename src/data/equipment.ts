// =====================================================
// 三角洲行动 —— 装备数据（护甲 / 头盔 / 背包 / 胸挂）
//
// 🔧 更新指南：
//   · 新增装备：在对应 tier 的 items 数组里追加一行
//   · features：有资料的写，没有的留空即可
// =====================================================

import type { Equipment } from '../types.js';

export const EQUIPMENT: Equipment = {
  // ---------------------------------------------------
  // 护甲
  // ---------------------------------------------------
  armors: [
    {
      tier: 1,
      allowNormal: true,
      items: [
        { id: 'armor_l1_nylon', name: '尼龙防弹衣', features: '极轻无惩罚' },
        { id: 'armor_l1_bike',  name: '电单车背心', features: '极轻无惩罚' },
        { id: 'armor_l1_clean', name: '轻型防弹衣', features: '极轻无惩罚' },
        { id: 'armor_l1_baoan', name: '保安防弹衣', features: '极轻无惩罚' },
      ],
    },
    {
      tier: 2,
      allowNormal: true,
      items: [
        { id: 'armor_l2_tg',       name: 'TG战术防弹衣', features: '不护腹' },
        { id: 'armor_l2_ht',       name: 'HT战术背心',   features: '不护腹' },
        { id: 'armor_l2_stab',     name: '简易防刺背心', features: '不护腹' },
        { id: 'armor_l2_standard', name: '通用战术背心', features: '不护腹' },
      ],
    },
    {
      tier: 3,
      allowNormal: true,
      items: [
        { id: 'armor_l3_tgh',           name: 'TG-H战术防弹衣',    features: '75耐久 平民战神' },
        { id: 'armor_l3_blue_shooter',  name: '蓝色射手战术背心',  features: '移速惩罚大' },
        { id: 'armor_l3_hvk',           name: 'Hvk快拆防弹衣',     features: '不护腹' },
        { id: 'armor_l3_standard',      name: '标准防弹衣',        features: '属性一般' },
      ],
    },
    {
      tier: 4,
      allowNormal: true,
      items: [
        { id: 'armor_l4_mk2',     name: 'MK-2战术背心',   features: '高耐久耐修' },
        { id: 'armor_l4_dt_avs',  name: 'DT-AVS防弹衣',   features: '均衡' },
        { id: 'armor_l4_assault', name: '突击手防弹衣',   features: '中规中矩' },
        { id: 'armor_l4_samurai', name: '武士防弹背心',   features: '移速惩罚大' },
        { id: 'armor_l4_hmp',     name: 'HMP特勤防弹衣',  features: '损耗极高' },
      ],
    },
    {
      tier: 5,
      allowNormal: false,
      items: [
        { id: 'armor_l5_03',   name: '重型防弹衣',    features: '高耐久重甲' },
        { id: 'armor_l5_hwk2', name: 'HwK-2防弹衣',   features: '均衡紫甲' },
        { id: 'armor_l5_sai',  name: '精英防弹衣',    features: '老赛甲' },
        { id: 'armor_l5_fs',   name: 'FS复合防弹衣',  features: '远对枪' },
      ],
    },
    {
      tier: 6,
      allowNormal: false,
      items: [
        { id: 'armor_l6_ha2',   name: 'HA-2重型防弹甲',     features: '顶级防护' },
        { id: 'armor_l6_asala', name: '阿萨拉防护重甲',     features: '不耐修' },
        { id: 'armor_l6_king',  name: '金刚防弹衣',         features: '轻型六甲' },
        { id: 'armor_l6_mas',   name: '特里克MAS2.0装甲',   features: '全方位保护' },
      ],
    },
  ],

  // ---------------------------------------------------
  // 头盔
  // ---------------------------------------------------
  helmets: [
    {
      tier: 1,
      allowNormal: true,
      items: [
        { id: 'helmet_l1_safety',    name: '安全头盔' },
        { id: 'helmet_l1_old_steel', name: '旧式钢盔' },
        { id: 'helmet_l1_sunhat',    name: '防晒帽' },
        { id: 'helmet_l1_baseball',  name: '户外棒球帽', features: '10%听力加成' },
      ],
    },
    {
      tier: 2,
      allowNormal: true,
      items: [
        { id: 'helmet_l2_ho1',        name: 'HO1战术头盔' },
        { id: 'helmet_l2_mc',         name: 'MC防弹头盔' },
        { id: 'helmet_l2_retro_moto', name: '复古摩托头盔' },
        { id: 'helmet_l2_dro',        name: 'DRO战术头盔' },
      ],
    },
    {
      tier: 3,
      allowNormal: true,
      items: [
        { id: 'helmet_l3_das',    name: 'DAS防弹头盔',  features: '40耐久，唯一能防3级弹狙击的蓝头' },
        { id: 'helmet_l3_ho7',    name: 'HO7战术头盔' },
        { id: 'helmet_l3_riot',   name: '防暴头盔' },
        { id: 'helmet_l3_mc201',  name: 'MC201防弹头盔', features: '20%听力增幅' },
      ],
    },
    {
      tier: 4,
      allowNormal: true,
      items: [
        { id: 'helmet_l4_mhs',  name: 'MHS战术头盔',  features: '30%听力增幅，300耐久，无面罩' },
        { id: 'helmet_l4_d6',   name: 'D6战术头盔',   features: '自闭头，大幅降视野听力' },
        { id: 'helmet_l4_dich', name: 'DICH训练头盔', features: '50%拾音范围，全游戏最高听力' },
        { id: 'helmet_l4_gt1',  name: 'GT1战术头盔',  features: '48耐久，20%听力，带面罩' },
      ],
    },
    {
      tier: 5,
      allowNormal: false,
      items: [
        { id: 'helmet_l5_mask1',      name: 'Mask-1铁壁头盔',       features: '75耐久，自闭头，显著降听力' },
        { id: 'helmet_l5_gn_heavy',   name: 'GN重型头盔',           features: '50耐久，10%听力，耐修' },
        { id: 'helmet_l5_ho9',        name: 'HO9防暴头盔',          features: '45耐久，大面罩+护颈' },
        { id: 'helmet_l5_gn_nv_heavy',name: 'GN久战重型夜视头盔',   features: '夜视，20耐久' },
        { id: 'helmet_l5_dich1',      name: 'DICH-1战术头盔',       features: '40%听力增幅，5级防弹' },
        { id: 'helmet_l5_gn_nv',      name: 'GN重型夜视头盔',       features: '夜视，标准耐久，无视野遮挡' },
      ],
    },
    {
      tier: 6,
      allowNormal: false,
      items: [
        { id: 'helmet_l6_h70',    name: 'H70精英头盔',      features: '55耐久，10%听力，唯一可交易' },
        { id: 'helmet_l6_dich9',  name: 'DICH-9重型头盔',   features: '40%听力，负面最低，50耐久' },
        { id: 'helmet_l6_gt5',    name: 'GT5指挥官头盔',    features: '60耐久，20%听力，-8%开镜速度' },
        { id: 'helmet_l6_h70_nv', name: 'H70夜视精英头盔', features: '夜视，6级防弹' },
      ],
    },
  ],

  // ---------------------------------------------------
  // 胸挂
  // ---------------------------------------------------
  chest_rigs: [
    {
      tier: 1,
      items: [
        { id: 'rig_l1_simple',         name: '简易胸挂' },
        { id: 'rig_l1_light_tactical', name: '轻型战术胸挂' },
        { id: 'rig_l1_quick_recon',    name: '快速侦察胸挂' },
        { id: 'rig_l1_portable',       name: '便携胸挂' },
      ],
    },
    {
      tier: 2,
      items: [
        { id: 'rig_l2_d01',   name: 'D01轻型胸挂' },
        { id: 'rig_l2_hk3',   name: 'HK3便携胸挂' },
        { id: 'rig_l2_nylon', name: '尼龙背袋' },
      ],
    },
    {
      tier: 3,
      items: [
        { id: 'rig_l3_simple_carry', name: '简易携行胸挂' },
        { id: 'rig_l3_g01',          name: 'GO1战术胸挂',  comment: '13格 蓝挂之王' },
        { id: 'rig_l3_dsa',          name: 'DSA战术胸挂',  comment: '空间充足但缺1x3格' },
        { id: 'rig_l3_hd3',          name: 'HD3战术胸挂' },
      ],
    },
    {
      tier: 4,
      items: [
        { id: 'rig_l4_gir',     name: 'GIR野战胸挂',    comment: '紫色品质神，究极能装' },
        { id: 'rig_l4_drc',     name: 'DRC先进侦察胸挂', comment: '17格 紫挂首选' },
        { id: 'rig_l4_assault', name: '突击者战术背心' },
        { id: 'rig_l4_strike',  name: '强袭战术背心' },
      ],
    },
    {
      tier: 5,
      items: [
        { id: 'rig_l5_dar', name: 'DAR突击手胸挂', comment: '24格 天花板' },
      ],
    },
  ],

  // ---------------------------------------------------
  // 背包
  // ---------------------------------------------------
  backpacks: [
    {
      tier: 1,
      items: [
        { id: 'bp_l1_travel',  name: '旅行背包' },
        { id: 'bp_l1_sport',   name: '运动背包' },
        { id: 'bp_l1_sling',   name: '斜背袋' },
        { id: 'bp_l1_dg',      name: 'DG运动背包', comment: '3x4布局 白包神' },
        { id: 'bp_l1_canvas',  name: '帆布背包' },
      ],
    },
    {
      tier: 2,
      items: [
        { id: 'bp_l2_light_outdoor', name: '轻型户外背包' },
        { id: 'bp_l2_camp',          name: '露营背包' },
        { id: 'bp_l2_quick',         name: '战术快拆背包', comment: '15格 实用过渡' },
        { id: 'bp_l2_assault',       name: '突击战术背包' },
      ],
    },
    {
      tier: 3,
      items: [
        { id: 'bp_l3_rainforest',   name: '雨林猎人背包' },
        { id: 'bp_l3_ga',           name: 'GA野战背包',   comment: '20格 洞洞包首选' },
        { id: 'bp_l3_large_climb',  name: '大型登山背包' },
        { id: 'bp_l3_3h',           name: '3H战术背包' },
        { id: 'bp_l3_dash',         name: 'DASH战术背包' },
      ],
    },
    {
      tier: 4,
      items: [
        { id: 'bp_l4_gt1_outdoor', name: 'GT1户外登山背包' },
        { id: 'bp_l4_d2',          name: 'D2战术登山背包', comment: '24格 紫包首选' },
        { id: 'bp_l4_field_hike',  name: '野战徒步背包' },
        { id: 'bp_l4_map',         name: 'MAP侦察背包' },
        { id: 'bp_l4_survival',    name: '生存战术背包' },
      ],
    },
    {
      tier: 5,
      items: [
        { id: 'bp_l5_gt5', name: 'GT5野战背包',     comment: '30格 最强金包' },
        { id: 'bp_l5_d3',  name: 'D3战术登山背包' },
        { id: 'bp_l5_hls2',name: 'HLS-2重型背包' },
        { id: 'bp_l5_als', name: 'ALS背负系统' },
      ],
    },
    {
      tier: 6,
      items: [
        { id: 'bp_l6_heavy_climb', name: '重型登山背包', comment: '40格 可交易大红包' },
      ],
    },
  ],
};