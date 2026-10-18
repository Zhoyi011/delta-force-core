import type { WeaponCategory } from '../../types.js';
const IMG = 'https://raw.githubusercontent.com/Zhoyi011/delta-force-core/main/assets/weapons';

export const PISTOLS: WeaponCategory = {
  category: '手枪',
  weapons: [
    { id: 'g17',          name: 'G17手枪',      caliber: '9x19mm',      baseDamage: 27, armorDamage: 25, allowNormal: true, image: `${IMG}/g17.png` },
    { id: 'qsz92g',       name: 'QSZ92G手枪',   caliber: '9x19mm',      baseDamage: 32, armorDamage: 32, allowNormal: true, image: `${IMG}/qsz92g.png` },
    { id: 'desert_eagle', name: '沙漠之鹰',     caliber: '.50 AE',      baseDamage: 56, armorDamage: 53, allowNormal: true, image: `${IMG}/desert_eagle.png` },
    { id: '93r',          name: '93R手枪',      caliber: '9x19mm',      baseDamage: 34, armorDamage: 32, allowNormal: true, image: `${IMG}/93r.png` },
    { id: 'g18',          name: 'G18手枪',      caliber: '9x19mm',      baseDamage: 23, armorDamage: 16, allowNormal: true, image: `${IMG}/g18.png` },
    { id: 'revolver_357', name: '.357左轮手枪', caliber: '.357 Magnum', baseDamage: 56, armorDamage: 39, allowNormal: true, image: `${IMG}/revolver_357.png` },
    { id: 'm1911',        name: 'M1911手枪',    caliber: '.45 ACP',     baseDamage: 40, armorDamage: 30, allowNormal: true, image: `${IMG}/m1911.png` },
  ]
};