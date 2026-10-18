import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const SMGS: WeaponCategory = {
  category: '冲锋枪',
  weapons: [
    { id: 'uzi',      name: 'UZI冲锋枪',              caliber: '9x19mm',    baseDamage: 28, armorDamage: 35, allowNormal: true, image: `${IMG}/uzi.png` },
    { id: 'bizon',    name: '野牛冲锋枪',             caliber: '9x19mm',    baseDamage: 32, armorDamage: 35, allowNormal: true, image: `${IMG}/bizon.png` },
    { id: 'vityaz',   name: '勇士冲锋枪',             caliber: '9x19mm',    baseDamage: 36, armorDamage: 35, allowNormal: true, image: `${IMG}/vityaz.png` },
    { id: 'mp5',      name: 'MP5冲锋枪',              caliber: '9x19mm',    baseDamage: 30, armorDamage: 32, allowNormal: true, image: `${IMG}/mp5.png` },
    { id: 'smg45',    name: 'SMG-45冲锋枪',           caliber: '.45 ACP',   baseDamage: 35, armorDamage: 40, allowNormal: true, image: `${IMG}/smg45.png` },
    { id: 'sr3m',     name: 'SR-3M冲锋枪',            caliber: '9x39mm',    baseDamage: 36, armorDamage: 48, allowNormal: true, image: `${IMG}/sr3m.png` },
    { id: 'p90',      name: 'P90冲锋枪',              caliber: '5.7x28mm',  baseDamage: 32, armorDamage: 35, allowNormal: true, image: `${IMG}/p90.png` },
    { id: 'mp7',      name: 'MP7冲锋枪',              caliber: '4.6x30mm',  baseDamage: 32, armorDamage: 28, allowNormal: true, image: `${IMG}/mp7.png` },
    { id: 'vector',   name: 'Vector冲锋枪',           caliber: '.45 ACP',   baseDamage: 32, armorDamage: 28, allowNormal: true, image: `${IMG}/vector.png` },
    { id: 'qcq171',   name: 'QCQ171冲锋枪（二〇式）', caliber: '9x19mm',    baseDamage: 36, armorDamage: 33, allowNormal: true, image: `${IMG}/qcq171.png` },
    { id: 'mk4',      name: 'MK4冲锋枪',              caliber: '9x19mm',    baseDamage: 34, armorDamage: 30, allowNormal: true, image: `${IMG}/mk4.png` },
    { id: 'thompson', name: '汤姆逊冲锋枪',           caliber: '.45 ACP',   baseDamage: 34, armorDamage: 36, allowNormal: true, image: `${IMG}/thompson.png` },
  ]
};