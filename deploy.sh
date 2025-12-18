#!/bin/bash

# 部署到 GitHub Pages 的脚本

# 构建项目
echo "Building project..."
npm run build

# 进入构建输出目录
cd dist

# 创建一个空的 .nojekyll 文件以绕过 Jekyll 处理
touch .nojekyll

# 如果存在 CNAME 文件，则复制它
if [ -f ../CNAME ]; then
  cp ../CNAME .
fi

# 返回上级目录
cd ..

# 部署到 GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment completed!"
