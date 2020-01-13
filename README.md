# babel-plugin-dash-import

+ ## install
  ```bash
  npm install babel-plugin-dash-import
  ```

+ ## use
  .babelrc file
  ```javascript
  {
    ...
    "plugins": [
      ["dash-import", { libraryName: '@tencent/qd-base' }],
      ...
    ]
    ...
  }
  ```

+ ## effect
  ```javascript
  import { OrgStaffPicker, SearchBox } from '@tencent/qd-base';

  // transform to
  
  import OrgStaffPicker from "@tencent/qd-base/lib/org-staff-picker";
  import SearchBox from "@tencent/qd-base/lib/search-box";
  ```

+ ## options
  ### *libraryName is required!*
  the plugin will do nothing if the libraryName is empty 😥

---
## for fun : )