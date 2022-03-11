import { components, applyBindings } from 'knockout'
import Greeter from './components/Greeter'

import './style.scss'

components.register('greeter', Greeter)

class AppViewModel {
  constructor() {}
}

const vm = new AppViewModel()

applyBindings(vm, document.getElementById('app'))
