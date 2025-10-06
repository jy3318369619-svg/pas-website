# EmailJS 配置指南

## 步骤 1: 创建 EmailJS 账户

1. 访问 [https://www.emailjs.com/](https://www.emailjs.com/)
2. 点击 "Sign Up" 注册免费账户
3. 使用你的邮箱注册（建议使用 pnsbilliardcloth@gmail.com）

## 步骤 2: 添加邮件服务

1. 登录后，进入 [Email Services](https://dashboard.emailjs.com/admin)
2. 点击 "Add New Service"
3. 选择 "Gmail" （如果你使用 Gmail）
4. 连接你的 Gmail 账户 (pnsbilliardcloth@gmail.com)
5. 记下你的 **Service ID**（例如：service_xxxxxxx）

## 步骤 3: 创建邮件模板

1. 进入 [Email Templates](https://dashboard.emailjs.com/admin/templates)
2. 点击 "Create New Template"
3. 使用以下模板内容：

### 模板设置：
- **Template Name**: Contact Form Submission
- **Subject**: New Contact Form Message from {{from_name}}

### 模板内容：
```
You have received a new message from your PNS website contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the PNS Billiard Cloth website contact form.
```

4. 在 "To Email" 字段填入: pnsbilliardcloth@gmail.com
5. 保存模板并记下 **Template ID**（例如：template_xxxxxxx）

## 步骤 4: 获取 Public Key

1. 进入 [Account Settings](https://dashboard.emailjs.com/admin/account)
2. 找到 "API Keys" 部分
3. 复制你的 **Public Key**（例如：xxxxxxxxxxxxxxxxxxx）

## 步骤 5: 更新代码配置

打开 `src/components/Contact.jsx` 文件，找到第 49-51 行：

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // 替换为你的 Service ID
const templateID = 'YOUR_TEMPLATE_ID';    // 替换为你的 Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // 替换为你的 Public Key
```

替换为你的实际值：

```javascript
const serviceID = 'service_xxxxxxx';      // 你的 Service ID
const templateID = 'template_xxxxxxx';    // 你的 Template ID
const publicKey = 'xxxxxxxxxxxxxxxxxxx';  // 你的 Public Key
```

## 步骤 6: 测试表单

1. 保存文件
2. 刷新网站
3. 前往 Contact 页面
4. 填写并提交表单
5. 检查 pnsbilliardcloth@gmail.com 邮箱是否收到邮件

## 常见问题

### Q: 邮件没有收到？
- 检查 Gmail 的垃圾邮件文件夹
- 确认 EmailJS 配置中的接收邮箱正确
- 查看浏览器控制台是否有错误信息

### Q: 免费版有限制吗？
- 是的，免费版每月限制 200 封邮件
- 对于一般的联系表单使用已经足够

### Q: 邮件安全吗？
- EmailJS 使用加密连接
- 不要在前端代码中暴露敏感信息
- Public Key 是设计用于前端的，可以安全使用

## 注意事项

⚠️ **重要**: 配置完成后，请删除此文件或将其添加到 `.gitignore`，避免将配置说明推送到公共仓库。

## 支持

如有问题，请访问 [EmailJS 文档](https://www.emailjs.com/docs/)

