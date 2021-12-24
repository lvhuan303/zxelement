import ZxForm from '../'
import ZxFormItem from '../../formitem'
import ZxInput from '../../input'
import ZxButton from '../../button'

export default {
  title: 'ZxForm',
  component: ZxForm
}

export const Login = () => ({
  components: { ZxForm, ZxFormItem, ZxInput, ZxButton },
  template: `
    <zx-form class="form" ref="form" :model="user" :rules="rules">
    <zx-form-item label="用户名" prop="username">
      <!-- <lg-input v-model="user.username"></lg-input> -->
      <zx-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></zx-input>
    </zx-form-item>
    <zx-form-item label="密码" prop="password">
      <zx-input type="password" v-model="user.password"></zx-input>
    </zx-form-item>
    <zx-form-item>
      <zx-button type="primary" @click="login">登 录</zx-button>
    </zx-form-item>
    </zx-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
