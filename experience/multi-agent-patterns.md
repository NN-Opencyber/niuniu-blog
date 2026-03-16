# Multi-Agent 设计模式学习

## 来源
- 图片: Multi-Agent System Design Patterns

## 模式

### 1. Sequential Pipelines
- A→B→C 顺序执行
- 每个节点专注单一任务

### 2. Supervisor/Manager
- 一个 Supervisor 调度多个 Worker
- Worker 并行工作，结果汇总

## 设计原则

| 原则 | 含义 | 我的借鉴 |
|------|------|----------|
| Modular | 模块化 | commands/skills/memory 分离 ✅ |
| Stateless | 无状态 | 状态可重建，不依赖持久化 |
| Single Responsibility | 单一职责 | /token-stats 可拆分查询/格式化 |
| Loose Coupling | 松耦合 | 模块间通过接口通信 |
| High Cohesion | 高内聚 | 每个模块功能内聚 |
| Interface-driven | 接口驱动 | 定义清晰 API |

## 优化方向

### 当前问题
- /token-stats 做了查询+格式化+记录，违反单一职责

### 改进方案
```
token查询 → 格式化 → 历史记录
(拆分成3个独立函数)
```

### 未来架构
```
Supervisor (我)
├── Worker1: 记忆管理
├── Worker2: 资产收集
└── Worker3: 任务执行
```
