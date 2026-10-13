// =====================================================
// 三角洲行动 —— 核心数据（人类可读 · 易更新）
//
// 🔧 更新指南：
//   · 新增干员：在 OPERATORS 里对应兵种下追加一行
//   · 新增武器：在 WEAPONS 里对应分类下追加一行
//   · 新增防具/头盔/背包/弹挂：在 EQUIPMENT 对应数组里追加 item
// =====================================================

import type {
  OperatorCategory,
  WeaponCategory,
  Equipment,
} from './types.js';

// -----------------------------------------------------
// 干员
// -----------------------------------------------------
export const OPERATORS: OperatorCategory[] = [
  {
    category: '突击兵',
    operators: [
      { id: 'honglang', name: '红狼', features: '爆发移速' },
      { id: 'weilong', name: '威龙', features: '破门震荡' },
      { id: 'jifeng', name: '疾风', features: '机动位移' },
      { id: 'wuming', name: '无名', features: '静步偷袭' },
    ],
  },
  {
    category: '支援兵',
    operators: [
      { id: 'fengyi', name: '蜂医', features: '烟位医疗' },
      { id: 'gu', name: '蛊', features: '毒气控场' },
      { id: 'die', name: '蝶', features: '救援无人机' },
      { id: 'lvren', name: '旅人', features: '谁是好狗狗' },
    ],
  },
  {
    category: '工程兵',
    operators: [
      { id: 'muyangren', name: '牧羊人', features: '声波防线' },
      { id: 'wululu', name: '乌鲁鲁', features: '巡飞弹压制' },
      { id: 'shenlan', name: '深蓝', features: '电子工程' },
      { id: 'yetan', name: '液氮', features: '低温冷却' },
      { id: 'bite', name: '比特', features: '战术突击' },
    ],
  },
  {
    category: '侦察兵',
    operators: [
      { id: 'luna', name: '露娜', features: '追踪弓透视' },
      { id: 'haizhua', name: '骇爪', features: '信号破译' },
      { id: 'huixiang', name: '回响', features: '声学定位' },
      { id: 'yinyi', name: '银翼', features: '老鸟窥视' },
    ],
  },
];

