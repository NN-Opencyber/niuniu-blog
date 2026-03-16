---
name: openclaw-auto-updater
description: 定时检查OpenClaw和Skills更新，推送通知给用户确认后再升级（非自动）
---

# OpenClaw 更新助手

> 定时检查更新 → 推送通知 → 确认后升级

## 工作模式

1. **定时检查**: 每周检查更新（不自动升级）
2. **推送通知**: 通过飞书推送更新内容给影子确认
3. **确认后升级**: 影子确认后才执行升级

## Cron 设置（每周二/周五 10:00 北京时间）

### 周二检查
```bash
openclaw cron add \
  --name "OpenClaw Update Check (周二)" \
  --cron "0 10 * * 2" \
  --tz "Asia/Shanghai" \
  --session isolated \
  --wake now \
  --deliver \
  --message "检查OpenClaw和Skills更新，推送通知给用户确认"
```

### 周五检查
```bash
openclaw cron add \
  --name "OpenClaw Update Check (周五)" \
  --cron "0 10 * * 5" \
  --tz "Asia/Shanghai" \
  --session isolated \
  --wake now \
  --deliver \
  --message "检查OpenClaw和Skills更新，推送通知给用户确认"
```

## 检查流程

收到cron触发后：

### 1. 检查更新
```bash
# 检查OpenClaw更新
openclaw update status

# 检查Skills更新
clawdhub update --all --dry-run
```

### 2. 推送通知给影子
通过飞书发送更新内容，格式：

```
🔔 OpenClaw 更新提醒

OpenClaw:
- 当前版本: xxx
- 最新版本: xxx
- 更新内容: [从官方获取]

Skills:
- 待更新: [列表]
- 无更新: [列表]

⏸️ 等待确认后升级，回复"确认升级"执行
```

### 3. 等待确认
- 升级命令: `openclaw update --yes && clawdhub update --all`
- 升级后发送结果通知

## 不升级模式（仅通知）

如果只想检查不升级：

```bash
openclaw cron add \
  --name "OpenClaw Update Check (Notify Only)" \
  --cron "0 10 * * 0" \
  --tz "Asia/Shanghai" \
  --session isolated \
  --wake now \
  --deliver \
  --message "检查更新并推送通知（仅通知，不升级）"
```

## 更新推送模板

```
🔔 OpenClaw 更新提醒

📦 OpenClaw Core
- 当前: v2026.3.1
- 最新: v2026.3.2
- 更新说明: [描述]

📚 Skills
- 可更新:
  - skill-A: v1.2 → v1.3
  - skill-B: v2.0 → v2.1
- 无更新: 6个

⏸️ 回复"确认升级"执行更新
```

## 升级命令（确认后执行）

```bash
# 升级 OpenClaw
openclaw update --yes

# 升级所有 Skills
clawdhub update --all

# 升级完成后推送结果
```

## 注意事项

- ⏰ 建议安排在周日10:00，不影响工作
- 🔒 升级前必须用户确认
- 📋 升级后推送结果通知
