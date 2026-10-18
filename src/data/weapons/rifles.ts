import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const RIFLES: WeaponCategory = {
  category: '突击步枪',
  weapons: [
    { id: 'm4a1',     name: 'M4A1突击步枪',              caliber: '5.56x45mm',     baseDamage: 31, armorDamage: 33, allowNormal: true, image: `${IMG}/m4a1.png` },
    { id: 'k416',     name: 'K416突击步枪',              caliber: '5.56x45mm',     baseDamage: 31, armorDamage: 35, allowNormal: true, image: `${IMG}/k416.png` },
    { id: 'akm',      name: 'AKM突击步枪',               caliber: '7.62x39mm',     baseDamage: 40, armorDamage: 42, allowNormal: true, image: `${IMG}/akm.png` },
    { id: 'qbz95_1',  name: 'QBZ-95-1突击步枪',          caliber: '5.8x42mm',      baseDamage: 28, armorDamage: 42, allowNormal: true, image: `${IMG}/qbz95_1.png` },
    { id: 'as_val',   name: 'AS Val「巨浪」突击步枪',    caliber: '9x39mm',        baseDamage: 28, armorDamage: 44, allowNormal: true, image: `${IMG}/as_val.png` },
    { id: 'tenglong', name: '腾龙突击步枪（QBZ-191）',   caliber: '5.8x42mm',      baseDamage: 35, armorDamage: 38, allowNormal: true, image: `${IMG}/tenglong.png` },
    { id: 'm7',       name: 'M7战斗步枪',                caliber: '6.8x51mm',      baseDamage: 37, armorDamage: 40, allowNormal: true, image: `${IMG}/m7.png` },
    { id: 'scar_h',   name: 'SCAR-H战斗步枪',            caliber: '7.62x51mm',     baseDamage: 40, armorDamage: 41, allowNormal: true, image: `${IMG}/scar_h.png` },
    { id: 'g3',       name: 'G3战斗步枪',                caliber: '7.62x51mm',     baseDamage: 39, armorDamage: 42, allowNormal: true, image: `${IMG}/g3.png` },
    { id: 'ak12',     name: 'AK-12突击步枪',             caliber: '5.45x39mm',     baseDamage: 30, armorDamage: 42, allowNormal: true, image: `${IMG}/ak12.png` },
    { id: 'aug',      name: 'AUG突击步枪',               caliber: '5.56x45mm',     baseDamage: 32, armorDamage: 35, allowNormal: true, image: `${IMG}/aug.png` },
    { id: 'sg552',    name: 'SG552突击步枪',             caliber: '5.56x45mm',     baseDamage: 25, armorDamage: 34, allowNormal: true, image: `${IMG}/sg552.png` },
    { id: 'm16a4',    name: 'M16A4突击步枪',             caliber: '5.56x45mm',     baseDamage: 33, armorDamage: 39, allowNormal: true, image: `${IMG}/m16a4.png` },
    { id: 'car15',    name: 'CAR-15突击步枪',            caliber: '5.56x45mm',     baseDamage: 27, armorDamage: 32, allowNormal: true, image: `${IMG}/car15.png` },
    { id: 'aks74u',   name: 'AKS-74U突击步枪',           caliber: '5.45x39mm',     baseDamage: 34, armorDamage: 36, allowNormal: true, image: `${IMG}/aks74u.png` },
    { id: 'k437',     name: 'K437突击步枪',              caliber: '5.56x45mm',     baseDamage: 36, armorDamage: 32, allowNormal: true, image: `${IMG}/k437.png` },
    { id: 'ptr32',    name: 'PTR-32突击步枪',            caliber: '7.62x39mm',     baseDamage: 36, armorDamage: 37, allowNormal: true, image: `${IMG}/ptr32.png` },
    { id: 'ash12',    name: 'ASh-12战斗步枪',            caliber: '12.7x55mm',     baseDamage: 56, armorDamage: 55, allowNormal: true, image: `${IMG}/ash12.png` },
    { id: 'kc17',     name: 'KC17突击步枪',              caliber: '5.56x45mm',     baseDamage: 32, armorDamage: 48, allowNormal: true, image: `${IMG}/kc17.png` },
    { id: 'mk47',     name: 'MK47突击步枪',              caliber: '7.62x39mm',     baseDamage: 42, armorDamage: 46, allowNormal: true, image: `${IMG}/mk47.png` },
    { id: 'mcx_lt',   name: 'MCX LT突击步枪',            caliber: '.300 Blackout', baseDamage: 35, armorDamage: 26, allowNormal: true, image: `${IMG}/mcx_lt.png` },
    { id: 'ar57',     name: 'AR-57突击步枪',             caliber: '5.7x28mm',      baseDamage: 30, armorDamage: 31, allowNormal: true, image: `${IMG}/ar57.png` },
    { id: 'rm277',    name: 'RM277突击步枪',             caliber: '6.8x51mm',      baseDamage: 41, armorDamage: 42, allowNormal: true, image: `${IMG}/rm277.png` },
    { 
      id: 'mdr', name: 'MDR突击步枪', caliber: '5.56x45mm', 
      baseDamage: 41, armorDamage: 43, effectiveRange: 35, control: 40, handling: 58, aimStability: 48, hipFireAccuracy: 54, fireRate: 650, magazineCapacity: 20, fireModes: ['全自动', '单发'], muzzleVelocity: 630, soundRadius: 600, allowNormal: true, image: `${IMG}/mdr.png` 
    },
  ]
};