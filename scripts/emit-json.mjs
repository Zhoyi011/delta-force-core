// 从编译产物 dist/index.js 里导出当前数据，写成 index.json
// 运行： node scripts/emit-json.mjs
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const { OPERATORS, WEAPONS, EQUIPMENT, AMMO } = await import(
  resolve(root, 'dist/index.js')
);

const payload = {
  $schema: 'https://raw.githubusercontent.com/delta-force-core/schema/main/v1.json',
  version: '0.2.0',
  generatedAt: new Date().toISOString(),
  operators: OPERATORS,
  weapons: WEAPONS,
  equipment: EQUIPMENT,
  ammo: AMMO,
};

const outPath = resolve(root, 'index.json');
writeFileSync(outPath, JSON.stringify(payload, null, 2), 'utf-8');
console.log(`✅ 已生成 ${outPath}`);