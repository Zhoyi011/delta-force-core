#!/usr/bin/env node
// =====================================================
// delta-force-core —— MCP CLI 入口
// =====================================================

import { startMcpServer } from '../dist/mcp.js';

startMcpServer().catch((err) => {
  console.error('[delta-force-core] MCP server failed to start:');
  console.error(err);
  process.exit(1);
});
