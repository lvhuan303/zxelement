import input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('zx-input', () => {

  // 测试函数
  test('input-text', () => {
    const wrapper = mount(input)
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('input type="text"')
  })

  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password'
      }
    })
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('input type="password"')
  })

  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrapper.props('value')).toBe('admin')
  })

  // 设置快照
  test('input-snapshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
