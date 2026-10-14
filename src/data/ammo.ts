// =====================================================
// 三角洲行动 —— 子弹数据
//
// 🔧 更新指南：
//   · 新增子弹口径：在 AMMO 数组里追加一行
//   · 同口径的 1~6 弹（如 M855 / M995）后续再单独加表
// =====================================================

import type { Ammo } from '../types.js';

export const AMMO: Ammo[] = [
  { id: 'ammo_357_magnum', name: '.357 Magnum',  caliber: '.357 Magnum' },
  { id: 'ammo_45_acp',     name: '.45 ACP',      caliber: '.45 ACP' },
  { id: 'ammo_58_ae',      name: '.58 AE',       caliber: '.58 AE' },
  { id: 'ammo_12_gauge',   name: '12 Gauge',     caliber: '12 Gauge' },
  { id: 'ammo_127x55',     name: '12.7x55mm',    caliber: '12.7x55mm' },
  { id: 'ammo_545x39',     name: '5.45x39mm',    caliber: '5.45x39mm' },
  { id: 'ammo_556x45',     name: '5.56x45mm',    caliber: '5.56x45mm' },
  { id: 'ammo_57x28',      name: '5.7x28mm',     caliber: '5.7x28mm' },
  { id: 'ammo_58x42',      name: '5.8x42mm',     caliber: '5.8x42mm' },
  { id: 'ammo_68x51',      name: '6.8x51mm',     caliber: '6.8x51mm' },
  { id: 'ammo_762x39',     name: '7.62x39mm',    caliber: '7.62x39mm' },
  { id: 'ammo_762x51',     name: '7.62x51mm',    caliber: '7.62x51mm' },
  { id: 'ammo_762x54',     name: '7.62x54mm',    caliber: '7.62x54mm' },
  { id: 'ammo_9x19',       name: '9x19mm',       caliber: '9x19mm' },
  { id: 'ammo_9x39',       name: '9x39mm',       caliber: '9x39mm' },
  { id: 'ammo_46x30',      name: '4.6x30mm',     caliber: '4.6x30mm' },
  { id: 'ammo_300_blk',    name: '.300 Blackout', caliber: '.300 Blackout' },
  { id: 'ammo_arrow',      name: '箭矢',         caliber: '箭矢' },
  { id: 'ammo_4570',       name: '45-70 Govt',   caliber: '45-70 Govt' },
];