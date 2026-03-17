---
name: token-stats
description: 查询 LiteLLM Token 消耗统计。触发词：token消耗、查询token、/token-stats。输出固定格式，包含总计、今日消耗、周期统计、历史最高、按模型统计。
---

# token-stats

查询 LiteLLM Token 消耗统计

## 触发词
- "token消耗"
- "查询token"
- "/token-stats"
- "Token 消耗统计"

## 执行命令
```bash
python3 ~/.openclaw/scripts/token_stats.py
```

## 输出格式（严格遵守，禁止改动）

```
=== Token 消耗统计 ===

📊 总计 (自2026-03-14起): 2亿1378.96万 tokens (2,234 calls)
📊 今日消耗: 3655.60万 tokens (427 calls)

💬 上次查询时间: 2026-03-16 11:40:39
1分内消耗: 34.41万 tokens | 发起调用: 3次

📈 周期内单次消耗最高:
Token: 11.49万
时间: 2026-03-16 16:40:38
模型: anthropic/MiniMax-M2.5

📈 历史单次消耗最高:
Token: 25.74万
时间: 2026-03-15 21:57:53
模型: anthropic/MiniMax-M2.5

📊 按模型统计 (自2026-03-14起):
anthropic/MiniMax-M2.5: 2亿1378.89万 tokens (2,210 calls)
minimax/MiniMax-M2.5: 431 tokens (8 calls)
openai/GLM-4.7: 272 tokens (2 calls)
```

## 数据源
- 脚本: `~/.openclaw/scripts/token_stats.py`
- 数据库: 192.168.35.10:5432/litellm
- 记录文件: `~/.openclaw/scripts/token_stats_last.json`
