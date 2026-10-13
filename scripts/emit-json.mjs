// 从编译产物 dist/data.js 里导出完整数据，写成 index.json
// 运行： node scripts/emit-json.mjs
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const { OPERATORS, WEAPONS, EQUIPMENT } = await import(
  resolve(root, 'dist/data.js')
);

const payload = {
  $schema: 'https://raw.githubusercontent.com/delta-force-core/schema/main/v1.json',
  version: '0.1.0',
  generatedAt: new Date().toISOString(),
  operators: OPERATORS,
  weapons: WEAPONS,
  equipment: EQUIPMENT,
};

const outPath = resolve(root, 'index.json');
writeFileSync(outPath, JSON.stringify(payload, null, 2), 'utf-8');
console.log(`✅ 已生成 ${outPath}`);