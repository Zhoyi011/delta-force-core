// =====================================================
// 三角洲行动 —— 武器数据
//
// 🔧 更新指南：
//   · 新增武器：在对应分类的 weapons 数组里追加一行
//   · 官方数据里没有 quality —— 品质由用户层评估（见 engine.ts）
//   · image：图片 URL，格式为 assets/weapons/<id>.png
// =====================================================

import type { WeaponCategory } from '../types.js';

/** 图片 URL 前缀（GitHub Raw） */
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const WEAPONS: WeaponCategory[] = [
  // ---------------------------------------------------
  // 突击步枪
  // ---------------------------------------------------
  {
    category: '突击步枪',
    weapons: [
      { id: 'm4a1',     name: 'M4A1突击步枪',              caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/m4a1.png` },
      { id: 'k416',     name: 'K416突击步枪',              caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/k416.png` },
      { id: 'akm',      name: 'AKM突击步枪',               caliber: '7.62x39mm',    allowNormal: true, image: `${IMG}/akm.png` },
      { id: 'qbz95_1',  name: 'QBZ-95-1突击步枪',          caliber: '5.8x42mm',     allowNormal: true, image: `${IMG}/qbz95_1.png` },
      { id: 'as_val',   name: 'AS Val「巨浪」突击步枪',    caliber: '9x39mm',       allowNormal: true, image: `${IMG}/as_val.png` },
      { id: 'tenglong', name: '腾龙突击步枪（QBZ-191）',   caliber: '5.8x42mm',     allowNormal: true, image: `${IMG}/tenglong.png` },
      { id: 'm7',       name: 'M7战斗步枪',                caliber: '6.8x51mm',     allowNormal: true, image: `${IMG}/m7.png` },
      { id: 'scar_h',   name: 'SCAR-H战斗步枪',            caliber: '7.62x51mm',    allowNormal: true, image: `${IMG}/scar_h.png` },
      { id: 'g3',       name: 'G3战斗步枪',                caliber: '7.62x51mm',    allowNormal: true, image: `${IMG}/g3.png` },
      { id: 'ak12',     name: 'AK-12突击步枪',             caliber: '5.45x39mm',    allowNormal: true, image: `${IMG}/ak12.png` },
      { id: 'aug',      name: 'AUG突击步枪',               caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/aug.png` },
      { id: 'sg552',    name: 'SG552突击步枪',             caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/sg552.png` },
      { id: 'm16a4',    name: 'M16A4突击步枪',             caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/m16a4.png` },
      { id: 'car15',    name: 'CAR-15突击步枪',            caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/car15.png` },
      { id: 'aks74u',   name: 'AKS-74U突击步枪',           caliber: '5.45x39mm',    allowNormal: true, image: `${IMG}/aks74u.png` },
      { id: 'k437',     name: 'K437突击步枪',              caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/k437.png` },
      { id: 'ptr32',    name: 'PTR-32突击步枪',            caliber: '7.62x39mm',    allowNormal: true, image: `${IMG}/ptr32.png` },
      { id: 'ash12',    name: 'ASh-12战斗步枪',            caliber: '12.7x55mm',    allowNormal: true, image: `${IMG}/ash12.png` },
      { id: 'kc17',     name: 'KC17突击步枪',              caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/kc17.png` },
      { id: 'mk47',     name: 'MK47突击步枪',              caliber: '7.62x39mm',    allowNormal: true, image: `${IMG}/mk47.png` },
      { id: 'mcx_lt',   name: 'MCX LT突击步枪',            caliber: '.300 Blackout', allowNormal: true, image: `${IMG}/mcx_lt.png` },
      { id: 'ar57',     name: 'AR-57突击步枪',             caliber: '5.7x28mm',     allowNormal: true, image: `${IMG}/ar57.png` },
      { id: 'rm277',    name: 'RM277突击步枪',             caliber: '6.8x51mm',     allowNormal: true, image: `${IMG}/rm277.png` },
      { id: 'mdr',      name: 'MDR突击步枪',               caliber: '5.56x45mm',    allowNormal: true, image: `${IMG}/mdr.png` },
    ],
  },

  // ---------------------------------------------------
  // 冲锋枪
  // ---------------------------------------------------
  {
    category: '冲锋枪',
    weapons: [
      { id: 'uzi',      name: 'UZI冲锋枪',              caliber: '9x19mm',  allowNormal: true, image: `${IMG}/uzi.png` },
      { id: 'bizon',    name: '野牛冲锋枪',             caliber: '9x19mm',  allowNormal: true, image: `${IMG}/bizon.png` },
      { id: 'vityaz',   name: '勇士冲锋枪',             caliber: '9x19mm',  allowNormal: true, image: `${IMG}/vityaz.png` },
      { id: 'mp5',      name: 'MP5冲锋枪',              caliber: '9x19mm',  allowNormal: true, image: `${IMG}/mp5.png` },
      { id: 'smg45',    name: 'SMG-45冲锋枪',           caliber: '.45 ACP', allowNormal: true, image: `${IMG}/smg45.png` },
      { id: 'sr3m',     name: 'SR-3M冲锋枪',            caliber: '9x39mm',  allowNormal: true, image: `${IMG}/sr3m.png` },
      { id: 'p90',      name: 'P90冲锋枪',              caliber: '5.7x28mm', allowNormal: true, image: `${IMG}/p90.png` },
      { id: 'mp7',      name: 'MP7冲锋枪',              caliber: '4.6x30mm', allowNormal: true, image: `${IMG}/mp7.png` },
      { id: 'vector',   name: 'Vector冲锋枪',           caliber: '.45 ACP', allowNormal: true, image: `${IMG}/vector.png` },
      { id: 'qcq171',   name: 'QCQ171冲锋枪（二〇式）', caliber: '9x19mm',  allowNormal: true, image: `${IMG}/qcq171.png` },
      { id: 'mk4',      name: 'MK4冲锋枪',              caliber: '9x19mm',  allowNormal: true, image: `${IMG}/mk4.png` },
      { id: 'thompson', name: '汤姆逊冲锋枪',           caliber: '.45 ACP', allowNormal: true, image: `${IMG}/thompson.png` },
    ],
  },

  // ---------------------------------------------------
  // 精确射手步枪
  // ---------------------------------------------------
  {
    category: '精确射手步枪',
    weapons: [
      { id: 'sr9',    name: 'SR9射手步枪',      caliber: '7.62x51mm',  allowNormal: true, image: `${IMG}/sr9.png` },
      { id: 'mini14', name: 'Mini-14射手步枪',  caliber: '5.56x45mm',  allowNormal: true, image: `${IMG}/mini14.png` },
      { id: 'm14',    name: 'M14战斗射手步枪',  caliber: '7.62x51mm',  allowNormal: true, image: `${IMG}/m14.png` },
      { id: 'sks',    name: 'SKS射手步枪',      caliber: '7.62x39mm',  allowNormal: true, image: `${IMG}/sks.png` },
      { id: 'psg1',   name: 'PSG-1射手步枪',    caliber: '7.62x51mm',  allowNormal: true, image: `${IMG}/psg1.png` },
      { id: 'vss',    name: 'VSS射手步枪',      caliber: '9x39mm',     allowNormal: true, image: `${IMG}/vss.png` },
      { id: 'svd',    name: 'SVD狙击步枪',      caliber: '7.62x54mm',  allowNormal: true, image: `${IMG}/svd.png` },
      { id: 'sr25',   name: 'SR-25射手步枪',    caliber: '7.62x51mm',  allowNormal: true, image: `${IMG}/sr25.png` },
      { id: 'marlin', name: '马林杠杆式步枪',   caliber: '45-70 Govt', allowNormal: true, image: `${IMG}/marlin.png` },
      { id: 'svch',   name: 'SVCH射手步枪',     caliber: '7.62x54mm',  allowNormal: true, image: `${IMG}/svch.png` },
    ],
  },

  // ---------------------------------------------------
  // 狙击步枪
  // ---------------------------------------------------
  {
    category: '狙击步枪',
    weapons: [
      { id: 'sv98', name: 'SV-98狙击步枪',     caliber: '7.62x54mm',  allowNormal: true,  image: `${IMG}/sv98.png` },
      { id: 'r93',  name: 'R93狙击步枪',       caliber: '7.62x51mm',  allowNormal: true,  image: `${IMG}/r93.png` },
      { id: 'm700', name: 'M700狙击步枪',      caliber: '7.62x51mm',  allowNormal: true,  image: `${IMG}/m700.png` },
      { id: 'awm',  name: 'AWM重型狙击步枪',   caliber: '.338',       allowNormal: false, image: `${IMG}/awm.png` },
      { id: 'm82',  name: 'M82重型狙击步枪',   caliber: '12.7x99mm',  allowNormal: false, image: `${IMG}/m82.png` },
    ],
  },

  // ---------------------------------------------------
  // 轻机枪
  // ---------------------------------------------------
  {
    category: '轻机枪',
    weapons: [
      { id: 'm249',   name: 'M249轻机枪',     caliber: '5.56x45mm',  allowNormal: true,  image: `${IMG}/m249.png` },
      { id: 'pkm',    name: 'PKM通用机枪',    caliber: '7.62x54mm',  allowNormal: true,  image: `${IMG}/pkm.png` },
      { id: 'qjb201', name: 'QJB-201轻机枪',  caliber: '5.8x42mm',   allowNormal: true,  image: `${IMG}/qjb201.png` },
      { id: 'm250',   name: 'M250通用机枪',   caliber: '6.8x51mm',   allowNormal: false, image: `${IMG}/m250.png` },
    ],
  },

  // ---------------------------------------------------
  // 霰弹枪
  // ---------------------------------------------------
  {
    category: '霰弹枪',
    weapons: [
      { id: 'm870',              name: 'M870霰弹枪',           caliber: '12 Gauge', allowNormal: true, image: `${IMG}/m870.png` },
      { id: 'm1014',             name: 'M1014半自动霰弹枪',    caliber: '12 Gauge', allowNormal: true, image: `${IMG}/m1014.png` },
      { id: 's12k',              name: 'S12K连发霰弹枪',       caliber: '12 Gauge', allowNormal: true, image: `${IMG}/s12k.png` },
      { id: 'double_barrel_725', name: '725双管霰弹枪',        caliber: '12 Gauge', allowNormal: true, image: `${IMG}/double_barrel_725.png` },
      { id: 'fs12',              name: 'FS12霰弹枪',           caliber: '12 Gauge', allowNormal: true, image: `${IMG}/fs12.png` },
    ],
  },

  // ---------------------------------------------------
  // 手枪
  // ---------------------------------------------------
  {
    category: '手枪',
    weapons: [
      { id: 'g17',          name: 'G17手枪',       caliber: '9x19mm',       allowNormal: true, image: `${IMG}/g17.png` },
      { id: 'qsz92g',       name: 'QSZ92G手枪',    caliber: '9x19mm',       allowNormal: true, image: `${IMG}/qsz92g.png` },
      { id: 'desert_eagle', name: '沙漠之鹰',      caliber: '.50 AE',       allowNormal: true, image: `${IMG}/desert_eagle.png` },
      { id: '93r',          name: '93R手枪',       caliber: '9x19mm',       allowNormal: true, image: `${IMG}/93r.png` },
      { id: 'g18',          name: 'G18手枪',       caliber: '9x19mm',       allowNormal: true, image: `${IMG}/g18.png` },
      { id: 'revolver_357', name: '.357左轮手枪',  caliber: '.357 Magnum',  allowNormal: true, image: `${IMG}/revolver_357.png` },
      { id: 'm1911',        name: 'M1911手枪',     caliber: '.45 ACP',      allowNormal: true, image: `${IMG}/m1911.png` },
    ],
  },

  // ---------------------------------------------------
  // 特殊武器
  // ---------------------------------------------------
  {
    category: '特殊武器',
    weapons: [
      { id: 'compound_bow', name: '战术复合弓', caliber: '箭矢', allowNormal: true, image: `${IMG}/compound_bow.png` },
    ],
  },
];
