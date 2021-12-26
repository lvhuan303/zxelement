import ZxLink from '../src/link.vue'

export default {
  title: 'ZxLink',
  component: ZxLink
}

export const Link = _ => ({
  components: { ZxLink },
  template: `
    <div>
      <zx-link disabled="true" href="https://www.baidu.com">百度</zx-link>
    </div>
  `
})
