# 使用 GitHub Desktop 和 Vercel 部署网站指南

## 📋 准备工作

在开始之前，请确保你已经：
- ✅ 安装了 GitHub Desktop
- ✅ 有一个 GitHub 账号
- ✅ 有一个 Vercel 账号（如果没有，可以用 GitHub 账号登录 vercel.com）

---

## 第一步：使用 GitHub Desktop 上传代码到 GitHub

### 1. 打开 GitHub Desktop

### 2. 创建新的 Repository（仓库）

1. 点击菜单 `File` → `Add Local Repository`（添加本地仓库）
2. 或者点击 `File` → `New Repository`（新建仓库）

### 3. 如果是添加现有项目：

1. 点击 `Choose...` 按钮
2. 选择你的项目文件夹：`/Users/jiangyu/Desktop/pns website`
3. 如果提示"This directory does not appear to be a Git repository"（此目录不是 Git 仓库）
4. 点击 `Create a repository`（创建仓库）

### 4. 配置仓库信息：

```
Name: pns-website
Description: PNS Billiard Cloth Official Website
Local Path: /Users/jiangyu/Desktop/pns website
```

**重要：** 在 "Git Ignore" 选项中选择 `Node`

### 5. 创建 .gitignore 文件

GitHub Desktop 应该会自动创建 .gitignore，但请确保它包含以下内容：

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### 6. 首次提交（Commit）

1. 在 GitHub Desktop 左下角，你会看到所有变更的文件
2. 在 "Summary" 框中输入：`Initial commit - PNS Website`
3. 在 "Description" 框中输入：`Complete website with all features and content`
4. 点击蓝色的 `Commit to main` 按钮

### 7. 发布到 GitHub

1. 提交后，点击顶部的 `Publish repository` 按钮
2. 弹出窗口中：
   - **Name:** `pns-website`
   - **Description:** PNS Billiard Cloth Official Website
   - **取消勾选** "Keep this code private"（如果你想公开）或保持勾选（私有仓库）
3. 点击 `Publish Repository` 按钮

✅ 现在你的代码已经上传到 GitHub 了！

---

## 第二步：使用 Vercel 部署网站

### 1. 访问 Vercel 网站

打开浏览器，访问：https://vercel.com

### 2. 登录 Vercel

1. 点击右上角的 `Sign Up` 或 `Log In`
2. 选择 `Continue with GitHub`（使用 GitHub 登录）
3. 授权 Vercel 访问你的 GitHub 账号

### 3. 导入项目

1. 登录后，点击 `Add New...` → `Project`
2. 你会看到你的 GitHub 仓库列表
3. 找到 `pns-website` 仓库
4. 点击右侧的 `Import` 按钮

### 4. 配置项目

Vercel 会自动检测你的项目类型（Vite），配置应该自动填充：

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**重要设置：**
- **Root Directory:** 保持默认（留空）
- **Node.js Version:** 18.x 或更高

### 5. 环境变量（如果需要）

如果你使用了 EmailJS 或其他 API 密钥：

1. 点击 `Environment Variables` 展开
2. 添加以下变量（根据你的 EMAILJS_SETUP.md）：
   ```
   VITE_EMAILJS_SERVICE_ID = 你的Service ID
   VITE_EMAILJS_TEMPLATE_ID = 你的Template ID
   VITE_EMAILJS_PUBLIC_KEY = 你的Public Key
   ```

### 6. 部署

1. 检查所有配置无误后
2. 点击蓝色的 `Deploy` 按钮
3. 等待部署完成（通常需要 1-3 分钟）

### 7. 部署完成

✅ 部署成功后，你会看到：
- 🎉 恭喜动画
- 🔗 你的网站链接（例如：`pns-website.vercel.app`）
- 📸 网站预览截图

---

## 第三步：后续更新网站

### 使用 GitHub Desktop 更新代码：

1. **修改代码后**，打开 GitHub Desktop
2. 你会看到所有更改的文件列表
3. 在左下角填写更新说明：
   ```
   Summary: 更新内容简述
   Description: 详细说明你做了什么更改
   ```
4. 点击 `Commit to main`
5. 点击顶部的 `Push origin` 按钮

### Vercel 自动部署：

🚀 **一旦你 Push 到 GitHub，Vercel 会自动：**
1. 检测到代码更新
2. 自动开始构建
3. 自动部署新版本
4. 发送邮件通知你部署结果

你可以在 Vercel 的 Dashboard 查看部署状态。

---

## 🎯 快速命令参考

### 本地开发测试：
```bash
npm run dev
```
本地预览地址：http://localhost:5173

### 本地构建测试：
```bash
npm run build
npm run preview
```

---

## 🔧 常见问题解决

### 问题 1: GitHub Desktop 无法识别仓库
**解决方案：**
1. 关闭 GitHub Desktop
2. 删除项目文件夹中的 `.git` 文件夹（如果存在）
3. 重新打开 GitHub Desktop
4. 按照步骤重新创建仓库

### 问题 2: Vercel 构建失败
**解决方案：**
1. 检查 Node.js 版本设置（建议 18.x）
2. 确保 `package.json` 中的依赖没有错误
3. 查看 Vercel 的构建日志，找到具体错误信息

### 问题 3: 部署后页面空白
**解决方案：**
1. 检查浏览器控制台是否有错误
2. 确保 `vercel.json` 配置正确（已包含）
3. 检查路由配置是否正确

### 问题 4: 图片无法显示
**解决方案：**
1. 确保图片路径使用 `/images/xxx.png`（以 `/` 开头）
2. 确保图片文件在 `public/images` 文件夹中
3. 检查图片文件名大小写是否匹配

---

## 📱 自定义域名（可选）

### 如果你有自己的域名：

1. 在 Vercel Dashboard 中打开你的项目
2. 点击 `Settings` → `Domains`
3. 输入你的域名
4. 按照提示在你的域名提供商处添加 DNS 记录
5. 等待 DNS 生效（通常需要几分钟到几小时）

---

## 🎉 完成！

现在你的网站已经成功部署到 Vercel 了！

- 🌐 **网站地址：** 你会在 Vercel Dashboard 看到
- 🔄 **自动更新：** 每次 Push 到 GitHub 都会自动部署
- 📊 **访问统计：** Vercel 提供基础的访问分析
- 🔒 **HTTPS：** Vercel 自动提供免费 SSL 证书

---

## 📚 有用的链接

- GitHub Desktop 文档: https://docs.github.com/en/desktop
- Vercel 文档: https://vercel.com/docs
- Vite 文档: https://vitejs.dev/guide/

---

**需要帮助？** 如果遇到问题，可以：
1. 查看 Vercel 的构建日志
2. 检查 GitHub Desktop 的历史记录
3. 确保所有依赖都已正确安装

