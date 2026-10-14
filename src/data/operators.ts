// =====================================================
// 三角洲行动 —— 干员数据
//
// 🔧 更新指南：
//   · 新增干员：在对应兵种的 operators 数组里追加一行
//   · 新增兵种：在 OPERATORS 里追加一个 { category, operators } 块
// =====================================================

import type { OperatorCategory } from '../types.js';

export const OPERATORS: OperatorCategory[] = [
  {
    category: '突击兵',
    operators: [
      { id: 'honglang', name: '红狼', features: '爆发移速' },
      { id: 'weilong',  name: '威龙', features: '破门震荡' },
      { id: 'jifeng',   name: '疾风', features: '机动位移' },
      { id: 'wuming',   name: '无名', features: '静步偷袭' },
    ],
  },
  {
    category: '支援兵',
    operators: [
      { id: 'fengyi', name: '蜂医', features: '烟位医疗' },
      { id: 'gu',     name: '蛊',   features: '毒气控场' },
      { id: 'die',    name: '蝶',   features: '救援无人机' },
      { id: 'lvren',  name: '旅人', features: '谁是好狗狗' },
    ],
  },
  {
    category: '工程兵',
    operators: [
      { id: 'muyangren', name: '牧羊人', features: '声波防线' },
      { id: 'wululu',    name: '乌鲁鲁', features: '巡飞弹压制' },
      { id: 'shenlan',   name: '深蓝',   features: '电子工程' },
      { id: 'yetan',     name: '液氮',   features: '低温冷却' },
      { id: 'bite',      name: '比特',   features: '战术突击' },
    ],
  },
  {
    category: '侦察兵',
    operators: [
      { id: 'luna',     name: '露娜', features: '追踪弓透视' },
      { id: 'haizhua',  name: '骇爪', features: '信号破译' },
      { id: 'huixiang', name: '回响', features: '声学定位' },
      { id: 'yinyi',    name: '银翼', features: '老鸟窥视' },
    ],
  },
];