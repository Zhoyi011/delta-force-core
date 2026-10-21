// =====================================================
// 三角洲行动 —— 消耗品与物品数据
// =====================================================

import type { GameItem } from '../types.js';

export const ITEMS: GameItem[] = [
  // ---------------------------------------------------
  // 药品（五级 / 金色）
  // ---------------------------------------------------
  {
    id: 'item_med_kit_gold',
    name: '战地医疗箱',
    category: '药品',
    tier: 5,
    durability: '800/800',
    useTime: 3.5,
    healRate: 30,
    description: '拥有800耐久度，每秒可以恢复30点生命值，启用时间3.5秒，能消耗25点耐久度治疗一处伤口，还可以消耗25点耐久度获得60秒止痛效果。'
  },

  // ---------------------------------------------------
  // 药品（四级 / 紫色）
  // ---------------------------------------------------
  {
    id: 'item_dek_surgery_kit',
    name: 'DEK野战手术包',
    category: '药品',
    tier: 4,
    uses: '7/7',
    useTime: 5,
    description: '启用后可以修复1个部位上所有异常状态，最多可以使用7次；启用时间5秒。'
  },
  {
    id: 'item_dve_painkiller',
    name: 'DVE止痛片',
    category: '药品',
    tier: 4,
    uses: '5/5',
    useTime: 3,
    description: '获得止痛效果360秒，能缓解疼痛、骨折带来的视觉影响，最多可以使用5次；使用时间3秒。'
  },
  {
    id: 'item_outdoor_med_kit',
    name: '户外医疗箱',
    category: '药品',
    tier: 4,
    durability: '350/350',
    useTime: 4,
    healRate: 20,
    description: '拥有350耐久度；每秒可以恢复20点生命值，启用时间4秒，能消耗25点耐久度治疗一处伤口，还可以消耗25点耐久度获得30秒止痛效果。'
  },

  // ---------------------------------------------------
  // 药品（三级 / 蓝色）
  // ---------------------------------------------------
  {
    id: 'item_field_first_aid',
    name: '野战急救包',
    category: '药品',
    tier: 3,
    durability: '220/220',
    useTime: 6,
    healRate: 20,
    description: '拥有220耐久度；每秒可以恢复20点生命值，启用时间6秒。'
  },

  // ---------------------------------------------------
  // 药品（二级 / 绿色）
  // ---------------------------------------------------
  {
    id: 'item_tactical_surgery',
    name: '战术快拆手术包',
    category: '药品',
    tier: 2,
    uses: '4/4',
    useTime: 7,
    description: '启用后可以修复1个部位上所有异常状态，最多可以使用4次；启用时间7秒。'
  },
  {
    id: 'item_bottled_antibiotics',
    name: '瓶装抗生素',
    category: '药品',
    tier: 2,
    uses: '3/3',
    useTime: 4,
    description: '获得止痛效果240秒，能缓解疼痛、骨折带来的视觉影响，最多可以使用3次；使用时间4秒。'
  },
  {
    id: 'item_strong_syringe',
    name: '强效注射器',
    category: '药品',
    tier: 2,
    durability: '60/60',
    useTime: 3,
    healRate: 12,
    description: '拥有60耐久度；每秒可以恢复12点生命值，启用时间3秒。'
  },
  {
    id: 'item_vehicle_first_aid',
    name: '车载急救包',
    category: '药品',
    tier: 2,
    durability: '90/90',
    useTime: 5,
    healRate: 6,
    description: '拥有90耐久度；每秒可以恢复6点生命值；启用时间5秒。'
  },
  {
    id: 'item_cat_tourniquet',
    name: 'CAT止血带',
    category: '药品',
    tier: 2,
    uses: '4/4',
    useTime: 2.5,
    description: '启用后可以治疗1个伤口，最多可以使用4次；启用时间2.5秒。'
  },
  {
    id: 'item_simple_surgery',
    name: '简易手术包',
    category: '药品',
    tier: 2,
    uses: '2/2',
    useTime: 10,
    description: '启用后可以修复1个部位上所有异常状态，最多可以使用2次；启用时间10秒。'
  },
  {
    id: 'item_slow_release_painkiller',
    name: '缓释止痛片',
    category: '药品',
    tier: 2,
    uses: '1/1',
    useTime: 4,
    description: '获得止痛效果200秒，能缓解疼痛、骨折带来的视觉影响，最多可以使用1次；使用时间4秒。'
  },
  {
    id: 'item_simple_syringe',
    name: '简易注射器',
    category: '药品',
    tier: 2,
    durability: '30/30',
    useTime: 3.5,
    healRate: 5,
    description: '具有30耐久度，每秒可以回复5点生命值，启用时间3.5秒。'
  },
  {
    id: 'item_elastic_bandage',
    name: '弹力绷带',
    category: '药品',
    tier: 2,
    uses: '2/2',
    useTime: 3,
    description: '启用后可以治疗1处伤口，最多可以使用2次；启用时间3秒。'
  },

  // ---------------------------------------------------
  // 维修套件（护甲）
  // ---------------------------------------------------
  {
    id: 'item_repair_armor_t6',
    name: '高级护甲维修组合',
    category: '维修套件',
    tier: 6,
    basePrice: 487190,
    size: '2x2', // 维修套件通常是 2x2
    durability: '200/200', // 维修点数
    useTime: 4.5,
    description: '针对6级装备的局内维修工具，能快速修复护甲耐久度。每块插板消耗工具包50点耐久度；启用时间4.5秒。'
  },
  {
    id: 'item_repair_armor_t5',
    name: '精密护甲维修包',
    category: '维修套件',
    tier: 5,
    basePrice: 238050,
    size: '2x2',
    durability: '120/120',
    useTime: 4.5,
    description: '针对5级装备的局内维修工具，能快速修复护甲耐久度。每块插板消耗工具包40点耐久度；启用时间4.5秒。'
  },
  {
    id: 'item_repair_armor_t4',
    name: '标准护甲维修包',
    category: '维修套件',
    tier: 4,
    basePrice: 46615,
    size: '2x2',
    durability: '75/75',
    useTime: 4.5,
    description: '针对4级装备的局内维修工具，能快速修复护甲耐久度。每块插板消耗工具包40点耐久度。'
  },
  {
    id: 'item_repair_armor_t3',
    name: '自制护甲维修包',
    category: '维修套件',
    tier: 3,
    basePrice: 22180,
    size: '2x2',
    durability: '50/50',
    useTime: 4.5,
    description: '针对3级装备的局内维修工具，能快速修复护甲耐久度。每块插板消耗工具包25点耐久度。'
  },

  // ---------------------------------------------------
  // 维修套件（头盔）
  // ---------------------------------------------------
  {
    id: 'item_repair_helmet_t6',
    name: '高级头盔维修组合',
    category: '维修套件',
    tier: 6,
    basePrice: 376400,
    size: '1x1', // 头盔维修包体积可能比护甲小
    durability: '100/100',
    useTime: 4.5,
    description: '针对6级装备的局内维修工具，能快速修复头盔耐久度。每块插板消耗工具包25点耐久度；启用时间4.5秒。'
  },
  {
    id: 'item_repair_helmet_t5',
    name: '精密头盔维修包',
    category: '维修套件',
    tier: 5,
    basePrice: 171055,
    size: '1x1',
    durability: '75/75',
    useTime: 4.5,
    description: '针对5级装备的局内维修工具，能快速修复头盔耐久度。每块插板消耗工具包25点耐久度；启用时间4.5秒。'
  },
  {
    id: 'item_repair_helmet_t4',
    name: '标准头盔维修包',
    category: '维修套件',
    tier: 4,
    basePrice: 59245,
    size: '1x1',
    durability: '50/50',
    useTime: 4.5,
    description: '针对4级装备的局内维修工具，能快速修复头盔耐久度。每块插板消耗工具包25点耐久度。'
  },
  {
    id: 'item_repair_helmet_t3',
    name: '自制头盔维修包',
    category: '维修套件',
    tier: 3,
    basePrice: 17584,
    size: '1x1',
    durability: '30/30',
    useTime: 4.5,
    description: '针对3级装备的局内维修工具，能快速修复头盔耐久度。每块插板消耗工具包15点耐久度。'
  },
  // ---------------------------------------------------
  // 针剂（四级 / 紫色）
  // ---------------------------------------------------
  {
    id: 'item_stim_stamina_purple',
    name: '体能针',
    category: '针剂',
    tier: 4,
    basePrice: 81715,
    size: '1x1',
    useTime: 3,
    description: '提升体力上限，提升体力恢复速度，持续300秒。'
  },
  {
    id: 'item_stim_perception_purple',
    name: '感知强化剂',
    category: '针剂',
    tier: 4,
    basePrice: 57000,
    size: '1x1',
    useTime: 3,
    description: '提升10%拾音范围，持续300秒。'
  },
  {
    id: 'item_stim_weight_purple',
    name: 'M2肌肉注射剂',
    category: '针剂',
    tier: 4,
    basePrice: 48125,
    size: '1x1',
    useTime: 3,
    description: '提升负重能力，持续300秒。'
  },

  // ---------------------------------------------------
  // 针剂（三级 / 蓝色）
  // ---------------------------------------------------
  {
    id: 'item_stim_stamina_blue',
    name: '体能活化针',
    category: '针剂',
    tier: 3,
    basePrice: 32720,
    size: '1x1',
    useTime: 3,
    description: '提升体力上限，提升体力恢复速度，持续180秒。'
  },
  {
    id: 'item_stim_combat_blue',
    name: 'OE2战斗兴奋剂',
    category: '针剂',
    tier: 3,
    basePrice: 29723,
    size: '1x1',
    useTime: 3,
    description: '在紧急情况下用于恢复体力的注射剂，能在短时间内恢复大量体力，单次使用。'
  },
  {
    id: 'item_stim_perception_blue',
    name: '感知活化针',
    category: '针剂',
    tier: 3,
    basePrice: 22500,
    size: '1x1',
    useTime: 3,
    description: '提升10%拾音范围，持续180秒。'
  },
  {
    id: 'item_stim_weight_blue',
    name: 'M1肌肉强化针',
    category: '针剂',
    tier: 3,
    basePrice: 15750,
    size: '1x1',
    useTime: 3,
    description: '提升负重能力，持续180秒。'
  },
  {
    id: 'item_stim_adrenaline_blue',
    name: '去甲肾上腺素',
    category: '针剂',
    tier: 3,
    basePrice: 13200,
    size: '1x1',
    useTime: 3,
    description: '可有效增加肌肉耐力的注射剂，能提升体力上限，持续120秒。'
  },
  // ---------------------------------------------------
  // 房卡（红色 / 六级）
  // ---------------------------------------------------
  {
    id: 'key_hotel_king',
    name: '饭店国王房',
    category: '钥匙',
    tier: 6,
    basePrice: 4253556,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '钻石皇后饭店',
    description: '用于开启饭店国王房的门禁卡。'
  },
  {
    id: 'key_radar_drone',
    name: '雷达站无人机平台',
    category: '钥匙',
    tier: 6,
    basePrice: 3633514,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '哈夫克雷达站',
    description: '用于开启雷达站无人机平台的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（金色 / 五级）
  // ---------------------------------------------------
  {
    id: 'key_hotel_prince',
    name: '饭店王子房',
    category: '钥匙',
    tier: 5,
    basePrice: 1344723,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '钻石皇后饭店',
    description: '用于开启饭店王子房的门禁卡。'
  },
  {
    id: 'key_radar_datacenter',
    name: '雷达站数据中心',
    category: '钥匙',
    tier: 5,
    basePrice: 1176473,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '哈夫克雷达站',
    description: '用于开启雷达站数据中心的门禁卡。'
  },
  {
    id: 'key_lab_archive',
    name: '实验楼资料室',
    category: '钥匙',
    tier: 5,
    basePrice: 932288,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '哈夫克雷达站',
    description: '用于开启实验楼资料室的门禁卡。'
  },
  {
    id: 'key_hotel_peach',
    name: '饭店黑桃房',
    category: '钥匙',
    tier: 5,
    basePrice: 839468,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '钻石皇后饭店',
    description: '用于开启饭店黑桃房的门禁卡。'
  },
  {
    id: 'key_radar_control',
    name: '雷达站控制室',
    category: '钥匙',
    tier: 5,
    basePrice: 815543,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '哈夫克雷达站',
    description: '用于开启雷达站控制室的门禁卡。'
  },
  {
    id: 'key_lab_office',
    name: '实验楼办公室',
    category: '钥匙',
    tier: 5,
    basePrice: 657037,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '哈夫克雷达站',
    description: '用于开启实验楼办公室的门禁卡。'
  },
  {
    id: 'key_hotel_general',
    name: '饭店将军房',
    category: '钥匙',
    tier: 5,
    basePrice: 755096,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '钻石皇后饭店',
    description: '用于开启饭店将军房的门禁卡。'
  },
  {
    id: 'key_hotel_diamond',
    name: '饭店方块房',
    category: '钥匙',
    tier: 5,
    basePrice: 846044,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '钻石皇后饭店',
    description: '用于开启饭店方块房的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（紫色 / 四级）
  // ---------------------------------------------------
  {
    id: 'key_town_restaurant',
    name: '小镇餐厅',
    category: '钥匙',
    tier: 4,
    basePrice: 500251,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '阿米亚小镇',
    description: '用于开启小镇餐厅的门禁卡。'
  },
  {
    id: 'key_cargo_meeting',
    name: '运输机会议室',
    category: '钥匙',
    tier: 4,
    basePrice: 487030,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '坠机之地',
    description: '用于开启运输机会议室的门禁卡。'
  },
  {
    id: 'key_radar_meeting',
    name: '雷达站会议室',
    category: '钥匙',
    tier: 4,
    basePrice: 466783,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '哈夫克雷达站',
    description: '用于开启雷达站会议室的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（蓝色 / 三级）
  // ---------------------------------------------------
  {
    id: 'key_checkpoint_armory',
    name: '检查站库房',
    category: '钥匙',
    tier: 3,
    basePrice: 239400,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '检查站',
    description: '用于开启检查站库房的门禁卡。'
  },
  {
    id: 'key_radar_side_door',
    name: '雷达站侧门',
    category: '钥匙',
    tier: 3,
    basePrice: 220000,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '哈夫克雷达站',
    description: '用于开启雷达站侧门的门禁卡。'
  },
  {
    id: 'key_ranch_office',
    name: '牧场管理房',
    category: '钥匙',
    tier: 3,
    basePrice: 48300,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '沙径牧场',
    description: '用于开启牧场管理房的门禁卡。'
  },
  {
    id: 'key_train_station_ticket',
    name: '铁脊车站售票室',
    category: '钥匙',
    tier: 3,
    basePrice: 42000,
    size: '1x1',
    durability: '20/20',
    map: '长弓溪谷',
    room: '小火车站',
    description: '用于开启铁脊车站售票室的门禁卡。'
  },
  // ---------------------------------------------------
  // 房卡（零号大坝 - 红色 / 六级）
  // ---------------------------------------------------
  {
    id: 'key_east_building_manager',
    name: '东楼经理室',
    category: '钥匙',
    tier: 6,
    basePrice: 3500022,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '行政楼',
    description: '用于开启东楼经理室的门禁卡。'
  },
  {
    id: 'key_substation_tech',
    name: '变电站技术室',
    category: '钥匙',
    tier: 6,
    basePrice: 2593317,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '大变电站',
    description: '用于开启变电站技术室的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（零号大坝 - 金色 / 五级）
  // ---------------------------------------------------
  {
    id: 'key_west_building_control',
    name: '西楼控制室',
    category: '钥匙',
    tier: 5,
    basePrice: 541886,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '行政楼',
    description: '用于开启西楼调控房的门禁卡。'
  },
  {
    id: 'key_west_building_monitor',
    name: '西楼监视室',
    category: '钥匙',
    tier: 5,
    basePrice: 366199,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '行政楼',
    description: '用于开启西楼监视室的门禁卡。'
  },
  {
    id: 'key_equipment_issue',
    name: '设备领用室',
    category: '钥匙',
    tier: 5,
    basePrice: 303605,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '行政楼',
    description: '用于开启设备领用室的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（零号大坝 - 紫色 / 四级）
  // ---------------------------------------------------
  {
    id: 'key_ticket_office',
    name: '售票办公室',
    category: '钥匙',
    tier: 4,
    basePrice: 425872,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '游客中心',
    description: '用于开启售票办公室的门禁卡。'
  },
  {
    id: 'key_military_storage',
    name: '军营保管室',
    category: '钥匙',
    tier: 4,
    basePrice: 415341,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '反叛军营',
    description: '用于开启军营保管室的门禁卡。'
  },
  {
    id: 'key_cement_dorm_201',
    name: '水泥厂宿舍201',
    category: '钥匙',
    tier: 4,
    basePrice: 360999,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '水泥厂',
    description: '用于开启水泥厂宿舍201的门禁卡。'
  },
  {
    id: 'key_center_vip',
    name: '中心贵宾室',
    category: '钥匙',
    tier: 4,
    basePrice: 303740,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '游客中心',
    description: '用于开启中心贵宾室的门禁卡。'
  },
  {
    id: 'key_cement_office',
    name: '水泥厂办公室',
    category: '钥匙',
    tier: 4,
    basePrice: 301189,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '水泥厂',
    description: '用于开启水泥厂办公室的门禁卡。'
  },
  {
    id: 'key_underground_passage',
    name: '地下通道门禁卡',
    category: '钥匙',
    tier: 4,
    basePrice: 212500,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '地下通道',
    description: '用于开启地下通道的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（零号大坝 - 蓝色 / 三级）
  // ---------------------------------------------------
  {
    id: 'key_west_medical',
    name: '西楼医务室',
    category: '钥匙',
    tier: 3,
    basePrice: 124950,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '行政楼',
    description: '用于开启西楼医务室的门禁卡。'
  },
  {
    id: 'key_substation_dorm',
    name: '变电站宿舍',
    category: '钥匙',
    tier: 3,
    basePrice: 35700,
    size: '1x1',
    durability: '20/20',
    map: '零号大坝',
    room: '变电站',
    description: '用于开启变电站宿舍的门禁卡。'
  },
  // ---------------------------------------------------
  // 房卡（航天基地 - 红色 / 六级）
  // ---------------------------------------------------
  {
    id: 'key_space_ceo_lounge',
    name: '总裁室会客厅',
    category: '钥匙',
    tier: 6,
    basePrice: 5811055,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '总裁室',
    description: '用于开启总裁室会客厅的门禁卡。'
  },
  {
    id: 'key_space_black_server',
    name: '黑室伺服器室',
    category: '钥匙',
    tier: 6,
    basePrice: 3136950,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '黑室',
    description: '用于开启黑室伺服器室的门禁卡。'
  },
  {
    id: 'key_space_blue_core',
    name: '蓝室核心',
    category: '钥匙',
    tier: 6,
    basePrice: 3265254,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '蓝室',
    description: '用于开启蓝室核心的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（航天基地 - 金色 / 五级）
  // ---------------------------------------------------
  {
    id: 'key_space_east_bridge',
    name: '东区吊桥',
    category: '钥匙',
    tier: 5,
    basePrice: 2014000,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '东区吊桥',
    description: '用于开启东区吊桥的门禁卡。'
  },
  {
    id: 'key_space_blue_datacenter',
    name: '蓝室数据中心',
    category: '钥匙',
    tier: 5,
    basePrice: 874121,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '蓝室',
    description: '用于开启蓝室数据中心的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（航天基地 - 紫色 / 四级）
  // ---------------------------------------------------
  {
    id: 'key_space_blue_glass',
    name: '蓝室玻璃房',
    category: '钥匙',
    tier: 4,
    basePrice: 1043745,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '蓝室',
    description: '用于开启蓝室玻璃房的门禁卡。'
  },
  {
    id: 'key_space_assembly_lab',
    name: '组装厂房二楼实验室',
    category: '钥匙',
    tier: 4,
    basePrice: 738032,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '组装车间',
    description: '用于开启组装厂房二楼实验室的门禁卡。'
  },
  {
    id: 'key_space_west_gate',
    name: '西区大门',
    category: '钥匙',
    tier: 4,
    basePrice: 920000,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '西区大门',
    description: '用于开启西区大门的门禁卡。'
  },
  {
    id: 'key_space_staff_passage',
    name: '员工通道',
    category: '钥匙',
    tier: 4,
    basePrice: 925000,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '员工通道',
    description: '用于开启员工通道的门禁卡。'
  },
  {
    id: 'key_space_dorm_3_back',
    name: '3号宿舍后房',
    category: '钥匙',
    tier: 4,
    basePrice: 688823,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '宿舍区',
    description: '用于开启3号宿舍后房的门禁卡。'
  },
  {
    id: 'key_space_control_3f',
    name: '中控室三楼',
    category: '钥匙',
    tier: 4,
    basePrice: 523645,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '中控区',
    description: '用于开启中控室三楼的门禁卡。'
  },
  {
    id: 'key_space_buoy_medical',
    name: '浮力室医务间',
    category: '钥匙',
    tier: 4,
    basePrice: 321384,
    size: '1x1',
    durability: '40/40',
    map: '航天基地',
    room: '浮力室',
    description: '用于开启浮力室医务间的门禁卡。'
  },
  // ---------------------------------------------------
  // 房卡（巴克什 - 红色 / 六级）
  // ---------------------------------------------------
  {
    id: 'key_bak_underground_vault',
    name: '地下金库储藏间',
    category: '钥匙',
    tier: 6,
    basePrice: 2986205,
    size: '1x1',
    durability: '40/40',
    map: '巴克什',
    room: '地下金库',
    description: '用于开启地下金库储藏间的门禁卡。'
  },
  {
    id: 'key_bak_ceo_meeting',
    name: '总裁会议室',
    category: '钥匙',
    tier: 6,
    basePrice: 2306900,
    size: '1x1',
    durability: '40/40',
    map: '巴克什',
    room: '巴别塔',
    description: '用于开启总裁会议室的门禁卡。'
  },
  {
    id: 'key_bak_hotel_dining',
    name: '旅店用餐间',
    category: '钥匙',
    tier: 6,
    basePrice: 1790959,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '旅馆',
    description: '用于开启旅店用餐间的门禁卡。'
  },
  {
    id: 'key_bak_museum_exhibit',
    name: '博物馆展厅套间',
    category: '钥匙',
    tier: 6,
    basePrice: 1367593,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '博物馆',
    description: '用于开启博物馆展厅套间的门禁卡。'
  },
  {
    id: 'key_bak_old_bath_vip',
    name: '旧浴场贵宾室',
    category: '钥匙',
    tier: 6,
    basePrice: 1465034,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '旧浴场',
    description: '用于开启旧浴场贵宾室的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（巴克什 - 金色 / 五级）
  // ---------------------------------------------------
  {
    id: 'key_bak_relink_surgery',
    name: 'Relink植入手术室',
    category: '钥匙',
    tier: 5,
    basePrice: 1084627,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '巴别塔',
    description: '用于开启Relink植入手术室的门禁卡。'
  },
  {
    id: 'key_bak_medical_meeting',
    name: '医疗会议室',
    category: '钥匙',
    tier: 5,
    basePrice: 638865,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '巴别塔',
    description: '用于开启医疗会议室的门禁卡。'
  },
  {
    id: 'key_bak_museum_abandoned',
    name: '博物馆废弃展厅',
    category: '钥匙',
    tier: 5,
    basePrice: 682375,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '博物馆',
    description: '用于开启博物馆废弃展厅的门禁卡。'
  },
  {
    id: 'key_bak_room1_signal',
    name: '1号讯息室',
    category: '钥匙',
    tier: 5,
    basePrice: 551748,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '巴别塔',
    description: '用于开启1号讯息室的门禁卡。'
  },
  {
    id: 'key_bak_bio_server',
    name: '生物数据机房',
    category: '钥匙',
    tier: 5,
    basePrice: 479415,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '巴别塔',
    description: '用于开启生物数据机房的门禁卡。'
  },
  {
    id: 'key_bak_outpatient',
    name: '门诊室',
    category: '钥匙',
    tier: 5,
    basePrice: 309989,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '巴别塔',
    description: '用于开启门诊室的门禁卡。'
  },
  {
    id: 'key_bak_museum_monitor',
    name: '博物馆监控室',
    category: '钥匙',
    tier: 5,
    basePrice: 228884,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '博物馆',
    description: '用于开启博物馆监控室的门禁卡。'
  },
  {
    id: 'key_bak_babel_access',
    name: '巴别塔供电权限卡',
    category: '钥匙',
    tier: 5,
    basePrice: 448000,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '巴别塔',
    description: '用于解锁巴别塔权限大门的门禁卡。'
  },
  {
    id: 'key_bak_ocean_monitor',
    name: '海洋监测厅',
    category: '钥匙',
    tier: 5,
    basePrice: 555302,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '巴别塔',
    description: '用于开启海洋监测厅的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（巴克什 - 紫色 / 四级）
  // ---------------------------------------------------
  {
    id: 'key_bak_old_bath_dining',
    name: '旧浴场餐厅',
    category: '钥匙',
    tier: 4,
    basePrice: 390223,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '旧浴场',
    description: '用于开启旧浴场餐厅的门禁卡。'
  },
  {
    id: 'key_bak_hotel_rest',
    name: '旅店员工休息室',
    category: '钥匙',
    tier: 4,
    basePrice: 299534,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '旅馆',
    description: '用于开启旅店员工休息室的门禁卡。'
  },
  {
    id: 'key_bak_east_residential',
    name: '东城民宅卧室',
    category: '钥匙',
    tier: 4,
    basePrice: 295988,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '东城',
    description: '用于开启东城民宅卧室的门禁卡。'
  },
  {
    id: 'key_bak_west_residential',
    name: '西城民宅卧室',
    category: '钥匙',
    tier: 4,
    basePrice: 207901,
    size: '1x1',
    durability: '20/20',
    map: '巴克什',
    room: '西城',
    description: '用于开启西城民宅卧室的门禁卡。'
  },
  // ---------------------------------------------------
  // 房卡（潮汐监狱 - 红色 / 六级）
  // ---------------------------------------------------
  {
    id: 'key_tide_warden_collection',
    name: '典狱长收藏室',
    category: '钥匙',
    tier: 6,
    basePrice: 5282984,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '典狱长办公室',
    description: '用于开启典狱长收藏室的门禁卡。'
  },
  {
    id: 'key_tide_lv3_access',
    name: '三级监狱权限卡',
    category: '钥匙',
    tier: 6,
    basePrice: 4784996,
    size: '1x1',
    durability: '80/80',
    map: '潮汐监狱',
    room: '牢房区',
    description: '用于开启三级权限房的门禁卡。'
  },
  {
    id: 'key_tide_bio_sample',
    name: '生物样本室',
    category: '钥匙',
    tier: 6,
    basePrice: 4507471,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '医疗实验区',
    description: '用于开启生物样本室的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（潮汐监狱 - 金色 / 五级）
  // ---------------------------------------------------
  {
    id: 'key_tide_interrogation',
    name: '监狱审讯室',
    category: '钥匙',
    tier: 5,
    basePrice: 2135871,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '狱警工作区',
    description: '用于开启监狱审讯室的门禁卡。'
  },
  {
    id: 'key_tide_lv2_access',
    name: '二级监狱权限卡',
    category: '钥匙',
    tier: 5,
    basePrice: 2150235,
    size: '1x1',
    durability: '100/100',
    map: '潮汐监狱',
    room: '牢房区',
    description: '用于开启二级权限房的门禁卡。'
  },
  {
    id: 'key_tide_dummy_print',
    name: '人偶影印室',
    category: '钥匙',
    tier: 5,
    basePrice: 1834914,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '典狱长办公室',
    description: '用于开启人偶影印室的门禁卡。'
  },
  {
    id: 'key_tide_water_control',
    name: '水位控制室',
    category: '钥匙',
    tier: 5,
    basePrice: 1843359,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '潮汐控制室',
    description: '用于开启水位控制室的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（潮汐监狱 - 紫色 / 四级）
  // ---------------------------------------------------
  {
    id: 'key_tide_dining_kitchen',
    name: '餐厅洗碗间',
    category: '钥匙',
    tier: 4,
    basePrice: 1260655,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '囚犯活动区-餐厅',
    description: '用于开启餐厅洗碗间的门禁卡。'
  },
  {
    id: 'key_tide_lv1_access',
    name: '一级监狱权限卡',
    category: '钥匙',
    tier: 4,
    basePrice: 837324,
    size: '1x1',
    durability: '100/100',
    map: '潮汐监狱',
    room: '牢房区',
    description: '用于开启一级权限房的门禁卡。'
  },
  {
    id: 'key_tide_server_room',
    name: '监狱伺服器房',
    category: '钥匙',
    tier: 4,
    basePrice: 905746,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '水动力渠',
    description: '用于开启监狱伺服器房的门禁卡。'
  },
  {
    id: 'key_tide_warehouse_control',
    name: '仓库区控制室',
    category: '钥匙',
    tier: 4,
    basePrice: 673370,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '卸货区',
    description: '用于开启仓库区监控室的门禁卡。'
  },
  {
    id: 'key_tide_top_office',
    name: '顶层办公间',
    category: '钥匙',
    tier: 4,
    basePrice: 767691,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '休息区',
    description: '用于开启顶层办公间的门禁卡。'
  },
  {
    id: 'key_tide_infirmary',
    name: '监狱健检室',
    category: '钥匙',
    tier: 4,
    basePrice: 686152,
    size: '1x1',
    durability: '40/40',
    map: '潮汐监狱',
    room: '医疗实验区',
    description: '用于开启监狱健检室的门禁卡。'
  },
  // ---------------------------------------------------
  // 房卡（AZ3 - 红色 / 六级）
  // ---------------------------------------------------
  {
    id: 'key_az3_reactor_core',
    name: '反应堆总控核心',
    category: '钥匙',
    tier: 6,
    basePrice: 6747280,
    size: '1x1',
    durability: '40/40',
    map: 'AZ3',
    room: '核心反应炉',
    description: '用于开启反应堆总控核心的钥匙。'
  },

  // ---------------------------------------------------
  // 房卡（AZ3 - 金色 / 五级）
  // ---------------------------------------------------
  {
    id: 'key_az3_turbine_control',
    name: '汽轮机控制室',
    category: '钥匙',
    tier: 5,
    basePrice: 797420,
    size: '1x1',
    durability: '20/20',
    map: 'AZ3',
    room: '核心反应炉',
    description: '用于开启汽轮机控制室的门禁卡。'
  },
  {
    id: 'key_az3_fuel_plant',
    name: '乏燃料厂房房',
    category: '钥匙',
    tier: 5,
    basePrice: 743230,
    size: '1x1',
    durability: '20/20',
    map: 'AZ3',
    room: '乏燃料处理厂',
    description: '用于开启乏燃料厂房房的门禁卡。'
  },

  // ---------------------------------------------------
  // 房卡（AZ3 - 紫色 / 四级）
  // ---------------------------------------------------
  {
    id: 'key_az3_heavy_water_server',
    name: '压水堆服务器室',
    category: '钥匙',
    tier: 4,
    basePrice: 868100,
    size: '1x1',
    durability: '20/20',
    map: 'AZ3',
    room: '压水反应炉',
    description: '用于开启压水堆服务器室的钥匙。'
  },
  {
    id: 'key_az3_tokamak_datacenter',
    name: '托卡马克资料中心',
    category: '钥匙',
    tier: 4,
    basePrice: 834695,
    size: '1x1',
    durability: '20/20',
    map: 'AZ3',
    room: '老科学院',
    description: '用于开启托卡马克资料中心的钥匙。'
  },
  {
    id: 'key_az3_mimic_control',
    name: '仿星器控制室',
    category: '钥匙',
    tier: 4,
    basePrice: 757355,
    size: '1x1',
    durability: '20/20',
    map: 'AZ3',
    room: '仿星器研究所',
    description: '用于开启仿星器控制室的门禁卡。'
  },
  {
    id: 'key_az3_railway_passage',
    name: '铁路通道',
    category: '钥匙',
    tier: 4,
    basePrice: 425000,
    size: '1x1',
    durability: '20/20',
    map: 'AZ3',
    room: '运输仓库',
    description: '用于开启铁路通道的门禁卡。'
  },
];