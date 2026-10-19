import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const SHOTGUNS: WeaponCategory = {
  category: '霰弹枪',
  weapons: [
    { id: 'm870', name: 'M870霰弹枪', caliber: '12 Gauge', baseDamage: 17, armorDamage: 16, pelletCount: 8, effectiveRange: 12, control: 26, handling: 57, aimStability: 41, hipFireAccuracy: 49, fireRate: 74, magazineCapacity: 6, fireModes: ['单发'], muzzleVelocity: 400, soundRadius: 500, allowNormal: true, image: `${IMG}/m870.png` },
    { id: 'm1014', name: 'M1014半自动霰弹枪', caliber: '12 Gauge', baseDamage: 14, armorDamage: 16, pelletCount: 8, effectiveRange: 12, control: 28, handling: 53, aimStability: 45, hipFireAccuracy: 52, fireRate: 261, magazineCapacity: 7, fireModes: ['单发'], muzzleVelocity: 450, soundRadius: 500, allowNormal: true, image: `${IMG}/m1014.png` },
    { id: 's12k', name: 'S12K连发霰弹枪', caliber: '12 Gauge', baseDamage: 13, armorDamage: 16, pelletCount: 8, effectiveRange: 10, control: 36, handling: 55, aimStability: 49, hipFireAccuracy: 48, fireRate: 300, magazineCapacity: 5, fireModes: ['单发'], muzzleVelocity: 300, soundRadius: 500, allowNormal: true, image: `${IMG}/s12k.png` },
    { id: 'double_barrel_725', name: '725双管霰弹枪', caliber: '12 Gauge', baseDamage: 17, armorDamage: 18, pelletCount: 8, effectiveRange: 15, control: 25, handling: 50, aimStability: 48, hipFireAccuracy: 47, fireRate: 375, magazineCapacity: 2, fireModes: ['单发'], muzzleVelocity: 400, soundRadius: 500, allowNormal: true, image: `${IMG}/double_barrel_725.png` },
    { id: 'fs12', name: 'FS12霰弹枪', caliber: '12 Gauge', baseDamage: 14, armorDamage: 16, pelletCount: 8, effectiveRange: 12, control: 30, handling: 52, aimStability: 47, hipFireAccuracy: 51, fireRate: 300, magazineCapacity: 6, fireModes: ['单发', '泵动'], muzzleVelocity: 450, soundRadius: 500, allowNormal: true, image: `${IMG}/fs12.png` },
  ]
};