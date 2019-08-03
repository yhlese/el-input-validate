## Vue 和 element-ui 的输入框限制 el-input-validate

## 安装

```
yarn add el-input-validate
```

### 使用

- 自定义 限制输入框**只能输入数字** 且 保留几位 --参数 0 1 2 （默认保留两位）

```
 <el-input v-model="ruleForm.input" v-formatNum:0="ruleForm.input"></el-input>
 <el-input v-model="ruleForm.input" v-formatNum:1="ruleForm.input"></el-input>
 <el-input v-model="ruleForm.input" v-formatNum:2="ruleForm.input"></el-input>
```

- 自定义 限制输入框 **只能输入数字和短横线** 一般用于电话

```
 <el-input v-model="customQuery.tel" v-formatTel="customQuery.tel"></el-input>
```

- 自定义 限制输入框 **不能输入中文** 一般用于密码

```
 <el-input v-model="customQuery.tel" v-formatTel="customQuery.tel"></el-input>
```
