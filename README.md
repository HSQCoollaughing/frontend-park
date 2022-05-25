# frontent-park

一个有趣的前端趣味知识公园~  
该项目是我平时捣鼓的一些好玩的前端知识案例集合,喜欢的小伙伴也可以自己 fork 到仓库后随意玩耍

## 开发

### 安装依赖

```sh
yarn
```

## 需要注意的是

由于该仓库有一些依赖包,依赖了二进制文件

如果遇到 `node-pre-gyp ERR! ` `gyp ERR!`等问题,按照下面的方法解决

```sh

# 在node-gyp之前安装 (windows用户)
npm install -g --production windows-build-tools

# 全局安装node-gyp
npm install -g node-gyp
```

如果仍然不行,检查本地是否安装了 Python,没有则安装 👉 [官方地址](https://www.python.org/downloads/)

## 本地运行

```sh
yarn dev
```

## 打包

```sh
yarn build
```

## 格式化代码并执行 eslint 校验

```sh
yarn fal
```
