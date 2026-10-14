// =====================================================
// delta-force-core —— MCP Server 入口
//
// 使用方式（在 AI 客户端配置里）：
//   "command": "npx",
//   "args": ["-y", "-p", "delta-force-core", "delta-force-mcp"]
//
// 本地运行：
//   node bin/mcp.js
// =====================================================

import {
  getRandomLoadout,
  getRandomWeapon,
  getRandomOperator,
  getRandomAmmo,
  findWeaponById,
  findOperatorById,
  findAmmoById,
  findWeaponsByCaliber,
  findAmmoByCaliber,
  listAllWeapons,
  listAllOperators,
  listWeaponCategories,
  listOperatorCategories,
  WEAPONS,
  OPERATORS,
  EQUIPMENT,
  AMMO,
} from './index.js';

/**
 * 启动 MCP Server（stdio 传输）。
 *
 * 注意：`@modelcontextprotocol/sdk` 是 optionalDependency，
 * 并且采用**动态 import**，所以纯 JS 用户 import 本包时**不会**加载它。
 */
export async function startMcpServer(): Promise<void> {
  let Server: any;
  let StdioServerTransport: any;
  let schemas: {
    ListToolsRequestSchema: unknown;
    CallToolRequestSchema: unknown;
    ListResourcesRequestSchema: unknown;
    ReadResourceRequestSchema: unknown;
  };

  try {
    // 动态 import —— 只有真正跑 MCP 时才加载 SDK
    ({ Server } = await import('@modelcontextprotocol/sdk/server/index.js'));
    ({ StdioServerTransport } = await import('@modelcontextprotocol/sdk/server/stdio.js'));
    const types = await import('@modelcontextprotocol/sdk/types.js');
    schemas = {
      ListToolsRequestSchema: types.ListToolsRequestSchema,
      CallToolRequestSchema: types.CallToolRequestSchema,
      ListResourcesRequestSchema: types.ListResourcesRequestSchema,
      ReadResourceRequestSchema: types.ReadResourceRequestSchema,
    };
  } catch (err) {
    console.error(
      [
        '[delta-force-core] 无法加载 @modelcontextprotocol/sdk。',
        '请运行：',
        '  npm install @modelcontextprotocol/sdk',
        '或者忽略此错误（如果你只是用 delta-force-core 作为 JS 库）。',
      ].join('\n'),
    );
    throw err;
  }

  const server = new Server(
    { name: 'delta-force-core', version: '0.3.0' },
    { capabilities: { tools: {}, resources: {} } },
  );

  // ---------------------------------------------------
  // Tools
  // ---------------------------------------------------
  server.setRequestHandler(schemas.ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: 'get_random_loadout',
        description:
          'Randomly generate a full Delta Force loadout (operator + weapon + armor + helmet + backpack + chest rig).',
        inputSchema: {
          type: 'object',
          properties: {
            allowNormal: {
              type: 'boolean',
              description: 'Only items allowed in Normal mode',
            },
          },
        },
      },
      {
        name: 'get_random_weapon',
        description:
          'Pick a random weapon, optionally filtered by category / quality / normal-mode.',
        inputSchema: {
          type: 'object',
          properties: {
            category: { type: 'string', description: "e.g. '突击步枪'" },
            quality: {
              type: 'string',
              enum: ['绿色', '蓝色', '紫色', '金色'],
              description: 'Requires qualityOverride on a custom engine; ignored on default engine.',
            },
            allowNormal: { type: 'boolean' },
          },
        },
      },
      {
        name: 'get_random_operator',
        description: 'Pick a random operator, optionally by role category.',
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              description: "'突击兵' | '支援兵' | '工程兵' | '侦察兵'",
            },
          },
        },
      },
      {
        name: 'get_random_ammo',
        description: 'Pick a random ammo type, optionally by caliber.',
        inputSchema: {
          type: 'object',
          properties: {
            caliber: { type: 'string', description: "e.g. '5.56x45mm'" },
          },
        },
      },
      {
        name: 'find_weapon',
        description: 'Find a weapon by its id.',
        inputSchema: {
          type: 'object',
          properties: { id: { type: 'string' } },
          required: ['id'],
        },
      },
      {
        name: 'find_operator',
        description: 'Find an operator by id.',
        inputSchema: {
          type: 'object',
          properties: { id: { type: 'string' } },
          required: ['id'],
        },
      },
      {
        name: 'find_ammo',
        description: 'Find an ammo entry by id.',
        inputSchema: {
          type: 'object',
          properties: { id: { type: 'string' } },
          required: ['id'],
        },
      },
      {
        name: 'find_weapons_by_caliber',
        description: 'Find all weapons that use the given caliber.',
        inputSchema: {
          type: 'object',
          properties: { caliber: { type: 'string' } },
          required: ['caliber'],
        },
      },
      {
        name: 'find_ammo_by_caliber',
        description: 'Find all ammo entries for the given caliber.',
        inputSchema: {
          type: 'object',
          properties: { caliber: { type: 'string' } },
          required: ['caliber'],
        },
      },
      {
        name: 'list_weapons',
        description: 'List all weapons, optionally filtered by category.',
        inputSchema: {
          type: 'object',
          properties: {
            category: { type: 'string', description: "e.g. '突击步枪'" },
          },
        },
      },
      {
        name: 'list_operators',
        description: 'List all operators, optionally filtered by category.',
        inputSchema: {
          type: 'object',
          properties: {
            category: { type: 'string', description: "e.g. '突击兵'" },
          },
        },
      },
      {
        name: 'list_categories',
        description: 'List available weapon and operator categories.',
        inputSchema: { type: 'object', properties: {} },
      },
    ],
  }));

  server.setRequestHandler(schemas.CallToolRequestSchema, async (request: any) => {
    const { name, arguments: args } = request.params;
    const a = (args ?? {}) as Record<string, unknown>;

    const wrap = (payload: unknown) => ({
      content: [
        { type: 'text' as const, text: JSON.stringify(payload, null, 2) },
      ],
    });

    switch (name) {
      case 'get_random_loadout':
        return wrap(
          getRandomLoadout({
            allowNormal: a.allowNormal as boolean | undefined,
          }),
        );

      case 'get_random_weapon':
        return wrap(
          getRandomWeapon({
            category: a.category as string | undefined,
            quality: a.quality as any,
            allowNormal: a.allowNormal as boolean | undefined,
          }),
        );

      case 'get_random_operator':
        return wrap(getRandomOperator(a.category as string | undefined));

      case 'get_random_ammo':
        return wrap(getRandomAmmo({ caliber: a.caliber as string | undefined }));

      case 'find_weapon':
        return wrap(findWeaponById(a.id as string) ?? null);

      case 'find_operator':
        return wrap(findOperatorById(a.id as string) ?? null);

      case 'find_ammo':
        return wrap(findAmmoById(a.id as string) ?? null);

      case 'find_weapons_by_caliber':
        return wrap(findWeaponsByCaliber(a.caliber as string));

      case 'find_ammo_by_caliber':
        return wrap(findAmmoByCaliber(a.caliber as string));

      case 'list_weapons': {
        if (a.category) {
          const group = WEAPONS.find((g) => g.category === a.category);
          return wrap(group ? group.weapons : []);
        }
        return wrap(listAllWeapons());
      }

      case 'list_operators': {
        if (a.category) {
          const group = OPERATORS.find((g) => g.category === a.category);
          return wrap(group ? group.operators : []);
        }
        return wrap(listAllOperators());
      }

      case 'list_categories':
        return wrap({
          weaponCategories: listWeaponCategories(),
          operatorCategories: listOperatorCategories(),
        });

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  });

  // ---------------------------------------------------
  // Resources
  // ---------------------------------------------------
  server.setRequestHandler(schemas.ListResourcesRequestSchema, async () => ({
    resources: [
      {
        uri: 'delta-force://weapons',
        name: 'All weapons',
        mimeType: 'application/json',
      },
      {
        uri: 'delta-force://operators',
        name: 'All operators',
        mimeType: 'application/json',
      },
      {
        uri: 'delta-force://equipment',
        name: 'All equipment',
        mimeType: 'application/json',
      },
      {
        uri: 'delta-force://ammo',
        name: 'All ammo',
        mimeType: 'application/json',
      },
    ],
  }));

  server.setRequestHandler(schemas.ReadResourceRequestSchema, async (request: any) => {
    const uri = request.params.uri as string;
    const map: Record<string, unknown> = {
      'delta-force://weapons': WEAPONS,
      'delta-force://operators': OPERATORS,
      'delta-force://equipment': EQUIPMENT,
      'delta-force://ammo': AMMO,
    };
    const data = map[uri];
    if (data === undefined) throw new Error(`Unknown resource: ${uri}`);
    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  });

  // ---------------------------------------------------
  // Start
  // ---------------------------------------------------
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('[delta-force-core] MCP server running on stdio');
}