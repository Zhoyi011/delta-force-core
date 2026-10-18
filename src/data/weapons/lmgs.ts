import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const LMGS: WeaponCategory = {
  category: '轻机枪',
  weapons: [
    { id: 'm249',   name: 'M249轻机枪',     caliber: '5.56x45mm',  baseDamage: 30, armorDamage: 38, allowNormal: true,  image: `${IMG}/m249.png` },
    { id: 'pkm',    name: 'PKM通用机枪',    caliber: '7.62x54mm',  baseDamage: 25, armorDamage: 42, allowNormal: true,  image: `${IMG}/pkm.png` },
    { id: 'qjb201', name: 'QJB-201轻机枪',  caliber: '5.8x42mm',   baseDamage: 32, armorDamage: 38, allowNormal: true,  image: `${IMG}/qjb201.png` },
    { id: 'm250',   name: 'M250通用机枪',   caliber: '6.8x51mm',   baseDamage: 55, armorDamage: 53, allowNormal: false, image: `${IMG}/m250.png` },
  ]
};