// -----------------------------------------------------
// 武器
// -----------------------------------------------------
export const WEAPONS: WeaponCategory[] = [
  {
    category: '突击步枪',
    weapons: [
      { id: 'm4a1', name: 'M4A1突击步枪', quality: '紫色', allowNormal: true },
      { id: 'k416', name: 'K416突击步枪', quality: '金色', allowNormal: true },
      { id: 'akm', name: 'AKM突击步枪', quality: '蓝色', allowNormal: true },
      { id: 'qbz95_1', name: 'QBZ-95-1突击步枪', quality: '紫色', allowNormal: true },
      { id: 'as_val', name: 'AS Val「巨浪」突击步枪', quality: '金色', allowNormal: true },
      { id: 'tenglong', name: '腾龙突击步枪（QBZ-191）', quality: '金色', allowNormal: true },
      { id: 'm7', name: 'M7战斗步枪', quality: '金色', allowNormal: true },
      { id: 'scar_h', name: 'SCAR-H战斗步枪', quality: '金色', allowNormal: true },
      { id: 'g3', name: 'G3战斗步枪', quality: '紫色', allowNormal: true },
      { id: 'ak12', name: 'AK-12突击步枪', quality: '紫色', allowNormal: true },
      { id: 'aug', name: 'AUG突击步枪', quality: '紫色', allowNormal: true },
      { id: 'sg552', name: 'SG552突击步枪', quality: '蓝色', allowNormal: true },
      { id: 'm16a4', name: 'M16A4突击步枪', quality: '蓝色', allowNormal: true },
      { id: 'car15', name: 'CAR-15突击步枪', quality: '绿色', allowNormal: true },
      { id: 'aks74u', name: 'AKS-74U突击步枪', quality: '绿色', allowNormal: true },
      { id: 'k437', name: 'K437突击步枪', quality: '紫色', allowNormal: true },
      { id: 'ptr32', name: 'PTR-32突击步枪', quality: '蓝色', allowNormal: true },
      { id: 'ash12', name: 'ASh-12战斗步枪', quality: '金色', allowNormal: true },
      { id: 'kc17', name: 'KC17突击步枪', quality: '紫色', allowNormal: true },
      { id: 'mk47', name: 'MK47突击步枪', quality: '紫色', allowNormal: true },
      { id: 'mcx_lt', name: 'MCX LT突击步枪', quality: '金色', allowNormal: true },
      { id: 'ar57', name: 'AR-57突击步枪', quality: '紫色', allowNormal: true },
      { id: 'rm277', name: 'RM277突击步枪', quality: '金色', allowNormal: true },
      { id: 'mdr', name: 'MDR突击步枪', quality: '紫色', allowNormal: true },
    ],
  },
  {
    category: '冲锋枪',
    weapons: [
      { id: 'uzi', name: 'UZI冲锋枪', quality: '蓝色', allowNormal: true },
      { id: 'bizon', name: '野牛冲锋枪', quality: '蓝色', allowNormal: true },
      { id: 'vityaz', name: '勇士冲锋枪', quality: '蓝色', allowNormal: true },
      { id: 'mp5', name: 'MP5冲锋枪', quality: '紫色', allowNormal: true },
      { id: 'smg45', name: 'SMG-45冲锋枪', quality: '紫色', allowNormal: true },
      { id: 'p90', name: 'P90冲锋枪', quality: '金色', allowNormal: true },
      { id: 'mp7', name: 'MP7冲锋枪', quality: '紫色', allowNormal: true },
      { id: 'vector', name: 'Vector冲锋枪', quality: '金色', allowNormal: true },
      { id: 'qcq171', name: 'QCQ171冲锋枪（二〇式）', quality: '紫色', allowNormal: true },
      { id: 'mk4', name: 'MK4冲锋枪', quality: '紫色', allowNormal: true },
      { id: 'sr3m', name: 'SR-3M冲锋枪', quality: '紫色', allowNormal: true},
      { id: 'thompson', name: '汤姆逊冲锋枪', quality: '蓝色', allowNormal: true },
    ],
  },
  {
    category: '精确射手步枪',
    weapons: [
      { id: 'sr9', name: 'SR9射手步枪', quality: '蓝色', allowNormal: true },
      { id: 'mini14', name: 'Mini-14射手步枪', quality: '紫色', allowNormal: true },
      { id: 'm14', name: 'M14战斗射手步枪', quality: '金色', allowNormal: true },
      { id: 'sks', name: 'SKS射手步枪', quality: '蓝色', allowNormal: true },
      { id: 'psg1', name: 'PSG-1射手步枪', quality: '金色', allowNormal: true },
      { id: 'vss', name: 'VSS射手步枪', quality: '紫色', allowNormal: true },
      { id: 'svd', name: 'SVD狙击步枪', quality: '金色', allowNormal: true },
      { id: 'sr25', name: 'SR-25射手步枪', quality: '紫色', allowNormal: true },
      { id: 'marlin', name: '马林杠杆式步枪', quality: '蓝色', allowNormal: true },
      { id: 'svch', name: 'SVCH射手步枪', quality: '金色', allowNormal: true },
    ],
  },
  {
    category: '狙击步枪',
    weapons: [
      { id: 'sv98', name: 'SV-98狙击步枪', quality: '蓝色', allowNormal: true },
      { id: 'r93', name: 'R93狙击步枪', quality: '紫色', allowNormal: true },
      { id: 'm700', name: 'M700狙击步枪', quality: '紫色', allowNormal: true },
      { id: 'awm', name: 'AWM重型狙击步枪', quality: '金色', allowNormal: false },
      { id: 'm82', name: 'M82重型狙击步枪', quality: '金色', allowNormal: false },
    ],
  },
  {
    category: '轻机枪',
    weapons: [
      { id: 'm249', name: 'M249轻机枪', quality: '紫色', allowNormal: true },
      { id: 'pkm', name: 'PKM通用机枪', quality: '紫色', allowNormal: true },
      { id: 'qjb201', name: 'QJB-201轻机枪', quality: '金色', allowNormal: true },
      { id: 'm250', name: 'M250通用机枪', quality: '金色', allowNormal: false },
    ],
  },
  {
    category: '霰弹枪',
    weapons: [
      { id: 'm870', name: 'M870霰弹枪', quality: '蓝色', allowNormal: true },
      { id: 'm1014', name: 'M1014半自动霰弹枪', quality: '紫色', allowNormal: true },
      { id: 's12k', name: 'S12K连发霰弹枪', quality: '紫色', allowNormal: true },
      { id: 'double_barrel_725', name: '725双管霰弹枪', quality: '蓝色', allowNormal: true },
      { id: 'fs12', name: 'FS12霰弹枪', quality: '紫色', allowNormal: true },
    ],
  },
  {
    category: '手枪',
    weapons: [
      { id: 'g17', name: 'G17手枪', quality: '绿色', allowNormal: true },
      { id: 'qsz92g', name: 'QSZ92G手枪', quality: '绿色', allowNormal: true },
      { id: 'desert_eagle', name: '沙漠之鹰', quality: '紫色', allowNormal: true },
      { id: '93r', name: '93R手枪', quality: '蓝色', allowNormal: true },
      { id: 'g18', name: 'G18手枪', quality: '蓝色', allowNormal: true },
      { id: 'revolver_357', name: '.357左轮手枪', quality: '蓝色', allowNormal: true },
      { id: 'm1911', name: 'M1911手枪', quality: '绿色', allowNormal: true },
    ],
  },
  {
    category: '特殊武器',
    weapons: [
      { id: 'compound_bow', name: '战术复合弓', quality: '金色', allowNormal: true },
    ],
  },
];

