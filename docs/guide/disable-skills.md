# 关闭 Skills / Subagents

Cursor 的 Skills 和 Subagents 功能会在后台自动发起额外请求，每次请求都会消耗次数。按次计费用户建议彻底关闭，避免不必要的额度损失。

## 第一步：在设置中关闭功能开关

1. 打开编辑器设置，进入 **Cursor Settings**
2. 找到 **Rules, Skills, Subagents** 相关选项
3. 将 Skills 和 Subagents **全部关闭**

## 第二步：添加全局规则强制禁用

仅关闭开关可能不够彻底，建议同时添加一条全局 Rule 来强制禁止 Agent 调用子代理。

在项目根目录创建规则文件（如 `.cursor/rules/no-subagent.mdc`），内容如下：

```markdown
---
description: 禁止使用 Cursor 内置 Task/subagent，强制全局生效
globs: []
alwaysApply: true
---

# 禁止使用 Task / Subagent

## 适用范围

本规则为最高优先级，适用于所有会话、模式、任务、项目与上下文，
覆盖任何默认行为、自动路由、内部策略。

## 核心规则

严禁使用 Cursor 内置 Task 工具，以及任何形式的 subagent / 子代理，
包括默认、自动、隐式、间接调用及未来新增、改名、包装形式。

## 禁止行为

不得：
- 调用 Task
- 创建、触发、委派任何 subagent
- 使用 Explore / Shell / Browser / Planning / CLI 类子代理
- 将任务拆分、并行或外包给其它 agent
- 通过内部路由或默认机制间接使用 subagent

## 唯一允许方式

所有任务必须由当前主 agent 直接完成：
直接理解、推理、回答、给出代码 / 方案 / 步骤。

## 复杂任务处理

任务再复杂，也必须单 agent 顺序处理；
能做的直接做，不能做的明确说明限制并提供可执行的人工步骤，不得转交子代理。

## 例外

默认无例外。仅当用户在当前消息中明确授权可使用 Task / subagent 时，
才允许突破本规则。
```

::: tip 提示
添加此规则后，Agent 在对话中将不会自动拆分任务或调用子代理，所有操作均由主 Agent 直接执行，从而避免产生额外的请求扣费。
:::
