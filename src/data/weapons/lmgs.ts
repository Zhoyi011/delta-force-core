import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const LMGS: WeaponCategory = {
  category: '轻机枪',
  weapons: [
    { id: 'm249', name: 'M249轻机枪', caliber: '5.56x45mm', baseDamage: 30, armorDamage: 38, effectiveRange: 40, control: 44, handling: 47, aimStability: 55, hipFireAccuracy: 48, fireRate: 858, magazineCapacity: 100, fireModes: ['全自动'], muzzleVelocity: 575, soundRadius: 600, allowNormal: true, image: `${IMG}/m249.png` },
    { id: 'pkm', name: 'PKM通用机枪', caliber: '7.62x54mm', baseDamage: 45, armorDamage: 42, effectiveRange: 40, control: 36, handling: 42, aimStability: 59, hipFireAccuracy: 45, fireRate: 669, magazineCapacity: 75, fireModes: ['全自动'], muzzleVelocity: 630, soundRadius: 600, allowNormal: true, image: `${IMG}/pkm.png` },
    { id: 'qjb201', name: 'QJB-201轻机枪', caliber: '5.8x42mm', baseDamage: 32, armorDamage: 38, effectiveRange: 40, control: 52, handling: 50, aimStability: 56, hipFireAccuracy: 50, fireRate: 785, magazineCapacity: 125, fireModes: ['全自动'], muzzleVelocity: 575, soundRadius: 600, allowNormal: true, image: `${IMG}/qjb201.png` },
    { id: 'm250', name: 'M250通用机枪', caliber: '6.8x51mm', baseDamage: 55, armorDamage: 53, effectiveRange: 40, control: 40, handling: 38, aimStability: 50, hipFireAccuracy: 45, fireRate: 550, magazineCapacity: 125, fireModes: ['全自动', '单发'], muzzleVelocity: 630, soundRadius: 600, allowNormal: false, image: `${IMG}/m250.png` },
  ]
};