// -----------------------------------------------------
// 装备（防具 / 头盔 / 背包 / 弹挂）
// -----------------------------------------------------
export const EQUIPMENT: Equipment = {
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
        { id: 'armor_l3_tgh', name: 'TG-H战术防弹衣', features: '75耐久 平民战神' },
        { id: 'armor_l3_blue_shooter', name: '蓝色射手战术背心', features: '移速惩罚大' },
        { id: 'armor_l3_hvk', name: 'Hvk快拆防弹衣', features: '不护腹' },
        { id: 'armor_l3_standard', name: '标准防弹衣', features: '属性一般' },
      ],
    },
    {
      tier: 4,
      allowNormal: true,
      items: [
        { id: 'armor_l4_mk2', name: 'MK-2战术背心', features: '高耐久耐修' },
        { id: 'armor_l4_dt_avs', name: 'DT-AVS防弹衣', features: '均衡' },
        { id: 'armor_l4_assault', name: '突击手防弹衣', features: '中规中矩' },
        { id: 'armor_l4_samurai', name: '武士防弹背心', features: '移速惩罚大' },
        { id: 'armor_l4_hmp', name: 'HMP特勤防弹衣', features: '损耗极高' },
      ],
    },
    {
      tier: 5,
      allowNormal: false,
      items: [
        { id: 'armor_l5_03', name: '重型防弹衣', features: '高耐久重甲' },
        { id: 'armor_l5_hwk2', name: 'HwK-2防弹衣', features: '均衡紫甲' },
        { id: 'armor_l5_sai', name: '精英防弹衣', features: '老赛甲' },
        { id: 'armor_l5_fs', name: 'FS复合防弹衣', features: '远对枪' },
      ],
    },
    {
      tier: 6,
      allowNormal: false,
      items: [
        { id: 'armor_l6_ha2', name: 'HA-2重型防弹甲', features: '顶级防护' },
        { id: 'armor_l6_asala', name: '阿萨拉防护重甲', features: '不耐修' },
        { id: 'armor_l6_king', name: '金刚防弹衣', features: '轻型六甲' },
        { id: 'armor_l6_mas', name: '特里克MAS2.0装甲', features: '全方位保护' },
      ],
    },
  ],

  helmets: [
    {
      tier: 1,
      allowNormal: true,
      items: [{ id: 'helmet_l1_beanie', name: '奔尼帽', features: '无听力惩罚' }],
    },
    {
      tier: 2,
      allowNormal: true,
      items: [{ id: 'helmet_l2_dro', name: 'DRO战术头盔', features: '低级头' }],
    },
    {
      tier: 3,
      allowNormal: true,
      items: [
        { id: 'helmet_l3_gt1', name: 'GT1战术头盔', features: '无听力惩罚' },
        { id: 'helmet_l3_blue_shooter', name: '蓝色射手战术头盔', features: '轻微听力惩罚' },
        { id: 'helmet_l3_as', name: 'AS型防护头盔', features: '不防耳' },
      ],
    },
    {
      tier: 4,
      allowNormal: true,
      items: [
        { id: 'helmet_l4_gn', name: 'GN久战夜视头盔', features: '夜视仪 无听力惩罚' },
        { id: 'helmet_l4_dt', name: 'DT轻量化战术头盔', features: '高机动' },
        { id: 'helmet_l4_samurai', name: '武士战术头盔', features: '全方位带面罩' },
        { id: 'helmet_l4_hmp', name: 'HMP特勤头盔', features: '听力受限' },
      ],
    },
    {
      tier: 5,
      allowNormal: false,
      items: [
        { id: 'helmet_l5_special', name: '特种兵战术头盔', features: '听力极佳' },
        { id: 'helmet_l5_03', name: '03型重型头盔', features: '听力惩罚' },
        { id: 'helmet_l5_tactical_shooter', name: '战术射手头盔', features: '中远交火' },
      ],
    },
    {
      tier: 6,
      allowNormal: false,
      items: [
        { id: 'helmet_l6_tric', name: '特里克重型全护头盔', features: '最硬 闷听力' },
        { id: 'helmet_l6_asala', name: '阿萨拉防护重盔', features: '不耐修' },
        { id: 'helmet_l6_patrol', name: '巡逻者复合头盔', features: '听力较好' },
      ],
    },
  ],

  backpacks: [
    { tier: 1, items: [{ id: 'bp_l1_dg', name: 'DG运动背包', comment: '3x4布局 白包神' }] },
    { tier: 2, items: [{ id: 'bp_l2_tactical', name: '战术快拆背包', comment: '15格 实用过渡' }] },
    { tier: 3, items: [{ id: 'bp_l3_ga', name: 'GA野战背包', comment: '20格 洞洞包首选' }] },
    { tier: 4, items: [{ id: 'bp_l4_d2', name: '战术登山包 (D2)', comment: '24格 紫包首选' }] },
    { tier: 5, items: [{ id: 'bp_l5_gt5', name: 'GT5野战背包', comment: '30格 最强金包' }] },
    { tier: 6, items: [{ id: 'bp_l6_gto', name: 'GTO重型战术包', comment: '45格 吞天包' }] },
  ],

  chest_rigs: [
    { tier: 2, items: [{ id: 'rig_l2_general', name: '通用战术弹挂', comment: '9格 实用' }] },
    { tier: 3, items: [{ id: 'rig_l3_g01', name: 'G01战术弹挂', comment: '13格 蓝挂之王' }] },
    { tier: 4, items: [{ id: 'rig_l4_drc', name: 'DRC先进侦察胸挂', comment: '17格 紫挂首选' }] },
    { tier: 5, items: [{ id: 'rig_l5_dar', name: 'DAR突击手胸挂', comment: '24格 天花板' }] },
  ],
};
