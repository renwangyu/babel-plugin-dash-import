const babel = require('@babel/core');
const myPlugin = require('./src/index.js');

const c = "import { OrgStaffPicker, SearchBox } from '@tencent/qd-base';";

const { code } = babel.transform(c, {
  plugins: [
    myPlugin
  ]
});

console.log(code);
