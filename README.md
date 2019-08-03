## 基于 Vue 和 element-ui 的自定义指令，对输入框进行输入限制

### 安装

```
yarn add el-input-validate
```

main.js 中引用

```
import ElInputValidate from 'el-input-validate'
ElInputValidate(Vue)
```

### 使用

- 自定义 限制输入框**只能输入数字且保留几位**
- 参数 0 1 2 （默认保留两位）

```
 <el-input v-formatNum:0="value" v-model="value" ></el-input>
 <el-input v-formatNum:1="value" v-model="value"></el-input>
 <el-input v-formatNum:2="value" v-model="value"></el-input>
```

- 自定义 限制输入框 **只能输入数字和短横线**
- 场景：一般用于电话

```
 <el-input v-formatTel="value" v-model="value" ></el-input>
```

- 自定义 限制输入框 **不能输入中文**
- 场景：一般用于密码

```
 <el-input v-formatNotTxt="value" v-model="value" ></el-input>
```
