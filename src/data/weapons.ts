// =====================================================
// 三角洲行动 —— 武器数据
//
// 🔧 更新指南：
//   · 新增武器：在对应分类的 weapons 数组里追加一行
//   · 官方数据里没有 quality —— 品质由用户层评估（见 engine.ts）
// =====================================================

import type { WeaponCategory } from '../types.js';

export const WEAPONS: WeaponCategory[] = [
  // ---------------------------------------------------
  // 突击步枪
  // ---------------------------------------------------
  {
    category: '突击步枪',
    weapons: [
      { id: 'm4a1',     name: 'M4A1突击步枪',              allowNormal: true },
      { id: 'k416',     name: 'K416突击步枪',              allowNormal: true },
      { id: 'akm',      name: 'AKM突击步枪',               allowNormal: true },
      { id: 'qbz95_1',  name: 'QBZ-95-1突击步枪',          allowNormal: true },
      { id: 'as_val',   name: 'AS Val「巨浪」突击步枪',    allowNormal: true },
      { id: 'tenglong', name: '腾龙突击步枪（QBZ-191）',   allowNormal: true },
      { id: 'm7',       name: 'M7战斗步枪',                allowNormal: true },
      { id: 'scar_h',   name: 'SCAR-H战斗步枪',            allowNormal: true },
      { id: 'g3',       name: 'G3战斗步枪',                allowNormal: true },
      { id: 'ak12',     name: 'AK-12突击步枪',             allowNormal: true },
      { id: 'aug',      name: 'AUG突击步枪',               allowNormal: true },
      { id: 'sg552',    name: 'SG552突击步枪',             allowNormal: true },
      { id: 'm16a4',    name: 'M16A4突击步枪',             allowNormal: true },
      { id: 'car15',    name: 'CAR-15突击步枪',            allowNormal: true },
      { id: 'aks74u',   name: 'AKS-74U突击步枪',           allowNormal: true },
      { id: 'k437',     name: 'K437突击步枪',              allowNormal: true },
      { id: 'ptr32',    name: 'PTR-32突击步枪',            allowNormal: true },
      { id: 'ash12',    name: 'ASh-12战斗步枪',            allowNormal: true },
      { id: 'kc17',     name: 'KC17突击步枪',              allowNormal: true },
      { id: 'mk47',     name: 'MK47突击步枪',              allowNormal: true },
      { id: 'mcx_lt',   name: 'MCX LT突击步枪',            allowNormal: true },
      { id: 'ar57',     name: 'AR-57突击步枪',             allowNormal: true },
      { id: 'rm277',    name: 'RM277突击步枪',             allowNormal: true },
      { id: 'mdr',      name: 'MDR突击步枪',               allowNormal: true },
    ],
  },

  // ---------------------------------------------------
  // 冲锋枪
  // ---------------------------------------------------
  {
    category: '冲锋枪',
    weapons: [
      { id: 'uzi',      name: 'UZI冲锋枪',              allowNormal: true },
      { id: 'bizon',    name: '野牛冲锋枪',             allowNormal: true },
      { id: 'vityaz',   name: '勇士冲锋枪',             allowNormal: true },
      { id: 'mp5',      name: 'MP5冲锋枪',              allowNormal: true },
      { id: 'smg45',    name: 'SMG-45冲锋枪',           allowNormal: true },
      { id: 'sr3m',     name: 'SR-3M冲锋枪',            allowNormal: true },
      { id: 'p90',      name: 'P90冲锋枪',              allowNormal: true },
      { id: 'mp7',      name: 'MP7冲锋枪',              allowNormal: true },
      { id: 'vector',   name: 'Vector冲锋枪',           allowNormal: true },
      { id: 'qcq171',   name: 'QCQ171冲锋枪（二〇式）', allowNormal: true },
      { id: 'mk4',      name: 'MK4冲锋枪',              allowNormal: true },
      { id: 'thompson', name: '汤姆逊冲锋枪',           allowNormal: true },
    ],
  },

  // ---------------------------------------------------
  // 精确射手步枪
  // ---------------------------------------------------
  {
    category: '精确射手步枪',
    weapons: [
      { id: 'sr9',    name: 'SR9射手步枪',      allowNormal: true },
      { id: 'mini14', name: 'Mini-14射手步枪',  allowNormal: true },
      { id: 'm14',    name: 'M14战斗射手步枪',  allowNormal: true },
      { id: 'sks',    name: 'SKS射手步枪',      allowNormal: true },
      { id: 'psg1',   name: 'PSG-1射手步枪',    allowNormal: true },
      { id: 'vss',    name: 'VSS射手步枪',      allowNormal: true },
      { id: 'svd',    name: 'SVD狙击步枪',      allowNormal: true },
      { id: 'sr25',   name: 'SR-25射手步枪',    allowNormal: true },
      { id: 'marlin', name: '马林杠杆式步枪',   allowNormal: true },
      { id: 'svch',   name: 'SVCH射手步枪',     allowNormal: true },
    ],
  },

  // ---------------------------------------------------
  // 狙击步枪
  // ---------------------------------------------------
  {
    category: '狙击步枪',
    weapons: [
      { id: 'sv98', name: 'SV-98狙击步枪',     allowNormal: true },
      { id: 'r93',  name: 'R93狙击步枪',       allowNormal: true },
      { id: 'm700', name: 'M700狙击步枪',      allowNormal: true },
      { id: 'awm',  name: 'AWM重型狙击步枪',   allowNormal: false },
      { id: 'm82',  name: 'M82重型狙击步枪',   allowNormal: false },
    ],
  },

  // ---------------------------------------------------
  // 轻机枪
  // ---------------------------------------------------
  {
    category: '轻机枪',
    weapons: [
      { id: 'm249',   name: 'M249轻机枪',     allowNormal: true },
      { id: 'pkm',    name: 'PKM通用机枪',    allowNormal: true },
      { id: 'qjb201', name: 'QJB-201轻机枪',  allowNormal: true },
      { id: 'm250',   name: 'M250通用机枪',   allowNormal: false },
    ],
  },

  // ---------------------------------------------------
  // 霰弹枪
  // ---------------------------------------------------
  {
    category: '霰弹枪',
    weapons: [
      { id: 'm870',              name: 'M870霰弹枪',           allowNormal: true },
      { id: 'm1014',             name: 'M1014半自动霰弹枪',    allowNormal: true },
      { id: 's12k',              name: 'S12K连发霰弹枪',       allowNormal: true },
      { id: 'double_barrel_725', name: '725双管霰弹枪',        allowNormal: true },
      { id: 'fs12',              name: 'FS12霰弹枪',           allowNormal: true },
    ],
  },

  // ---------------------------------------------------
  // 手枪
  // ---------------------------------------------------
  {
    category: '手枪',
    weapons: [
      { id: 'g17',          name: 'G17手枪',       allowNormal: true },
      { id: 'qsz92g',       name: 'QSZ92G手枪',    allowNormal: true },
      { id: 'desert_eagle', name: '沙漠之鹰',      allowNormal: true },
      { id: '93r',          name: '93R手枪',       allowNormal: true },
      { id: 'g18',          name: 'G18手枪',       allowNormal: true },
      { id: 'revolver_357', name: '.357左轮手枪',  allowNormal: true },
      { id: 'm1911',        name: 'M1911手枪',     allowNormal: true },
    ],
  },

  // ---------------------------------------------------
  // 特殊武器
  // ---------------------------------------------------
  {
    category: '特殊武器',
    weapons: [
      { id: 'compound_bow', name: '战术复合弓', allowNormal: true },
    ],
  },
];