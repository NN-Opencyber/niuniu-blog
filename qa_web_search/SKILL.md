---
name: qa_web_search
description: |
  QA Web Search 技能：用于 Bing/Google 网页检索、深度页面信息提取与截图采集。

  当用户需要“联网搜索、抓取网页关键内容、输出可审计截图证据”时，优先使用本技能。

  主要能力：
  1) 关键词搜索（Bing/Google）返回结构化结果
  2) 深度页面分析（链接/表单/按钮/脚本/元数据）
  3) 检索过程截图（用于测试报告与交付留痕）

  典型触发场景：
  - 实时信息问答与事实核验
  - QA 测试中的“搜索可用性验证”
  - 需要“搜索结果 + 截图证据”的任务
---

# qa_web_search

## 命令入口

推荐统一使用：

```bash
./qa_web_search "搜索关键词" --num 10 --engine bing
```

兼容入口（旧命令）：`./soushen`

---

## 能力说明

### 1) 关键词搜索

- 支持 `bing` / `google`
- 输出字段：`title / url / snippet / source / result_type`

示例：

```bash
./qa_web_search "openclaw 最新版本" --num 5 --engine bing
./qa_web_search "AI Agent workflow" --num 8 --engine google
```

### 2) 深度页面分析

- 提取页面结构化要素：`headings / paragraphs / links / forms / buttons / scripts / meta`

示例：

```bash
./qa_web_search --deep https://docs.openclaw.ai
```

### 3) 截图能力（新增）

- 支持搜索页与深度页面截图
- 参数：
  - `--screenshot <path>`：截图保存路径
  - `--fullpage`：是否整页截图

示例：

```bash
./qa_web_search "日本现任首相是什么" --engine bing --screenshot /tmp/japan-pm.png
./qa_web_search --deep https://docs.openclaw.ai --screenshot /tmp/docs.png --fullpage
```

---

## 安装依赖

```bash
python3 -m pip install --break-system-packages playwright
python3 -m playwright install chromium
```

如需系统 Chrome，可设置：

```bash
export CHROME_PATH=/usr/bin/google-chrome
```

---

## 输出规范

- 所有结果均为 JSON，便于上层 Agent/脚本直接消费
- 搜索失败时返回空数组或错误对象，不抛不可读异常
- 测试场景建议同时保存截图作为证据
