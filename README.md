# Paste To Aliyun Oss Readme

VSCode 扩展插件，在 Markdown 类型文件编辑过程中，支持截图上传到阿里云 OSS 并将图片粘贴到编辑器中,

## 安装

在插件应用商店搜索 `paste-ali-oss` ，点击 `install` 安装。如图:

![插件检索及安装](https://pic.lixl.cn/2020/15da665cf0d5309abc2b054508b61d76.png)

## 使用

截图后使用（ `ctrl + cmd + v` ）上传到 Aliyun 并粘贴到文章中

![使用说明](https://file.wulicode.com/note/images/save-to-aliyun.gif)

## 参数设置

-   `region`
    地域
    在阿里云对象存储的 bucket 概览中有 EndPoint（地域节点），如 `oss-cn-beijing.aliyuncs.com` 中的 `oss-cn-beijing` 就是地域。

-   `accessKeyId`
    accessKeyId
    RAM 中生成的 accessKeyId

-   `accessKeySecret`
    accessKeySecret
    RAM 中生成的 accessKeySecret

-   `bucket`
    bucket 名称

-   `prefix`
    图片存储目录前缀
    例如希望的图片地址为 `http://${你的域名}/prefix/${filename}.png`，则填写 `prefix`, 主要用于图片分组 ）

-   `defaultName`
    默认图像名称, 默认是 `YYYY/MM-DD/HH-mm-ss-SSS`
    这个配置会传递到 dayjs 库的 format 函数, 文档地址 : https://dayjs.gitee.io/docs/zh-CN/display/format

-   `domain`
    阿里云 oss 域名
    建议绑定自定义域名并配置 Https 访问

## License

MIT

## 参考

-   [Ali Oss](https://github.com/ali-sdk/ali-oss)
-   [vscode-aliyun-upload-image](https://marketplace.visualstudio.com/items?itemName=vvkee.aliyun-oss-upload-image)
