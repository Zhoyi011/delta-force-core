import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const SPECIALS: WeaponCategory = {
  category: '特殊武器',
  weapons: [
    { id: 'compound_bow', name: '战术复合弓', caliber: '箭矢', baseDamage: 90, armorDamage: 65, allowNormal: true, image: `${IMG}/compound_bow.png` },
  ]
};