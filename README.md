# react-app-rewired

* 项目初始
  * npm --init
  * eslint --init

* ESLint: 'React' was used before it was defined.(no-use-before-define)
  * 在.eslintrc.js的rules中添加一条规则

  ```jsx
  rules: {
    "no-use-before-define": 'off',
    "@typescript-eslint/no-use-before-define": ["error"]
  }
  ```

  * 需要安装: eslint-import-resolver-alias 以满足lint alis
  * 解决parsing error: unexpect token
    * 加入babel-eslint;
    * <https://www.cnblogs.com/tudou1179006580/p/14364837.html>

* stylelint: <https://www.npmjs.com/package/stylelint>

* react-app-rewired: ^2.1.9 版本要求:
  * style-loader版本为2.x;
  * css-loader版本为5.x;
  * less-loader版本为7.x;
  * react-scripts版本为4.x;

* nvm 安装: <https://github.com/nvm-sh/nvm>
  * 安装地址: curl -o- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh> | bash
  * 输入: vim ~/.bash_profile
  * 执行 export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

* 代理安装: <https://gitee.com/docmirror/dev-sidecar#https://gitee.com/docmirror/dev-sidecar/releases>

* 移动端测试环境调试工具-chrome: chrome://inspect/#devices

* 在commit之前执行代码检查并阻止报错代码提交:
  * <https://www.npmjs.com/package/husky>
  * <https://www.npmjs.com/package/lint-staged>
  * 命令行: npx mrm@2 lint-staged
  * 参考链接: <https://www.jianshu.com/p/148a19f8a520>

* vscode中一键生成react代码块以及快速补全react代码
  * <https://blog.csdn.net/qq_38111015/article/details/89638967>

* css隐藏滚动条
  * <https://www.cnblogs.com/jofun/p/11158145.html>
  * <http://caibaojian.com/hide-scrollbar.html>

  ```jsx
    // 隐藏水平滚动条,同时运行垂直滚动
    .demo {
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      overflow-x: hidden;
      overflow-y: auto;
    }
  ```
