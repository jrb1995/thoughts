import Modal from './modal'

const components = [
  Modal
]

const install = function (Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

export {
  Modal
}

export default {
  install
}
