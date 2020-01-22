<template>
  <div :class="itemClasses">
    <div :class="headerClasses" @click="toggle">
      <slot></slot>
    </div>
    <collapse-transition v-if="mounted">
      <div :class="contentClasses" v-show="isActive">
        <div :class="boxClasses">
          <slot name="content"></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from '../../util/collapse-transition'
const prefixCls = 'm-collapse'

export default {
  name: 'MCollapseItem',
  components: {
    CollapseTransition
  },
  props: {
    // 当前面板的 name，与 Collapse 的 value 对应，不填为索引值
    name: {
      type: String
    }
  },
  data () {
    return {
      index: 0, // use index for default when name is null
      isActive: false,
      mounted: false
    }
  },
  computed: {
    itemClasses () {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.isActive
        }
      ]
    },
    headerClasses () {
      return `${prefixCls}-header`
    },
    contentClasses () {
      return `${prefixCls}-content`
    },
    boxClasses () {
      return `${prefixCls}-content-box`
    }
  },
  methods: {
    toggle () {
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      })
    }
  },
  mounted () {
    this.mounted = true
  }
}
</script>

<style>

</style>
