<template>
  <div class="m-modal" v-if="visible" @click.self="handleWrapperClick">
    <div class="m-modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  mounted () {
    if (this.transfer) {
      document.body.appendChild(this.$el)
    }
  },
  destroyed () {
    if (this.transfer && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    handleWrapperClick () {
      this.close()
    }
  },
  watch: {
    value (val) {
      this.visible = val
      if (val) {
        if (this.transfer) {
          document.body.appendChild(this.$el)
          document.body.style.overflow = 'hidden'
        }
      } else {
        document.body.style.overflow = ''
      }
    }
  }
}
</script>

<style lang="less">
.m-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 1050;
  background-color: rgba(56,56,56,.5);

  .m-modal-content {
    // position: fixed;
    // overflow: auto;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // z-index: 1100;
    // box-sizing: border-box;
  }
}
</style>
