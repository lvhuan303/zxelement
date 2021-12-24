import ZxInput from '../'

export default {
  title: 'ZxInput',
  component: ZxInput
}

export const Text = () => ({
  components: { ZxInput },
  template: '<zx-input v-model="value"></zx-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { ZxInput },
  template: '<zx-input type="password" v-model="value"></zx-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
