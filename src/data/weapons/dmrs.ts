import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const DMRS: WeaponCategory = {
  category: '精确射手步枪',
  weapons: [
    { id: 'sr9',    name: 'SR9射手步枪',      caliber: '7.62x51mm',  baseDamage: 50, armorDamage: 55, allowNormal: true, image: `${IMG}/sr9.png` },
    { id: 'mini14', name: 'Mini-14射手步枪',  caliber: '5.56x45mm',  baseDamage: 34, armorDamage: 38, allowNormal: true, image: `${IMG}/mini14.png` },
    { id: 'm14',    name: 'M14战斗射手步枪',  caliber: '7.62x51mm',  baseDamage: 39, armorDamage: 41, allowNormal: true, image: `${IMG}/m14.png` },
    { id: 'sks',    name: 'SKS射手步枪',      caliber: '7.62x39mm',  baseDamage: 48, armorDamage: 49, allowNormal: true, image: `${IMG}/sks.png` },
    { id: 'psg1',   name: 'PSG-1射手步枪',    caliber: '7.62x51mm',  baseDamage: 50, armorDamage: 55, allowNormal: true, image: `${IMG}/psg1.png` },
    { id: 'vss',    name: 'VSS射手步枪',      caliber: '9x39mm',     baseDamage: 40, armorDamage: 48, allowNormal: true, image: `${IMG}/vss.png` },
    { id: 'svd',    name: 'SVD狙击步枪',      caliber: '7.62x54mm',  baseDamage: 56, armorDamage: 56, allowNormal: true, image: `${IMG}/svd.png` },
    { id: 'sr25',   name: 'SR-25射手步枪',    caliber: '7.62x51mm',  baseDamage: 50, armorDamage: 56, allowNormal: true, image: `${IMG}/sr25.png` },
    { id: 'marlin', name: '马林杠杆式步枪',   caliber: '45-70 Govt', baseDamage: 70, armorDamage: 25, allowNormal: true, image: `${IMG}/marlin.png` },
    { id: 'svch',   name: 'SVCH射手步枪',     caliber: '7.62x54mm',  baseDamage: 47, armorDamage: 46, allowNormal: true, image: `${IMG}/svch.png` },
  ]
};