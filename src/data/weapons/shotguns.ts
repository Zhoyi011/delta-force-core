import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const SHOTGUNS: WeaponCategory = {
  category: '霰弹枪',
  weapons: [
    { id: 'm870',              name: 'M870霰弹枪',        caliber: '12 Gauge', baseDamage: 17, armorDamage: 16, pelletCount: 8, allowNormal: true, image: `${IMG}/m870.png` },
    { id: 'm1014',             name: 'M1014半自动霰弹枪', caliber: '12 Gauge', baseDamage: 14, armorDamage: 16, pelletCount: 8, allowNormal: true, image: `${IMG}/m1014.png` },
    { id: 's12k',              name: 'S12K连发霰弹枪',    caliber: '12 Gauge', baseDamage: 13, armorDamage: 16, pelletCount: 8, allowNormal: true, image: `${IMG}/s12k.png` },
    { id: 'double_barrel_725', name: '725双管霰弹枪',     caliber: '12 Gauge', baseDamage: 17, armorDamage: 18, pelletCount: 8, allowNormal: true, image: `${IMG}/double_barrel_725.png` },
    { id: 'fs12',              name: 'FS12霰弹枪',        caliber: '12 Gauge', baseDamage: 16, armorDamage: 16, pelletCount: 8, allowNormal: true, image: `${IMG}/fs12.png` },
  ]
};