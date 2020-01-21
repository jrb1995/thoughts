<template>
  <div class="m-modal" v-if="visible">
    <p>pppppppp</p>
    <p>pppppppp</p>
    <p>pppppppp</p>
    <p>pppppppp</p>
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
    }
  },
  watch: {
    value (val) {
      this.visible = val
      if (val) {
        if (this.transfer) {
          document.body.appendChild(this.$el)
        }
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
  z-index: 1000;
}
</style>
