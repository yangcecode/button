<template>
  <div id="app">
    <base-checkbox v-model="lovingVue"></base-checkbox>
    <base-input v-model="inputdemo"></base-input>
    {{inputdemo}}
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item label="多选" prop="check">
        <check-box-group v-model="formValidate.check">
          <check-box label="twitter">
            <span>Twitter</span>
          </check-box>
          <check-box label="github">
            <span>github</span>
          </check-box>
        </check-box-group>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
    <button @click="set">设置</button>
    {{formValidate.check}}
    <router-view/>
  </div>
</template>

<script>
import iForm from './components/form/form.vue';
import iFormItem from './components/form/form-item.vue';
import iInput from './components/input/input.vue';
import baseCheckbox from './components/baseCheckbox';
import baseInput from './components/input/index';
import checkBox from './components/checkbox/checkbox';
import checkBoxGroup from './components/checkbox/checkbox-group'
export default {
  name: 'app',
  components: { iForm, iFormItem, iInput, baseCheckbox, baseInput, checkBox, checkBoxGroup },
  data () {
    return {
      lovingVue: true,
      inputdemo: 'aaa',
      formValidate: {
        name: 'gfdgd',
        mail: '',
        check: ['twitter', 'github'],
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    set () {
      console.log('aaaaaa');
      this.formValidate.check = true;
    },
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          window.alert('提交成功');
        } else {
          window.alert('表单校验失败');
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
