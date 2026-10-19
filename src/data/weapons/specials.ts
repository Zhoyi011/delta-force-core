import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const SPECIALS: WeaponCategory = {
  category: '特殊武器',
  weapons: [
    { id: 'compound_bow', name: '战术复合弓', caliber: '箭矢', baseDamage: 90, armorDamage: 65, effectiveRange: 65, control: 32, handling: 66, aimStability: 55, hipFireAccuracy: 57, fireRate: 182, magazineCapacity: 1, fireModes: ['单发'], muzzleVelocity: 300, soundRadius: 30, allowNormal: true, image: `${IMG}/compound_bow.png` },
  ]
};