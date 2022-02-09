# HTML5
## 请描述一个网页从开始请求到显示的整个过程？
> 一个网页从请求到最终显示的完整过程可分为7个步骤

1. 在浏览器输入地址
2. 发送至 DNS 服务器并获得域名对应的 WEB 服务器的 IP 地址
3. 与 WEB 服务器建立 TCP 链接
4. 浏览器xiang向服务器的 IP 地址发送相应的 HTTP/HTTPS 请求
5. WEB 服务器响应请求并返回指定的 URL 的数据或错误信息，如果设置重新定向，则重定向到新的 URL 地址
6. 浏览器下载数据后解析 HTML 源文件，解析的过程中实现对页面的排版，解析完成后在浏览器中显示基础页面
7. 分析页面中的超级链接并显示在当前页面，重复以上过程直至无超级链接需要发送，完成全部显示

## DOCTYPE 声明的作用是什么？ 严格模式与混淆模式如何区分？
> HTML 已经存在太久了，目前必然会有一些不同版本的文档存在。为了能够让浏览器清楚你的文档版本、类型和风格，需要在文档的起始用 DOCTYPE 生命指定文档的版本和风格。如果在网页中提供了版本信息，则可以有利于验证页面的代码是否符合当前版本的风格。
> <!DOCTYPE> 声明于<html>标签之前，告知浏览器的解析器，用什么文档类型规范来解析这个文档。
> 严格模式(标准模式)中，浏览器根据规范呈现页面；在混合模式中，页面以向后兼容的方式显示，以防止老站无法工作。
> 如何HTML 文档包含完整的 DOCTYPE ，那么塔一般一标准模式呈现，对于HTML4.01文档，包含严格 DTD 的 DOCTYPE常常导致页面以标准形式呈现， DOCTYPE 不存在或格式不正确会导致文档以混淆模式呈现

## 常见的浏览器内核
> 浏览器内核负责对网站语法的解释并显示网页，它决定了浏览器如何显示网页的内容以及页面的格式信息
1. Tirdent : IE 浏览器
2. Gecko : Mozila 浏览器， 比如 Fiefox
3. Webkit : Chrome 浏览器 Opera 浏览器

## 如何解释 HTML 标签语义化
> 