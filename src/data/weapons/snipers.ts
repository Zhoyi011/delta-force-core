import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const SNIPERS: WeaponCategory = {
  category: '狙击步枪',
  weapons: [
    { id: 'sv98', name: 'SV-98狙击步枪', caliber: '7.62x54mm', baseDamage: 60, armorDamage: 58, effectiveRange: 150, control: 55, handling: 49, aimStability: 74, hipFireAccuracy: 26, fireRate: 44, magazineCapacity: 7, fireModes: ['单发'], muzzleVelocity: 650, soundRadius: 600, allowNormal: true, image: `${IMG}/sv98.png` },
    { id: 'r93', name: 'R93狙击步枪', caliber: '7.62x51mm', baseDamage: 61, armorDamage: 58, effectiveRange: 150, control: 55, handling: 57, aimStability: 66, hipFireAccuracy: 28, fireRate: 56, magazineCapacity: 10, fireModes: ['单发'], muzzleVelocity: 550, soundRadius: 600, allowNormal: true, image: `${IMG}/r93.png` },
    { id: 'm700', name: 'M700狙击步枪', caliber: '7.62x51mm', baseDamage: 61, armorDamage: 58, effectiveRange: 150, control: 24, handling: 48, aimStability: 70, hipFireAccuracy: 27, fireRate: 48, magazineCapacity: 5, fireModes: ['单发'], muzzleVelocity: 650, soundRadius: 600, allowNormal: true, image: `${IMG}/m700.png` },
    { id: 'awm', name: 'AWM重型狙击步枪', caliber: '.338', baseDamage: 100, armorDamage: 10, effectiveRange: 200, control: 20, handling: 44, aimStability: 74, hipFireAccuracy: 23, fireRate: 35, magazineCapacity: 5, fireModes: ['单发'], muzzleVelocity: 750, soundRadius: 800, allowNormal: false, image: `${IMG}/awm.png` },
    { id: 'm82', name: 'M82重型狙击步枪', caliber: '12.7x99mm', baseDamage: 100, armorDamage: 20, effectiveRange: 200, control: 10, handling: 20, aimStability: 66, hipFireAccuracy: 15, fireRate: 100, magazineCapacity: 5, fireModes: ['单发'], muzzleVelocity: 525, soundRadius: 1000, allowNormal: false, image: `${IMG}/m82.png` },
  ]
};