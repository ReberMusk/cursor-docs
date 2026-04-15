# Model not available

使用某些模型时出现以下错误提示：

> **Model not available**
> This model provider doesn't serve your region.

![Model not available 错误提示](/images/model-not-available.png)

这表示当前编辑器的**出口 IP 所在地区**不被该模型的提供商支持。需要让编辑器的网络请求经过支持地区的节点。

## 解决办法一：切换 HTTP 兼容模式

部分情况下，切换 HTTP 模式即可解决（对大部分用户有效）。

**操作路径**：右上角设置 → **Cursor Settings** → **Network** → **HTTP Compatibility Mode** → 切换到 **HTTP/1.1**

## 解决办法二：配置编辑器代理

如果方法一无效，需要在编辑器中显式配置代理端口，确保编辑器的网络请求走代理出口。

### 配置步骤

1. 打开 VS Code 设置：
   - 快捷键 `Ctrl/Cmd + ,`
   - 或者点击菜单 **Preferences → VS Code Settings**

![打开 VS Code Settings 的菜单路径](/images/cursor-preferences-menu.png)

2. 在搜索框中输入 **Proxy**

3. 找到 **Http: Proxy** 选项，填入您的代理地址，格式为：

```
http://127.0.0.1:你的代理端口
```

![VS Code 代理设置界面](/images/vscode-settings-proxy.png)

::: warning 注意端口号
每个人的代理工具端口不同，请先查看您自己的代理工具确认端口号。常见端口如 7890、1080、10809 等，具体以您的工具为准。
:::

### 配置完成后

保存设置，重启编辑器，再次使用模型即可。建议通过 **设置 → Network → Run Diagnostic** 验证连通性。

## 更多参考

如果以上方法仍未解决，可参考社区中其他用户的解决方案：[搜索更多解决方案](https://www.google.com/search?q=cursor+model+not+available+%E8%A7%A3%E5%86%B3)

官方地区支持文档：[https://docs.cursor.com/account/regions](https://docs.cursor.com/account/regions)
