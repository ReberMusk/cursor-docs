# No models available

在 Cursor Settings 的 Models 页面中，模型列表完全为空，显示 **"No models available"**。

![No models available 问题截图](/images/no-models-available.png)

## 原因

这是部分版本的 Cursor 客户端存在的已知问题，直接安装最新版可能会出现模型列表加载失败的情况。

## 解决方法

1. **卸载**当前版本的 Cursor
2. **安装 0.46（2.6）版本**的 Cursor
3. 安装完成后打开，确认模型列表正常显示
4. 在编辑器内通过**内置升级**更新到最新版本

通过这种方式升级后，模型列表即可恢复正常。

![用户反馈：安装 2.6 版本后内置升级即可解决](/images/no-models-fix-feedback.png)

::: tip 提示
论坛中有较多用户遇到相同问题，均通过此方法解决。关键在于**先装旧版再内置升级**，而非直接安装最新版。
:::
