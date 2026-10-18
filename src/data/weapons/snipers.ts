import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const SNIPERS: WeaponCategory = {
  category: '狙击步枪',
  weapons: [
    { id: 'sv98', name: 'SV-98狙击步枪',   caliber: '7.62x54mm',  baseDamage: 60, armorDamage: 58, allowNormal: true,  image: `${IMG}/sv98.png` },
    { id: 'r93',  name: 'R93狙击步枪',     caliber: '7.62x51mm',  baseDamage: 61, armorDamage: 58, allowNormal: true,  image: `${IMG}/r93.png` },
    { id: 'm700', name: 'M700狙击步枪',    caliber: '7.62x51mm',  baseDamage: 61, armorDamage: 58, allowNormal: true,  image: `${IMG}/m700.png` },
    { id: 'awm',  name: 'AWM重型狙击步枪', caliber: '.338',       baseDamage: 100, armorDamage: 10, allowNormal: false, image: `${IMG}/awm.png` },
    { id: 'm82',  name: 'M82重型狙击步枪', caliber: '12.7x99mm',  baseDamage: 100, armorDamage: 20, allowNormal: false, image: `${IMG}/m82.png` },
  ]
};