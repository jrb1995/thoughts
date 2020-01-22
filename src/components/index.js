import Modal from './modal'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

const components = [
  Modal,
  Collapse,
  CollapseItem
]

const install = function (Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

export {
  Modal,
  Collapse,
  CollapseItem
}

export default {
  install
}
