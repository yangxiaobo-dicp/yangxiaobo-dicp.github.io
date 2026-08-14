# 杨小博 · 个人学术主页

一个开箱即用的静态个人学术主页，内容根据个人简历自动生成，包含：

- 首页简介（头像、职位、单位、研究方向摘要）
- 新闻动态（时间线）
- 教育及工作经历（助理研究员、博士后、本科/硕博）
- 研究方向（4 个方向卡片）
- 发表论文（9 篇，可按“第一作者 / 共同一作”筛选）
- 荣誉奖项、联系信息
- 中英文一键切换 + 深色/浅色模式

## 文件结构

```
academic-homepage/
├── index.html          # 页面内容
├── css/style.css       # 样式（主题色、布局）
├── js/main.js          # 交互 + 中英文文案
└── assets/
    ├── avatar.jpg      # 头像（来自简历照片，可替换）
    └── favicon.svg     # 网站图标
```

## 如何预览

直接双击 `index.html` 即可在浏览器中打开；也可以使用 VS Code 的 Live Server 插件，或任选一种静态服务器方式运行。

## 如何改成你自己的信息

1. **头像**：把 `assets/avatar.jpg` 替换成你自己的照片（建议正方形或接近正方形，页面会自动裁剪成圆形）。
2. **论文**：编辑 `index.html` 中 `id="publications"` 区块，复制 `li.pub-item` 条目修改即可；`data-role="first"` 表示第一作者，`data-role="cofirst"` 表示共同一作。
3. **新闻 / 教育 / 研究方向 / 荣誉 / 联系**：直接编辑 `index.html` 对应区块。
4. **中英文文案**：两套文案都在 `js/main.js` 顶部的 `I18N` 字典里，中文和英文一一对应。
5. **主题颜色**：在 `css/style.css` 顶部的 `:root` 和 `html[data-theme="dark"]` 中修改 `--primary`、`--accent` 等变量即可换色。

## 部署到线上（变成在线网址）

这个站点是纯静态网页，不需要服务器，放进任意静态托管平台即可获得公开网址。推荐三种方式，按“简单程度”排序：

| 方式 | 难度 | 说明 |
| --- | --- | --- |
| Netlify Drop | ⭐ 最简单 | 网页拖拽上传，立即获得网址，无需任何命令行 |
| GitHub Pages | ⭐⭐ 推荐 | 永久免费，可绑定自己的域名，国内访问有时较慢 |
| Vercel | ⭐⭐ | 免费，支持拖拽上传，国内访问一般 |

> 国内访问更快的 Gitee Pages 需要实名认证，且该服务时有不稳定/暂停的情况，暂不推荐作为首选。

### 方式一：Netlify Drop（最快，适合先预览）

1. 浏览器打开 <https://app.netlify.com/drop>。
2. 把 `academic-homepage.zip` 解压后的**文件夹**（里面是 index.html、css、js、assets）直接拖进网页。
3. 几秒钟后就会生成一个类似 `https://xxxx.netlify.app` 的公开网址，可以发给任何人访问。

> 不登录账号发布的站点可能只保留一段时间；登录免费账号后可以长期保留并绑定自己的域名。

### 方式二：GitHub Pages（推荐长期使用，无需命令行）

1. 注册并登录 GitHub（<https://github.com>），点击右上角 **+** → **New repository**。
2. 仓库名填写 `你的用户名.github.io`（例如用户名叫 `xiaobo`，就填 `xiaobo.github.io`），选择 **Public**，创建。
3. 进入仓库页面 → **Add file** → **Upload files**，把解压后的 `academic-homepage` 文件夹里的内容（index.html、css、js、assets）全部拖进去，点击 **Commit changes** 上传。
4. 打开仓库 **Settings** → 左侧 **Pages** → **Source** 选择 `Deploy from a branch`，分支选 `main`，保存。
5. 等 1–2 分钟，访问 `https://你的用户名.github.io` 就是你的在线主页。

### 方式三：Vercel

1. 打开 <https://vercel.com> 并用 GitHub 账号登录。
2. 选择 **Add New → Project → Import**（或直接使用 Drag & Drop 上传整个文件夹）。
3. 部署完成后会生成 `https://xxxx.vercel.app` 网址。

## 自定义域名（可选）

购买域名后，可以在 GitHub Pages 的 **Settings → Pages** 或 Netlify 的 **Domain settings** 中绑定，把默认网址换成 `yangxiaobo.com` 之类的个性化地址。

## 建议补充

- 论文的 DOI / PDF / 代码链接（简历中未提供，可在每条论文下自行添加链接按钮）。
- Google Scholar、GitHub、ORCID 主页地址（目前为占位符 `#`，在 `index.html` 的社交按钮中替换）。
