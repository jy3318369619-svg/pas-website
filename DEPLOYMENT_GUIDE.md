# 🚀 PNS 网站部署指南

## ✅ 已完成准备工作
- ✅ Git 仓库已初始化
- ✅ 代码已提交
- ✅ .gitignore 已配置

## 📝 部署到 Vercel（推荐）

### 步骤 1: 创建 GitHub 仓库

1. **访问 GitHub**: https://github.com
2. **登录你的账户**（如果没有账户，先注册一个）
3. **创建新仓库**:
   - 点击右上角 "+" → "New repository"
   - Repository name: `pns-website`（或你喜欢的名字）
   - Description: `PNS Billiard Cloth Official Website`
   - 设为 **Private**（私有）或 **Public**（公开）
   - **不要勾选** "Initialize this repository with a README"
   - 点击 "Create repository"

4. **复制仓库地址**（应该类似）：
   ```
   https://github.com/你的用户名/pns-website.git
   ```

### 步骤 2: 推送代码到 GitHub

打开终端，运行以下命令（替换 YOUR_USERNAME 为你的 GitHub 用户名）：

```bash
cd /Users/jiangyu/Desktop/pns\ website

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/pns-website.git

# 推送代码
git push -u origin main
```

如果提示输入用户名和密码：
- 用户名：你的 GitHub 用户名
- 密码：使用 **Personal Access Token**（不是密码）
  - 获取 Token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

### 步骤 3: 部署到 Vercel

1. **访问 Vercel**: https://vercel.com
2. **登录/注册**:
   - 点击 "Sign Up"
   - 选择 "Continue with GitHub"（使用 GitHub 账户登录）
   - 授权 Vercel 访问你的 GitHub

3. **导入项目**:
   - 点击 "Add New..." → "Project"
   - 在列表中找到 `pns-website` 仓库
   - 点击 "Import"

4. **配置项目**:
   - Project Name: `pns-website`（或保持默认）
   - Framework Preset: **Vite** （应该自动检测到）
   - Root Directory: `./`
   - Build Command: `npm run build`（默认）
   - Output Directory: `dist`（默认）
   - 不需要添加环境变量
   - 点击 "Deploy"

5. **等待部署**（约 2-3 分钟）

6. **完成**！🎉
   - Vercel 会给你一个网址，类似：`https://pns-website.vercel.app`
   - 你可以在项目设置中绑定自己的域名

## 🌐 绑定自定义域名（可选）

如果你有域名（如 pnsbilliardcloth.com）：

1. 在 Vercel 项目页面，点击 "Settings" → "Domains"
2. 输入你的域名
3. 按照提示在域名服务商处添加 DNS 记录
4. 等待 DNS 生效（可能需要几分钟到几小时）

## 🔄 自动部署

设置完成后，每次你推送新代码到 GitHub：
```bash
git add .
git commit -m "更新内容"
git push
```

Vercel 会自动检测更改并重新部署！

## 📱 域名示例

部署后，你的网站将可以通过以下方式访问：
- Vercel 提供的域名: `https://pns-website.vercel.app`
- 自定义域名（如果绑定）: `https://www.pnsbilliardcloth.com`

## ⚠️ 注意事项

1. **EmailJS 配置**：已包含在代码中，无需额外配置
2. **图片路径**：已使用相对路径，会自动加载
3. **路由**：React Router 已配置好，所有页面都能正常访问

## 🆘 常见问题

### Q: 部署后页面显示 404？
A: 在 Vercel 项目根目录需要有 `vercel.json`，我已经帮你准备好了。

### Q: 图片无法加载？
A: 确保图片在 `public/images/` 目录下，路径以 `/images/` 开头。

### Q: 部署失败？
A: 检查构建日志，通常是依赖问题。确保本地 `npm run build` 能成功运行。

## 📞 需要帮助？

如果遇到问题，可以查看：
- Vercel 文档: https://vercel.com/docs
- GitHub 文档: https://docs.github.com

---

祝部署顺利！🚀

