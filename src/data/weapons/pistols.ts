import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const PISTOLS: WeaponCategory = {
  category: '手枪',
  weapons: [
    { id: 'g17', name: 'G17手枪', caliber: '9x19mm', baseDamage: 27, armorDamage: 25, effectiveRange: 27, control: 42, handling: 70, aimStability: 35, hipFireAccuracy: 75, fireRate: 462, magazineCapacity: 17, fireModes: ['单发'], muzzleVelocity: 400, soundRadius: 300, allowNormal: true, image: `${IMG}/g17.png` },
    { id: 'qsz92g', name: 'QSZ92G手枪', caliber: '9x19mm', baseDamage: 34, armorDamage: 32, effectiveRange: 27, control: 55, handling: 64, aimStability: 41, hipFireAccuracy: 77, fireRate: 375, magazineCapacity: 15, fireModes: ['单发'], muzzleVelocity: 400, soundRadius: 300, allowNormal: true, image: `${IMG}/qsz92g.png` },
    { id: 'desert_eagle', name: '沙漠之鹰', caliber: '.50 AE', baseDamage: 56, armorDamage: 53, effectiveRange: 15, control: 40, handling: 66, aimStability: 39, hipFireAccuracy: 71, fireRate: 207, magazineCapacity: 7, fireModes: ['单发'], muzzleVelocity: 340, soundRadius: 300, allowNormal: true, image: `${IMG}/desert_eagle.png` },
    { id: '93r', name: '93R手枪', caliber: '9x19mm', baseDamage: 34, armorDamage: 32, effectiveRange: 22, control: 44, handling: 67, aimStability: 38, hipFireAccuracy: 78, fireRate: 508, magazineCapacity: 12, fireModes: ['连发'], muzzleVelocity: 400, soundRadius: 300, allowNormal: true, image: `${IMG}/93r.png` },
    { id: 'g18', name: 'G18手枪', caliber: '9x19mm', baseDamage: 23, armorDamage: 16, effectiveRange: 10, control: 30, handling: 62, aimStability: 43, hipFireAccuracy: 67, fireRate: 1172, magazineCapacity: 17, fireModes: ['全自动'], muzzleVelocity: 400, soundRadius: 300, allowNormal: true, image: `${IMG}/g18.png` },
    { id: 'revolver_357', name: '.357左轮手枪', caliber: '.357 Magnum', baseDamage: 56, armorDamage: 39, effectiveRange: 35, control: 34, handling: 62, aimStability: 43, hipFireAccuracy: 65, fireRate: 182, magazineCapacity: 6, fireModes: ['单发'], muzzleVelocity: 340, soundRadius: 300, allowNormal: true, image: `${IMG}/revolver_357.png` },
    { id: 'm1911', name: 'M1911手枪', caliber: '.45 ACP', baseDamage: 40, armorDamage: 30, effectiveRange: 15, control: 39, handling: 65, aimStability: 40, hipFireAccuracy: 67, fireRate: 373, magazineCapacity: 7, fireModes: ['单发'], muzzleVelocity: 400, soundRadius: 300, allowNormal: true, image: `${IMG}/m1911.png` },
  ]
};